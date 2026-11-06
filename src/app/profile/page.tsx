"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import dashboard from "../dashboard/dashboard.module.css";
import styles from "./profile.module.css";

const initialProfile = {
  firstName: "vardenis",
  lastName: "pavardenis",
  email: "vardenis.pavardenis@gym.lt",
  phone: "+370 600 00000",
  birthDate: "1995-06-14",
  gender: "male",
};

const profileFields = [
  { name: "firstName", label: "Vardas", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Pavardė", type: "text", autoComplete: "family-name" },
  { name: "email", label: "El. paštas", type: "email", autoComplete: "email" },
  { name: "phone", label: "Telefono numeris", type: "tel", autoComplete: "tel" },
  { name: "birthDate", label: "Gimimo data", type: "date", autoComplete: "bday" },
] as const;

export default function ProfilePage() {
  const [savedProfile, setSavedProfile] = useState(initialProfile);
  const [draft, setDraft] = useState(initialProfile);
  const [profileMessage, setProfileMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const fullName = `${savedProfile.firstName} ${savedProfile.lastName}`;
  const initials = `${savedProfile.firstName[0] ?? ""}${savedProfile.lastName[0] ?? ""}`;

  function updateField(field: keyof typeof initialProfile, value: string) {
    setDraft((previous) => ({ ...previous, [field]: value }));
    setProfileMessage("");
  }

  function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const firstName = draft.firstName.trim();
    const lastName = draft.lastName.trim();

    if (!firstName || !lastName) {
      setProfileMessage("Įveskite vardą ir pavardę.");
      return;
    }

    const updatedProfile = { ...draft, firstName, lastName };
    setSavedProfile(updatedProfile);
    setDraft(updatedProfile);
    setProfileMessage("Profilis atnaujintas šiai peržiūrai.");
  }

  function cancelChanges() {
    setDraft(savedProfile);
    setProfileMessage("");
  }

  function changePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setShowCurrentPassword(false);
    setPasswordMessage("Slaptažodžiui pakeisti reikia prijungti serverio funkciją.");
  }

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
            <Link className={dashboard.profile} href="/profile" aria-current="page">
              Profilis
            </Link>
          </div>
        </div>
      </header>

      <main className={`${dashboard.container} ${styles.main}`}>
        <section className={styles.summary} aria-labelledby="profile-name">
          <div className={styles.avatar} aria-hidden="true">{initials}</div>
          <div>
            <div className={styles.nameRow}>
              <h1 id="profile-name">{fullName}</h1>
              <span className={styles.badge}>● PRO NARYSTĖ</span>
            </div>
            <p className={styles.memberSince}>Narys nuo 2023 m. rugsėjo</p>
          </div>
        </section>

        <div className={styles.columns}>
          <section className={styles.card} aria-labelledby="details-title">
            <p className={styles.eyebrow}>● Profilio konfigūracija</p>
            <h2 id="details-title">Asmeninių duomenų redagavimas</h2>

            <form method="post" onSubmit={saveProfile}>
              <div className={styles.fields}>
                {profileFields.map(({ name, label, type, autoComplete }) => (
                  <div className={styles.field} key={name}>
                    <div className={styles.labelRow}>
                      <label htmlFor={name}>{label}</label>
                      {name === "email" && draft.email === initialProfile.email && (
                        <span className={styles.verified}>✓ Patvirtinta</span>
                      )}
                    </div>
                    <input
                      id={name}
                      name={name}
                      type={type}
                      autoComplete={autoComplete}
                      value={draft[name]}
                      onChange={(event) => updateField(name, event.target.value)}
                      required
                    />
                  </div>
                ))}

                <div className={styles.field}>
                  <label htmlFor="gender">Lytis</label>
                  <select
                    id="gender"
                    name="gender"
                    value={draft.gender}
                    onChange={(event) => updateField("gender", event.target.value)}
                  >
                    <option value="male">Vyras</option>
                    <option value="female">Moteris</option>
                    <option value="unspecified">Nenoriu nurodyti</option>
                  </select>
                </div>
              </div>

              <p className={styles.profileMessage} role="status">{profileMessage}</p>

              <div className={styles.actions}>
                <button type="button" onClick={cancelChanges}>Atšaukti</button>
                <button className={styles.primary} type="submit">
                  Išsaugoti pakeitimus
                </button>
              </div>
            </form>
          </section>

          <section className={styles.card} aria-labelledby="security-title">
            <p className={styles.eyebrow}>♙ Saugumas ir prieiga</p>
            <h2 id="security-title">Slaptažodžio keitimas</h2>

            <form
              className={styles.securityForm}
              method="post"
              onSubmit={changePassword}
              onChange={() => setPasswordMessage("")}
            >
              <div className={styles.field}>
                <label htmlFor="current-password">Dabartinis slaptažodis</label>
                <div className={styles.passwordRow}>
                  <input
                    id="current-password"
                    name="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••"
                    required
                  />
                  <button
                    className={styles.visibility}
                    type="button"
                    aria-label={showCurrentPassword ? "Slėpti slaptažodį" : "Rodyti slaptažodį"}
                    aria-controls="current-password"
                    onClick={() => setShowCurrentPassword((visible) => !visible)}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
                      <circle cx="12" cy="12" r="2.5" />
                      {showCurrentPassword && <path d="m3 3 18 18" />}
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="new-password">Naujas slaptažodis</label>
                <input
                  id="new-password"
                  name="newPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Įveskite naują..."
                  required
                />
              </div>

              <button type="submit">Atnaujinti slaptažodį</button>
              {passwordMessage && (
                <p className={styles.passwordMessage} role="status">{passwordMessage}</p>
              )}
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}