
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const memberships = {
  basic: {
    name: "Basic",
    price: 29,
    description: "Puikus pasirinkimas pradedantiesiems.",
    duration: "1 mėnuo",
    features: [
      "Sporto klubo lankymas darbo valandomis",
      "Persirengimo kambariai",
      "Sporto treniruokliai",
      "Fizinio pasirengimo įvertinimas",
    ],
    details:
      "Basic narystė skirta tiems, kurie nori pradėti sportuoti, pagerinti fizinę formą ir naudotis pagrindine sporto klubo įranga.",
  },
  premium: {
    name: "Premium",
    price: 49,
    description: "Viskas, ko reikia siekiant savo tikslų.",
    duration: "1 mėnuo",
    features: [
      "Sporto klubo lankymas 24/7",
      "Visi sporto treniruokliai",
      "Grupinės treniruotės",
      "Pirties lankymas",
      "Mėnesinis fizinio pasirengimo įvertinimas",
      "Vienas svečio apsilankymas per mėnesį",
    ],
    details:
      "Premium narystė suteikia daugiau lankstumo, papildomų paslaugų ir galimybę visapusiškai mėgautis sporto klubo teikiamais privalumais.",
  },
  pro: {
    name: "Pro",
    price: 79,
    description: "Visapusiška sporto ir sveikatingumo patirtis.",
    duration: "1 mėnuo",
    features: [
      "Visi Premium plano privalumai",
      "Asmeninė treniruotė su treneriu",
      "Neribotos grupinės treniruotės",
      "Mitybos konsultacija",
      "Neriboti svečių apsilankymai",
      "Pirmenybinė registracija į treniruotes",
    ],
    details:
      "Elite narystė skirta norintiems maksimalaus komforto, asmeninio dėmesio ir papildomų galimybių siekiant sportinių rezultatų.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function MembershipDetailPage({ params }: Props) {
  const { slug } = await params;
  const membership = memberships[slug as keyof typeof memberships];

  if (!membership) notFound();

  return (
    <main className={styles.page}>
      <Link href="/narystes" className={styles.backLink}>
        ← Grįžti į visas narystes
      </Link>

      <section className={styles.detailCard}>
        <span className={styles.eyebrow}>SPORTO KLUBO NARYSTĖ</span>

        <h1>{membership.name}</h1>
        <p className={styles.description}>{membership.description}</p>

        <div className={styles.price}>
          <span>€{membership.price}</span>
          <small>/ mėn.</small>
        </div>

        <p className={styles.duration}>
          Narystės laikotarpis: {membership.duration}
        </p>

        <div className={styles.divider} />

        <h2>Apie šią narystę</h2>
        <p className={styles.details}>{membership.details}</p>

        <h2>Kas įskaičiuota?</h2>
        <ul className={styles.features}>
          {membership.features.map((feature) => (
            <li key={feature}>
              <span>✓</span> {feature}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link
            href={`/narystes/${slug}/isigyti`}
            className={styles.buyButton}
          >
            Įsigyti narystę <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
