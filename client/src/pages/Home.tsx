/* Style direction: Светлая финансовая редакционность — ясная фотография, ледяной голубой фон, глубокий navy, коралловые route-маркеры and a persistent bottom dock. */
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, CalendarDays, Check, CheckCircle2, CircleDollarSign, Compass, Lightbulb, MoveRight, PiggyBank, Plus, ShieldCheck, Sparkles, Target, TrendingUp, Wallet } from "lucide-react";
import { useEffect, useRef } from "react";

/* Style direction: Светлая финансовая редакционность — ясный крупный портрет, deep navy и приглушённое красное золото вместо яркого оранжевого. */
const WHATSAPP_BASE = "https://wa.me/77059824091?text=";
const whatsappLink = (service: string) =>
  `${WHATSAPP_BASE}${encodeURIComponent(`Здравствуйте, меня интересует тариф "${service}". Когда есть ближайшая запись?`)}`;

const requests = [
  "Хочу накопить/создать капитал, но нет системы",
  "Доход есть, но всё равно тревожно",
  "Тревога за будущее",
  "Хочу инвестировать, но не понимаю как начать",
  "Деньги приходят и уходят — нет контроля",
  "Не хватает уверенности и дисциплины",
  "Хочу рост дохода, но упираюсь в блоки",
];

const requestIcons = [Target, ShieldCheck, Compass, Wallet, Sparkles, CheckCircle2, TrendingUp];
const planIcons = [Target, CalendarDays, BarChart3, Sparkles];

const plans = [
  {
    number: "01",
    name: "СТРАТЕГИЯ",
    description: "Вы получаете ясность и план действий за одну встречу",
    price: "30 000 ₸",
    label: "Что будет на консультации",
    points: [
      "Разбираем вашу текущую ситуацию (точка А)",
      "Формулируем цель и сроки (точка Б)",
      "Подбираем подходящие инструменты под ваш запрос",
      "Собираем всё в финансовую стратегию",
    ],
    resultLabel: "Что вы получаете после",
    results: [
      "Готовую персональную финансовую стратегию (пошаговый план)",
      "Понимание, что делать дальше и в какой последовательности",
      "Самостоятельное движение по стратегии без лишнего хаоса",
    ],
    action: "Начать",
  },
  {
    number: "02",
    name: "ФОКУС",
    description: "Вы получаете 3 месяца сопровождения для закрепления фокуса и достижения результата",
    price: "80 000 ₸",
    label: "Что будет в сопровождении (4 встречи)",
    points: [
      "Разбираем вашу текущую ситуацию и цели (точка А → точка Б)",
      "2 финансовые встречи: стратегия, инструменты под цель, план внедрения и корректировки",
      "2 коучинговые встречи: убираем блоки, сопротивление и напряжение, чтобы не было саботажа",
      "Подстраиваем план под вашу реальность и темп, чтобы результат закрепился",
    ],
    resultLabel: "Что вы получаете после",
    results: [
      "Готовую персональную финансовую стратегию + понятные шаги",
      "Системные действия и уверенность в решениях",
      "Реальные изменения в деньгах (в зависимости от вашей цели)",
      "Внутреннюю опору: меньше тревоги, больше контроля и спокойствия",
    ],
    action: "Сформировать",
    featured: true,
  },
  {
    number: "03",
    name: "СИСТЕМА",
    description: "Вы получаете глубинные изменения и устойчивую систему за 6 месяцев",
    price: "150 000 ₸",
    label: "Включает: 8 встреч",
    points: [
      "4 финансовые встречи: стратегия + инструменты + внедрение под вашу цель",
      "4 коучинговые встречи: глубокая работа с блоками, установками и сопротивлениями, чтобы закрепить изменения",
    ],
    resultLabel: "Результат",
    results: [
      "Выстраивается финансовая опора и устойчивые привычки",
      "Становится проще держать курс и расти без эмоциональных качелей",
      "Изменения закрепляются надолго",
    ],
    action: "Оформить",
  },
  {
    number: "04",
    name: "МАСТЕР-КЛАССЫ",
    description: "Тема по запросу",
    price: "от 50 000 ₸",
    label: "Формат",
    points: ["Онлайн / Офлайн"],
    resultLabel: "Запрос",
    results: ["Содержание мастер-класса формируется под вашу тему"],
    action: "Заказать",
  },
];

