
function MatrixHeadline() {
  return (
    <section className="mx-hero" data-screen-label="Матрица направлений">
      <div className="wrap">
        <span className="eyebrow">Новосибирск · всё для дома</span>
        <h1 className="mx-h1">Всё для дома в Новосибирске: <span className="mark">от окон до мебели на заказ</span></h1>
        <p className="mx-hero-lead">
          Окна, балконы, витражи, двери, натяжные потолки, тёплые полы и мебель на заказ.
          Мебель разложили подробнее: кухни и шкафы-купе с гардеробными вынесены отдельными кнопками.
          Нажмите на нужное: внутри цены, варианты и заявка. Листать весь сайт не нужно.
        </p>
      </div>
    </section>
  );
}

const MX_SUBTILES = [
  { key: "kuhni", icon: "kitchen", img: "img/pf-7.jpg", title: "Кухни", desc: "Прямые, угловые, П-образные и с островом",
    price: "14 900 ₽", unit: "/пог. м", href: "/kuhni" },
  { key: "mebel", icon: "wardrobe", img: "img/pf-9.jpg", title: "Шкафы-купе и гардеробные", desc: "Встроенные и корпусные, по вашим размерам",
    price: "11 900 ₽", unit: "/пог. м", href: "/mebel",
    only: ["Шкафы-купе на заказ", "Встроенные шкафы", "Гардеробные на заказ", "Прихожие на заказ"],
    subTitle: "Какой шкаф или гардеробную сделать",
    subLead: "Встроенный или корпусный шкаф-купе, отдельная гардеробная комната, прихожая. Соберём по вашим размерам." },
];
const MX_TILES = DIRECTIONS.concat(MX_SUBTILES);

function MatrixCat({ dirTitle, c, onLead }) {
  const Ic = I[c.icon];
  const inner = (
    <>
      <span className="mx-cat-media">
        {c.img
          ? <img src={c.img} alt="" loading="lazy" />
          : <span className="mx-cat-ic">{Ic ? <Ic /> : null}</span>}
      </span>
      <span className="mx-cat-t">{c.title}</span>
      <span className="mx-cat-p">от {c.from}{c.unit || ""}</span>
      <span className="mx-cat-go">{c.href ? "Подробнее" : "Рассчитать"}</span>
    </>
  );
  return c.href
    ? <a className="mx-cat" href={c.href}>{inner}</a>
    : <button type="button" className="mx-cat" onClick={() => onLead(dirTitle + " · " + c.title)}>{inner}</button>;
}

