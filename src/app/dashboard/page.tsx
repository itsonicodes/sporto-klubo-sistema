import Link from "next/link";
import styles from "./dashboard.module.css";

const features = [
  {
    icon: "▦",
    title: "Savaitės tvarkaraštis",
    description: "Peržiūrėk užsiėmimus, trenerius ir laisvas vietas.",
    detail: "Peržiūrėti tvarkaraštį",
    href: "/tvarkarastis",
  },
  {
    icon: "↗",
    title: "Treniruotės ir programos",
    description: "Jėgos, ištvermės ir funkcinės treniruotės su treneriais.",
    detail: "Peržiūrėti treniruotes",
    href: "#treniruotės",
  },
  {
    icon: "▤",
    title: "Lanksčios narystės",
    description: "Rinkis vienkartinį apsilankymą arba mėnesio planą.",
    detail: "Planai nuo 39 €/mėn.",
    href: "#narystes",
  },
];

const workouts = [
  {
    time: "17:30–18:30",
    title: "HYROX Performance Circuit",
    description: "Didelio intensyvumo ištvermės ir jėgos treniruotė.",
    trainer: "Mantas K.",
    initials: "MK",
    places: 3,
  },
  {
    time: "18:45–19:45",
    title: "Olympic Barbell & Power",
    description: "Sunkiosios atletikos technika ir sprogstamosios jėgos ugdymas.",
    trainer: "Tomas V.",
    initials: "TV",
    places: 1,
  },
  {
    time: "20:00–21:00",
    title: "Athletic Flow & Recovery",
    description: "Sąnarių mobilumas, tempimas ir kvėpavimo pratimai.",
    trainer: "Elena L.",
    initials: "EL",
    places: 8,
  },
];

const equipment = [
  {
    icon: "◴",
    title: "Technogym ir Concept2 įranga",
    description: "Bėgimo takeliai, irklavimo treniruokliai ir laisvi svoriai.",
  },
  {
    icon: "▣",
    title: "Išmanus įėjimas visą parą",
    description: "Telefonas atstoja narystės kortelę. Apsilankyk tau patogiu metu.",
  },
  {
    icon: "✦",
    title: "Sertifikuoti treneriai",
    description: "Treneriai padės pasirinkti pratimus ir sudaryti treniruočių planą.",
  },
];

export default function DashboardPage() {
  return (
    <div className={styles.page} id="pradzia">
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a className={styles.logo} href="#pradzia">
            Gym<span>−</span>
          </a>

          <nav className={styles.nav} aria-label="Pagrindinė navigacija">
            <a className={styles.active} href="#pradzia">Pagrindinis</a>
            <a href="#treniruotes">Treniruotės</a>
            <a href="#narystes">Narystės</a>
            <a href="/tvarkarastis">Tvarkaraštis</a>
          </nav>

          <div className={styles.headerActions}>
            <Link className={styles.profile} href="/login">Prisijungti</Link>
            <Link className={styles.profile} href="/profile">Profilis</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>ϟ 24/7 išmani prieiga</p>
            <h1>GYM<span>−</span></h1>
            <h2>Valdyk savo treniruotes ir pasiekimus.</h2>
            <p className={styles.description}>
              Vienoje vietoje rask treniruočių tvarkaraštį, išsirink užsiėmimą
              ir susipažink su sporto klubo narystėmis.
            </p>
            <Link className={styles.button} href="/tvarkarastis">
              Savaitės tvarkaraštis <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`} id="treniruotes">
          <p className={styles.eyebrow}>Skaitmeninė sporto platforma</p>
          <h2>Visapusiška kontrolė tavo rankose</h2>
          <p className={styles.description}>
            Planuok treniruotes ir atrask užsiėmimus, atitinkančius tavo tikslus.
          </p>

          <div className={styles.grid}>
            {features.map(({ icon, title, description, detail, href }) => (
              <a className={styles.card} href={href} key={title}>
                <span className={styles.icon} aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className={styles.cardLink}>{detail} →</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.schedule} id="tvarkarastis">
          <div className={`${styles.container} ${styles.section}`}>
            <p className={styles.eyebrow}>Šios savaitės sesijos</p>
            <h2>Artimiausios treniruotės</h2>

            <div className={styles.grid}>
              {workouts.map(({ time, title, description, trainer, initials, places }) => (
                <article className={styles.card} key={title}>
                  <div className={styles.workoutTop}>
                    <span>{time}</span>
                    <span className={places === 1 ? styles.lowPlaces : styles.places}>
                      Laisvų vietų: {places}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className={styles.workoutFooter}>
                    <span className={styles.trainer}>
                      <span className={styles.avatar} aria-hidden="true">{initials}</span>
                      {trainer}
                    </span>
                    <Link className={styles.smallButton} href="/register">
                      Registruotis
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section}`}>
          <div className={styles.center}>
            <p className={styles.eyebrow}>Technologinis pranašumas</p>
            <h2>Sukurta maksimaliam progresui</h2>
            <p className={styles.description}>
              Profesionalūs treniruokliai ir trenerių pagalba siekiant tavo tikslų.
            </p>
          </div>

          <div className={styles.grid}>
            {equipment.map(({ icon, title, description }) => (
              <article className={styles.card} key={title}>
                <span className={styles.icon} aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.container} ${styles.membership}`} id="narystes">
          <div className={styles.banner}>
            <div>
              <p className={styles.eyebrow}>Pradėk šiandien</p>
              <h2>Pasiruošęs pasiekti savo piko formą?</h2>
              <p className={styles.description}>
                Išbandyk pirmąją treniruotę arba susikurk paskyrą.
              </p>
            </div>
            <div className={styles.bannerActions}>
              <Link className={styles.button} href="/narystes">Pasirinkti narystę</Link>
              <a className={styles.secondaryButton} href="/tvarkarastis">Tvarkaraštis</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}