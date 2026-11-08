import Link from "next/link";
import dashboard from "../../dashboard/dashboard.module.css";
import styles from "./page.module.css";

export default function InvoicesPage() {
  return (
    <div className={dashboard.page}>
      <header className={dashboard.header}>
        <div className={`${dashboard.container} ${dashboard.headerInner}`}>
          <Link className={dashboard.logo} href="/dashboard">
            Gym<span>−</span>
          </Link>
          <nav className={dashboard.nav} aria-label="Pagrindinė navigacija">
            <Link href="/dashboard">Pagrindinis</Link>
            <Link href="/dashboard#treniruotes">Treniruotės</Link>
            <Link href="/dashboard#narystes">Narystės</Link>
            <Link href="/dashboard#tvarkarastis">Tvarkaraštis</Link>
          </nav>
          <div className={dashboard.headerActions}>
            <Link className={dashboard.profile} href="/profile" aria-current="page">Profilis</Link>
          </div>
        </div>
      </header>

      <main className={`${dashboard.container} ${styles.main}`}>
        <Link className={styles.backLink} href="/profile">← Grįžti į profilį</Link>
        <section className={styles.invoicePage} aria-labelledby="invoices-title">
          <p className={styles.eyebrow}>Mokėjimai</p>
          <h1 id="invoices-title">Mano sąskaitos</h1>
          <p className={styles.intro}>Visos jūsų sąskaitos.</p>

          <article className={styles.invoice}>
            <div className={styles.invoiceHeader}>
              <div>
                <span className={styles.label}>Sąskaitos numeris</span>
                <strong>100001</strong>
              </div>
              <span className={styles.status}>neapmokėta</span>
            </div>
            <dl className={styles.details}>
              <div><dt>Suma</dt><dd>29.99 €</dd></div>
              <div><dt>Išrašymo data</dt><dd>2026-11-01</dd></div>
              <div><dt>Terminas</dt><dd>2026-11-15</dd></div>
            </dl>
            <div className={styles.description}>
              <span className={styles.label}>Aprašymas</span>
              <p>PRO narystė</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
