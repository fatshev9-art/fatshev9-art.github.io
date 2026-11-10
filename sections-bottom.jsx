
function Lightbox({ items, index, onClose, onNav }) {
  const it = items[index];
  const prev = () => onNav((index - 1 + items.length) % items.length);
  const next = () => onNav((index + 1) % items.length);
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [index]);
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={it.title} onClick={onClose}>
      <button type="button" className="lb-close" onClick={onClose} aria-label="Закрыть просмотр">×</button>
      <button type="button" className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Предыдущее фото">‹</button>
      <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
        <img src={it.img} alt={it.title} className="lb-img" />
        <figcaption className="lb-cap">
          <b>{it.title}</b>
          <span>{it.desc}</span>
        </figcaption>
      </figure>
      <button type="button" className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Следующее фото">›</button>
      <div className="lb-count">{index + 1} / {items.length}</div>
    </div>
  );
}

function Portfolio() {
  const [lb, setLb] = React.useState(null);
  return (
    <section className="section" id="portfolio" data-screen-label="Портфолио">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Наши работы</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Сделано в Новосибирске</h2>
          <p>Фотографии наших объектов в Новосибирске. Нажмите на фото, чтобы посмотреть крупно.</p>
        </div>
        <div className="port-grid">
          {PORTFOLIO.map((p, i) => (
            <button type="button" className="port-card" key={p.title} onClick={() => setLb(i)} aria-label={"Посмотреть фото: " + p.title}>
              <div className="port-ph-wrap">
                <Ph label={"Фото объекта: " + p.title} icon={p.icon} img={p.img} style={{ height: 250 }} />
                <span className="port-zoom" aria-hidden="true"><I.camera style={{ width: 18, height: 18 }} /> Смотреть</span>
              </div>
              <div className="port-meta">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {lb !== null && <Lightbox items={PORTFOLIO} index={lb} onClose={() => setLb(null)} onNav={setLb} />}
    </section>
  );
}

function LeadForm({ presetDirection }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [what, setWhat] = React.useState(presetDirection || "");
  const [errs, setErrs] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [hp, setHp] = React.useState(""); // поле-ловушка для ботов, люди его не видят
  const okRef = React.useRef(null);

  React.useEffect(() => { if (presetDirection) setWhat(presetDirection); }, [presetDirection]);
  React.useEffect(() => { if (sent && okRef.current) okRef.current.focus(); }, [sent]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Подскажите, как к вам обращаться";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) e.phone = "Введите телефон полностью";
    if (!what) e.what = "Выберите вид работ";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (busy || !validate()) return;
    setBusy(true);
    setFailed(false);
    sendLead({ form: "lead", name: name.trim(), phone, what, hp }).then((ok) => {
      setBusy(false);
      if (ok) setSent(true); else setFailed(true);
    });
  };

  return (
    <section className="section--tight" id="lead" data-screen-label="Форма заявки на замер" style={{ paddingBottom: 84 }}>
      <div className="wrap">
        <div className="lead">
          <div className="lead-grid">
            <div className="lead-text">
              <h2>Запишитесь на бесплатный замер</h2>
              <p>Замерщик приедет в удобное время, посчитает точную смету и ответит на вопросы. Это бесплатно и ни к чему не обязывает.</p>
              <ul className="lead-perks">
                <li><I.checkCircle className="ic" /> Свяжемся в рабочее время</li>
                <li><I.checkCircle className="ic" /> Выезд в любой район Новосибирска</li>
                <li><I.checkCircle className="ic" /> Зафиксируем цену в договоре</li>
              </ul>
            </div>
            <div className="lead-form">
              {sent ? (
                <div className="lead-ok">
                  <div className="ico"><I.check style={{ width: 30, height: 30 }} /></div>
                  <h3 ref={okRef} tabIndex={-1}>Заявка принята!</h3>
                  <p>Свяжемся с вами в рабочее время и договоримся о бесплатном замере.</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h3>Заявка на замер</h3>
                  <p className="sub">Заполните, остальное сделаем мы</p>
                  <div className="field">
                    <label htmlFor="lf-name">Ваше имя</label>
                    <input id="lf-name" className={errs.name ? "err" : ""} type="text" autoComplete="name" placeholder="Например, Елена"
                      value={name} onChange={(e) => setName(e.target.value)} />
                    {errs.name ? <div className="msg">{errs.name}</div> : null}
                  </div>
                  <div className="field">
                    <label htmlFor="lf-phone">Телефон</label>
                    <input id="lf-phone" className={errs.phone ? "err" : ""} type="tel" autoComplete="tel" inputMode="tel" placeholder="+7 (___) ___-__-__"
                      value={phone} onChange={(e) => setPhone(e.target.value)} />
                    {errs.phone ? <div className="msg">{errs.phone}</div> : null}
                  </div>
                  <div className="field">
                    <label htmlFor="lf-what">Что ремонтируем?</label>
                    <select id="lf-what" className={errs.what ? "err" : ""} value={what} onChange={(e) => setWhat(e.target.value)}>
                      <option value="">Выберите вид работ</option>
                      {what && !DIRECTIONS.some((d) => d.title === what) &&
                        !["Несколько видов работ", "Пока не знаю"].includes(what) &&
                        <option value={what}>{what}</option>}
                      {DIRECTIONS.map((d) => <option key={d.title} value={d.title}>{d.title}</option>)}
                      <option value="Несколько видов работ">Несколько видов работ</option>
                      <option value="Пока не знаю">Пока не знаю, нужна консультация</option>
                    </select>
                    {errs.what ? <div className="msg">{errs.what}</div> : null}
                  </div>
                  <div className="hp-field" aria-hidden="true">
                    <label htmlFor="lf-hp">Не заполняйте это поле</label>
                    <input id="lf-hp" type="text" name="hp_check" tabIndex={-1} autoComplete="off"
                      value={hp} onChange={(e) => setHp(e.target.value)} />
                  </div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit" aria-disabled={busy} aria-busy={busy}>
                    {busy ? "Отправляем…" : "Записаться на замер"}
                  </button>
                  {failed ? (
                    <p className="lead-fail" role="alert">
                      Заявка не отправилась. Попробуйте ещё раз или позвоните нам: <a href={PHONE_HREF}>{PHONE}</a>
                    </p>
                  ) : null}
                  <p className="consent">Нажимая кнопку, вы соглашаетесь с <a href="/policy">политикой обработки персональных данных</a>.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockNote({ children }) {
  const [hidden, setHidden] = React.useState(false);
  if (hidden) return null;
  return (
    <div className="mock-note" role="note">
      <span>{children}</span>
      <button type="button" className="mock-note-close" onClick={() => setHidden(true)} aria-label="Скрыть напоминание о макете">×</button>
    </div>
  );
}

function Footer() {
  const home = (typeof window !== "undefined" && window.location.pathname !== "/") ? "/" : "";
  return (
    <footer className="ftr" data-screen-label="Подвал">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <Logo footer />
            <p className="ftr-about">Всё для дома в Новосибирске: окна, балконы, витражи, двери, потолки и мебель на заказ. Проверенные профессионалы, отдельный договор и гарантия на каждый вид работ.</p>
          </div>
          <div>
            <h5>Направления</h5>
            <ul>
              {DIRECTIONS.slice(0, 4).map((d) => <li key={d.title}><a href={home + "#directions"}>{d.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h5>&nbsp;</h5>
            <ul>
              {DIRECTIONS.slice(4).map((d) => <li key={d.title}><a href={home + "#directions"}>{d.title}</a></li>)}
            </ul>
          </div>
          <div className="ftr-contact">
            <h5>Связаться</h5>
            <b><a href={PHONE_HREF} className="ftr-phone">{PHONE}</a></b>
            <div className="small">Новосибирск и область. Можно позвонить или оставить заявку</div>
            <ul>
              <li><a href={home + "#promo"}>Условия работы</a></li>
              <li><a href="/o-nas">О компании</a></li>
              <li><a href="/policy">Обработка персональных данных</a></li>
            </ul>
            <a className="btn btn-primary ftr-cta" href="#lead">Заказать бесплатный замер</a>
          </div>
        </div>
        <div className="ftr-pays" aria-label="Способы оплаты">
          <span className="pay-note">Оплата наличными, картой или по счёту. Способ подбираем при оформлении договора.</span>
        </div>
        <div className="ftr-bottom">
          <span>© 2004-2026 ЛИОРА · Всё для дома в Новосибирске</span>
          <span>ИП Полежаева Светлана Васильевна · ИНН 543307714803 · ОГРНИП 325547600194517 · <a href="/policy">Политика обработки данных</a></span>
        </div>
        <div className="ftr-disclaimer">Информация на сайте носит справочный характер и не является публичной офертой. Точную стоимость определяет замерщик после осмотра объекта.</div>
      </div>
    </footer>
  );
}

function MobileBar({ onLead }) {
  return (
    <div className="mobile-bar">
      <a className="mbar-btn mbar-call" href={PHONE_HREF}><I.phone /> Позвонить</a>
      <button type="button" className="mbar-btn mbar-zamer" onClick={() => onLead("Запись на замер")}>Записаться на замер</button>
    </div>
  );
}

Object.assign(window, { Portfolio, LeadForm, Footer, MobileBar, MockNote });
