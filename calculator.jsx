
const WinPic = ({ kind }) => {
  const frames = {
    one:   [<rect key="a" x="10" y="6" width="44" height="52" rx="2"></rect>],
    two:   [<rect key="a" x="6" y="6" width="25" height="52" rx="2"></rect>, <rect key="b" x="33" y="6" width="25" height="52" rx="2"></rect>],
    three: [<rect key="a" x="4" y="8" width="17" height="48" rx="2"></rect>, <rect key="b" x="23.5" y="8" width="17" height="48" rx="2"></rect>, <rect key="c" x="43" y="8" width="17" height="48" rx="2"></rect>],
    balcony: [<rect key="a" x="6" y="6" width="30" height="34" rx="2"></rect>, <rect key="b" x="40" y="6" width="18" height="52" rx="2"></rect>],
  };
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2.4">
      {frames[kind]}
    </svg>
  );
};

const WIN_CONFIGS = [
  { id: "one", label: "Одностворчатое", base: 12000, stdArea: 0.72, pic: "one" },
  { id: "two", label: "Двустворчатое", base: 16500, stdArea: 1.85, pic: "two" },
  { id: "three", label: "Трёхстворчатое", base: 21900, stdArea: 2.45, pic: "three" },
  { id: "balcony", label: "Балконный блок", base: 19800, stdArea: 1.95, pic: "balcony" },
];
const WIN_PROFILES = [
  { id: "eco", label: "Эконом", k: 1.0, hint: "3 камеры · для остеклённых балконов" },
  { id: "std", label: "Стандарт", k: 1.18, hint: "5 камер · для квартир, самый популярный" },
  { id: "prem", label: "Тёплый премиум", k: 1.45, hint: "6 камер · для сибирской зимы и частных домов" },
];
const WIN_OPTIONS = [
  { id: "sill", label: "Подоконник" },
  { id: "slopes", label: "Откосы" },
  { id: "net", label: "Москитная сетка" },
];

const CEIL_TYPES = [
  { id: "mat", label: "Матовый", m2: 390, hint: "Спокойная классика" },
  { id: "gloss", label: "Глянцевый", m2: 450, hint: "Зрительно выше потолок" },
  { id: "satin", label: "Сатиновый", m2: 430, hint: "Мягкий блеск" },
];
const WIN_PRICE_M2 = 20000;
const CEIL_PRICE_M2 = 1300;

const FURN_TYPES = [
  { id: "kitchen", label: "Кухня", pm: 17000 },
  { id: "wardrobe", label: "Шкаф-купе", pm: 12000 },
  { id: "garderob", label: "Гардеробная", pm: 12000 },
  { id: "kids", label: "Другая мебель на заказ", pm: 10000 },
];
const FURN_FACADES = [
  { id: "ldsp", label: "ЛДСП", k: 1.0, hint: "Практично и недорого" },
  { id: "mdf", label: "МДФ", k: 1.25, hint: "Плёнка или шпон, богаче фактура" },
  { id: "enamel", label: "Эмаль", k: 1.6, hint: "Крашеные фасады, любой цвет" },
];

const round100 = (n) => Math.round(n / 100) * 100;

function calcWindows(s) {
  const cfg = WIN_CONFIGS.find((c) => c.id === s.config);
  const prof = WIN_PROFILES.find((p) => p.id === s.profile);
  if (!cfg || !prof) return null;
  const area = (s.width / 1000) * (s.height / 1000);
  const total = round100(area * WIN_PRICE_M2);
  const wishes = [`профиль «${prof.label}»`].concat(WIN_OPTIONS.filter((o) => s.opts[o.id]).map((o) => o.label.toLowerCase()));
  return {
    total,
    lines: [
      { l: `${cfg.label}, ${s.width}×${s.height} мм, ${area.toFixed(2).replace(".", ",")} м² × ${fmt(WIN_PRICE_M2)} руб. (${wishes.join(", ")})`, v: total },
    ],
  };
}

function calcCeiling(s) {
  const t = CEIL_TYPES.find((x) => x.id === s.ceilType);
  if (!t) return null;
  const total = round100(CEIL_PRICE_M2 * s.area);
  return {
    total,
    lines: [
      { l: `Потолок «${t.label}», ${s.area} м² × ${fmt(CEIL_PRICE_M2)} руб.` + (s.lights ? `, светильников: ${s.lights} шт` : ""), v: total },
    ],
  };
}

function calcFurniture(s) {
  const t = FURN_TYPES.find((x) => x.id === s.furnType);
  const f = FURN_FACADES.find((x) => x.id === s.facade);
  if (!t || !f) return null;
  const total = round100(t.pm * s.length);
  return {
    total,
    lines: [
      { l: `${t.label}, ${s.length} м² × ${fmt(t.pm)} руб. (фасады «${f.label}»)`, v: total },
    ],
  };
}

