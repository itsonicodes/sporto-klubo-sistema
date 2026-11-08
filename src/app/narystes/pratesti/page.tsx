
"use client";

import Link from "next/link";
import { useState } from "react";
import dashboard from "../../dashboard/dashboard.module.css";
import styles from "./page.module.css";

export default function ExtendMembershipPage() {
  const [selectedDate, setSelectedDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function handleExtend() {
    if (!selectedDate) return;

    alert(
      `Pasirinkta narystės pratęsimo data: ${selectedDate}`
    );
  }

  return (
    <div className={dashboard.page}>

      <main className={`${dashboard.container} ${styles.main}`}>
        <Link href="/profile" className={styles.backLink}>
          ← Grįžti į profilį
        </Link>

        <section className={styles.panel}>
          <div className={styles.extendIcon}>↻</div>

          <span className={styles.eyebrow}>NARYSTĖS VALDYMAS</span>
          <h1>Pratęsti narystę</h1>

          <p className={styles.description}>
            Pasirinkite datą, iki kurios norite pratęsti
            savo sporto klubo narystę.
          </p>

          <div className={styles.membershipBox}>
            <div>
              <span>Dabartinė narystė</span>
              <strong>PRO narystė</strong>
            </div>

            <div>
              <span>Dabartinis statusas</span>
              <strong className={styles.activeStatus}>Aktyvi</strong>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>
            Pasirinkite pratęsimo datą
          </h2>

          <div className={styles.dateField}>
            <label htmlFor="extendDate">
              Nauja narystės galiojimo pabaigos data
            </label>

            <input
              id="extendDate"
              type="date"
              min={today}
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
            />
          </div>


          <div className={styles.actions}>
            <Link href="/profile" className={styles.secondaryButton}>
              Atšaukti
            </Link>

            <button
              type="button"
              className={styles.extendConfirmButton}
              onClick={handleExtend}
              disabled={!selectedDate}
            >
              Pratęsti narystę →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