const cases = [
  {
    name: "Марина",
    role: "Основатель школы английского языка",
    before: 'хороший доход, но нет "своих" денег, выгорание из-за хаоса в бизнесе',
    work: "выстроили систему планирования, делегирование и навели порядок в финансах",
    result: "за 3 месяца рост дохода на 40%, появилась стабильность и уверенность в действиях.",
    accent: "coral",
  },
  {
    name: "Алексей",
    role: "Предприниматель",
    before: "стресс на фоне недостатка денег, ссоры в семье на финансовые темы.",
    work: "выявили финансовые «утечки», составили личный и семейный бюджет, выявили причину конфликтов.",
    result: "за 6 месяцев стал свободно себя финансово ощущать, при том же доходе хватать стало на большее, отношения в семье наладились.",
    accent: "olive",
  },
  {
    name: "Айгерим",
    role: "Профессор КАЗНУ",
    before: "нет финансовой опоры, фоновая тревога",
    work: "сформировали финансовую подушку в декрет, составили инвестиционный портфель из ценных бумаг и недвижимости.",
    result: "Спокойный декрет с возможностью восстановления, уверенность в будущем, появился пассивный доход",
    accent: "blue",
  },
];

const faq = [
  ["В каком формате проходит консультация?", "Есть два формата работы: Онлайн по всему миру. Живые сессии для города Астана"],
  ["Как начать управлять финансами, если нет опыта?", "Финансовое планирование — это не просто таблица с цифрами. Это создание персональной стратегии, которая учитывает ваши цели, ценности и текущую ситуацию. Я помогаю выстроить осознанный подход к деньгам, чтобы решения были взвешенными, а цели — достижимыми."],
  ["Как выстраивается индивидуальный финансовый план?", "Это индивидуальная работа, где мы вместе анализируем вашу текущую ситуацию, цели и психологию отношений с деньгами. На основе этого я разрабатываю персональный план действий, который вы сможете уверенно реализовывать."],
  ["Как выстраивается долгосрочная финансовая стратегия?", "Работа с мной — это инвестиция в вашу финансовую грамотность и долгосрочное благополучие. Я не даю готовых схем, а учю вас самостоятельно принимать взвешенные решения, создавая прочный фундамент для будущего. Это осознанная стратегия, которая строится на ваших целях, ценностях и текущей ситуации. Я помогаю создать понятный и реалистичный план, который работает в долгосрочной перспективе и даёт вам уверенность в завтрашнем дне."],
  ["Как вы помогаете изменить финансовое мышление?", "Консультация дает разовый совет, коучинг — это системная работа над вашим мышлением и стратегией. Мы вместе строим долгосрочный план, чтобы вы сами принимали взвешенные решения. Начинаем с глубокой диагностики вашей текущей ситуации и финансовых целей. Я гарантирую экспертизу, структурированный подход и полную поддержку. Конечный результат зависит от нашего партнерства и ваших действий по плану, что и приводит к устойчивым изменениям. Подход подходит и новичкам: я помогаю выстроить здоровые финансовые привычки с нуля, избегая распространенных ошибок. Моя задача — дать вам ясность и уверенность в управлении деньгами."],
  ["Как выстраивается долгосрочная финансовая стратегия?", "Я работаю с вашей личной финансовой картиной и мышлением, чтобы вы сами могли принимать взвешенные решения. Это не разовая консультация, а построение системы, которая приведет вас к долгосрочным целям и финансовой уверенности."],
  ["Как вы помогаете изменить отношение к деньгам на психологическом уровне?", "Я помогаю вам выработать собственное финансовое мышление и стратегию, использую коучинговые механики основанные на глубокой экспертизе из банковской сферы и психологии"],
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><span className="brand-mark-orbit" /><span className="brand-mark-axis" /><span className="brand-mark-node" /><span className="brand-mark-signal" /></span>;
}

