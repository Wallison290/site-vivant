const links = {
  hero: "https://wa.me/5587996623576?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vivant%20Est%C3%A9tica%20e%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o.&utm_source=site&utm_medium=botao&utm_campaign=hero",
  treatments:
    "https://wa.me/5587996623576?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vivant%20Est%C3%A9tica%2C%20vi%20os%20tratamentos%20e%20quero%20saber%20qual%20%C3%A9%20o%20mais%20indicado%20para%20mim.&utm_source=site&utm_medium=botao&utm_campaign=tratamentos",
  differentials:
    "https://wa.me/5587996623576?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vivant%20Est%C3%A9tica%20e%20gostaria%20de%20conversar%20com%20a%20equipe%20sobre%20os%20tratamentos.&utm_source=site&utm_medium=botao&utm_campaign=diferenciais",
  results:
    "https://wa.me/5587996623576?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vivant%20Est%C3%A9tica%2C%20vi%20os%20resultados%20e%20gostaria%20de%20avaliar%20o%20meu%20caso.&utm_source=site&utm_medium=botao&utm_campaign=resultados",
  testimonials:
    "https://wa.me/5587996623576?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vivant%20Est%C3%A9tica%20e%20quero%20tirar%20uma%20d%C3%BAvida%20antes%20de%20agendar.&utm_source=site&utm_medium=botao&utm_campaign=depoimentos",
  schedule:
    "https://wa.me/5587996623576?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vivant%20Est%C3%A9tica%20e%20quero%20agendar%20minha%20avalia%C3%A7%C3%A3o.%20Quais%20hor%C3%A1rios%20est%C3%A3o%20dispon%C3%ADveis%3F&utm_source=site&utm_medium=botao&utm_campaign=agendamento",
  contact:
    "https://wa.me/5587996623576?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vivant%20Est%C3%A9tica%20e%20gostaria%20de%20falar%20com%20a%20equipe.&utm_source=site&utm_medium=botao&utm_campaign=contato",
  phone: "tel:+5587996623576",
  instagram: "https://instagram.com/vivantestetica",
  map: "https://www.google.com/maps/search/?api=1&query=R.%20Irm%C3%A3%20Jer%C3%B4nima%2C%20234%20-%20Centro%2C%20Petrolina%20-%20PE%2C%2056304-130",
};

const treatments = [
  {
    number: "01",
    title: "Estética facial",
    description: "Cuidado de pele com estratégia, precisão e naturalidade.",
    items: [
      "Rejuvenescimento e harmonização",
      "Melasma, manchas e peeling",
      "Cicatrizes de acne",
      "Colágeno e bioestimulação",
    ],
    interest: "facial",
  },
  {
    number: "02",
    title: "Estética corporal",
    description: "Protocolos personalizados para o seu corpo e sua rotina.",
    items: [
      "Eletroshape e hipertrofia",
      "Gordura localizada e medidas",
      "Lipedema",
      "Flacidez corporal",
    ],
    interest: "corporal",
  },
  {
    number: "03",
    title: "Cuidado capilar",
    description: "Tratamentos que olham para a causa e a saúde dos fios.",
    items: [
      "Linha Renovcapi",
      "Protocolos contra queda",
      "Revitalização do couro cabeludo",
      "Acompanhamento da evolução",
    ],
    interest: "capilar",
  },
  {
    number: "04",
    title: "Cuidados complementares",
    description: "Detalhes que completam uma rotina de autocuidado.",
    items: [
      "Design de sobrancelhas",
      "Avaliação personalizada",
      "Acompanhamento nutricional",
      "Plano de cuidados integrado",
    ],
    interest: "complementar",
  },
];

const differentials = [
  {
    number: "01",
    title: "Escuta antes de indicar",
    text: "Seu objetivo, sua rotina e suas necessidades orientam cada decisão.",
  },
  {
    number: "02",
    title: "Tecnologia com propósito",
    text: "Recursos avançados escolhidos para potencializar o tratamento certo.",
  },
  {
    number: "03",
    title: "Naturalidade em primeiro lugar",
    text: "Resultados que valorizam seus traços e respeitam sua individualidade.",
  },
  {
    number: "04",
    title: "Acompanhamento próximo",
    text: "Você entende cada etapa e conta com uma equipe presente na evolução.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Vivant Estética",
  image: "/assets/ubia-torres-retrato.png",
  telephone: "+55 87 99662-3576",
  url: "https://vivant-estetica.sites.openai.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Irmã Jerônima, 234 - Centro",
    addressLocality: "Petrolina",
    addressRegion: "PE",
    postalCode: "56304-130",
    addressCountry: "BR",
  },
  sameAs: ["https://instagram.com/vivantestetica"],
  openingHours: ["Mo-Fr 09:00-12:00", "Mo-Fr 14:00-19:00", "Sa 09:00-12:00"],
};

