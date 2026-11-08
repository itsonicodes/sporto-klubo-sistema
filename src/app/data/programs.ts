// src/app/data/programs.ts

export type Program = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  trainer: string;
  initials: string;
  availableTimes: { date: string; time: string; places: number }[];
};

export const programs: Program[] = [
  {
    slug: "hyrox-performance",
    title: "HYROX Performance Circuit",
    description: "Didelio intensyvumo ištvermės ir jėgos treniruotė.",
    longDescription: "HYROX formato treniruotė, jungianti bėgimą, irklavimą, sled push, burpee ir kitus funkcinių judesių derinius. Tinka pažengusiems.",
    trainer: "Mantas K.",
    initials: "MK",
    availableTimes: [
      { date: "2023-11-13", time: "17:30", places: 3 },
      { date: "2023-11-15", time: "18:00", places: 5 },
      { date: "2023-11-17", time: "17:30", places: 1 },
    ],
  },
  {
    slug: "olympic-barbell",
    title: "Olympic Barbell & Power",
    description: "Sunkiosios atletikos technika ir sprogstamosios jėgos ugdymas.",
    longDescription: "Klasikiniai sunkiosios atletikos kėlimai (snatch, clean & jerk), pagalbiniai pratimai ir sprogstamosios jėgos darbas.",
    trainer: "Tomas V.",
    initials: "TV",
    availableTimes: [
      { date: "2023-11-14", time: "18:45", places: 2 },
      { date: "2023-11-16", time: "19:00", places: 4 },
    ],
  },
  {
    slug: "athletic-flow",
    title: "Athletic Flow & Recovery",
    description: "Sąnarių mobilumas, tempimas ir kvėpavimo pratimai.",
    longDescription: "Aktyvus mobilumas, tempimas, putų volas ir kvėpavimo technikos – skirta atsigauti po intensyvių treniruočių.",
    trainer: "Elena L.",
    initials: "EL",
    availableTimes: [
      { date: "2023-11-13", time: "20:00", places: 8 },
      { date: "2023-11-15", time: "20:00", places: 6 },
      { date: "2023-11-18", time: "12:15", places: 10 },
    ],
  },
  // Gali pridėti daugiau programų...
];