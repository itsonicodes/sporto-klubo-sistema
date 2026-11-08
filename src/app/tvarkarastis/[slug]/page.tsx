// src/app/tvarkarastis/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { workouts } from "../../data/workouts";
import styles from "./workout.module.css";

export function generateStaticParams() {
  return workouts.map((w) => ({ slug: w.slug }));
}

export default async function WorkoutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Next.js 15 naudoja Promise
  const workout = workouts.find((w) => w.slug === slug);

  if (!workout) notFound();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.logo} href="/dashboard">
            Gym<span>−</span>
          </Link>
          <Link className={styles.back} href="/tvarkarastis">
            ← Atgal į tvarkaraštį
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <p className={styles.eyebrow}>{workout.day} · {workout.time}</p>
        <h1>{workout.title}</h1>
        <p className={styles.lead}>{workout.description}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.label}>Treneris</span>
            <span className={styles.value}>
              <span className={styles.avatar}>{workout.initials}</span>
              {workout.trainer}
            </span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.label}>Vieta</span>
            <span className={styles.value}>{workout.room}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.label}>Trukmė</span>
            <span className={styles.value}>{workout.duration}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.label}>Laisvos vietos</span>
            <span className={styles.value}>{workout.places} / {workout.capacity}</span>
          </div>
        </div>

        <section className={styles.details}>
          <h2>Apie treniruotę</h2>
          <p>{workout.longDescription}</p>
        </section>

        <div className={styles.actions}>
           <Link className={styles.secondaryButton} href="/tvarkarastis">
            Atšaukti registraciją
          </Link>
          <Link className={styles.secondaryButton} href="/tvarkarastis">Grįžti į tvarkaraštį</Link>
        </div>
      </main>
    </div>
  );
}