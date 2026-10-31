
function TempNote({ children }) {
  return <span className="temp-note">{children || "данные примерные, заменим на ваши"}</span>;
}

function Breadcrumbs({ d }) {
  return (
    <nav className="crumbs" aria-label="Хлебные крошки">
      <ol>
        <li><a href="/">Главная</a></li>
        <li className="sep" aria-hidden="true">›</li>
        {d.parent ? (
          <React.Fragment>
            <li><a href={d.parent.href}>{d.parent.crumb || d.parent.name}</a></li>
            <li className="sep" aria-hidden="true">›</li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li><a href="/#directions">Направления</a></li>
            <li className="sep" aria-hidden="true">›</li>
          </React.Fragment>
        )}
        <li aria-current="page">{d.crumb}</li>
      </ol>
    </nav>
  );
}

function DirHero({ d, onLead }) {
  return (
    <section className="dhero" data-screen-label="Hero направления">
      <div className="wrap">
        <Breadcrumbs d={d} />
        <div className="dhero-inner">
        <div>
          <span className="eyebrow">Новосибирск · {d.crumb.toLowerCase()}</span>
          <h1 style={{ marginTop: 18 }}>{d.h1}</h1>
          <p className="dhero-lead">{d.lead}</p>
          <div className="dhero-price">
            <span className="from">от</span>
            <span className="val">{d.priceFrom}</span>
            <span className="with">{d.priceWith}</span>
          </div>
          <ul className="dhero-bullets">
            {d.bullets.map((b) => <li key={b}><I.checkCircle className="ic" /> {b}</li>)}
          </ul>
          <div className="dhero-cta">
            <button className="btn btn-primary btn-lg" onClick={() => onLead()}>Бесплатный замер</button>
          </div>
        </div>
        <div className="dhero-art">
          <div className="hero-card">
            <Ph label={d.heroPhoto} icon="camera" img={d.heroImg} eager style={{ height: 380 }} />
          </div>
          <div className="hero-badge b1">
            <div>
              <div className="big">от {d.priceFrom}</div>
              <small>{d.priceWith}</small>
            </div>
          </div>
          <div className="hero-badge b2">
            <div>
              <div className="big">{d.heroBadge ? d.heroBadge.big : "за 1 день"}</div>
              <small>{d.heroBadge ? d.heroBadge.small : "установка проверенными мастерами"}</small>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function SubcatListing({ d, onLead }) {
  const [activeChip, setActiveChip] = React.useState(0);
  const [sort, setSort] = React.useState("pop");
  const [shown, setShown] = React.useState(d.cats.length);

  const visible = d.cats.slice(0, shown);

  return (
    <section className="section" id="catalog" data-screen-label="Подкатегории направления">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 24 }}>
          <span className="eyebrow">Каталог</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>{d.subTitle}</h2>
          <p>{d.subLead}</p>
          <div style={{ marginTop: 14 }}><TempNote /></div>
        </div>

        <div className="listing-bar">
          {d.chips ? (
            <div className="chips" role="tablist" aria-label="Быстрые фильтры">
              {d.chips.map((c, i) => (
                <button key={c} className={"chip" + (i === activeChip ? " on" : "")} onClick={() => setActiveChip(i)}>{c}</button>
              ))}
            </div>
          ) : <div className="chips" />}
          <label className="sortby">
            <I.sliders style={{ width: 17, height: 17 }} /> Сортировка:
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Сортировка">
              <option value="pop">по популярности</option>
              <option value="asc">сначала дешёвые</option>
              <option value="desc">сначала дорогие</option>
            </select>
          </label>
        </div>

        <div className="cat-grid">
          {visible.map((c) => (
            <div className="cat-card" key={c.title}>
              <div className="cat-badges">
                {c.badge === "hit" && <span className="cat-badge hit">Хит</span>}
                {c.badge === "new" && <span className="cat-badge new">Новинка</span>}
              </div>
              <Ph label={c.title} icon={c.icon} img={c.img} style={{ height: 150 }} />
              <div className="cat-body">
                <h3>{c.title}</h3>
                <p className="desc">{c.desc}</p>
                <div className="cat-avail-row"><span className="avail">{c.avail}</span></div>
                <div className="cat-price">
                  <span className="from">от</span>
                  <span className="val">{c.from}</span>
                  {c.unit && <span className="unit">{c.unit}</span>}
                </div>
              </div>
              {c.href ? (
                <a className="btn btn-outline" href={c.href}>Подробнее</a>
              ) : (
                <button className="btn btn-outline" onClick={() => onLead(d.crumb + " · " + c.title)}>Заказать расчёт</button>
              )}
            </div>
          ))}
        </div>

        {shown < d.cats.length && (
          <div className="listing-more">
            <button className="btn btn-ghost btn-lg" onClick={() => setShown(d.cats.length)}>
              Показать ещё&nbsp;{d.cats.length - shown} <I.chevron style={{ width: 18, height: 18 }} />
            </button>
          </div>
        )}

        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontSize: 24 }}>Линейки от эконома до премиума</h3>
          <div className="tiers">
            {d.tiers.map((t) => (
              <div className={"tier" + (t.featured ? " featured" : "")} key={t.name}>
                {t.featured && <span className="pop">Чаще выбирают</span>}
                <h4>{t.name}</h4>
                <div className="tier-price">{t.price}</div>
                <ul>
                  {t.items.map((it) => <li key={it}><I.check className="ic" /> {it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaStrip({ onCalc }) {
  return (
    <section className="section--tight" data-screen-label="CTA-врезка">
      <div className="wrap">
        <div className="cta-strip">
          <h3>
            Не нашли нужный вариант?
            <p>Назовём цену по вашим размерам: за пару минут в калькуляторе или после бесплатного замера.</p>
          </h3>
          <div className="cta-strip-act">
            <button className="btn btn-accent btn-lg" onClick={onCalc}>
              <I.calc style={{ width: 20, height: 20 }} /> Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceComposition({ d }) {
  return (
    <section className="section" id="prices" data-screen-label="Цены и состав услуги">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Цены и состав</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>{d.priceTableTitle}</h2>
          <p>Прозрачные цены по видам работ. Что входит в стандартную установку: без сюрпризов в смете.</p>
          <div style={{ marginTop: 14 }}><TempNote /></div>
        </div>

        <div className="price-wrap">
          <div className="price-table-scroll">
            <table className="price-table">
              <thead>
                <tr><th>Вид работ</th><th>Что включено</th><th>Цена</th></tr>
              </thead>
              <tbody>
                {d.priceTable.map((r) => (
                  <tr key={r.svc}>
                    <td>{r.svc}</td>
                    <td style={{ color: "var(--muted)" }}>{r.detail}</td>
                    <td><span className="p">от {r.price}</span> <span className="unit">{r.unit}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="includes">
            <h4>Что входит в стандартную установку</h4>
            <ul>
              {d.includes.map((x) => <li key={x}><I.check className="ic" /> {x}</li>)}
            </ul>
            <p className="foot-note">{d.includesNote}</p>
          </div>
        </div>

        <div className="min-order"><I.doc className="ic" /> {d.minOrder} Точную смету бесплатно составит замерщик.</div>
      </div>
    </section>
  );
}

function ReadySolutions({ d, onLead }) {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="ready" data-screen-label="Готовые решения">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Готовые решения</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Пакеты с фиксированной ценой</h2>
          <p>Понятная цена «под ключ» на типовые квартиры: чтобы вы заранее знали бюджет.</p>
          <div style={{ marginTop: 14 }}><TempNote /></div>
        </div>
        <div className="ready-grid">
          {d.ready.map((r) => (
            <div className="ready-card" key={r.title}>
              <Ph label={r.title} icon={r.icon} img={r.img} style={{ height: 160 }} />
              <div className="ready-body">
                <h4>{r.title}</h4>
                <p className="spec">{r.spec}</p>
                <div className="ready-price">
                  <span className="from">от</span>
                  <span className="val">{r.from}</span>
                </div>
                <button className="btn btn-primary btn-block" onClick={() => onLead(d.crumb + " · " + r.title)}>Заказать пакет</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TempNote, Breadcrumbs, DirHero, SubcatListing, CtaStrip, PriceComposition, ReadySolutions });
