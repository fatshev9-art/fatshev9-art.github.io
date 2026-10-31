
function Promos({ onLead, onCalc }) {
  return (
    <section className="section" id="promo" data-screen-label="Условия работы">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Условия работы</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Условия, которые действуют всегда</h2>
        </div>
        <div className="promo-grid">
          <div className="promo promo--main">
            <span className="promo--big-num" aria-hidden="true">0</span>
            <span className="tag">Бесплатно</span>
            <h3>Замер и смета бесплатно по Новосибирску</h3>
            <p>Замерщик приедет в удобное время, снимет размеры и посчитает точную смету. Это ни к чему вас не обязывает.</p>
            <div className="deadline"><I.checkCircle className="ic" /> Постоянное условие</div>
          </div>
          <div className="promo promo--accent">
            <span className="tag">В договоре</span>
            <h3>Цена из сметы фиксируется в договоре</h3>
            <p>Стоимость из сметы закрепляем в договоре: она не вырастет, даже если подорожают материалы.</p>
            <div className="deadline"><I.checkCircle className="ic" /> Постоянное условие</div>
          </div>
          <div className="promo promo--good">
            <span className="tag">Гарантия</span>
            <h3>Гарантия прописана в договоре</h3>
            <p>Срок гарантии на работы и на изделие фиксируем по каждому направлению. На материалы действует гарантия производителя.</p>
            <div className="deadline"><I.checkCircle className="ic" /> Постоянное условие</div>
          </div>
        </div>
        <div className="center mt-32">
          <button className="btn btn-primary btn-lg" onClick={() => onLead()}>Получить бесплатный расчёт</button>
        </div>
      </div>
    </section>
  );
}

