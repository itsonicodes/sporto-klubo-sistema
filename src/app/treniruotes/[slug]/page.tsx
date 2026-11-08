// src/app/treniruotes/[slug]/page.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { programs } from "../../data/programs";
import styles from "./program.module.css";

export default function ProgramPage() {
  const params = useParams();
  const slug = params.slug as string;
  const program = programs.find((p) => p.slug === slug);
  
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!program) {
    return <div className={styles.page}>Programa nerasta.</div>;
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.logo} href="/dashboard">Gym<span>−</span></Link>
          <Link className={styles.back} href="/treniruotes">← Atgal į treniruotes</Link>
        </div>
      </header>

      <main className={styles.main}>
        <h1>{program.title}</h1>
        <p className={styles.lead}>{program.longDescription}</p>
        
        <div className={styles.trainerInfo}>
          <span className={styles.avatar}>{program.initials}</span>
          Treneris: {program.trainer}
        </div>

        <section className={styles.timeSelection}>
          <h2>Pasirinkite laiką</h2>
          <div className={styles.timeGrid}>
            {program.availableTimes.map((slot, index) => {
              const slotId = `${slot.date}-${slot.time}`;
              const isSelected = selectedTime === slotId;
              const isFull = slot.places === 0;

              return (
                <button
                  key={index}
                  disabled={isFull}
                  onClick={() => setSelectedTime(slotId)}
                  className={`${styles.timeButton} ${isSelected ? styles.selected : ""} ${isFull ? styles.disabled : ""}`}
                >
                  <span className={styles.date}>{slot.date}</span>
                  <span className={styles.time}>{slot.time}</span>
                  <span className={styles.places}>
                    {isFull ? "Nėra vietų" : `Laisvų: ${slot.places}`}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <div className={styles.actions}>
          <button 
            className={styles.button}
            disabled={!selectedTime}
            onClick={() => alert(`Rezervuota! Data: ${selectedTime}`)}
          >
            Registruotis į treniruotę
          </button>
        </div>
      </main>
    </div>
  );
}