
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const memberships = [
  {
    slug: "basic",
    name: "Basic",
    price: 29,
    description: "Puikus pasirinkimas pradedantiesiems.",
    features: [
      "Sporto klubo lankymas darbo valandomis",
      "Persirengimo kambariai",
      "Sporto treniruokliai",
      "Fizinio pasirengimo įvertinimas",
    ],
    popular: false,
  },
  {
    slug: "premium",
    name: "Premium",
    price: 49,
    description: "Viskas, ko reikia siekiant savo tikslų.",
    features: [
      "Sporto klubo lankymas 24/7",
      "Visi sporto treniruokliai",
      "Grupinės treniruotės",
      "Pirties lankymas",
      "Mėnesinis fizinio pasirengimo įvertinimas",
      "Vienas svečio apsilankymas per mėnesį",
    ],
    popular: true,
  },
  {
    slug: "pro",
    name: "Pro",
    price: 79,
    description: "Visapusiška sporto ir sveikatingumo patirtis.",
    features: [
      "Visi Premium plano privalumai",
      "Asmeninė treniruotė su treneriu",
      "Neribotos grupinės treniruotės",
      "Mitybos konsultacija",
      "Neriboti svečių apsilankymai",
      "Pirmenybinė registracija",
    ],
    popular: false,
  },
];

export default function MembershipsPage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.logo} href="/dashboard">
            Gym<span>−</span>
          </Link>
          <Link className={styles.back} href="/dashboard">
            ← Atgal į pradžią
          </Link>
        </div>
      </header>

      <main className={styles.main}>
      <section className={styles.plansSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>NARYSTĖS PLANAI</span>
            <h2>Rask sau tinkamiausią planą</h2>
            <p>Aiškios kainos. Jokių paslėptų mokesčių.</p>
          </div>

          <div className={styles.billingToggle}>
            <button
              className={billing === "monthly" ? styles.billingActive : ""}
              onClick={() => setBilling("monthly")}
            >
              Mėnesinis
            </button>
            <button
              className={billing === "yearly" ? styles.billingActive : ""}
              onClick={() => setBilling("yearly")}
            >
              Metinis <span>Sutaupyk 2 mėn.</span>
            </button>
          </div>
        </div>

        <div className={styles.membershipGrid}>
          {memberships.map((plan, index) => {
            const price =
              billing === "yearly" ? plan.price * 10 : plan.price;

            return (
              <article
                key={plan.slug}
                className={`${styles.planCard} ${
                  plan.popular ? styles.popularCard : ""
                }`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>
                    POPULIARIAUSIAS
                  </div>
                )}

                <div className={styles.planTop}>
                  <div
                    className={`${styles.planIcon} ${
                      styles[index === 0 ? "blue" : index === 1 ? "green" : "orange"]
                    }`}
                  >
                    {index === 0 ? "◈" : index === 1 ? "✦" : "♛"}
                  </div>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>

                <div className={styles.price}>
                  <span className={styles.currency}>€</span>
                  <span className={styles.amount}>{price}</span>
                  <span className={styles.period}>
                    / {billing === "yearly" ? "metus" : "mėn."}
                  </span>
                </div>

                <div className={styles.featureHeading}>
                  Į NARYSTĘ ĮSKAIČIUOTA
                </div>

                <ul className={styles.featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className={styles.check}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/narystes/${plan.slug}`}
                  className={`${styles.purchaseButton} ${
                    plan.popular ? styles.primaryButton : ""
                  }`}
                >
                  Plačiau apie narystę <span>→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      </main>

    </div>
  );
}
