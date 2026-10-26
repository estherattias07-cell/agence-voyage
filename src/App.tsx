import './App.css';

const destinations = [
  {
    name: 'Londres',
    country: 'Royaume-Uni',
    symbol: '🇬🇧',
    className: 'cover-londres',
    title: 'London calling!',
    description:
      'Big Ben, les marchés de Camden et les balades dans les parcs : découvrez Londres à votre rythme.',
    duration: '4 jours',
    mood: 'Culture & city break',
  },
  {
    name: 'Espagne',
    country: 'Barcelone',
    symbol: '☀️',
    className: 'cover-espagne',
    title: 'Hola, les vacances !',
    description:
      'Des couleurs de Barcelone aux promenades en bord de mer, faites le plein de découvertes et de soleil.',
    duration: '7 jours',
    mood: 'Soleil & découvertes',
  },
  {
    name: 'New York',
    country: 'États-Unis',
    symbol: '🗽',
    className: 'cover-newyork',
    title: 'À vous la Big Apple',
    description:
      'Central Park, les lumières de Manhattan et les vues sur les gratte-ciel : voyez la ville en grand.',
    duration: '6 jours',
    mood: 'Énergie & grands espaces',
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a
          className="brand"
          href="#accueil"
          aria-label="Horizon Voyages — Accueil"
        >
          <span className="brand-icon" aria-hidden="true">
            ↗
          </span>

          <span>
            horizon<span className="brand-dot">.</span>
            <small>VOYAGES & BELLES ÉCHAPPÉES</small>
          </span>
        </a>

        <nav aria-label="Navigation principale">
          <a href="#destinations">Destinations</a>
          <a href="#agence">L’agence</a>
          <a className="nav-contact" href="#contact">
            On part où ?
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <span className="eyebrow">
              LES SOUVENIRS COMMENCENT ICI
            </span>

            <h1>
              Moins de routine.
              <br />
              <span>Plus d’aventure.</span>
            </h1>

            <p className="hero-description">
              Une escapade à Londres, du soleil en Espagne
              ou des étoiles plein les yeux à New York :
              votre prochaine histoire commence avec Horizon.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#destinations">
                Trouver mon évasion <span aria-hidden="true">↗</span>
              </a>

              <a className="hero-link" href="#agence">
                Faites connaissance avec nous
              </a>
            </div>

            <p className="hero-note">
              Trois destinations. Mille façons de s’évader.
            </p>
          </div>

          <div className="hero-art">
            <span className="sun-decoration" aria-hidden="true">
              ☀
            </span>

            <span className="floating-label">
              Prochain arrêt : ailleurs !
            </span>

            <div className="boarding-pass">
              <div className="ticket-top">
                <span>HORIZON AIR OF ADVENTURE</span>
                <span aria-hidden="true">✈</span>
              </div>

              <p className="ticket-caption">VOTRE CARTE POUR DÉCONNECTER</p>

              <div className="ticket-route">
                <div>
                  <strong>ICI</strong>
                  <span>Le quotidien</span>
                </div>

                <span className="ticket-plane" aria-hidden="true">
                  ✈
                </span>

                <div>
                  <strong>WOW</strong>
                  <span>De nouveaux souvenirs</span>
                </div>
              </div>

              <div className="ticket-details">
                <div>
                  <span>DESTINATION</span>
                  <strong>À vous de choisir</strong>
                </div>

                <div>
                  <span>BAGAGE CONSEILLÉ</span>
                  <strong>Votre curiosité</strong>
                </div>
              </div>

              <div className="ticket-bottom">
                <span>LONDRES · ESPAGNE · NEW YORK</span>
                <div className="ticket-barcode" aria-hidden="true" />
              </div>
            </div>

            <span className="adventure-stamp">
              BONJOUR
              <strong>l’ailleurs !</strong>
              <span aria-hidden="true">✦</span>
            </span>
          </div>
        </section>

        <div className="travel-ribbon" aria-hidden="true">
          <span>✦ Changer d’air</span>
          <span>✦ Explorer</span>
          <span>✦ S’émerveiller</span>
          <span>✦ Recommencer</span>
        </div>

        <section className="destinations-section" id="destinations">
          <div className="section-heading">
            <div>
              <span className="eyebrow">LE PLUS DUR, C’EST DE CHOISIR</span>
              <h2>Votre prochaine parenthèse.</h2>
            </div>

            <p>
              Plutôt grande ville, bord de mer ou skyline ?
              Découvrez nos idées d’escapades.
            </p>
          </div>

          <div className="destinations-grid">
            {destinations.map((destination) => (
              <article
                className="destination-card"
                key={destination.name}
              >
                <div
                  className={`destination-cover ${destination.className}`}
                >
                  <span className="destination-country">
                    {destination.country}
                  </span>

                  <span className="destination-symbol" aria-hidden="true">
                    {destination.symbol}
                  </span>

                  <h3>{destination.name}</h3>
                </div>

                <div className="destination-content">
                  <span className="destination-mood">
                    {destination.mood}
                  </span>

                  <h4>{destination.title}</h4>

                  <p>{destination.description}</p>

                  <div className="destination-bottom">
                    <span className="stay-duration">
                      Idée de séjour · {destination.duration}
                    </span>

                    <a href="#contact">
                      Parlons-en
                      <span aria-hidden="true"> ↗</span>
                      <span className="sr-only">
                        {' '}pour {destination.name}
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="demo-note">
            Destinations et durées présentées à titre d’exemple
            pour ce site de démonstration.
          </p>
        </section>

        <section className="agency-section" id="agence">
          <div className="agency-intro">
            <span className="eyebrow">L’ESPRIT HORIZON</span>
            <h2>Les belles échappées commencent par une rencontre.</h2>
            <p>
              Notre idée du voyage ? Prendre le temps de comprendre
              vos envies pour imaginer une escapade qui vous ressemble.
            </p>
          </div>

          <div className="agency-values">
            <article>
              <span className="value-number">01</span>
              <h3>Vos envies d’abord</h3>
              <p>
                Une ville à explorer, une pause au soleil ou un
                premier grand voyage : chaque projet a son point de départ.
              </p>
            </article>

            <article>
              <span className="value-number">02</span>
              <h3>Le goût de la découverte</h3>
              <p>
                Les lieux incontournables et les petites
                découvertes qui rendent une escapade mémorable.
              </p>
            </article>

            <article>
              <span className="value-number">03</span>
              <h3>Un projet à imaginer ensemble</h3>
              <p>
                Parlons de votre rythme, de vos dates et de vos
                idées pour dessiner votre prochaine aventure.
              </p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">ET SI ON EN PARLAIT ?</span>
          <h2>
            Votre prochaine histoire
            <br />
            commence par un bonjour.
          </h2>

          <p>
            Dites-nous où vous rêvez de partir.
            On imagine la suite ensemble.
          </p>

          <a
            className="button button-dark"
            href="mailto:contact@example.com?subject=Mon%20projet%20de%20voyage"
          >
            Écrire à l’agence <span aria-hidden="true">↗</span>
          </a>

          <small>
            Site de démonstration · Adresse e-mail d’exemple
          </small>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#accueil">
          horizon.
        </a>

        <p>Un peu plus loin du quotidien.</p>

        <span>Projet de formation · Agence fictive</span>
      </footer>
    </>
  );
}

export default App;
