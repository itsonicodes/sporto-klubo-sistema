"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
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

type SavedCard = {
  cardholder: string;
  number: string;
  expiry: string;
};

const savedCardStorageKey = "gym-saved-card";
const profileFields = [
  { name: "firstName", label: "Vardas", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Pavardė", type: "text", autoComplete: "family-name" },
  { name: "email", label: "El. paštas", type: "email", autoComplete: "email" },
  { name: "phone", label: "Telefono numeris", type: "tel", autoComplete: "tel" },
  { name: "birthDate", label: "Gimimo data", type: "date", autoComplete: "bday" },
] as const;

const workoutQuestions = [
  {
    name: "goal",
    label: "Pagrindinis tikslas",
    options: ["Stiprinti jėgą", "Gerinti ištvermę", "Lavinti judrumą", "Palaikyti fizinį aktyvumą"],
  },
  {
    name: "experience",
    label: "Treniruočių patirtis",
    options: ["Pradedu", "Treniruojuosi retkarčiais", "Treniruojuosi reguliariai"],
  },
  {
    name: "frequency",
    label: "Kiek kartų per savaitę galite treniruotis?",
    options: ["1", "2", "3", "4 ar daugiau"],
  },
  {
    name: "duration",
    label: "Kiek laiko galite skirti vienai treniruotei?",
    options: ["15 min.", "30 min.", "45 min.", "60 min."],
  },
  {
    name: "location",
    label: "Kur norėtumėte treniruotis?",
    options: ["Namuose", "Sporto klube", "Lauke"],
  },
] as const;

export default function ProfilePage() {
  const router = useRouter();
  const [savedProfile, setSavedProfile] = useState(initialProfile);
  const [draft, setDraft] = useState(initialProfile);
  const [profileMessage, setProfileMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [savedCard, setSavedCard] = useState<SavedCard | null>(null);
  const [cardMessage, setCardMessage] = useState("");

  useEffect(() => {
    const storedCard = window.localStorage.getItem(savedCardStorageKey);

    if (storedCard) {
      try {
        setSavedCard(JSON.parse(storedCard) as SavedCard);
      } catch {
        window.localStorage.removeItem(savedCardStorageKey);
      }
    }

  }, []);

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

  function saveCard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const card = {
      cardholder: String(formData.get("cardholder")).trim(),
      number: String(formData.get("cardNumber")).replace(/\s/g, ""),
      expiry: String(formData.get("expiry")),
    };

    if (!card.cardholder || card.number.length < 16 || !card.expiry) {
      setCardMessage("Patikrinkite kortelės duomenis.");
      return;
    }

    const cardToSave = { ...card, number: card.number.slice(-4) };
    window.localStorage.setItem(savedCardStorageKey, JSON.stringify(cardToSave));
    setSavedCard(cardToSave);
    setCardMessage("Kortelė išsaugota.");
    event.currentTarget.reset();
  }

  function deleteCard() {
    window.localStorage.removeItem(savedCardStorageKey);
    setSavedCard(null);
    setCardMessage("Kortelė ištrinta.");
  }

  return (
    <div className={dashboard.page}>
      <header className={dashboard.header}>
        <div className={`${dashboard.container} ${dashboard.headerInner}`}>
          <Link className={dashboard.logo} href="/dashboard">
            Gym<span>−</span>
          </Link>

          <div className={dashboard.headerActions}>
            <Link className={styles.back} href="/dashboard" aria-current="page">
              ← Atgal į pradžią
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

        <section className={`${styles.card} ${styles.membershipManagement}`}>
          <p className={styles.eyebrow}>● NARYSTĖS VALDYMAS</p>
          <h2>Mano narystė</h2>

          <div className={styles.membershipInfo}>
            <div>
              <span className={styles.membershipLabel}>Dabartinis planas</span>
              <strong>PRO narystė</strong>
            </div>

            <div>
              <span className={styles.membershipLabel}>Galioja iki</span>
              <strong>2026-12-01</strong>
            </div>

            <span className={styles.badge}>● AKTYVI</span>
          </div>

          <div className={styles.membershipActions}>
            <button
              className={styles.cardButton}
              type="button"
              onClick={() => {
                setCardMessage("");
                setIsCardModalOpen(true);
              }}
            >
              Mano kortelės
            </button>

            <button
              className={styles.cardButton}
              type="button"
              onClick={() => router.push("/profile/saskaitos")}
            >
              Mano sąskaitos
            </button>

            <Link
              href="/narystes/pratesti"
              className={styles.extendButton}
            >
              ↻ Pratęsti narystę
            </Link>

            <Link
              href="/narystes/nutraukti"
              className={styles.cancelMembershipButton}
            >
              Nutraukti narystę
            </Link>
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
                      {name === "email" && draft.email === initialProfile.email}
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

        <section
          className={`${styles.card} ${styles.questionnaire}`}
          aria-labelledby="workout-questionnaire-title"
        >
          <p className={styles.eyebrow}>Treniruočių rekomendacijos</p>
          <h2 id="workout-questionnaire-title">Treniruočių anketa</h2>
          <p className={styles.questionnaireIntro}>
            Pasirinkite savo tikslą, treniruočių patirtį ir jums tinkamą grafiką.
          </p>

          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <div className={styles.fields}>
              {workoutQuestions.map(({ name, label, options }) => (
                <div className={styles.field} key={name}>
                  <label htmlFor={`workout-${name}`}>{label}</label>
                  <select id={`workout-${name}`} name={name} defaultValue="" required>
                    <option value="" disabled>Pasirinkite</option>
                    {options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <div className={styles.actions}>
              <button type="submit" aria-describedby="workout-questionnaire-note">
                Išsaugoti anketą
              </button>
            </div>
          </form>
        </section>
      </main>

      {isCardModalOpen && (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsCardModalOpen(false);
            }
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="card-modal-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <p className={styles.eyebrow}>Mokėjimai</p>
                <h2 id="card-modal-title">Mano kortelės</h2>
              </div>
              <button
                className={styles.modalClose}
                type="button"
                aria-label="Uždaryti"
                onClick={() => setIsCardModalOpen(false)}
              >
                ×
              </button>
            </div>

            {savedCard ? (
              <div className={styles.savedCard}>
                <div>
                  <span className={styles.membershipLabel}>Išsaugota kortelė</span>
                  <strong>•••• •••• •••• {savedCard.number}</strong>
                </div>
                <span>{savedCard.expiry}</span>
                <button type="button" onClick={deleteCard}>Ištrinti</button>
              </div>
            ) : (
              <form className={styles.cardForm} onSubmit={saveCard}>
                <div className={styles.field}>
                  <label htmlFor="cardholder">Kortelės savininkas</label>
                  <input id="cardholder" name="cardholder" autoComplete="cc-name" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="card-number">Kortelės numeris</label>
                  <input
                    id="card-number"
                    name="cardNumber"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    maxLength={19}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className={styles.cardFormRow}>
                  <div className={styles.field}>
                    <label htmlFor="card-expiry">Galioja iki</label>
                    <input id="card-expiry" name="expiry" placeholder="MM/YY" autoComplete="cc-exp" required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="card-cvv">CVV</label>
                    <input id="card-cvv" name="cvv" type="password" inputMode="numeric" autoComplete="cc-csc" maxLength={4} required />
                  </div>
                </div>
                <p className={styles.cardMessage} role="status">{cardMessage}</p>
                <button className={styles.primary} type="submit">Išsaugoti</button>
              </form>
            )}

            {savedCard && <p className={styles.cardMessage} role="status">{cardMessage}</p>}
          </section>
        </div>
      )}

    </div>
  );
}