import Link from "next/link";
import styles from "./page.module.css";

export default function AdminPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        
        {/* NUORODA ATGAL */}
        <Link href="/dashboard" className={styles.backLink}>
          ← Atgal į pagrindinį
        </Link>

        {/* PAVADINIMAS */}
        <div className={styles.heading}>
          <span className={styles.eyebrow}>ADMINISTRAVIMAS</span>
          <h1>Administratoriaus skydelis</h1>
          <p>Pasirinkite norimą administravimo veiksmą.</p>
        </div>

        <section className={styles.actions}>
          <Link href="/admin/moketi" className={styles.actionCard}>
            <span className={styles.icon}>€</span>
            <h2>Mokėti treneriams</h2>
            <p>Atlikite mokėjimus treneriams ir peržiūrėkite jų informaciją.</p>
            <span className={styles.cardLink}>Atidaryti →</span>
          </Link>

          <Link href="/admin/narystes" className={styles.actionCard}>
            <span className={styles.icon}>＋</span>
            <h2>Kurti narystes</h2>
            <p>Kurkite naujus narystės planus ir nustatykite jų kainas.</p>
            <span className={styles.cardLink}>Atidaryti →</span>
          </Link>

          <Link href="/admin/naudotojai" className={styles.actionCard}>
            <span className={styles.icon}>👥</span>
            <h2>Naudotojų sąrašas</h2>
            <p>Peržiūrėkite visus sistemos naudotojus.</p>
            <span className={styles.cardLink}>Atidaryti →</span>
          </Link>

          <Link href="/admin/lankomumas" className={styles.actionCard}>
            <span className={styles.icon}>📊</span>
            <h2>Lankomumo ataskaita</h2>
            <p>Peržiūrėkite klubo narių lankomumo statistiką.</p>
            <span className={styles.cardLink}>Atidaryti →</span>
          </Link>

          <Link href="/admin/ataskaitos" className={styles.actionCard}>
            <span className={styles.icon}>💰</span>
            <h2>Pajamų ataskaita</h2>
            <p>Peržiūrėkite bendras klubo pajamas ir mokėjimų istoriją.</p>
            <span className={styles.cardLink}>Atidaryti →</span>
          </Link>
        </section>
      </div>
    </main>
  );
}