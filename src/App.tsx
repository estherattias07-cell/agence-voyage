import { useEffect, useRef } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router';
import './App.css';

const destinations = [
  {
    slug: 'londres',
    name: 'Londres',
    country: 'Royaume-Uni',
    symbol: '🇬🇧',
    className: 'cover-londres',
    title: 'London calling!',
    description:
      'Big Ben, les marchés de Camden et les balades dans les parcs : découvrez Londres à votre rythme.',
    duration: '4 jours',
    mood: 'Culture & city break',
    highlights: [
      'Admirer Big Ben et les quais de la Tamise.',
      'Explorer les marchés et les boutiques de Camden.',
      'Faire une pause dans les grands parcs londoniens.',
    ],
    program: [
      'Jour 1 — Premiers pas à Westminster et promenade le long de la Tamise.',
      'Jour 2 — Découverte de Camden et de ses marchés.',
      'Jour 3 — Balade à Notting Hill et pause à Hyde Park.',
      'Jour 4 — Dernières découvertes à Covent Garden avant le retour.',
    ],
  },
  {
    slug: 'espagne',
    name: 'Espagne',
    country: 'Barcelone',
    symbol: '☀️',
    className: 'cover-espagne',
    title: 'Hola, les vacances !',
    description:
      'Des couleurs de Barcelone aux promenades en bord de mer, faites le plein de découvertes et de soleil.',
    duration: '7 jours',
    mood: 'Soleil & découvertes',
    highlights: [
      'Découvrir les créations de Gaudí.',
      'Flâner dans les quartiers de Barcelone.',
      'Profiter des promenades en bord de mer.',
    ],
    program: [
      'Jour 1 — Installation et première promenade dans la ville.',
      'Jour 2 — Découverte de la Sagrada Família et de son quartier.',
      'Jour 3 — Balade au parc Güell.',
      'Jour 4 — Promenade au bord de la mer.',
      'Jour 5 — Exploration du quartier gothique.',
      'Jour 6 — Journée libre pour vos découvertes préférées.',
      'Jour 7 — Dernière balade avant le retour.',
    ],
  },
  {
    slug: 'new-york',
    name: 'New York',
    country: 'États-Unis',
    symbol: '🗽',
    className: 'cover-newyork',
    title: 'À vous la Big Apple',
    description:
      'Central Park, les lumières de Manhattan et les vues sur les gratte-ciel : voyez la ville en grand.',
    duration: '6 jours',
    mood: 'Énergie & découvertes',
    highlights: [
      'Se promener au milieu de Central Park.',
      'Découvrir Manhattan et ses gratte-ciel.',
      'Traverser le pont de Brooklyn.',
    ],
    program: [
      'Jour 1 — Installation et découverte de Times Square.',
      'Jour 2 — Promenade à Central Park et découverte des environs.',
      'Jour 3 — Exploration du sud de Manhattan.',
      'Jour 4 — Balade sur le pont de Brooklyn et dans le quartier de DUMBO.',
      'Jour 5 — Découverte de la High Line et de Chelsea.',
      'Jour 6 — Derniers souvenirs avant le retour.',
    ],
  },
];

