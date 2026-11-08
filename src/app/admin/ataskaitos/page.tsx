"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function PajamuAtaskaita() {
  const pajamos = [
    { id: 1, data: "2026-10-01", narys: "Jonas Jonaitis", suma: 50, tipas: "Narystė" },
    { id: 2, data: "2026-10-05", narys: "Ieva Ievaitė", suma: 30, tipas: "Treniruotė" },
    { id: 3, data: "2026-10-10", narys: "Petras Petraitis", suma: 50, tipas: "Narystė" },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/admin" className={styles.backLink}>← Atgal į administravimą</Link>

        <section className={styles.panel}>
          <span className={styles.eyebrow}>ADMINISTRAVIMAS</span>
          <h1>Pajamų ataskaita</h1>
          <p>Visų klubo pajamų suvestinė.</p>

          <div className={styles.summaryCard}>
            <span>Bendros pajamos</span>
            <strong>130 €</strong>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Narys</th>
                  <th>Tipas</th>
                  <th>Suma</th>
                </tr>
              </thead>
              <tbody>
                {pajamos.map((p) => (
                  <tr key={p.id}>
                    <td>{p.data}</td>
                    <td>{p.narys}</td>
                    <td>{p.tipas}</td>
                    <td style={{ color: "#91d414", fontWeight: "bold" }}>{p.suma} €</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}