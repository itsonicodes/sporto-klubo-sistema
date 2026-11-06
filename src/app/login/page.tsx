"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  // PRIDEJUS DB PATAISYTI
  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   setMessage("Prisijungimas dar nesusietas su serveriu.");
  // }

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Gym Performance Club">
        <div className={styles.brand}>
          <span className={styles.brandIcon} aria-hidden="true">G−</span>
          <div>
            <strong>Gym<span>−</span></strong>
            <small>PERFORMANCE CLUB</small>
          </div>
        </div>

        <div className={styles.heroText}>
          <div className={styles.indicator} aria-hidden="true" />
          <h2>Valdyk savo <span>treniruotes</span> ir pasiekimus.</h2>
          <p>
            Profesionali erdvė asmeniniam tobulėjimui, rezultatų stebėjimui
            ir tikslų įgyvendinimui kiekvieną dieną.
          </p>
        </div>
      </section>

      <section className={styles.login} aria-labelledby="login-title">
        <div className={styles.content}>
          <span className={styles.badge}>Gym−</span>
          <h1 id="login-title">Prisijungimas</h1>
          <p className={styles.intro}>
            Sveiki sugrįžę! Įveskite savo duomenis norėdami tęsti.
          </p>

          {/* PRIDEJUS DB PATAISYTI */}
          <form className={styles.form}
                method="post"
                onSubmit={handleSubmit}
                noValidate
                >
            <div className={styles.field}>
              <label htmlFor="email">El. paštas</label>
              <div className={styles.inputRow}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="vardas@gym.lt"
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Slaptažodis</label>
              <div className={styles.inputRow}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
                </svg>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••••"
                  required
                />
                <button
                  className={styles.toggle}
                  type="button"
                  aria-label={showPassword ? "Slėpti slaptažodį" : "Rodyti slaptažodį"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
                    <circle cx="12" cy="12" r="2.5" />
                    {showPassword && <path d="m3 3 18 18" />}
                  </svg>
                </button>
              </div>
            </div>

            <button className={styles.submit} type="submit">
              Prisijungti <span aria-hidden="true">→</span>
            </button>
            {message && <p className={styles.message} role="status">{message}</p>}
          </form>

          <p className={styles.register}>
            Neturite paskyros? <Link href="/register">Registruotis</Link>
          </p>
        </div>
      </section>
    </main>
  );
}