function OptCard({ sel, onClick, children }) {
  return (
    <button type="button" className={"opt" + (sel ? " sel" : "")} onClick={onClick}>{children}</button>
  );
}

function CheckRow({ on, onClick, label, add }) {
  return (
    <button type="button" className={"check-row" + (on ? " on" : "")} onClick={onClick} role="checkbox" aria-checked={on}>
      <span className="check-box">{on ? <I.check style={{ width: 14, height: 14 }} /> : null}</span>
      <span className="lbl">{label}</span>
      {add ? <span className="add">+{fmt(add)} руб.</span> : null}
    </button>
  );
}

function Calculator({ open, onClose }) {
  const [flow, setFlow] = React.useState(null); // win | ceil | furn
  const [step, setStep] = React.useState(0);
  const [s, setS] = React.useState({
    object: null, config: null, width: 1300, height: 1400, profile: null, opts: {},
    ceilType: null, area: 30, lights: 6,
    furnType: null, length: 3, facade: null,
  });
  const [phone, setPhone] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [phoneErr, setPhoneErr] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [hp, setHp] = React.useState(""); // поле-ловушка для ботов, люди его не видят
  const okRef = React.useRef(null);
  const reqRef = React.useRef(0);

  React.useEffect(() => {
    reqRef.current++;
    if (open) { setFlow(null); setStep(0); setSent(false); setPhone(""); setPhoneErr(false); setBusy(false); setFailed(false); setHp(""); }
  }, [open]);
  React.useEffect(() => { if (sent && okRef.current) okRef.current.focus(); }, [sent]);

  if (!open) return null;
  const set = (patch) => setS((prev) => ({ ...prev, ...patch }));

  const FLOWS = {
    win: { title: "Окна", steps: 6 },
    ceil: { title: "Натяжные потолки", steps: 4 },
    furn: { title: "Мебель на заказ", steps: 4 },
  };
  const totalSteps = flow ? FLOWS[flow].steps : 1;
  const progress = flow ? ((step + 1) / totalSteps) * 100 : 8;

  const result = flow === "win" ? calcWindows(s) : flow === "ceil" ? calcCeiling(s) : flow === "furn" ? calcFurniture(s) : null;

  const canNext = (() => {
    if (!flow) return false;
    if (flow === "win") {
      if (step === 0) return !!s.object;
      if (step === 1) return !!s.config;
      if (step === 2) return s.width >= 400 && s.height >= 400;
      if (step === 3) return !!s.profile;
      return true;
    }
    if (flow === "ceil") {
      if (step === 0) return !!s.ceilType;
      return true;
    }
    if (flow === "furn") {
      if (step === 0) return !!s.furnType;
      if (step === 2) return !!s.facade;
      return true;
    }
    return true;
  })();

  const isResult = flow && step === totalSteps - 1;

  const submitPhone = () => {
    if (busy) return;
    if (phone.replace(/\D/g, "").length < 10) { setPhoneErr(true); return; }
    const id = ++reqRef.current;
    setBusy(true);
    setFailed(false);
    sendLead({
      form: "calc",
      phone,
      hp,
      calc: { title: FLOWS[flow].title, lines: result.lines.map((l) => `${l.l}: ${fmt(l.v)} руб.`), total: result.total },
    }).then((ok) => {
      if (id !== reqRef.current) return;
      setBusy(false);
      if (ok) setSent(true); else setFailed(true);
    });
  };

  const body = () => {
    if (!flow) return (
      <div>
        <h4 className="step-title">Что будем считать?</h4>
        <p className="step-hint">Выберите направление: для каждого свой быстрый расчёт</p>
        <div className="opt-grid cols-3">
          <OptCard sel={false} onClick={() => { setFlow("win"); setStep(0); }}>
            <span className="opt-vis"><I.window style={{ width: 36, height: 36 }} /></span>
            <b>Окна</b><small>5 шагов · около минуты</small>
          </OptCard>
          <OptCard sel={false} onClick={() => { setFlow("ceil"); setStep(0); }}>
            <span className="opt-vis"><I.ceiling style={{ width: 36, height: 36 }} /></span>
            <b>Натяжные потолки</b><small>3 шага · полминуты</small>
          </OptCard>
          <OptCard sel={false} onClick={() => { setFlow("furn"); setStep(0); }}>
            <span className="opt-vis"><I.furniture style={{ width: 36, height: 36 }} /></span>
            <b>Мебель на заказ</b><small>3 шага · полминуты</small>
          </OptCard>
        </div>
      </div>
    );

    if (isResult) {
      return (
        <div>
          {sent ? (
            <div className="lead-ok">
              <div className="ico"><I.check style={{ width: 30, height: 30 }} /></div>
              <h3 ref={okRef} tabIndex={-1}>Спасибо! Заявка у нас</h3>
              <p>Свяжемся с вами в рабочее время и договоримся о бесплатном замере.</p>
            </div>
          ) : (
            <div>
              <div className="result-box">
                <div className="from">Ваша цена</div>
                <div className="big">{fmt(result.total)} руб.</div>
                <p className="note">Точную смету составит замерщик, выезд по Новосибирску бесплатный.</p>
              </div>
              <div className="result-breakdown">
                {result.lines.map((l) => (
                  <div className="li" key={l.l}><span>{l.l}</span><span>{fmt(l.v)} руб.</span></div>
                ))}
                <div className="li"><span><b>Итого</b></span><span>{fmt(result.total)} руб.</span></div>
              </div>
              <div className="field">
                <label htmlFor="calc-phone">Телефон для точного расчёта</label>
                <input id="calc-phone" className={phoneErr ? "err" : ""} type="tel" autoComplete="tel" inputMode="tel" placeholder="+7 (___) ___-__-__"
                  value={phone} onChange={(e) => { setPhone(e.target.value); setPhoneErr(false); }} />
                {phoneErr ? <div className="msg">Введите телефон полностью</div> : null}
              </div>
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="calc-hp">Не заполняйте это поле</label>
                <input id="calc-hp" type="text" name="hp_check" tabIndex={-1} autoComplete="off"
                  value={hp} onChange={(e) => setHp(e.target.value)} />
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="button" onClick={submitPhone} aria-disabled={busy} aria-busy={busy}>
                {busy ? "Отправляем…" : "Получить точный расчёт"}
              </button>
              {failed ? (
                <p className="lead-fail" role="alert">
                  Заявка не отправилась. Попробуйте ещё раз или позвоните нам: <a href={PHONE_HREF}>{PHONE}</a>
                </p>
              ) : null}
              <p className="consent center">Нажимая кнопку, вы соглашаетесь с <a href="/policy">политикой обработки персональных данных</a>.</p>
            </div>
          )}
        </div>
      );
    }

    if (flow === "win") {
      if (step === 0) return (
        <div>
          <h4 className="step-title">Куда ставим окна?</h4>
          <p className="step-hint">От типа объекта зависят рекомендации по профилю</p>
          <div className="opt-grid cols-2">
            {[{ id: "flat", l: "Квартира", ic: "window" }, { id: "house", l: "Частный дом", ic: "house" }].map((o) => {
              const Ic = I[o.ic];
              return (
                <OptCard key={o.id} sel={s.object === o.id} onClick={() => set({ object: o.id })}>
                  <span className="opt-vis"><Ic style={{ width: 34, height: 34 }} /></span>
                  <b>{o.l}</b>
                </OptCard>
              );
            })}
          </div>
        </div>
      );
      if (step === 1) return (
        <div>
          <h4 className="step-title">Конфигурация окна</h4>
          <p className="step-hint">Сколько створок нужно?</p>
          <div className="opt-grid cols-4">
            {WIN_CONFIGS.map((c) => (
              <OptCard key={c.id} sel={s.config === c.id} onClick={() => set({ config: c.id })}>
                <span className="opt-vis"><WinPic kind={c.pic} /></span>
                <b>{c.label}</b>
              </OptCard>
            ))}
          </div>
        </div>
      );
      if (step === 2) return (
        <div>
          <h4 className="step-title">Размеры окна</h4>
          <p className="step-hint">Примерно, с точностью до 10 см, точные размеры снимет замерщик</p>
          <div className="dim-row">
            <div className="field">
              <label htmlFor="w-mm">Ширина, мм</label>
              <input id="w-mm" type="number" min="400" max="4000" step="50" value={s.width}
                onChange={(e) => set({ width: +e.target.value || 0 })} />
            </div>
            <div className="field">
              <label htmlFor="h-mm">Высота, мм</label>
              <input id="h-mm" type="number" min="400" max="3000" step="50" value={s.height}
                onChange={(e) => set({ height: +e.target.value || 0 })} />
            </div>
          </div>
        </div>
      );
      if (step === 3) return (
        <div>
          <h4 className="step-title">Класс профиля</h4>
          <p className="step-hint">{s.object === "house" ? "Для частного дома советуем «Тёплый премиум»" : "Для квартиры чаще всего берут «Стандарт»"}</p>
          <div className="opt-grid cols-3">
            {WIN_PROFILES.map((p) => (
              <OptCard key={p.id} sel={s.profile === p.id} onClick={() => set({ profile: p.id })}>
                <b>{p.label}</b><small>{p.hint}</small>
              </OptCard>
            ))}
          </div>
        </div>
      );
      if (step === 4) return (
        <div>
          <h4 className="step-title">Дополнительно</h4>
          <p className="step-hint">Отметьте, что нужно: учтём при замере</p>
          {WIN_OPTIONS.map((o) => (
            <CheckRow key={o.id} on={!!s.opts[o.id]} label={o.label} add={o.add}
              onClick={() => set({ opts: { ...s.opts, [o.id]: !s.opts[o.id] } })} />
          ))}
        </div>
      );
    }

    if (flow === "ceil") {
      if (step === 0) return (
        <div>
          <h4 className="step-title">Тип полотна</h4>
          <p className="step-hint">Цена 1 300 руб. за квадратный метр</p>
          <div className="opt-grid cols-3">
            {CEIL_TYPES.map((t) => (
              <OptCard key={t.id} sel={s.ceilType === t.id} onClick={() => set({ ceilType: t.id })}>
                <b>{t.label}</b><small>{t.hint}</small>
              </OptCard>
            ))}
          </div>
        </div>
      );
      if (step === 1) return (
        <div>
          <h4 className="step-title">Площадь потолков</h4>
          <p className="step-hint">Суммарно по всем комнатам</p>
          <div className="slider-wrap">
            <div className="slider-val">{s.area} м²</div>
            <input type="range" min="5" max="120" step="1" value={s.area} onChange={(e) => set({ area: +e.target.value })} aria-label="Площадь потолков, м²" />
          </div>
        </div>
      );
      if (step === 2) return (
        <div>
          <h4 className="step-title">Светильники</h4>
          <p className="step-hint">Укажите, сколько светильников нужно: учтём при замере</p>
          <div className="stepper">
            <button type="button" onClick={() => set({ lights: Math.max(0, s.lights - 1) })} aria-label="Меньше">−</button>
            <span className="v">{s.lights}</span>
            <button type="button" onClick={() => set({ lights: Math.min(30, s.lights + 1) })} aria-label="Больше">+</button>
          </div>
        </div>
      );
    }

    if (flow === "furn") {
      if (step === 0) return (
        <div>
          <h4 className="step-title">Что заказываем?</h4>
          <p className="step-hint">Цена за квадратный метр</p>
          <div className="opt-grid cols-2">
            {FURN_TYPES.map((t) => (
              <OptCard key={t.id} sel={s.furnType === t.id} onClick={() => set({ furnType: t.id })}>
                <b>{t.label}</b>
                <span className="price-hint">{fmt(t.pm)} руб./м²</span>
              </OptCard>
            ))}
          </div>
        </div>
      );
      if (step === 1) return (
        <div>
          <h4 className="step-title">Площадь, м²</h4>
          <p className="step-hint">Примерно, точные размеры снимет замерщик</p>
          <div className="slider-wrap">
            <div className="slider-val">{s.length} м²</div>
            <input type="range" min="1" max="10" step="0.5" value={s.length} onChange={(e) => set({ length: +e.target.value })} aria-label="Площадь, м²" />
          </div>
        </div>
      );
      if (step === 2) return (
        <div>
          <h4 className="step-title">Материал фасада</h4>
          <div className="opt-grid cols-3" style={{ marginTop: 18 }}>
            {FURN_FACADES.map((f) => (
              <OptCard key={f.id} sel={s.facade === f.id} onClick={() => set({ facade: f.id })}>
                <b>{f.label}</b><small>{f.hint}</small>
              </OptCard>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Калькулятор стоимости">
        <div className="modal-head">
          <h3>{flow ? "Калькулятор: " + FLOWS[flow].title : "Калькулятор стоимости"}</h3>
          {flow && !isResult ? <span style={{ color: "var(--muted)", fontSize: 13, fontWeight: 700 }}>шаг {step + 1} из {totalSteps - 1}</span> : null}
          <button className="modal-close" onClick={onClose} aria-label="Закрыть"><I.x style={{ width: 18, height: 18 }} /></button>
        </div>
        <div className="progress"><i style={{ width: progress + "%" }}></i></div>
        <div className="modal-body">{body()}</div>
        {flow && !sent ? (
          <div className="modal-foot">
            <button className="btn btn-ghost" type="button" aria-disabled={busy}
              onClick={() => { if (busy) return; if (step === 0) { setFlow(null); } else setStep(step - 1); }}>Назад</button>
            <div className="run">
              {result && !isResult ? (
                <div className="run-from"><small>уже получается</small><b>{fmt(result.total)} руб.</b></div>
              ) : null}
              {!isResult ? (
                <button className="btn btn-primary" type="button" disabled={!canNext} style={{ opacity: canNext ? 1 : 0.45 }}
                  onClick={() => setStep(step + 1)}>Далее</button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

Object.assign(window, { Calculator });
