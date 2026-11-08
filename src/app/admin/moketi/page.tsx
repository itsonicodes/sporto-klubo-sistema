
"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export default function TrainerPaymentsPage() {
  const [trainer, setTrainer] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Mokėjimas treneriui ${trainer}: €${amount}`);
    setTrainer("");
    setAmount("");
    setDate("");
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/admin" className={styles.backLink}>← Atgal į administravimą</Link>

        <section className={styles.panel}>
          <span className={styles.eyebrow}>ADMINISTRAVIMAS</span>
          <h1>Mokėjimai treneriams</h1>
          <p>Įveskite informaciją apie treneriui atliekamą mokėjimą.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="trainer">Treneris</label>
            <select id="trainer" value={trainer} onChange={e => setTrainer(e.target.value)} required>
              <option value="">Pasirinkite trenerį</option>
              <option value="Jonas Jonaitis">Jonas Jonaitis</option>
              <option value="Tomas Petrauskas">Tomas Petrauskas</option>
              <option value="Lukas Kazlauskas">Lukas Kazlauskas</option>
            </select>

            <label htmlFor="amount">Mokėjimo suma (€)</label>
            <input id="amount" type="number" min="0.01" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Pvz. 250" required />

            <label htmlFor="date">Mokėjimo data</label>
            <input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} required />

            <button type="submit">Patvirtinti mokėjimą</button>
          </form>
        </section>
      </div>
    </main>
  );
}
