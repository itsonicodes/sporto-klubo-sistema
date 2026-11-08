"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function LankomumoAtaskaita() {
  const statistika = [
    { menuo: "Sausis", apsilanke: 120, nauji: 15 },
    { menuo: "Vasaris", apsilanke: 145, nauji: 20 },
    { menuo: "Kovas", apsilanke: 132, nauji: 10 },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/admin" className={styles.backLink}>← Atgal į administravimą</Link>

        <section className={styles.panel}>
          <span className={styles.eyebrow}>ADMINISTRAVIMAS</span>
          <h1>Lankomumo ataskaita</h1>
          <p>Klubo narių lankomumo statistika pagal mėnesius.</p>

          <div className={styles.grid}>
            {statistika.map((s, index) => (
              <div key={index} className={styles.card}>
                <h3>{s.menuo}</h3>
                <div className={styles.row}>
                  <span>Apsilankė:</span>
                  <strong>{s.apsilanke}</strong>
                </div>
                <div className={styles.row}>
                  <span>Nauji nariai:</span>
                  <strong>{s.nauji}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}