
function Guarantees({ d }) {
  return (
    <section className="section" id="guarantees" data-screen-label="Гарантии направления">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Гарантии</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Отвечаем за товар и за установку</h2>
          <p>Две отдельные гарантии: на изделие и на работу: со сроками в договоре.</p>
        </div>
        <div className="guar-grid">
          {d.guarantees.map((g) => {
            const Ic = I[g.icon];
            return (
              <div className="guar-card" key={g.title}>
                <div className="guar-ic"><Ic /></div>
                <div>
                  <div className="term">{g.term}</div>
                  <h4>{g.title}</h4>
                  <p>{g.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="guar-strip">
          <div><I.doc className="ic" /> Договор с фиксированной ценой и сроками</div>
          <div><I.wallet className="ic" /> Смета без доплат «по ходу»</div>
          <div><I.team className="ic" /> Сервисный выезд по гарантии: бесплатно</div>
        </div>
      </div>
    </section>
  );
}


function PromoFinance({ d, onLead }) {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="promo" data-screen-label="Оплата и условия">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Оплата и условия</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Платите частями, цена в договоре не меняется</h2>
        </div>
        <div className="fin-grid">
          <div className="promo-timer">
            <span className="tag">Банк-партнёр</span>
            <h3>Оплата частями без переплаты</h3>
            <p>Оформляем при заключении договора, нужен только паспорт. Срок и условия уточняем в банке под ваш заказ.</p>
            <div className="timer">
              <div className="unit"><b>4</b><span>способа оплаты</span></div>
              <div className="unit"><b>0 ₽</b><span>за замер и смету</span></div>
            </div>
          </div>
          <div className="fin-card">
            <div className="fin-ic"><I.percent /></div>
            <h4>Кредит и оплата долями</h4>
            <p>Если нужен срок побольше, оформим банковский кредит. Можно платить долями, по мере выполнения этапов работ.</p>
            <div className="terms">
              <div><b>Кредит</b><small>поможем оформить в банке</small></div>
              <div><b>Долями</b><small>по мере выполнения этапов</small></div>
            </div>
          </div>
        </div>
        <div className="fin-grid" style={{ marginTop: 18 }}>
          <div className="fin-card">
            <div className="fin-ic"><I.doc /></div>
            <h4>Товар и установка у одного исполнителя</h4>
            <p>Берёте {d.crumb.toLowerCase()} у нас: подбор, доставку и установку ведём по договору на это направление, со своими сроками и гарантией. Не нужно искать отдельного подрядчика и стыковать исполнителей между собой.</p>
          </div>
          <div className="fin-card">
            <div className="fin-ic"><I.shield /></div>
            <h4>Фиксация цены в договоре</h4>
            <p>Цена из сметы закрепляется в договоре и не вырастет, даже если подорожают материалы.</p>
            <div style={{ marginTop: "auto", paddingTop: 16 }}>
              <button className="btn btn-primary" onClick={() => onLead()}>Получить расчёт</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands({ d }) {
  const loop = [...d.brands, ...d.brands];
  return (
    <section className="section--tight" data-screen-label="Бренды-партнёры">
      <div className="wrap">
        <div className="sec-head sec-head--center" style={{ marginBottom: 28 }}>
          <span className="eyebrow">Бренды-партнёры</span>
          <h2 className="h-sec" style={{ marginTop: 16, fontSize: 32 }}>Работаем с проверенными производителями</h2>
        </div>
      </div>
      <div className="brands">
        <div className="brands-track">
          {loop.map((b, i) => <div className="brand-logo" key={b + i}>{b}</div>)}
        </div>
      </div>
    </section>
  );
}

function FAQ({ d }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="faq" data-screen-label="FAQ">
      <div className="wrap">
        <div className="sec-head sec-head--center">
          <span className="eyebrow">Вопросы и ответы</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Частые вопросы про {d.crumb.toLowerCase()}</h2>
        </div>
        <div className="faq-list">
          {d.faq.map((f, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}
                <I.chevron className="chev" style={{ width: 22, height: 22 }} />
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? 400 : 0 }}>
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoText({ d, related }) {
  return (
    <section className="section" style={{ paddingTop: 0 }} data-screen-label="SEO-текст / гид">
      <div className="wrap">
        <div className="seo-text">
          {d.seo.map((b) => (
            <React.Fragment key={b.h}>
              <h3>{b.h}</h3>
              {b.p && <p>{b.p}</p>}
              {b.list && <ul>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>}
            </React.Fragment>
          ))}
          <div className="seo-related">
            <span style={{ alignSelf: "center", color: "var(--muted)", fontSize: 14, fontWeight: 600 }}>Смежные услуги:</span>
            {related.map((r) => (
              <a key={r.label} href={r.href}><I.arrow style={{ width: 15, height: 15 }} /> {r.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyCTA({ onLead }) {
  return (
    <div className="sticky-cta">
      <a className="btn btn-ghost sc-call" href={PHONE_HREF} aria-label="Позвонить"><I.phone style={{ width: 20, height: 20 }} /></a>
      <button className="btn btn-primary" onClick={() => onLead()}>Записаться на бесплатный замер</button>
    </div>
  );
}

Object.assign(window, { Guarantees, PromoFinance, Brands, FAQ, SeoText, StickyCTA });
