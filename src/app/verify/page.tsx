"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import styles from "./verify.module.css";
import loginStyles from "../login/login.module.css";

const CODE_LENGTH = 6;
const DEMO_CODE = "111111";

export default function VerifyPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code !== DEMO_CODE) {
      setError("Patvirtinimo kodas neteisingas. Bandykite dar kartą.");
      inputRef.current?.focus();
      inputRef.current?.select();
      return;
    }

    router.replace("/dashboard");
  }

  function handleResend() {
    setCode("");
    setError("");
    setNotice(`Demonstracinis kodas: ${DEMO_CODE}.`);
    inputRef.current?.focus();
  }

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <Link className={styles.back} href="/login">
          <span aria-hidden="true">←</span> Grįžti į prisijungimą
        </Link>

        <div className={styles.brandPlacement}>
          <div className={loginStyles.brand}>
            <span className={loginStyles.brandIcon} aria-hidden="true">G−</span>
        </div>
          <div>
            <strong>Gym<span>−</span></strong>
            <div><small>PERFORMANCE CLUB</small></div>
          </div>
        </div>

        <section className={styles.card} aria-labelledby="verify-title">
          <h1 id="verify-title">Įveskite saugos kodą</h1>
          <p className={styles.intro} id="code-hint">
            Įveskite 6 skaitmenų patvirtinimo kodą, skirtą telefono numeriui (demo kodas: 111111){" "}
            <span className={styles.phone}>+370 600 •••••</span>.
          </p>

          <form method="post" onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="security-code">
              Patvirtinimo kodas
            </label>

            <div className={styles.codeField}>
              <input
                ref={inputRef}
                id="security-code"
                name="code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                aria-describedby={error ? "code-hint code-error" : "code-hint"}
                aria-invalid={Boolean(error)}
                value={code}
                onChange={(event) => {
                  setCode(event.target.value.replace(/\D/g, "").slice(0, CODE_LENGTH));
                  setError("");
                  setNotice("");
                }}
              />

              <div className={styles.digits} aria-hidden="true">
                {Array.from({ length: CODE_LENGTH }, (_, index) => (
                  <span
                    key={index}
                    data-filled={index < code.length}
                    data-next={index === code.length}
                  >
                    {code[index] ?? "·"}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.resend}>
              <span><span aria-hidden="true">◷</span> Negavote kodo?</span>
              <button type="button" onClick={handleResend}>
                Siųsti kodą iš naujo
              </button>
            </div>

            <button
              className={styles.confirm}
              type="submit"
              disabled={code.length !== CODE_LENGTH}
            >
              Patvirtinti kodą <span aria-hidden="true">→</span>
            </button>

            {error && (
              <p className={styles.error} id="code-error" role="alert">{error}</p>
            )}
            <p className={styles.notice} role="status">{notice}</p>
          </form>
        </section>
      </div>
    </main>
  );
}