function CalcEntry({ onCalc }) {
  return (
    <section className="section--tight" id="calc" data-screen-label="Вход в калькулятор">
      <div className="wrap">
        <div className="calc-entry">
          <div className="calc-entry-grid">
            <div className="calc-entry-text">
              <span className="eyebrow">Расчёт цены</span>
              <h2 style={{ marginTop: 16 }}>Узнайте, во сколько обойдётся ваш ремонт</h2>
              <p>Ответьте на несколько вопросов, и покажем цену «от» за пару минут. Точную смету составит замерщик, выезд бесплатный.</p>
              <ol className="calc-steps-mini">
                <li><span className="n">1</span> Выберите направление: окна, потолки или мебель</li>
                <li><span className="n">2</span> Укажите размеры и материалы</li>
                <li><span className="n">3</span> Получите примерную цену и точный расчёт после замера</li>
              </ol>
              <button className="btn btn-primary btn-lg" onClick={onCalc}>
                <I.calc style={{ width: 20, height: 20 }} /> Рассчитать стоимость
              </button>
            </div>
            <div className="calc-entry-visual">
              <div className="ring">
                <div>
                  <div className="from">примерная цена</div>
                  <div className="big">от&nbsp;12&nbsp;000&nbsp;₽</div>
                  <div className="from">за 2 минуты, без звонков</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stages() {
  return (
    <section className="section" id="stages" data-screen-label="Этапы работы">
      <div className="wrap">
        <div className="sec-head sec-head--center">
          <span className="eyebrow">Как мы работаем</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>От заявки до гарантии: 6 шагов</h2>
        </div>
        <div className="stage-track">
          {STAGES.map((s, i) => (
            <div className="stage" key={s.t}>
              <div className="num">{i + 1}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contracts() {
  const items = [
    { icon: "doc", title: "Отдельный договор на каждый вид работ", text: "На окна, потолки, двери, мебель и другие направления оформляем свой договор со всеми условиями по этому виду работ." },
    { icon: "wallet", title: "Фиксированная цена", text: "Стоимость из сметы закреплена в договоре и не меняется в процессе, без доплат «по ходу»." },
    { icon: "shield", title: "Гарантия в договоре", text: "На выполненные работы и на материалы производителя. Сроки гарантии прописаны по каждому виду работ." },
    { icon: "ruler", title: "Материалы и сроки на бумаге", text: "Какие материалы, в какой срок и с каким результатом, всё фиксируем до начала работ." },
  ];
  const byWork = [
    { icon: "window", name: "Пластиковые окна", href: "/okna",
      materials: "Тёплые профили VEKA, REHAU, KBE, двухкамерный стеклопакет",
      term: "1-2 дня на квартиру",
      warr: { work: "До 5 лет на работы", item: "до 40 лет на профиль" } },
    { icon: "balcony", name: "Балконы и лоджии", href: "/balkony",
      materials: "Алюминий Provedal или тёплый ПВХ, утепление и отделка",
      term: "От 1 дня, тёплое под ключ 3-5 дней",
      warr: { work: "До 5 лет на работы", item: "до 40 лет на профиль" } },
    { icon: "vitrage", name: "Витражи", href: "/vitrazhi",
      materials: "Цветное стекло тиффани и фьюзинг, закалка или триплекс",
      term: "10-18 дней с изготовлением",
      warr: { work: "До 5 лет на работы", item: "до 25 лет на изделие" } },
    { icon: "heat", name: "Тёплые полы", href: "/teplyy-pol",
      materials: "Кабель, маты и плёнка DEVI, Теплолюкс, трубы Rehau, Valtec",
      term: "От 1 дня, водяной под ключ 3-5 дней",
      warr: { work: "До 3 лет на работы", item: "до 10 лет на систему" } },
    { icon: "door", name: "Входные двери", href: "/dveri-vhodnye",
      materials: "Стальное полотно с терморазрывом Torex, Гардиан, надёжные замки",
      term: "1-2 дня",
      warr: { work: "До 3 лет на работы", item: "до 5 лет на дверь" } },
    { icon: "door", name: "Межкомнатные двери", href: "/dveri-mezhkomnatnye",
      materials: "Экошпон, шпон и массив Profildoors, Волховец, Софья",
      term: "1-2 дня на квартиру",
      warr: { work: "До 5 лет на работы", item: "до 10 лет на дверь" } },
    { icon: "ceiling", name: "Натяжные потолки", href: "/potolki",
      materials: "Полотна MSD, Bauf, Pongs, багет и крепёж по периметру",
      term: "Установка за 1 день",
      warr: { work: "До 5 лет на работы", item: "до 15 лет на полотно" } },
    { icon: "furniture", name: "Мебель на заказ", href: "/mebel",
      materials: "ЛДСП и МДФ KORNO, Аскор, Egger, фурнитура Blum, Hettich",
      term: "2-4 недели с изготовлением",
      warr: { work: "До 2 лет на работы", item: "до 5 лет на мебель" } },
  ];
  return (
    <section className="section" id="contracts" data-screen-label="Договор на каждый вид работ">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Договор и гарантии</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>На каждый вид работ свой договор</h2>
          <p>Каждое направление оформляем отдельным договором с фиксированной ценой, сроками и гарантией. Вы заранее знаете, за что платите и что получите.</p>
        </div>
        <div className="why-grid">
          {items.map((w) => {
            const Ic = I[w.icon];
            return (
              <div className="why-card" key={w.title}>
                <div className="why-ic">{Ic ? <Ic /> : null}</div>
                <div className="why-text">
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="contract-detail">
          <div className="cd-head">
            <h3>Что входит в договор по каждому направлению</h3>
            <p>По каждому виду работ заранее фиксируем материалы, срок и гарантию. На каждое направление свой договор, никаких доплат «по ходу». Сроки и гарантии в таблице ориентировочные: точные условия по вашему заказу прописываем в договоре.</p>
          </div>
          <div className="price-table-scroll">
            <table className="price-table cd-table">
              <thead>
                <tr>
                  <th>Направление</th>
                  <th>Материалы</th>
                  <th>Срок</th>
                  <th>Гарантия</th>
                </tr>
              </thead>
              <tbody>
                {byWork.map((d) => {
                  const Ic = I[d.icon];
                  return (
                    <tr key={d.name}>
                      <td className="cd-dir">
                        <span className="cd-dir-wrap">
                          <span className="cd-dir-ic">{Ic ? <Ic /> : null}</span>
                          <a href={d.href}>{d.name}</a>
                        </span>
                      </td>
                      <td className="cd-mat">{d.materials}</td>
                      <td className="cd-term">{d.term}</td>
                      <td className="cd-warr">
                        <span className="cd-warr-a">{d.warr.work}</span>
                        <span className="cd-warr-b">{d.warr.item}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Payment({ onLead }) {
  return (
    <section className="section" id="payment" data-screen-label="Оплата и рассрочка">
      <div className="wrap">
        <div className="sec-head sec-head--center">
          <span className="eyebrow">Оплата</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>Платите так, как удобно</h2>
          <p>Кредит, рассрочка, оплата долями или полная оплата. Условия подбираем вместе с банком-партнёром при оформлении договора.</p>
        </div>
        <div className="pay-grid">
          <div className="pay-card">
            <div className="pay-ic"><I.doc /></div>
            <h3>Кредит</h3>
            <p>Если сумму удобнее разбить на длинный срок, поможем оформить банковский кредит.</p>
            <button type="button" className="btn btn-outline pay-card-btn" onClick={() => onLead("Оплата: кредит")}>Оформить кредит</button>
          </div>
          <div className="pay-card pay-card--accent">
            <span className="tag">Без переплаты</span>
            <div className="pay-ic"><I.calc /></div>
            <h3>Рассрочка</h3>
            <p>Ремонт сейчас, оплата частями. Срок и условия рассрочки уточняем в банке при оформлении.</p>
            <button type="button" className="btn btn-primary pay-card-btn" onClick={() => onLead("Оплата: рассрочка")}>Оформить рассрочку</button>
          </div>
          <div className="pay-card">
            <div className="pay-ic"><I.clock /></div>
            <h3>Долями</h3>
            <p>Разбейте сумму на несколько платежей по мере выполнения этапов работ.</p>
            <button type="button" className="btn btn-outline pay-card-btn" onClick={() => onLead("Оплата: долями")}>Оплатить долями</button>
          </div>
          <div className="pay-card">
            <div className="pay-ic"><I.checkCircle /></div>
            <h3>Оплата</h3>
            <p>Картой, наличными или по счёту для юрлиц. Безналичный расчёт через Т-Банк.</p>
            <button type="button" className="btn btn-outline pay-card-btn" onClick={() => onLead("Оплата: полная")}>Оплатить</button>
          </div>
        </div>
        <div className="pay-bank"><I.checkCircle className="ic" /> Способ оплаты выбираете вы, мы подскажем, как оформить</div>
        <p className="pay-reassure"><I.checkCircle className="pay-reassure-ic" /> Деньги не списываются сами. Вы оставляете заявку, менеджер связывается с вами, подбирает удобный способ и всё объясняет простыми словами.</p>
        <div className="pay-cta">
          <button className="btn btn-primary btn-lg" onClick={() => onLead("Оформление договора")}>Оформить договор</button>
          <button className="btn btn-ghost btn-lg" onClick={() => onLead("Консультация по оплате")}>Консультация по оплате</button>
        </div>
      </div>
    </section>
  );
}

function About({ onLead }) {
  return (
    <section className="section" id="about" data-screen-label="О компании">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-photo">
            <img src="img/svetlana.jpg" width="379" height="447" loading="lazy"
              alt="Светлана Полежаева, руководитель компании ЛИОРА" />
          </div>
          <div className="about-text">
            <span className="eyebrow">О компании</span>
            <h2 className="h-sec" style={{ marginTop: 16 }}>Работаем с 2004 года, от казначейств до обычных квартир</h2>
            <p>Ставим окна, балконы, двери, потолки и витражи, делаем мебель на заказ. Среди наших
              объектов казначейства Новосибирска и области, администрация Новосибирской области.
              При этом основные заказчики у нас обычные люди, которым нужен в доме комфорт и уют.</p>
            <p>Работы выполняют специалисты, занятые своим делом больше 20&nbsp;лет. На каждый вид
              работ оформляем отдельный договор, поэтому вы заранее знаете, что получите.</p>
            <div className="about-sign">
              <b>Светлана Полежаева</b>
              <span>руководитель ЛИОРА</span>
            </div>
            <div className="about-cta">
              <a className="btn btn-outline" href="/o-nas">Подробнее о компании</a>
              <button type="button" className="btn btn-primary" onClick={() => onLead("Запись на замер")}>Записаться на замер</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Finishing({ onLead }) {
  const items = [
    { icon: "valve", title: "Сантехника", text: "Подключение и замена сантехники, разводка труб, установка раковин и душевых кабин. Работаем и в квартире, и в частном доме." },
    { icon: "plug", title: "Электрика", text: "Розетки, выключатели, светильники и подсветка потолков." },
    { icon: "roller", title: "Штукатурка и покраска", text: "Выравнивание стен и потолков, шпаклёвка, покраска, обои." },
    { icon: "furniture", title: "Всё на заказ", text: "Работаем по пожеланиям заказчика, включая индивидуальный дизайн. Нужна мягкая мебель, подберём и её." },
  ];
  return (
    <section className="section" id="finishing" data-screen-label="Отделочные работы">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Отделочные работы</span>
          <h2 className="h-sec" style={{ marginTop: 16 }}>От штукатурки и розеток до полного комфорта в доме</h2>
          <p>Кроме окон, потолков, дверей и мебели мы берём и отделку. С нами работают сантехники,
            электрики и мастера по штукатурке и покраске: если ремонт нужно доделать до конца,
            искать людей отдельно не придётся. Точный список работ и цену обсуждаем по вашему объекту.</p>
        </div>
        <div className="why-grid">
          {items.map((w) => {
            const Ic = I[w.icon];
            return (
              <div className="why-card" key={w.title}>
                <div className="why-ic">{Ic ? <Ic /> : null}</div>
                <div className="why-text">
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="center mt-32">
          <button className="btn btn-primary btn-lg" onClick={() => onLead("Отделочные работы")}>Обсудить объём работ</button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Promos, CalcEntry, Stages, Payment, Contracts, About, Finishing });
