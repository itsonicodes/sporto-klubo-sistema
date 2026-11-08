"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function NaudotojuSarasas() {
  const naudotojai = [
    { id: 1, vardas: "Jonas Jonaitis", elpastas: "jonas@test.lt", role: "Narys" },
    { id: 2, vardas: "Tomas Petrauskas", elpastas: "tomas@test.lt", role: "Treneris" },
    { id: 3, vardas: "Ieva Ievaitė", elpastas: "ieva@test.lt", role: "Narys" },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/admin" className={styles.backLink}>← Atgal į administravimą</Link>

        <section className={styles.panel}>
          <span className={styles.eyebrow}>ADMINISTRAVIMAS</span>
          <h1>Naudotojų sąrašas</h1>
          <p>Visų sistemos naudotojų peržiūra.</p>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Vardas</th>
                  <th>El. paštas</th>
                  <th>Rolė</th>
                </tr>
              </thead>
              <tbody>
                {naudotojai.map((n) => (
                  <tr key={n.id}>
                    <td>{n.id}</td>
                    <td>{n.vardas}</td>
                    <td>{n.elpastas}</td>
                    <td>{n.role}</td>
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