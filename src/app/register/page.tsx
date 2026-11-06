"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import login from "../login/login.module.css";
import styles from "./register.module.css";
import { useRouter } from "next/navigation";

const profileFields = [
  { name: "firstName", label: "Vardas", type: "text", autoComplete: "given-name", placeholder: "Vardenis" },
  { name: "lastName", label: "Pavardė", type: "text", autoComplete: "family-name", placeholder: "Pavardenis" },
  { name: "phone", label: "Telefono numeris", type: "tel", autoComplete: "tel", placeholder: "+370 600 00000" },
  { name: "birthDate", label: "Gimimo data", type: "date", autoComplete: "bday" },
  { name: "email", label: "El. paštas", type: "email", autoComplete: "email", placeholder: "vardas@gym.lt" },
];

function PasswordField({ name, label }: { name: string; label: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`${styles.field} ${styles.fullWidth}`}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.password}>
        <input
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          autoComplete="new-password"
          placeholder="••••••••••"
          required
        />
        <button
          type="button"
          aria-label={visible ? `Slėpti lauką „${label}“` : `Rodyti lauką „${label}“`}
          aria-controls={name}
          onClick={() => setVisible((previous) => !previous)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
            <circle cx="12" cy="12" r="2.5" />
            {visible && <path d="m3 3 18 18" />}
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function RegisterPage() {
    const [message, setMessage] = useState("");

    const router = useRouter();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        router.push("/login");
    }

  // PRIDEJUS DUOMBAZE PATAISYTI
//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
    
//     if (data.get("password") !== data.get("confirmPassword")) {
//       setMessage("Slaptažodžiai nesutampa. Patikrinkite abu laukus.");
//       document.getElementById("confirmPassword")?.focus();
//       return;
//     }

//     setMessage("Forma užpildyta. Paskyros kūrimas dar nesusietas su serveriu.");
//   }

  return (
    <main className={login.page}>
      <section className={login.hero} aria-label="Gym Performance Club">
        <div className={login.brand}>
          <span className={login.brandIcon} aria-hidden="true">G−</span>
          <div>
            <strong>Gym<span>−</span></strong>
            <small>PERFORMANCE CLUB</small>
          </div>
        </div>

        <div className={login.heroText}>
          <h2>
            Tapk treniruočių ir <span>pasiekimų</span> bendruomenės dalimi.
          </h2>
          <p>Pradėk savo sporto kelionę šiandien su „Gym−“.</p>
        </div>
      </section>

      <section className={styles.panel} aria-labelledby="register-title">
        <div className={styles.content}>
          <h1 id="register-title">Registracija</h1>
          <p className={styles.intro}>
            Susikurkite naują paskyrą ir pradėkite treniruotes.
          </p>

          <form
            className={styles.form}
            method="post"
            onSubmit={handleSubmit}
            //onChange={() => setMessage("")}
            noValidate
          >
            {profileFields.map(({ name, label, type, autoComplete, placeholder }) => (
              <div
                key={name}
                className={`${styles.field} ${name === "email" ? styles.fullWidth : ""}`}
              >
                <label htmlFor={name}>{label}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  autoComplete={autoComplete}
                  placeholder={placeholder}
                  required
                />
              </div>
            ))}

            <PasswordField name="password" label="Slaptažodis" />
            <PasswordField name="confirmPassword" label="Pakartokite slaptažodį" />

            <button className={styles.submit} type="submit">
              Registruotis <span aria-hidden="true">→</span>
            </button>

            {message && <p className={styles.message} role="status">{message}</p>}
          </form>

          <p className={styles.footer}>
            Jau turite paskyrą? <Link href="/login">Prisijungti</Link>
          </p>
        </div>
      </section>
    </main>
  );
}