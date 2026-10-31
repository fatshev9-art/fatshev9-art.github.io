const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "character": "Тёплый и человечный",
  "radius": "Среднее",
  "showPrices": true
}/*EDITMODE-END*/;

const CHARACTERS = {
  "Тёплый и человечный": "warm",
  "Яркий энергичный": "energetic",
  "Основательный и надёжный": "solid",
};

const RADII = {
  "Мягкое": { sm: "14px", md: "20px", lg: "28px", xl: "36px" },
  "Среднее": { sm: "10px", md: "16px", lg: "24px", xl: "32px" },
  "Строгое": { sm: "4px", md: "8px", lg: "12px", xl: "16px" },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [calcOpen, setCalcOpen] = React.useState(false);
  const [preset, setPreset] = React.useState("");

  const character = CHARACTERS[t.character] || "warm";
  const r = RADII[t.radius] || RADII["Среднее"];

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
      className={"liora" + (t.showPrices ? "" : " hide-prices")}
      data-character={character}
      style={{ "--r-sm": r.sm, "--r-md": r.md, "--r-lg": r.lg, "--r-xl": r.xl }}
    >
      <Header onLead={goLead} />
      <Hero onLead={goLead} onCalc={() => setCalcOpen(true)} />
      <Directions onLead={goLead} />
      <Finishing onLead={goLead} />
      <Numbers />
      <Why />
      <About onLead={goLead} />
      <Promos onLead={goLead} onCalc={() => setCalcOpen(true)} />
      <CalcEntry onCalc={() => setCalcOpen(true)} />
      <Stages />
      <Contracts />
      <Payment onLead={goLead} />
      <LeadForm presetDirection={preset} />
      <Footer />
      <Calculator open={calcOpen} onClose={() => setCalcOpen(false)} />
      <MobileBar onLead={goLead} />
      <MockNote>Дизайн-макет для согласования. Часть цифр и фотографий примерные, заменим на ваши реальные.</MockNote>

      <TweaksPanel>
        <TweakSection label="Характер" />
        <TweakSelect
          label="Вариант"
          value={t.character}
          options={Object.keys(CHARACTERS)}
          onChange={(v) => setTweak("character", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
