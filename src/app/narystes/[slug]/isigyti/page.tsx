
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

const memberships = {
  basic: { name: "Basic", price: 29 },
  premium: { name: "Premium", price: 49 },
  pro: { name: "Pro", price: 79 },
};

export default function CheckoutPage() {
  const params = useParams<{ slug: string }>();
  const membership =
    memberships[params.slug as keyof typeof memberships];

  const [method, setMethod] = useState("card");

  if (!membership) {
    return <main className={styles.page}>Narystė nerasta.</main>;
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link
          href={`/narystes/${params.slug}`}
          className={styles.backLink}
        >
          ← Grįžti į narystę
        </Link>

        <div className={styles.checkoutGrid}>
          <section className={styles.paymentPanel}>
            <span className={styles.eyebrow}>SAUGUS ATSISKAITYMAS</span>
            <h1>Narystės apmokėjimas</h1>
            <p className={styles.subtitle}>
              Užpildyk informaciją ir užbaik narystės įsigijimą.
            </p>

            <h2>Kontaktinė informacija</h2>

            <div className={styles.formGrid}>
              <label>
                Vardas
                <input placeholder="Tavo vardas" />
              </label>

              <label>
                Pavardė
                <input placeholder="Tavo pavardė" />
              </label>

              <label className={styles.fullWidth}>
                El. paštas
                <input type="email" placeholder="vardas@email.com" />
              </label>

              <label className={styles.fullWidth}>
                Telefono numeris
                <input type="tel" placeholder="+370 600 00000" />
              </label>
            </div>

            <div className={styles.divider} />

            <h2>Mokėjimo būdas</h2>

            <div className={styles.methods}>
              <button
                type="button"
                className={method === "card" ? styles.selectedMethod : styles.method}
                onClick={() => setMethod("card")}
              >
                <span>▣</span>
                Banko kortelė
              </button>

              <button
                type="button"
                className={method === "bank" ? styles.selectedMethod : styles.method}
                onClick={() => setMethod("bank")}
              >
                <span>▤</span>
                Bankinis pavedimas
              </button>
            </div>

            {method === "card" ? (
              <div className={styles.formGrid}>
                <label className={styles.fullWidth}>
                  Kortelės savininkas
                  <input placeholder="Vardas Pavardė" />
                </label>

                <label className={styles.fullWidth}>
                  Kortelės numeris
                  <input placeholder="0000 0000 0000 0000" />
                </label>

                <label>
                  Galioja iki
                  <input placeholder="MM / YY" />
                </label>

                <label>
                  CVV
                  <input placeholder="123" />
                </label>
              </div>
            ) : (
              <div className={styles.bankInfo}>
                <label>
                  Pasirink banką
                  <select defaultValue="">
                    <option value="" disabled>Pasirink banką</option>
                    <option>Swedbank</option>
                    <option>SEB</option>
                    <option>Artea</option>
                    <option>Luminor</option>
                    <option>Citadele</option>
                  </select>
                </label>
              </div>
            )}

          </section>

          <aside className={styles.summaryPanel}>
            <span className={styles.eyebrow}>UŽSAKYMO SUVESTINĖ</span>
            <div className={styles.summaryLine}>
              <span>Narystės trukmė</span>
              <strong>1 mėnuo</strong>
            </div>

            <div className={styles.summaryLine}>
              <span>Pasirinktas planas</span>
              <strong>{membership.name}</strong>
            </div>

            <div className={styles.summaryTotal}>
              <span>Iš viso mokėti</span>
              <strong>€{membership.price.toFixed(2)}</strong>
            </div>

            <button
              type="button"
              className={styles.payButton}
            >
              Apmokėti €{membership.price.toFixed(2)} →
            </button>

            <Link
              href={`/narystes/${params.slug}`}
              className={styles.cancelLink}
            >
              Atšaukti užsakymą
            </Link>

          </aside>
        </div>
      </div>
    </main>
  );
}
