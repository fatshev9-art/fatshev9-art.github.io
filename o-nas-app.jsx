
function AboutHero() {
  return (
    <section className="legal-hero" data-screen-label="О компании">
      <div className="wrap">
        <nav className="crumbs" aria-label="Хлебные крошки">
          <a href="/">Главная</a> <span>/</span> <span aria-current="page">О компании</span>
        </nav>
        <span className="eyebrow">О компании</span>
        <h1 className="legal-h1">О компании ЛИОРА</h1>
        <p className="legal-lead">Заполняем проёмы и пространство в квартирах, домах и нежилых
          помещениях Новосибирска. Подбираем и устанавливаем всё для дома, от окон до мебели
          на заказ.</p>
      </div>
    </section>
  );
}

function AboutStory({ onLead }) {
  return (
    <section className="section about-page" id="about" data-screen-label="История компании">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-photo">
            <img src="img/svetlana.jpg" width="379" height="447"
              alt="Светлана Полежаева, руководитель компании ЛИОРА" />
          </div>
          <div className="about-text">
            <h2 className="h-sec">Работаем с 2004 года</h2>
            <p>Всё это время занимаемся одним делом: ставим окна, балконы, двери, потолки и витражи,
              делаем мебель на заказ. В отрасли это называют заполнением проёмов и пространства,
              а для вас это значит, что дом становится законченным и в нём удобно жить.</p>
            <p>Среди наших объектов казначейства Новосибирска и области, администрация
              Новосибирской области. При этом основные заказчики у нас обычные люди, которым нужен
              в доме комфорт и уют. Работаем одинаково внимательно и с теми, и с другими.</p>
            <p>Работы выполняют специалисты, занятые своим делом больше 20&nbsp;лет. На каждый вид
              работ оформляем отдельный договор, где прописаны материалы, срок и гарантия, поэтому
              вы заранее знаете, что получите. Заказчики благодарят за результат, и мы хотим, чтобы
              вы тоже остались довольны.</p>
            <div className="about-sign">
              <b>Светлана Полежаева</b>
              <span>руководитель ЛИОРА</span>
            </div>
            <div className="about-cta">
              <button type="button" className="btn btn-primary" onClick={() => onLead("Запись на замер")}>Записаться на замер</button>
              <button type="button" className="btn btn-ghost" onClick={() => onLead("Консультация менеджера")}>Консультация менеджера</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutApp() {
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
    <div className="liora" data-character="warm"
      style={{ "--r-sm": "10px", "--r-md": "16px", "--r-lg": "24px", "--r-xl": "32px" }}>
      <Header onLead={goLead} />
      <AboutHero />
      <AboutStory onLead={goLead} />
      <Numbers />
      <Why />
      <Directions onLead={goLead} />
      <LeadForm presetDirection={preset} />
      <Footer />
      <Calculator open={calcOpen} onClose={() => setCalcOpen(false)} />
      <MobileBar onLead={goLead} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AboutApp />);
