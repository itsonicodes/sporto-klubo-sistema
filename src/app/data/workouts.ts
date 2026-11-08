// src/app/data/workouts.ts

export type Workout = {
  slug: string;
  day: string;
  time: string;
  title: string;
  description: string;
  longDescription: string;
  trainer: string;
  initials: string;
  places: number;
  capacity: number;
  room: string;
  duration: string;
};

export const workouts: Workout[] = [
  // ========== PIRMADIENIS ==========
  {
    slug: "hyrox-performance-circuit",
    day: "Pirmadienis",
    time: "17:30–18:30",
    title: "HYROX Performance Circuit",
    description: "Didelio intensyvumo ištvermės ir jėgos treniruotė.",
    longDescription:
      "HYROX formato treniruotė, jungianti bėgimą, irklavimą, sled push, burpee ir kitus funkcinių judesių derinius. Tinka pažengusiems.",
    trainer: "Mantas K.",
    initials: "MK",
    places: 3,
    capacity: 12,
    room: "Salė A",
    duration: "60 min",
  },
  {
    slug: "olympic-barbell-power",
    day: "Pirmadienis",
    time: "18:45–19:45",
    title: "Olympic Barbell & Power",
    description: "Sunkiosios atletikos technika ir sprogstamosios jėgos ugdymas.",
    longDescription:
      "Klasikiniai sunkiosios atletikos kėlimai (snatch, clean & jerk), pagalbiniai pratimai ir sprogstamosios jėgos darbas.",
    trainer: "Tomas V.",
    initials: "TV",
    places: 1,
    capacity: 10,
    room: "Salė B",
    duration: "60 min",
  },
  {
    slug: "athletic-flow-recovery",
    day: "Pirmadienis",
    time: "20:00–21:00",
    title: "Athletic Flow & Recovery",
    description: "Sąnarių mobilumas, tempimas ir kvėpavimo pratimai.",
    longDescription:
      "Aktyvus mobilumas, tempimas, putų volas ir kvėpavimo technikos – skirta atsigauti po intensyvių treniruočių.",
    trainer: "Elena L.",
    initials: "EL",
    places: 8,
    capacity: 15,
    room: "Salė C",
    duration: "60 min",
  },

  // ========== ANTRADIENIS ==========
  {
    slug: "morning-mobility-flow",
    day: "Antradienis",
    time: "07:00–08:00",
    title: "Morning Mobility Flow",
    description: "Rytinė mobilumo ir tempimo sesija prieš darbo dieną.",
    longDescription:
      "Švelnūs judesiai, sąnarių mobilumas ir dinaminis tempimas, padedantys pabusti kūnui. Puikiai tinka pradedantiesiems.",
    trainer: "Elena L.",
    initials: "EL",
    places: 10,
    capacity: 15,
    room: "Salė C",
    duration: "60 min",
  },
  {
    slug: "functional-strength-basics",
    day: "Antradienis",
    time: "18:00–19:00",
    title: "Functional Strength Basics",
    description: "Funkcinės jėgos treniruotė pradedantiesiems.",
    longDescription:
      "Pagrindiniai funkciniai judesiai: pritūpimai, traukimai, stūmimai ir nešimas. Mokomasi taisyklingos technikos su laisvais svoriais.",
    trainer: "Tomas V.",
    initials: "TV",
    places: 6,
    capacity: 12,
    room: "Salė B",
    duration: "60 min",
  },
  {
    slug: "hiit-cardio-burn",
    day: "Antradienis",
    time: "19:15–20:00",
    title: "HIIT Cardio Burn",
    description: "Trumpa, bet intensyvi kardio treniruotė.",
    longDescription:
      "45 minučių didelio intensyvumo intervalinė treniruotė, deginanti kalorijas ir gerinanti širdies bei kraujagyslių ištvermę.",
    trainer: "Mantas K.",
    initials: "MK",
    places: 2,
    capacity: 14,
    room: "Salė A",
    duration: "45 min", // Pakeista iš 60 min
  },

  // ========== TREČIADIENIS ==========
  {
    slug: "powerlifting-squat-bench",
    day: "Trečiadienis",
    time: "17:00–18:30",
    title: "Powerlifting: Squat & Bench",
    description: "Sunkioji jėga – pritūpimai ir štangos spaudimas.",
    longDescription:
      "Detali pritūpimų ir štangos spaudimo technikos analizė. Dideli svoriai, ilgos pauzės, orientuota į jėgos progresą.",
    trainer: "Tomas V.",
    initials: "TV",
    places: 4,
    capacity: 10,
    room: "Salė B",
    duration: "90 min", // Pakeista iš 60 min
  },
  {
    slug: "spin-endurance",
    day: "Trečiadienis",
    time: "18:45–19:30",
    title: "Spin Endurance",
    description: "Dviračių treniruoklių ištvermės treniruotė.",
    longDescription:
      "45 minučių treniruotė ant spinning dviračių. Intervalai, kalvos ir tempo darbas – puikiai tinka kojų ištvermei.",
    trainer: "Elena L.",
    initials: "EL",
    places: 9,
    capacity: 16,
    room: "Salė A",
    duration: "45 min", // Pakeista iš 60 min
  },
  {
    slug: "core-stability",
    day: "Trečiadienis",
    time: "20:00–20:45",
    title: "Core Stability",
    description: "Pilvo preso ir liemens stabilizavimo treniruotė.",
    longDescription:
      "Pilvo, nugaros ir klubo srities raumenų darbas. Gerina laikyseną, mažina nugaros skausmus ir stiprina centrinę kūno dalį.",
    trainer: "Mantas K.",
    initials: "MK",
    places: 7,
    capacity: 14,
    room: "Salė C",
    duration: "45 min", // Pakeista iš 60 min
  },

  // ========== KETVIRTADIENIS ==========
  {
    slug: "crossfit-open-wod",
    day: "Ketvirtadienis",
    time: "17:30–18:45",
    title: "CrossFit Open WOD",
    description: "CrossFit stiliaus „Workout of the Day“.",
    longDescription:
      "Įvairiapusė treniruotė su funkciniais judesiais: kettlebells, burpee, box jumps, pull-ups ir kita. Tikslas – geriausias laikas arba pakartojimai.",
    trainer: "Mantas K.",
    initials: "MK",
    places: 3,
    capacity: 12,
    room: "Salė A",
    duration: "75 min", // Pakeista iš 60 min (1 val 15 min)
  },
  {
    slug: "deadlift-technique",
    day: "Ketvirtadienis",
    time: "19:00–20:00",
    title: "Deadlift Technique",
    description: "Traukimo nuo žemės technikos tobulinimas.",
    longDescription:
      "Detalus deadlift (klasikinis ir sumo) technikos darbas. Tinkamas kūno pozicionavimas, kvėpavimas ir saugi progresija.",
    trainer: "Tomas V.",
    initials: "TV",
    places: 5,
    capacity: 10,
    room: "Salė B",
    duration: "60 min",
  },
  {
    slug: "evening-yoga-stretch",
    day: "Ketvirtadienis",
    time: "20:15–21:00",
    title: "Evening Yoga & Stretch",
    description: "Vakarinė jogos ir tempimo sesija.",
    longDescription:
      "Ramūs jogos pratimai, gilūs tempimai ir kvėpavimo technikos. Puikiai tinka atsipalaiduoti po aktyvios dienos.",
    trainer: "Elena L.",
    initials: "EL",
    places: 11,
    capacity: 18,
    room: "Salė C",
    duration: "45 min", // Pakeista iš 60 min
  },

  // ========== PENKTADIENIS ==========
  {
    slug: "hyrox-simulation",
    day: "Penktadienis",
    time: "17:00–18:30",
    title: "HYROX Simulation",
    description: "Pilna HYROX lenktynių simuliacija.",
    longDescription:
      "8 x 1 km bėgimas su 8 funkcinėmis stotimis (ski erg, sled push, sled pull, burpee broad jump, rowing, farmers carry, sandbag lunges, wall balls).",
    trainer: "Mantas K.",
    initials: "MK",
    places: 2,
    capacity: 10,
    room: "Salė A",
    duration: "90 min", // Pakeista iš 60 min
  },
  {
    slug: "upper-body-strength",
    day: "Penktadienis",
    time: "18:45–19:45",
    title: "Upper Body Strength",
    description: "Viršutinės kūno dalies jėgos treniruotė.",
    longDescription:
      "Krūtinės, pečių, nugaros ir rankų jėgos darbas. Štangos, hanteliai, prisitraukimai ir atsispaudimai su svoriu.",
    trainer: "Tomas V.",
    initials: "TV",
    places: 6,
    capacity: 12,
    room: "Salė B",
    duration: "60 min",
  },
  {
    slug: "boxing-fundamentals",
    day: "Penktadienis",
    time: "20:00–21:00",
    title: "Boxing Fundamentals",
    description: "Boksо pagrindai – kova su šešėliu ir maišu.",
    longDescription:
      "Boksо stovės, judesiai, tiesūs smūgiai, kabliai ir uppercut'ai. Kardio darbas su maišais ir poriniais pratimais.",
    trainer: "Elena L.",
    initials: "EL",
    places: 4,
    capacity: 14,
    room: "Salė C",
    duration: "60 min",
  },

  // ========== ŠEŠTADIENIS ==========
  {
    slug: "weekend-warrior-wod",
    day: "Šeštadienis",
    time: "09:00–10:15",
    title: "Weekend Warrior WOD",
    description: "Savaitgalio bendruomenės treniruotė.",
    longDescription:
      "Komandinė treniruotė su įvairiais funkciniais judesiais. Puiki proga susipažinti su klubo bendruomene ir gerai prakaituoti.",
    trainer: "Mantas K.",
    initials: "MK",
    places: 8,
    capacity: 20,
    room: "Salė A",
    duration: "75 min", // Pakeista iš 60 min
  },
  {
    slug: "olympic-lifting-clinic",
    day: "Šeštadienis",
    time: "10:30–12:00",
    title: "Olympic Lifting Clinic",
    description: "Detalus olimpinio kėlimo seminaras.",
    longDescription:
      "Ilgesnė sesija, skirta snatch ir clean & jerk technikai. Vaizdo analizė, individualus grįžtamasis ryšys ir progresyvūs pratimai.",
    trainer: "Tomas V.",
    initials: "TV",
    places: 3,
    capacity: 8,
    room: "Salė B",
    duration: "90 min", // Pakeista iš 60 min
  },
  {
    slug: "recovery-mobility-workshop",
    day: "Šeštadienis",
    time: "12:15–13:15",
    title: "Recovery & Mobility Workshop",
    description: "Atsigavimo ir mobilumo dirbtuvės.",
    longDescription:
      "Praktinis užsiėmimas apie putų volą, masažo kamuoliukus, tempimą ir kvėpavimą. Sužinosi, kaip efektyviai atsigauti po treniruočių.",
    trainer: "Elena L.",
    initials: "EL",
    places: 12,
    capacity: 15,
    room: "Salė C",
    duration: "60 min",
  },
];