function DestinationCards() {
  return (
    <div className="destinations-grid">
      {destinations.map((destination) => (
        <article className="destination-card" key={destination.slug}>
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

              <Link to={`/destinations/${destination.slug}`}>
                Découvrir
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only">
                  {' '}la destination {destination.name}
                </span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
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
            <Link
              className="button button-dark"
              to="/destinations"
            >
              Trouver mon évasion <span aria-hidden="true">↗</span>
            </Link>

            <Link className="hero-link" to="/agence">
              Faites connaissance avec nous
            </Link>
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

            <p className="ticket-caption">
              VOTRE CARTE POUR DÉCONNECTER
            </p>

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

      <section className="destinations-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              VOTRE PROCHAINE ESCALE
            </span>
            <h2>Trois envies de partir.</h2>
          </div>

          <p>
            Choisissez une destination pour découvrir
            ses incontournables et un exemple de programme.
          </p>
        </div>

        <DestinationCards />
      </section>

      <section className="contact-section">
        <span className="eyebrow">FAISONS CONNAISSANCE</span>
        <h2>Un voyage commence par une idée.</h2>

        <p>
          Découvrez notre agence et les envies
          qui nous donnent le goût de l’ailleurs.
        </p>

        <Link className="button button-dark" to="/agence">
          Découvrir Horizon ↗
        </Link>
      </section>
    </>
  );
}

function DestinationsPage() {
  return (
    <section className="inner-page">
      <div className="page-heading">
        <span className="eyebrow">ON PART OÙ ?</span>
        <h1>Nos destinations</h1>
        <p>
          Culture, soleil ou grandes villes :
          trouvez l’escapade qui vous ressemble.
        </p>
      </div>

      <DestinationCards />

      <p className="demo-note">
        Séjours imaginaires présentés pour ce projet de formation.
        Aucune réservation n’est proposée.
      </p>
    </section>
  );
}

function DestinationPage() {
  const { slug } = useParams();
  const destination = destinations.find(
    (item) => item.slug === slug,
  );

  if (!destination) {
    return <NotFoundPage />;
  }

  return (
    <section className="inner-page">
      <Link className="back-link" to="/destinations">
        ← Toutes les destinations
      </Link>

      <div
        className={`destination-cover destination-banner ${destination.className}`}
      >
        <span className="destination-country">
          {destination.country} · {destination.duration}
        </span>

        <span className="destination-symbol" aria-hidden="true">
          {destination.symbol}
        </span>

        <h1>{destination.name}</h1>
      </div>

      <div className="page-heading">
        <span className="eyebrow">{destination.mood}</span>
        <h2>{destination.title}</h2>
        <p>{destination.description}</p>
      </div>

      <div className="details-grid">
        <article className="info-panel">
          <h2>À découvrir sur place</h2>

          <ul className="highlight-list">
            {destination.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>

        <article className="info-panel">
          <h2>Votre programme imaginé</h2>

          <ol className="program-list">
            {destination.program.map((day) => (
              <li key={day}>{day}</li>
            ))}
          </ol>
        </article>
      </div>

      <div className="page-callout">
        <h2>Envie d’en savoir plus sur Horizon ?</h2>
        <p>Retrouvez les coordonnées de notre agence fictive.</p>

        <Link className="button button-dark" to="/contact">
          Voir les coordonnées ↗
        </Link>
      </div>

      <p className="demo-note">
        Programme donné à titre d’illustration :
        il ne constitue pas une offre de voyage.
      </p>
    </section>
  );
}

function AgencyPage() {
  return (
    <section className="inner-page">
      <div className="page-heading">
        <span className="eyebrow">L’ESPRIT HORIZON</span>
        <h1>Notre agence</h1>

        <p>
          Nous imaginons le voyage comme une parenthèse :
          du temps pour découvrir, ralentir et repartir
          avec de nouveaux souvenirs.
        </p>
      </div>

      <div className="agency-values">
        <article>
          <span className="value-number">01</span>
          <h3>Vos envies d’abord</h3>
          <p>
            Une grande ville, quelques jours au soleil ou une
            escapade culturelle : chaque voyage commence
            par ce qui vous fait envie.
          </p>
        </article>

        <article>
          <span className="value-number">02</span>
          <h3>Le goût de la découverte</h3>
          <p>
            Des lieux incontournables aux promenades
            improvisées, nous aimons les voyages
            qui laissent une place à la curiosité.
          </p>
        </article>

        <article>
          <span className="value-number">03</span>
          <h3>Chacun son rythme</h3>
          <p>
            Explorer toute la journée ou prendre son temps :
            une belle échappée doit avant tout
            vous ressembler.
          </p>
        </article>
      </div>

      <div className="page-callout">
        <h2>Notre terrain de jeu ? L’ailleurs.</h2>
        <p>
          Londres, Barcelone et New York :
          trois ambiances pour commencer à rêver.
        </p>

        <Link className="button button-dark" to="/destinations">
          Explorer les destinations ↗
        </Link>
      </div>

      <p className="demo-note">
        Horizon est une agence fictive créée
        pour apprendre le développement web et le déploiement.
      </p>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="inner-page">
      <div className="page-heading">
        <span className="eyebrow">UN PETIT BONJOUR ?</span>
        <h1>Contact</h1>
        <p>Les coordonnées de notre agence imaginaire.</p>
      </div>

      <div className="contact-grid">
        <article className="info-panel">
          <span className="contact-icon" aria-hidden="true">✉️</span>
          <h2>E-mail</h2>
          <p>bonjour@horizon.example</p>
          <small>Adresse fictive, aucun envoi possible.</small>
        </article>

        <article className="info-panel">
          <span className="contact-icon" aria-hidden="true">☎️</span>
          <h2>Téléphone</h2>
          <p>01 99 00 00 00</p>
          <small>Numéro d’exemple, ne pas appeler.</small>
        </article>

        <article className="info-panel">
          <span className="contact-icon" aria-hidden="true">📍</span>
          <h2>Adresse</h2>
          <p>12 avenue des Évasions</p>
          <p>Ville Imaginaire, France</p>
          <small>Adresse inventée pour la maquette.</small>
        </article>

        <article className="info-panel">
          <span className="contact-icon" aria-hidden="true">🕒</span>
          <h2>Horaires</h2>
          <p>Du lundi au vendredi : 9 h – 18 h</p>
          <p>Samedi et dimanche : fermé</p>
          <small>Horaires fictifs.</small>
        </article>
      </div>

      <div className="page-callout">
        <h2>En attendant, faites le plein d’idées.</h2>

        <Link className="button button-dark" to="/destinations">
          Découvrir les voyages ↗
        </Link>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="inner-page page-heading">
      <span className="eyebrow">PETIT DÉTOUR IMPRÉVU</span>
      <h1>Page introuvable</h1>
      <p>Cette destination n’existe pas sur notre site.</p>

      <Link className="button button-dark" to="/">
        Retour à l’accueil
      </Link>
    </section>
  );
}

function SiteLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const pageNames: Record<string, string> = {
      '/': 'Accueil',
      '/destinations': 'Destinations',
      '/agence': 'Notre agence',
      '/contact': 'Contact',
    };

    const destination = destinations.find(
      (item) => pathname === `/destinations/${item.slug}`,
    );

    document.title =
      `${destination?.name ?? pageNames[pathname] ?? 'Page introuvable'} — Horizon Voyages`;

    if (previousPath.current !== pathname) {
      mainRef.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <Link
          className="brand"
          to="/"
          aria-label="Horizon Voyages — Accueil"
        >
          <span className="brand-icon" aria-hidden="true">↗</span>

          <span>
            horizon<span className="brand-dot">.</span>
            <small>VOYAGES & BELLES ÉCHAPPÉES</small>
          </span>
        </Link>

        <nav aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/destinations">Destinations</NavLink>
          <NavLink to="/agence">Notre agence</NavLink>
          <NavLink className="nav-contact" to="/contact">
            Contact ↗
          </NavLink>
        </nav>
      </header>

      <main ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route
            path="/destinations/:slug"
            element={<DestinationPage />}
          />
          <Route path="/agence" element={<AgencyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <Link className="footer-brand" to="/">horizon.</Link>

        <nav className="footer-links" aria-label="Navigation de pied de page">
          <Link to="/destinations">Destinations</Link>
          <Link to="/agence">Notre agence</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <span>Projet de formation · Agence et coordonnées fictives</span>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
