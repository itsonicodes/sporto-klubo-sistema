
"use client";

import Link from "next/link";
import { useState } from "react";
import dashboard from "../../dashboard/dashboard.module.css";
import styles from "./page.module.css";

export default function CancelMembershipPage() {
  const [reason, setReason] = useState("");

  return (
    <div className={dashboard.page}>
      <main className={`${dashboard.container} ${styles.main}`}>
        <Link href="/profile" className={styles.backLink}>
          ← Grįžti į profilį
        </Link>

        <section className={styles.panel}>
          <div className={styles.warningIcon}>!</div>

          <span className={styles.eyebrow}>NARYSTĖS VALDYMAS</span>
          <h1>Nutraukti narystę</h1>

          <p className={styles.description}>
            Apgailestaujame, kad svarstote nutraukti narystę.
            Prieš tęsdami peržiūrėkite informaciją apie savo narystę.
          </p>

          <div className={styles.membershipBox}>
            <div>
              <span>Dabartinė narystė</span>
              <strong>PRO narystė</strong>
            </div>
            <div>
              <span>Galioja iki</span>
              <strong>2026-12-01</strong>
            </div>
            <div>
              <span>Statusas</span>
              <strong className={styles.activeStatus}>Aktyvi</strong>
            </div>
          </div>

          <label className={styles.formLabel} htmlFor="reason">
            Kodėl norite nutraukti narystę?
          </label>

          <select
            id="reason"
            className={styles.select}
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          >
            <option value="">Pasirinkite priežastį</option>
            <option value="price">Per didelė kaina</option>
            <option value="time">Trūksta laiko sportuoti</option>
            <option value="location">Pasikeitė gyvenamoji vieta</option>
            <option value="other">Kita priežastis</option>
          </select>

          <div className={styles.actions}>
            <Link href="/profile" className={styles.secondaryButton}>
              Palikti narystę
            </Link>

            <button
              type="button"
              className={styles.dangerButton}
            >
              Patvirtinti nutraukimą
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
