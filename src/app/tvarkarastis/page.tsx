// src/app/tvarkarastis/page.tsx
import Link from "next/link";
import { workouts } from "../data/workouts";
import styles from "./tvarkarastis.module.css";

const days = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"];

export default function TvarkarastisPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.logo} href="/dashboard">
            Gym<span>−</span>
          </Link>
          <Link className={styles.back} href="/dashboard">
            ← Atgal į pradžią
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <h1>Savaitės tvarkaraštis</h1>
        <p className={styles.subtitle}>Pasirink treniruotę ir spausk ant jos, kad pamatytum daugiau.</p>

        {days.map((day) => {
          const dayWorkouts = workouts.filter((w) => w.day === day);
          if (dayWorkouts.length === 0) return null;

          return (
            <section key={day} className={styles.daySection}>
              <h2>{day}</h2>
              <div className={styles.grid}>
                {dayWorkouts.map((w) => (
                  <Link key={w.slug} href={`/tvarkarastis/${w.slug}`} className={styles.card}>
                    <div className={styles.cardTop}>
                      <span>{w.time}</span>
                      <span className={w.places === 1 ? styles.lowPlaces : styles.places}>
                        Laisvų vietų: {w.places}
                      </span>
                    </div>
                    <h3>{w.title}</h3>
                    <p>{w.description}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.trainer}>
                        <span className={styles.avatar}>{w.initials}</span>
                        {w.trainer}
                      </span>
                      <span className={styles.detail}>Plačiau →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}