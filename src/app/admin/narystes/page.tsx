
"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function AdminMembershipsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>ADMINISTRAVIMAS</span>
            <h1>Narystės</h1>
            <p>Valdyk sporto klubo narystes ir jų pasiūlymus.</p>
          </div>

          <button
            className={styles.addButton}
            onClick={() => setShowForm(true)}
          >
            <span>＋</span> Pridėti narystę
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span>Visos narystės</span>
            <strong>3</strong>
          </div>
          <div className={styles.statCard}>
            <span>Aktyvios narystės</span>
            <strong>3</strong>
          </div>
          <div className={styles.statCard}>
            <span>Vidutinė kaina</span>
            <strong>€52</strong>
          </div>
        </div>

        <section className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div>
              <h2>Visos narystės</h2>
              <p>Šiuo metu sukurtos sporto klubo narystės</p>
            </div>
            <span className={styles.count}>3 narystės</span>
          </div>

          <div className={styles.tableScroll}>
            <table>
              <thead>
                <tr>
                  <th>NARYSTĖ</th>
                  <th>KAINA</th>
                  <th>TRUKMĖ</th>
                  <th>STATUSAS</th>
                  <th>VEIKSMAI</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className={styles.planName}>
                      <span className={`${styles.planIcon} ${styles.blue}`}>B</span>
                      <div>
                        <strong>Basic</strong>
                        <small>Pradedantiesiems</small>
                      </div>
                    </div>
                  </td>
                  <td>€29 / mėn.</td>
                  <td>1 mėnuo</td>
                  <td><span className={styles.active}>Aktyvi</span></td>
                  <td><button className={styles.moreButton}>•••</button></td>
                </tr>

                <tr>
                  <td>
                    <div className={styles.planName}>
                      <span className={`${styles.planIcon} ${styles.green}`}>P</span>
                      <div>
                        <strong>Premium</strong>
                        <small>Pažengusiems</small>
                      </div>
                    </div>
                  </td>
                  <td>€49 / mėn.</td>
                  <td>1 mėnuo</td>
                  <td><span className={styles.active}>Aktyvi</span></td>
                  <td><button className={styles.moreButton}>•••</button></td>
                </tr>

                <tr>
                  <td>
                    <div className={styles.planName}>
                      <span className={`${styles.planIcon} ${styles.orange}`}>E</span>
                      <div>
                        <strong>Elite</strong>
                        <small>Visapusiška patirtis</small>
                      </div>
                    </div>
                  </td>
                  <td>€79 / mėn.</td>
                  <td>1 mėnuo</td>
                  <td><span className={styles.active}>Aktyvi</span></td>
                  <td><button className={styles.moreButton}>•••</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {showForm && (
          <div
            className={styles.modalOverlay}
            onClick={() => setShowForm(false)}
          >
            <section
              className={styles.modal}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div>
                  <span className={styles.eyebrow}>NAUJA NARYSTĖ</span>
                  <h2>Pridėti narystę</h2>
                  <p>Užpildyk informaciją apie naują pasiūlymą.</p>
                </div>

                <button
                  className={styles.closeButton}
                  onClick={() => setShowForm(false)}
                >
                  ×
                </button>
              </div>

              <div className={styles.form}>
                <label>
                  Narystės pavadinimas
                  <input placeholder="Pvz. VIP narystė" />
                </label>

                <label>
                  Trumpas aprašymas
                  <input placeholder="Trumpai aprašyk narystę" />
                </label>

                <div className={styles.formRow}>
                  <label>
                    Kaina (€)
                    <input type="number" placeholder="59" />
                  </label>

                  <label>
                    Trukmė
                    <select defaultValue="1 mėnuo">
                      <option>1 mėnuo</option>
                      <option>3 mėnesiai</option>
                      <option>6 mėnesiai</option>
                      <option>12 mėnesių</option>
                    </select>
                  </label>
                </div>

                <label>
                  Narystės spalva
                  <select defaultValue="Žalia">
                    <option>Mėlyna</option>
                    <option>Žalia</option>
                    <option>Oranžinė</option>
                    <option>Violetinė</option>
                  </select>
                </label>

                <label>
                  Narystės privalumai
                  <textarea
                    rows={4}
                    placeholder={"Sporto klubo lankymas\nGrupinės treniruotės\nPirties lankymas"}
                  />
                </label>

                <label>
                  Narystės statusas
                  <select defaultValue="Aktyvi">
                    <option>Aktyvi</option>
                    <option>Neaktyvi</option>
                    <option>Ruošiama</option>
                  </select>
                </label>
              </div>

              <div className={styles.modalActions}>
                <button
                  className={styles.cancelButton}
                  onClick={() => setShowForm(false)}
                >
                  Atšaukti
                </button>

                <button
                  className={styles.saveButton}
                  onClick={() => setShowForm(false)}
                >
                  ＋ Sukurti narystę
                </button>
              </div>

              <p className={styles.demoNote}>
                Demonstracinė forma – informacija neišsaugoma.
              </p>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
