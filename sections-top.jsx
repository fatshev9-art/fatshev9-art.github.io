
function Logo({ footer }) {
  return (
    <a className={"logo" + (footer ? " logo--footer" : "")} href="/" aria-label="ЛИОРА, всё для дома, на главную">
      <img src="img/logo-liora.png" width="77" height="58" alt="ЛИОРА, всё для дома" decoding="async" />
    </a>
  );
}

function Header({ onLead }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  const home = (typeof window !== "undefined" && window.location.pathname !== "/") ? "/" : "";
  return (
    <header className="hdr" id="top">
      <div className="wrap hdr-row">
        <Logo />
        <button
          type="button"
          className={"hdr-burger" + (menuOpen ? " is-open" : "")}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="burger-bars"><span></span><span></span><span></span></span>
          <span className="burger-label">Меню</span>
        </button>
        <nav className={"hdr-nav" + (menuOpen ? " open" : "")}>
          <a href={home + "#directions"} onClick={closeMenu}>Направления</a>
          <a href={home + "#promo"} onClick={closeMenu}>Условия</a>
          <a href={home + "#calc"} onClick={closeMenu}>Расчёт цены</a>
          <a href="/o-nas" onClick={closeMenu}>О компании</a>
          <button type="button" className="hdr-nav-cta btn btn-primary" onClick={() => { closeMenu(); onLead("Запись на замер"); }}>Записаться на замер</button>
          <div className="hdr-nav-msgrs">
            <button type="button" className="hdr-nav-msg" onClick={() => { closeMenu(); onLead("Консультация менеджера"); }}>Консультация менеджера</button>
          </div>
        </nav>
        {menuOpen && <div className="nav-overlay" onClick={closeMenu} aria-hidden="true"></div>}
        <div className="hdr-right">
          <div className="hdr-phone-wrap">
            <a className="hdr-phone" href={PHONE_HREF}>
              <b>{PHONE}</b>
              <span>звоните, ответим на вопросы</span>
            </a>
            <button type="button" className="hdr-callback" onClick={() => onLead("Консультация менеджера")}>Консультация менеджера</button>
          </div>
          <button className="btn btn-primary" onClick={() => onLead("Запись на замер")}>Записаться на замер</button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onLead, onCalc }) {
  return (
    <section className="hero" data-screen-label="Первый экран">
      <div className="wrap hero-inner">
        <div>
          <span className="eyebrow">Новосибирск · всё для дома</span>
          <h1 style={{ marginTop: 22 }}>
            Всё для дома, <span className="mark">от окон до мебели на заказ</span>
          </h1>
          <p className="hero-lead">
            Окна, балконы, витражи, двери, потолки и мебель на заказ. Подберём и организуем
            всё для вашего дома: проверенные профессионалы, договор и гарантия на каждом этапе.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg" onClick={() => onLead("Запись на замер")}>Записаться на замер</button>
            <button className="btn btn-ghost btn-lg" onClick={() => onLead("Консультация менеджера")}>Консультация менеджера</button>
            <button className="btn btn-outline btn-lg" onClick={() => onLead("Оформление договора")}>Оформить договор</button>
          </div>
          <div className="hero-trust">
            <div><I.checkCircle className="ic" /> Замер и смета бесплатно</div>
            <div><I.checkCircle className="ic" /> Цена в договоре не меняется</div>
            <div><I.checkCircle className="ic" /> Гарантия по договору</div>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-card">
            <Ph label="Гостиная после ремонта под ключ" icon="camera" img="img/hero.jpg" eager style={{ height: 360 }} />
          </div>
          <div className="hero-badge b1">
            <div>
              <div className="big">8 направлений</div>
              <small>от окон до мебели на заказ</small>
            </div>
          </div>
          <div className="hero-badge b2">
            <div>
              <div className="big">с 2004</div>
              <small>работаем в Новосибирске</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Directions({ onLead }) {
  return (
    <section className="section" id="directions" data-screen-label="Направления">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">8 направлений</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Сделаем всё, что нужно квартире</h2>
          <p>Можно заказать одно направление или собрать всё для дома сразу: на каждый вид работ оформим свой договор.</p>
        </div>
        <div className="dir-grid">
          {DIRECTIONS.map((d) => {
            const Ic = I[d.icon];
            return (
              <a className="dir-card" href={d.href || "#lead"} key={d.title} onClick={d.href ? undefined : (e) => { e.preventDefault(); onLead(d.title); }}>
                <Ph label={d.title} icon={d.icon} img={d.img} style={{ height: 132 }} />
                <div className="dir-body">
                  <h3>{d.title}</h3>
                  <p className="desc">{d.desc}</p>
                  <div className="dir-price">
                    <span className="from">от</span>
                    <span className="val">{d.price}</span>
                    <span className="from">{d.unit}</span>
                  </div>
                  <span className="dir-arrow">{d.href ? "Смотреть подробнее" : "Записаться на замер"} <I.arrow style={{ width: 15, height: 15 }} /></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="numbers section--tight" data-screen-label="Цифры компании">
      <div className="wrap" style={{ paddingTop: 26, paddingBottom: 26 }}>
        <div className="num-grid">
          {NUMBERS.map((x) => (
            <div className="num-item" key={x.lbl}>
              <div className="n">{x.n}<span className="u">{x.u}</span></div>
              <div className="lbl">{x.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="section" id="why" data-screen-label="Почему ЛИОРА">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Почему ЛИОРА</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Один ответственный вместо пяти</h2>
          <p>Мы эксперты в обустройстве и заполнении пространства: подберём и организуем всё под ваш дом. Обычно на ремонт зовут оконщиков, потолочников, мебельщиков, и каждый отвечает только за своё. С ЛИОРА всё под ключ: на каждый вид работ свой договор со сроками и гарантией, а ответственный за результат один, от замера до сдачи.</p>
        </div>
        <div className="why-grid">
          {WHY.map((w) => {
            const Ic = I[w.icon];
            return (
              <div className="why-card" key={w.title}>
                <div className="why-ic"><Ic /></div>
                <div className="why-text">
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Logo, Header, Hero, Directions, Numbers, Why });