function MatrixGrid({ onLead }) {
  const [sel, setSel] = React.useState(null);
  const [rowEnd, setRowEnd] = React.useState(null);
  const panelRef = React.useRef(null);
  const gridRef = React.useRef(null);

  const toggle = (i) => setSel((cur) => (cur === i ? null : i));

  const calcRowEnd = React.useCallback(() => {
    if (sel === null || !gridRef.current) { setRowEnd(null); return; }
    const tiles = Array.prototype.slice.call(gridRef.current.querySelectorAll(".mx-tile"));
    if (!tiles[sel]) { setRowEnd(null); return; }
    const top = tiles[sel].offsetTop;
    let end = sel;
    for (let i = sel; i < tiles.length; i++) {
      if (Math.abs(tiles[i].offsetTop - top) < 4) end = i;
      else break;
    }
    setRowEnd(end);
  }, [sel]);

  React.useLayoutEffect(() => { calcRowEnd(); }, [calcRowEnd]);

  React.useEffect(() => {
    const onResize = () => calcRowEnd();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [calcRowEnd]);

  React.useEffect(() => {
    if (sel === null || !panelRef.current) return;
    panelRef.current.focus({ preventScroll: true });
    const el = panelRef.current;
    const id = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      const header = 90;                       // липкая шапка
      const visible = window.innerHeight - header;
      if (r.top < header || r.bottom > window.innerHeight) {
        const y = r.top + window.pageYOffset - header - 12;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      } else if (r.height > visible) {
        const y = r.top + window.pageYOffset - header - 12;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    }, 60);
    return () => window.clearTimeout(id);
  }, [sel, rowEnd]);

  React.useEffect(() => {
    if (sel === null) return;
    const onKey = (e) => { if (e.key === "Escape") setSel(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sel]);

  const dir = sel === null ? null : MX_TILES[sel];
  const data = dir && typeof DIR_DATA !== "undefined" ? DIR_DATA[dir.key] : null;
  let cats = (data && data.cats) || [];
  if (dir && dir.only) {
    const picked = cats.filter((c) => dir.only.includes(c.title));
    if (picked.length) cats = picked;   // если названия разъехались, показываем всё направление
  }
  const headTitle = (dir && dir.subTitle) || (data && data.subTitle) || (dir && dir.title) || "";
  const headLead = (dir && dir.subLead) || (data && data.subLead) || (dir && dir.desc) || "";

  const panel = dir === null ? null : (
    <div className="mx-panel" id="mx-panel" ref={panelRef} tabIndex={-1} role="region" aria-label={dir.title}>
      <div className="mx-panel-head">
        <span className="mx-panel-ic">{I[dir.icon] ? React.createElement(I[dir.icon]) : null}</span>
        <div className="mx-panel-headtext">
          <h3>{headTitle}</h3>
          <p>{headLead}</p>
        </div>
        <button type="button" className="mx-panel-close" onClick={() => setSel(null)} aria-label="Закрыть">×</button>
      </div>

      {cats.length > 0 ? (
        <div className="mx-cats-wrap">
          <div className="mx-cats">
            {cats.map((c) => (
              <MatrixCat key={c.title} dirTitle={dir.title} c={c} onLead={onLead} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-panel-fallback">
          <Ph label={dir.title} icon={dir.icon} img={dir.img} style={{ height: 220 }} />
          <p>{dir.desc}. От {dir.price}{dir.unit || ""}.</p>
        </div>
      )}

      <div className="mx-panel-foot">
        <span className="mx-panel-foot-note">
          {cats.length > 0
            ? "Цены примерные, точную посчитает замерщик бесплатно."
            : "Точную цену посчитает замерщик бесплатно."}
        </span>
        <span className="mx-panel-foot-cta">
          {dir.href && <a className="btn btn-outline" href={dir.href}>Все варианты и цены <I.arrow style={{ width: 15, height: 15 }} /></a>}
          <button type="button" className="btn btn-primary" onClick={() => onLead(dir.title)}>Записаться на замер</button>
        </span>
      </div>
    </div>
  );

  return (
    <section className="section mx-sec" id="directions">
      <div className="wrap">
        <div className="mx-grid" ref={gridRef} role="group" aria-label="Направления, выберите нужное">
          {MX_TILES.map((d, i) => {
            const Ic = I[d.icon];
            const active = sel === i;
            return (
              <React.Fragment key={d.title}>
                <button
                  type="button"
                  className={"mx-tile" + (active ? " is-active" : "")}
                  onClick={() => toggle(i)}
                  aria-expanded={active}
                  aria-controls="mx-panel"
                >
                  <span className="mx-ic">{Ic ? <Ic /> : null}</span>
                  <span className="mx-tile-title">{d.title}</span>
                  <span className="mx-tile-price">от {d.price}{d.unit}</span>
                  <span className="mx-tile-mark" aria-hidden="true">{active ? "–" : "+"}</span>
                </button>
                {panel && rowEnd === i ? panel : null}
              </React.Fragment>
            );
          })}
          {panel && rowEnd === null ? panel : null}
        </div>
      </div>
    </section>
  );
}

function PaymentMatrix({ onLead }) {
  const PAYS = [
    { icon: "doc",         t: "Кредит",    d: "Поможем оформить банковский кредит", lead: "Оплата: кредит" },
    { icon: "percent",     t: "Рассрочка", d: "Оплата частями, условия уточним", lead: "Оплата: рассрочка" },
    { icon: "wallet",      t: "Долями",    d: "Платите по мере выполнения этапов", lead: "Оплата: долями" },
    { icon: "checkCircle", t: "Оплата",    d: "Картой, наличными или по счёту",  lead: "Оплата: полная" },
  ];
  return (
    <section className="section mx-pay-sec" id="payment" data-screen-label="Оплата: 4 способа">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Удобная оплата</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Четыре способа оплаты на выбор</h2>
          <p>Способ оплаты выбираете вы. Условия рассрочки и кредита подбираем вместе с банком-партнёром при оформлении договора.</p>
        </div>
        <div className="mx-pay-row">
          {PAYS.map((p) => {
            const Ic = I[p.icon];
            return (
              <button type="button" className="mx-pay-card" key={p.t} onClick={() => onLead(p.lead)}>
                <span className="mx-pay-ic">{Ic ? <Ic /> : null}</span>
                <b>{p.t}</b>
                <small>{p.d}</small>
              </button>
            );
          })}
        </div>
        <div className="mx-pay-note"><I.checkCircle className="ic" /> Нажмите нужный способ: оставите заявку, и мы подскажем, как оформить</div>
      </div>
    </section>
  );
}

function MatrixApp() {
  const [calcOpen, setCalcOpen] = React.useState(false);
  const [preset, setPreset] = React.useState("");

  const goLead = (direction) => {
    if (typeof direction === "string") setPreset(direction);
    const el = document.getElementById("lead");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className="liora"
      data-character={(typeof window !== "undefined" && window.LIORA_THEME) || "warm"}
      style={{ "--r-sm": "10px", "--r-md": "16px", "--r-lg": "24px", "--r-xl": "32px" }}
    >
      <Header onLead={goLead} />
      <MatrixHeadline />
      <MatrixGrid onLead={goLead} />
      <Finishing onLead={goLead} />
      <PaymentMatrix onLead={goLead} />
      <Contracts />
      <Promos onLead={goLead} onCalc={() => setCalcOpen(true)} />
      <CalcEntry onCalc={() => setCalcOpen(true)} />
      <Numbers />
      <Why />
      <About onLead={goLead} />
      <Stages />
      <LeadForm presetDirection={preset} />
      <Footer />
      <Calculator open={calcOpen} onClose={() => setCalcOpen(false)} />
      <MobileBar onLead={goLead} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MatrixApp />);