function Home() {
  const caseTrack = useRef<HTMLDivElement>(null);
  const scrollCases = (direction: number) => {
    caseTrack.current?.scrollBy({ left: direction * (caseTrack.current.clientWidth * 0.82), behavior: "smooth" });
  };

  useEffect(() => {
    const track = caseTrack.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (track.matches(":hover") || track.contains(document.activeElement)) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const nextScroll = track.scrollLeft + track.clientWidth * 0.74;
      track.scrollTo({ left: nextScroll >= maxScroll - 8 ? 0 : nextScroll, behavior: "smooth" });
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="site-shell">
      <main id="top">
        <section className="hero">
          <div className="hero-image"><video autoPlay loop muted playsInline aria-label="Фоновый видеоряд для сайта Зуляль"><source src="/media/zulyal-background-enhanced.mp4" type="video/mp4" /></video><div className="hero-shade" /></div>
          <div className="hero-copy">
            <p className="eyebrow light">Финансовый коуч · Онлайн по всему миру</p>
            <div className="hero-title-wrap"><span className="hero-index">01 / 05</span><h1>Зуляль<br /><i>Ушурова</i></h1></div>
            <p className="hero-role">дипломированный<br />финансовый коуч</p>
            <div className="hero-actions"><a className="hero-primary" href={whatsappLink("консультация")}>Обсудить мою точку А <ArrowUpRight size={15} /></a><a className="circle-cta" href="#services" aria-label="Перейти к услугам"><ArrowDownRight size={29} strokeWidth={1.4} /></a></div>
          </div>
          <div className="hero-route" aria-hidden="true"><span>точка А</span><b /><i /><b /><i /><b /><span>точка Б</span></div>
          <div className="hero-note"><span>Финансовый коучинг и личные финансы без хаоса</span><span className="scroll-label">scroll to explore <MoveRight size={15} /></span></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker"><span>01</span><span>Обо мне</span></div>
          <div className="intro-grid">
            <h2>Капитал начинается<br /><i>с ясности</i></h2>
            <figure className="intro-portrait" style={{ paddingBottom: "9px", paddingLeft: "34px" }}><img src="/media/zulyal-about-portrait-red-gold.webp" alt="Зуляль Ушурова" style={{ paddingLeft: "15px", paddingRight: "5px" }} /><figcaption>Зуляль Ушурова<br /><span>финансовый коуч</span></figcaption></figure>
            <div className="intro-copy"><p>Я обучаю инвестированию и подбору финансовых инструментов для создания капитала и помогаю клиентам выстраивать личную финансовую стратегию. Подбираю финансовые инструменты, подходящие лично Вам.</p><p>Параллельно мы укрепляем опору на себя: повышаем самооценку, убираем блоки и внутреннее сопротивление.</p><p>После работы со мной клиенты часто отмечают рост дохода, уверенность в действиях, спокойствие за будущее и ясность в финансах.</p><a className="text-link" href="#services">Мои услуги <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="visual-story section-pad" id="method">
          <div className="section-kicker"><span>02</span><span>Метод</span></div>
          <div className="story-heading"><h2>Деньги становятся<br /><i>видимыми</i></h2><p>Не ещё одна таблица, а спокойная система, которую легко увидеть, понять и встроить в свою реальность.</p></div>
          <div className="story-grid">
            <article className="story-card story-card-main">
              <div className="story-media"><img src="/media/zulyal-whole-picture-financial-overview.png" alt="Обзор личной финансовой стратегии и плана" loading="lazy" /></div>
              <div className="story-card-copy"><span className="story-tag">01 / ЯСНОСТЬ</span><h3>Сначала — увидеть всю картину целиком</h3><p>Разбираем точку А без оценок и лишнего напряжения, чтобы решения опирались на факты, а не на тревогу.</p><span className="story-arrow"><ArrowUpRight size={17} /></span></div>
            </article>
            <article className="story-card story-card-note">
              <div className="story-route-graphic" aria-label="Графический маршрут от точки А к точке Б" role="img"><svg className="story-route-map" viewBox="0 0 300 250" aria-hidden="true"><path className="route-map-road" d="M28 203 C 90 174, 70 114, 142 112 C 213 110, 198 48, 267 43" /><path className="route-map-dashes" d="M28 203 C 90 174, 70 114, 142 112 C 213 110, 198 48, 267 43" /><circle className="route-map-node route-map-node-start" cx="28" cy="203" r="10" /><circle className="route-map-node route-map-node-end" cx="267" cy="43" r="10" /><circle className="route-map-waypoint" cx="86" cy="140" r="4" /><circle className="route-map-waypoint" cx="165" cy="96" r="4" /><text className="route-map-label" x="18" y="231">ТОЧКА А</text><text className="route-map-label" x="216" y="27">ТОЧКА Б</text></svg></div>
              <div className="story-card-copy"><span className="story-tag">02 / МАРШРУТ</span><h3>План, который можно выполнить</h3><p>Каждый следующий шаг собирается под вашу цель, темп и ценности.</p></div>
            </article>
            <article className="story-card story-card-route">
              <div className="route-orbit" aria-hidden="true"><span>точка А</span><i /><b /><i /><b /><i /><span>точка Б</span></div>
              <div className="story-route-icon"><CircleDollarSign size={25} strokeWidth={1.3} /></div>
              <span className="story-tag">03 / ОПОРА</span><h3>Финансовая опора — это спокойствие</h3><p>Финансовая стратегия работает, когда возвращает вам ощущение контроля и свободы выбора.</p><a className="text-link" href="#services">Посмотреть форматы <ArrowUpRight size={16} /></a>
            </article>
            <article className="story-card story-card-consultation">
              <div className="story-media"><video autoPlay loop muted playsInline preload="metadata" aria-label="Видеоряд для карточки о переходе от вопросов к действиям"><source src="/media/zulyal-actions-story.mp4" type="video/mp4" /></video></div>
              <div className="story-overlay"><Lightbulb size={18} /><span>Вопросы превращаются<br />в действия</span></div>
            </article>
          </div>
          <div className="story-stats" aria-label="Принципы работы"><span><PiggyBank size={16} /> Личная стратегия</span><span><Wallet size={16} /> Понятные инструменты</span><span><TrendingUp size={16} /> Устойчивый рост</span></div>
        </section>

        <section className="requests section-pad" id="requests">
          <div className="section-kicker"><span>02</span><span>С какими запросами работаю</span></div>
          <div className="requests-heading"><h2>Если деньги<br /><i>тревожат</i></h2><p>Это не значит, что с вами что-то не так. Чаще всего нужен не ещё один совет, а система, которая учитывает вашу реальность.</p></div>
          <div className="request-list">{requests.map((request, index) => { const RequestIcon = requestIcons[index]; return <div className="request-row" key={request}><span className="request-no">0{index + 1}</span><span className="request-icon-wrap"><RequestIcon className="request-icon" size={18} strokeWidth={1.5} /><span>{request}</span></span><ArrowUpRight size={19} /></div>; })}</div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-kicker"><span>03</span><span>Услуги / Тарифы</span></div>
          <div className="services-heading"><h2>Выберите свой<br /><i>следующий шаг</i></h2><p>От одной встречи до устойчивой системы на шесть месяцев — мы начинаем с вашей точки А и собираем маршрут к точке Б.</p></div>
          <div className="plans">{plans.map((plan, index) => { const PlanIcon = planIcons[index]; return <article className={plan.featured ? "plan featured" : "plan"} key={plan.name}><div className="plan-top"><span className="plan-number">{plan.number}</span><span className="plan-icon"><PlanIcon size={17} strokeWidth={1.5} /></span><span className="plan-dot" /></div><div className="plan-route" aria-hidden="true"><span className={index === 0 ? "active" : ""} /><span className={index === 1 ? "active" : ""} /><span className={index === 2 ? "active" : ""} /><span className={index === 3 ? "active" : ""} /></div><h3>{plan.name}</h3><p className="plan-description">{plan.description}</p><div className="plan-price">{plan.price}</div><div className="plan-detail"><p className="detail-label">{plan.label}</p><ul>{plan.points.map((point) => <li key={point}><Check size={14} />{point}</li>)}</ul><p className="detail-label result-label">{plan.resultLabel}</p><ul>{plan.results.map((result) => <li key={result}><Check size={14} />{result}</li>)}</ul></div><a className="plan-action" href={plan.name === "МАСТЕР-КЛАССЫ" ? whatsappLink("мастер-класс") : whatsappLink(plan.name)}>{plan.action}<ArrowUpRight size={16} /></a></article>; })}</div>
        </section>

        <section className="cases section-pad" id="cases">
          <div className="section-kicker"><span>04</span><span>Кейсы клиентов</span></div>
          <div className="cases-heading"><h2>Когда стратегия<br /><i>становится жизнью</i></h2><p>Результат финансовой работы — не только цифры. Это спокойствие, опора и решения, которые становятся вашими.</p></div>
          <div className="cases-tools"><span className="cases-scroll-hint">Листайте кейсы по горизонтали</span><div className="cases-controls"><button type="button" aria-label="Предыдущий кейс" onClick={() => scrollCases(-1)}><ArrowLeft size={17} /></button><button type="button" aria-label="Следующий кейс" onClick={() => scrollCases(1)}><ArrowRight size={17} /></button></div></div>
          <div className="case-grid" ref={caseTrack} tabIndex={0} role="region" aria-label="Кейсы клиентов, горизонтальная лента">{cases.map((item, index) => <article className={`case-card ${item.accent}`} key={item.name}><div className="case-meta"><span>0{index + 1}</span><span>Кейс клиента</span></div><div className="case-path" aria-hidden="true"><span />→<span /></div><h3>{item.name}</h3><p className="case-role">{item.role}</p><div className="case-copy"><p><strong>До:</strong> {item.before}</p><p><strong>Что сделали:</strong> {item.work}</p><p><strong>Результат:</strong> {item.result}</p></div><div className="case-stamp">результат<br /><span>системных<br />изменений</span></div></article>)}</div>
        </section>

        <section className="faq section-pad" id="faq">
          <div className="section-kicker"><span>05</span><span>Частые вопросы</span></div>
          <div className="faq-grid"><h2>Всё важное —<br /><i>до начала</i></h2><div className="faq-list">{faq.map(([question, answer], index) => <details className="faq-item" key={`${question}-${index}`}><summary><span>{question}</span><Plus size={20} /></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="contact" id="contact"><div className="contact-inner"><div className="section-kicker light"><span>06</span><span>Контакты</span></div><div className="contact-route"><span>А</span><b /><b /><b /><span>Б</span></div><h2>Начните с того,<br /><i>где вы сейчас</i></h2><p>Запишитесь на консультацию — онлайн по всему миру или очно в городе Астана.</p><a className="contact-action" href={whatsappLink("консультация")}>Запись на консультацию <ArrowUpRight size={18} /></a><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /></div></section>
      </main>

      <footer className="footer"><div className="footer-brand"><a className="wordmark dark" href="#top"><Mark /><span>Зуляль<br /><em>Ушурова</em></span></a><p>Финансовый коуч и консультант<br />Онлайн по всему миру</p></div><div className="footer-nav"><a href="#about">Обо мне</a><a href="#services">Услуги / Тарифы</a><a href="#cases">Кейсы</a><a href="#faq">Частые вопросы</a><a href="#contact">Контакты</a></div><div className="footer-bottom"><span>© 2026 Зуляль Ушурова</span><span>Финансовый коучинг и личные финансы без хаоса</span><a href={whatsappLink("консультация")}>WhatsApp <ArrowUpRight size={13} /></a></div></footer>
      <nav className="bottom-menu" aria-label="Фиксированное меню страницы"><a className="bottom-menu-brand" href="#top" aria-label="На главную"><Mark /><span>Зуляль</span></a><a href="#about">Обо мне</a><a href="#services">Услуги</a><a href="#cases">Кейсы</a><a href="#faq">FAQ</a><a href="#contact">Контакты</a><a className="bottom-menu-cta" href={whatsappLink("консультация")}>Записаться <ArrowUpRight size={15} /></a></nav>
    </div>
  );
}

export default Home;
