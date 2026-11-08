
import Link from "next/link";
import styles from "./page.module.css";

export default function AdminPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>ADMINISTRAVIMAS</span>
          <h1>Administratoriaus skydelis</h1>
          <p>Pasirinkite norimą administravimo veiksmą.</p>
        </div>

        <section className={styles.actions}>
          <Link
            href="/admin/moketi"
            className={styles.actionCard}
          >
            <span className={styles.icon}>€</span>
            <h2>Mokėti treneriams</h2>
            <p>Atlikite mokėjimus treneriams ir peržiūrėkite jų informaciją.</p>
            <span className={styles.cardLink}>Atidaryti →</span>
          </Link>

          <Link
            href="/admin/narystes"
            className={styles.actionCard}
          >
            <span className={styles.icon}>＋</span>
            <h2>Kurti narystes</h2>
            <p>Kurkite naujus narystės planus ir nustatykite jų kainas.</p>
            <span className={styles.cardLink}>Atidaryti →</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