function SectionWave({ fill = "#ffffff" }: { fill?: string }) {
  return (
    <div className="section-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none">
        <path
          d="M0,64 C240,110 480,8 720,32 C960,56 1200,104 1440,56 L1440,110 L0,110 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#inicio" aria-label="Vivant Estética — início">
            <img
              src="/assets/logo-vivant-estetica.png"
              alt="Vivant Estética"
              width="250"
              height="87"
            />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#tratamentos">Tratamentos</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#resultados">Resultados</a>
            <a href="#ubia">Quem cuida</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            className="nav-cta"
            href={links.hero}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_whatsapp_hero"
          >
            Agendar avaliação
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Navegação mobile">
              <a href="#tratamentos">Tratamentos</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#resultados">Resultados</a>
              <a href="#ubia">Quem cuida</a>
              <a href="#contato">Contato</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img
            className="hero-image"
            src="/assets/ubia-torres-retrato.png"
            alt=""
            aria-hidden="true"
            width="1155"
            height="1362"
          />
          <div className="hero-overlay" />
          <div className="hero-pattern" aria-hidden="true" />

          <div className="container hero-content">
            <p className="eyebrow eyebrow-light">Estética avançada em Petrolina</p>
            <h1>
              Realce sua beleza com <em>naturalidade.</em>
            </h1>
            <p className="hero-copy">
              Atendimento personalizado, tecnologia avançada e resultados que
              respeitam quem você é.
            </p>
            <div className="hero-actions">
              <a
                className="button button-accent"
                href={links.hero}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp_hero"
              >
                Falar no WhatsApp
              </a>
              <a className="text-link text-link-light" href="#tratamentos">
                Ver tratamentos <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="microcopy microcopy-light">
              Atendimento presencial com horário marcado.
            </p>

            <div className="hero-proof" aria-label="Diferenciais principais">
              <div>
                <strong>Individual</strong>
                <span>Avaliação personalizada</span>
              </div>
              <div>
                <strong>Avançada</strong>
                <span>Tecnologia com propósito</span>
              </div>
              <div>
                <strong>Natural</strong>
                <span>Você em sua melhor versão</span>
              </div>
            </div>
          </div>

          <SectionWave />
        </section>

        <section className="section treatments" id="tratamentos">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">Tratamentos em destaque</p>
                <h2>
                  Cuidados pensados para cada <span>fase de você.</span>
                </h2>
              </div>
              <p>
                Da avaliação ao acompanhamento, cada protocolo começa por uma
                conversa e evolui com você.
              </p>
            </div>

            <div className="treatment-grid">
              {treatments.map((item) => (
                <article className="treatment-card reveal" key={item.title}>
                  <div className="card-top">
                    <span className="card-number">{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.items.map((procedure) => (
                      <li key={procedure}>{procedure}</li>
                    ))}
                  </ul>
                  <a
                    href={links.treatments}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="click_whatsapp_tratamentos"
                    data-interest={item.interest}
                  >
                    Quero saber mais
                  </a>
                </article>
              ))}
            </div>

            <div className="section-cta reveal">
              <a
                className="button button-primary"
                href={links.treatments}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp_tratamentos"
              >
                Encontrar o tratamento ideal
              </a>
              <span>Conte seu objetivo e receba uma orientação inicial.</span>
            </div>
          </div>
        </section>

        <section className="image-band" id="diferenciais">
          <img
            src="/assets/ubia-torres-maos.png"
            alt=""
            aria-hidden="true"
            width="1123"
            height="1401"
          />
          <div className="image-band-overlay" />
          <div className="container image-band-content">
            <div className="section-heading section-heading-light reveal">
              <div>
                <p className="eyebrow eyebrow-light">Por que escolher a Vivant</p>
                <h2>
                  Tecnologia, cuidado e resultados sem perder a{" "}
                  <span>naturalidade.</span>
                </h2>
              </div>
              <p>
                Aqui, estética avançada e atendimento humano caminham juntos.
              </p>
            </div>

            <div className="differential-grid">
              {differentials.map((item) => (
                <article className="differential-item reveal" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <a
              className="button button-accent reveal"
              href={links.differentials}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_whatsapp_diferenciais"
            >
              Conversar com a equipe
            </a>
          </div>

          <SectionWave />
        </section>

        <section className="section results" id="resultados">
          <div className="container results-grid">
            <div className="results-visual reveal">
              <img
                src="/assets/ubia-torres-equipamentos.png"
                alt="Úbia Torres ao lado de equipamentos de estética avançada"
                width="1122"
                height="1402"
                loading="lazy"
              />
              <div className="results-badge">
                <strong>Naturalidade</strong>
                <span>é parte do resultado</span>
              </div>
            </div>

            <div className="results-content reveal">
              <p className="eyebrow">Resultados — antes &amp; depois</p>
              <h2>
                Resultados reais, respeitando a{" "}
                <span>individualidade.</span>
              </h2>
              <p className="lead">
                Nenhuma transformação começa igual. Por isso, cada caso passa
                por avaliação, planejamento e acompanhamento próximo.
              </p>

              <div className="result-steps">
                <div>
                  <span>01</span>
                  <div>
                    <strong>Avaliação</strong>
                    <p>Entendemos seu objetivo e o ponto de partida.</p>
                  </div>
                </div>
                <div>
                  <span>02</span>
                  <div>
                    <strong>Plano individual</strong>
                    <p>Indicamos o protocolo que faz sentido para você.</p>
                  </div>
                </div>
                <div>
                  <span>03</span>
                  <div>
                    <strong>Evolução acompanhada</strong>
                    <p>Ajustamos o cuidado conforme a sua resposta.</p>
                  </div>
                </div>
              </div>

              <p className="result-note">
                Casos reais e comparativos de evolução são apresentados pela
                equipe mediante autorização. Os resultados variam conforme cada
                pessoa.
              </p>
              <a
                className="button button-primary"
                href={links.results}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp_resultados"
              >
                Quero avaliar meu caso
              </a>
            </div>
          </div>
        </section>

        <section className="section about" id="ubia">
          <div className="container about-grid">
            <div className="about-content reveal">
              <p className="eyebrow">Quem cuida de você</p>
              <h2>Úbia Torres</h2>
              <p className="about-role">
                À frente da Vivant Estética, unindo conhecimento, tecnologia e
                acolhimento.
              </p>
              <p>
                Reconhecida na mídia local, Úbia construiu uma forma de atender
                que começa pela escuta. Seu cuidado busca resultados
                equilibrados, sem fórmulas prontas e sem apagar a
                individualidade de cada pessoa.
              </p>
              <p>
                Na Vivant, você encontra proximidade para falar sobre o que
                incomoda e clareza para entender cada indicação.
              </p>
              <a
                className="text-link"
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_instagram"
              >
                Conhecer a Vivant no Instagram
              </a>
            </div>

            <figure className="about-photo reveal">
              <img
                src="/assets/ubia-torres-apontando.png"
                alt="Úbia Torres, profissional à frente da Vivant Estética"
                width="1123"
                height="1400"
                loading="lazy"
              />
              <figcaption>
                <strong>Cuidado com intenção.</strong>
                <span>Resultados com identidade.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section experience" id="depoimentos">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">Experiência Vivant</p>
                <h2>
                  Cuidado que você sente desde a{" "}
                  <span>primeira conversa.</span>
                </h2>
              </div>
              <p>
                A confiança nasce quando você se sente ouvida, entende o plano e
                participa de cada etapa.
              </p>
            </div>

            <div className="experience-grid">
              <article className="experience-feature reveal">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <h3>Você não recebe um protocolo pronto.</h3>
                <p>
                  Recebe uma orientação construída para seu momento, seu corpo e
                  seus objetivos.
                </p>
              </article>
              <div className="experience-points">
                <article className="reveal">
                  <span>01</span>
                  <div>
                    <h3>Clareza na indicação</h3>
                    <p>Você entende o porquê de cada escolha.</p>
                  </div>
                </article>
                <article className="reveal">
                  <span>02</span>
                  <div>
                    <h3>Ambiente acolhedor</h3>
                    <p>Uma experiência leve, segura e sem julgamentos.</p>
                  </div>
                </article>
                <article className="reveal">
                  <span>03</span>
                  <div>
                    <h3>Presença na evolução</h3>
                    <p>A equipe acompanha e orienta cada fase.</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="section-cta reveal">
              <a
                className="button button-outline"
                href={links.testimonials}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp_depoimentos"
              >
                Tirar uma dúvida
              </a>
              <span>Fale com a equipe sem compromisso.</span>
            </div>
          </div>
        </section>

        <section className="schedule" id="agendamento">
          <div className="schedule-shape schedule-shape-one" aria-hidden="true" />
          <div className="schedule-shape schedule-shape-two" aria-hidden="true" />
          <div className="container schedule-grid">
            <div className="schedule-heading reveal">
              <p className="eyebrow eyebrow-light">Como agendar</p>
              <h2>
                Seu primeiro passo começa com uma <span>conversa.</span>
              </h2>
            </div>
            <div className="schedule-flow reveal">
              <div className="schedule-step">
                <span>01</span>
                <div>
                  <h3>Chame no WhatsApp</h3>
                  <p>Você fala diretamente com a equipe.</p>
                </div>
              </div>
              <div className="schedule-step">
                <span>02</span>
                <div>
                  <h3>Conte seu objetivo</h3>
                  <p>Compartilhe o que deseja cuidar ou transformar.</p>
                </div>
              </div>
              <div className="schedule-step">
                <span>03</span>
                <div>
                  <h3>Escolha seu horário</h3>
                  <p>Combine a avaliação presencial em Petrolina.</p>
                </div>
              </div>
              <a
                className="button button-accent button-wide"
                href={links.schedule}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp_agendamento"
              >
                Quero agendar minha avaliação
              </a>
              <p className="microcopy microcopy-light">
                Escolha o melhor horário diretamente pelo WhatsApp.
              </p>
            </div>
          </div>

          <SectionWave />
        </section>

        <section className="section contact" id="contato">
          <div className="container contact-grid">
            <div className="contact-content reveal">
              <p className="eyebrow">Localização e contato</p>
              <h2>A Vivant está no coração de Petrolina.</h2>

              <div className="contact-block">
                <span>Endereço</span>
                <strong>
                  R. Irmã Jerônima, 234 — Centro
                  <br />
                  Petrolina — PE, 56304-130
                </strong>
              </div>

              <div className="contact-block">
                <span>Horários</span>
                <p>Segunda a sexta: 9h–12h e 14h–19h</p>
                <p>Sábado: 9h–12h</p>
                <p>Domingo: fechado</p>
              </div>

              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={links.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_whatsapp_contato"
                >
                  Agendar pelo WhatsApp
                </a>
                <a
                  className="text-link"
                  href={links.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_como_chegar"
                >
                  Como chegar
                </a>
              </div>
            </div>

            <div className="map-shell reveal">
              <iframe
                title="Mapa da Vivant Estética em Petrolina"
                src="https://www.google.com/maps?q=R.%20Irm%C3%A3%20Jer%C3%B4nima%2C%20234%20-%20Centro%2C%20Petrolina%20-%20PE%2C%2056304-130&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-card">
                <span>Atendimento presencial</span>
                <strong>Agende antes de vir.</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <img
              src="/assets/logo-vivant-estetica.png"
              alt="Vivant Estética"
              width="250"
              height="87"
            />
            <p>Estética avançada com cuidado, tecnologia e naturalidade.</p>
          </div>

          <div className="footer-links">
            <span>Navegue</span>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#resultados">Resultados</a>
            <a href="#ubia">Quem cuida</a>
          </div>

          <div className="footer-links">
            <span>Fale com a Vivant</span>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_instagram"
            >
              @vivantestetica
            </a>
            <a href={links.phone} data-track="click_telefone">
              (87) 99662-3576
            </a>
            <a
              href={links.map}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_como_chegar"
            >
              Centro, Petrolina — PE
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Vivant Estética.</span>
          <span>Atendimento com agendamento.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={links.schedule}
        target="_blank"
        rel="noopener noreferrer"
        data-track="click_whatsapp_floating"
        aria-label="Agendar avaliação pelo WhatsApp"
      >
        <span className="chat-icon" aria-hidden="true">
          ◌
        </span>
        Agendar
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('click', function (event) {
              var target = event.target.closest('[data-track]');
              if (!target) return;
              window.dataLayer = window.dataLayer || [];
              var payload = { event: target.dataset.track };
              if (target.dataset.interest) {
                payload.tratamento_interesse = target.dataset.interest;
              }
              window.dataLayer.push(payload);
            });
          `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var items = document.querySelectorAll('.reveal');
              var reduceMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
              ).matches;
              if (reduceMotion || !('IntersectionObserver' in window)) {
                items.forEach(function (el) {
                  el.classList.add('is-visible');
                });
                return;
              }
              var observer = new IntersectionObserver(
                function (entries) {
                  entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      observer.unobserve(entry.target);
                    }
                  });
                },
                { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
              );
              items.forEach(function (el) {
                observer.observe(el);
              });
            })();
          `,
        }}
      />
    </>
  );
}
