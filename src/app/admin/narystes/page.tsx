
"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export default function CreateMembershipPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("1 mėnuo");
  const [description, setDescription] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Narystė „${name}“ sukurta (demonstracija).`);
    setName("");
    setPrice("");
    setDuration("1 mėnuo");
    setDescription("");
  }

  return (
    <main className={styles.page}>

      <div className={styles.container}>
        <Link href="/admin" className={styles.backLink}>← Atgal į administravimą</Link>

        <section className={styles.panel}>
          <span className={styles.eyebrow}>ADMINISTRAVIMAS</span>
          <h1>Naujos narystės kūrimas</h1>
          <p>Užpildykite informaciją apie naują narystės planą.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Narystės pavadinimas</label>
            <input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Pvz. Premium" required />

            <label htmlFor="price">Kaina (€)</label>
            <input id="price" type="number" min="0.01" step="0.01" value={price} onChange={e => setPrice(e.target.value)} placeholder="Pvz. 49" required />

            <label htmlFor="duration">Trukmė</label>
            <select id="duration" value={duration} onChange={e => setDuration(e.target.value)}>
              <option>1 mėnuo</option>
              <option>3 mėnesiai</option>
              <option>6 mėnesiai</option>
              <option>12 mėnesių</option>
            </select>

            <label htmlFor="description">Aprašymas</label>
            <textarea id="description" rows={4} value={description} onChange={e => setDescription(e.target.value)} placeholder="Narystės aprašymas..." />

            <button type="submit">Sukurti narystę</button>
          </form>
        </section>
      </div>
    </main>
  );
}
