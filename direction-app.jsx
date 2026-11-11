
const DIR_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "character": "Тёплый и человечный",
  "direction": "Окна (товарное)",
  "radius": "Среднее"
}/*EDITMODE-END*/;

const DIR_CHARACTERS = {
  "Тёплый и человечный": "warm",
  "Яркий энергичный": "energetic",
  "Основательный и надёжный": "solid",
};
const DIR_KEYS = { "Окна (товарное)": "okna", "Натяжные потолки (услуговое)": "potolki" };
const DIR_RADII = {
  "Мягкое": { sm: "14px", md: "20px", lg: "28px", xl: "36px" },
  "Среднее": { sm: "10px", md: "16px", lg: "24px", xl: "32px" },
  "Строгое": { sm: "4px", md: "8px", lg: "12px", xl: "16px" },
};
const RELATED = {
  okna: [
    { label: "Балконы и лоджии", href: "/balkony" },
    { label: "Входные двери", href: "/dveri-vhodnye" },
    { label: "Витражи", href: "/vitrazhi" },
  ],
  potolki: [
    { label: "Тёплые полы", href: "/teplyy-pol" },
    { label: "Межкомнатные двери", href: "/dveri-mezhkomnatnye" },
    { label: "Витражи", href: "/vitrazhi" },
  ],
  balkony: [
    { label: "Пластиковые окна", href: "/okna" },
    { label: "Натяжные потолки", href: "/potolki" },
    { label: "Входные двери", href: "/dveri-vhodnye" },
  ],
  dveri_vhod: [
    { label: "Межкомнатные двери", href: "/dveri-mezhkomnatnye" },
    { label: "Пластиковые окна", href: "/okna" },
    { label: "Мебель на заказ", href: "/mebel" },
  ],
  dveri_mk: [
    { label: "Входные двери", href: "/dveri-vhodnye" },
    { label: "Натяжные потолки", href: "/potolki" },
    { label: "Мебель на заказ", href: "/mebel" },
  ],
  mebel: [
    { label: "Межкомнатные двери", href: "/dveri-mezhkomnatnye" },
    { label: "Натяжные потолки", href: "/potolki" },
    { label: "Пластиковые окна", href: "/okna" },
  ],
  vitrazhi: [
    { label: "Пластиковые окна", href: "/okna" },
    { label: "Межкомнатные двери", href: "/dveri-mezhkomnatnye" },
    { label: "Балконы и лоджии", href: "/balkony" },
  ],
  teplyy_pol: [
    { label: "Натяжные потолки", href: "/potolki" },
    { label: "Пластиковые окна", href: "/okna" },
    { label: "Мебель на заказ", href: "/mebel" },
  ],
  kuhni: [
    { label: "Мебель на заказ", href: "/mebel" },
    { label: "Натяжные потолки", href: "/potolki" },
    { label: "Пластиковые окна", href: "/okna" },
  ],
};

function plainPrice(s) { return (s.match(/[\d\s]+/) || ["0"])[0].replace(/\s/g, ""); }

function injectJsonLd(d) {
  document.querySelectorAll('script[data-ld="1"]').forEach((n) => n.remove());
  const url = location.href.split("#")[0];
  const blocks = [
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: location.origin + "/" },
        { "@type": "ListItem", position: 2, name: "Направления", item: location.origin + "/#directions" },
        { "@type": "ListItem", position: 3, name: d.crumb, item: url },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "Service",
      name: d.crumb + " в Новосибирске", areaServed: "Новосибирск",
      provider: { "@type": "HomeAndConstructionBusiness", name: "ЛИОРА", telephone: PHONE, email: EMAIL, areaServed: "Новосибирск",
        address: { "@type": "PostalAddress", streetAddress: "ул. Вознесенская, 4", addressLocality: "Кольцово", addressRegion: "Новосибирская область", addressCountry: "RU" } },
      offers: { "@type": "Offer", price: plainPrice(d.priceFrom), priceCurrency: "RUB", description: "Цена " + d.priceFrom + (d.priceWith ? ", " + d.priceWith : "") },
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: d.faq.map((f) => ({
        "@type": "Question", name: f.q,
        acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : "" },
      })),
    },
  ];
  blocks.forEach((b) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.ld = "1";
    s.textContent = JSON.stringify(b);
    document.head.appendChild(s);
  });
}

function DirApp() {
  const [t, setTweak] = useTweaks(DIR_TWEAK_DEFAULTS);
  const [calcOpen, setCalcOpen] = React.useState(false);
  const [preset, setPreset] = React.useState("");

  const character = DIR_CHARACTERS[t.character] || "warm";
  const dirKey = window.LIORA_DIRECTION || "okna";
  const d = DIR_DATA[dirKey];
  const r = DIR_RADII[t.radius] || DIR_RADII["Среднее"];

  React.useEffect(() => {
    document.title = d.title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
    m.content = d.description;
  }, [dirKey]);

  const goLead = (what) => {
    if (typeof what === "string") setPreset(what);
    const el = document.getElementById("lead");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const openCalc = () => setCalcOpen(true);

  return (
    <div
      className={"liora"}
      data-character={character}
      style={{ "--r-sm": r.sm, "--r-md": r.md, "--r-lg": r.lg, "--r-xl": r.xl }}
    >
      <Header onLead={goLead} />
      <DirHero d={d} onLead={goLead} />
      <SubcatListing d={d} onLead={goLead} />
      <CtaStrip onCalc={openCalc} />
      <PriceComposition d={d} />
      <CalcEntry onCalc={openCalc} />
      <Why />
      <Stages />
      <Guarantees d={d} />
      <PromoFinance d={d} onLead={goLead} />
      <Brands d={d} />
      <FAQ d={d} />
      <LeadForm presetDirection={preset || d.crumb} />
      <SeoText d={d} related={RELATED[dirKey]} />
      <Footer />

      <Calculator open={calcOpen} onClose={() => setCalcOpen(false)} />
      <StickyCTA onLead={goLead} />

      <TweaksPanel>
        <TweakSection label="Характер" />
        <TweakSelect
          label="Вариант"
          value={t.character}
          options={Object.keys(DIR_CHARACTERS)}
          onChange={(v) => setTweak("character", v)}
        />
        <TweakSection label="Детали" />
        <TweakRadio
          label="Скругление"
          value={t.radius}
          options={Object.keys(DIR_RADII)}
          onChange={(v) => setTweak("radius", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<DirApp />);
