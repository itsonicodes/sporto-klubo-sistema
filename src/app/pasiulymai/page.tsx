
import Link from "next/link";
import styles from "./page.module.css";

const offers = [
  {
    category: "JĖGA",
    title: "Jėgos treniruočių programa",
    description: "Individuali programa, skirta raumenų masei ir jėgai didinti.",
    trainer: "Mantas K.",
    duration: "60 min.",
    price: "15 €",
    oldPrice: "20 €",
    badge: "−25%",
  },
  {
    category: "IŠTVERMĖ",
    title: "HYROX treniruotė",
    description: "Jėgos ir ištvermės pratimų derinys, padedantis pagerinti fizinę formą.",
    trainer: "Tomas V.",
    duration: "50 min.",
    price: "12 €",
    oldPrice: "16 €",
    badge: "−25%",
  },
  {
    category: "FUNKCINĖ",
    title: "Funkcinė treniruotė",
    description: "Viso kūno treniruotė, lavinanti koordinaciją, jėgą ir mobilumą.",
    trainer: "Elena L.",
    duration: "45 min.",
    price: "10 €",
    oldPrice: "15 €",
    badge: "−33%",
  },
  {
    category: "ASMENINĖ",
    title: "Asmeninė treniruotė",
    description: "Trenerio dėmesys tavo tikslams, technikai ir individualiam planui.",
    trainer: "Jonas J.",
    duration: "60 min.",
    price: "25 €",
    oldPrice: "30 €",
    badge: "−17%",
  },
];

export default function OffersPage() {
  return (
    <main className={styles.page}>

      <section className={styles.container}>
        <Link href="/dashboard" className={styles.backLink}>
          ← Grįžti į pagrindinį
        </Link>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>SPECIALŪS PASIŪLYMAI</span>
          <h1>Treniruočių pasiūlymai</h1>
          <p>
            Atrask specialius pasiūlymus, išsirink treniruotę
            ir siek savo sporto tikslų.
          </p>
        </div>

        <div className={styles.offerGrid}>
          {offers.map((offer) => (
            <article className={styles.card} key={offer.title}>
              <div className={styles.cardTop}>
                <span className={styles.category}>{offer.category}</span>
                <span className={styles.badge}>{offer.badge}</span>
              </div>

              <h2>{offer.title}</h2>
              <p className={styles.description}>{offer.description}</p>

              <div className={styles.details}>
                <span>◉ Treneris: {offer.trainer}</span>
                <span>◷ Trukmė: {offer.duration}</span>
              </div>

              <div className={styles.priceRow}>
                <strong>{offer.price}</strong>
                <del>{offer.oldPrice}</del>
              </div>

              <Link href="" className={styles.button}>
                Registruotis →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
