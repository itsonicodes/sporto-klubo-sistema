// src/app/treniruotes/page.tsx
import Link from "next/link";
import { programs } from "../data/programs";
import styles from "./treniruotes.module.css";

export default function TreniruotesPage() {
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
        <h1>Treniruotės ir programos</h1>
        <p className={styles.subtitle}>Pasirinkite programą ir rezervuokite jums tinkantį laiką.</p>

        <div className={styles.grid}>
          {programs.map((program) => (
            <Link href={`/treniruotes/${program.slug}`} key={program.slug} className={styles.card}>
              <h2>{program.title}</h2>
              <p className={styles.description}>{program.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.trainer}>
                  <span className={styles.avatar}>{program.initials}</span>
                  {program.trainer}
                </span>
                <span className={styles.detail}>Rinktis laiką →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}