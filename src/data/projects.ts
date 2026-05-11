// All 23 projects ported from /our-work on the live site.
// Each project has a stable slug used for /our-work/[slug] routes.
// Pillar assignments are editorial — used to group projects on the homepage
// and on the /our-work index. Tweak as Angana refines.

export type Pillar = "health" | "education" | "relief" | "partnerships";

export interface Project {
  slug: string;
  title: string;
  pillar: Pillar;
  date?: string;
  location?: string;
  partners?: string[];
  beneficiaries?: string;
  description: string;
  image: string;
  /** Order on the listing pages — lower number = shown first. */
  order: number;
}

export const projects: Project[] = [
  // ── Health & Wellbeing ──────────────────────────────────────────────────
  {
    slug: "howrah-blood-bank-2023",
    title: "Howrah Blood Bank — 2023 Update",
    pillar: "health",
    date: "Inaugurated June 2023; Thalassemia Unit launched 27 May 2024",
    location: "Howrah, West Bengal, India",
    partners: ["Lions Club of Howrah"],
    description:
      "The Howrah Blood Bank was formally gifted to the Lions Club of Howrah in June 2023. A new Thalassemia Unit launched on World Thalassemia Day in May 2024, and a Blood Collection and Transportation Vehicle is planned in the coming months. As Sudhir Maheshwari has shared, this project fulfilled his late father's philanthropic vision.",
    image:
      "https://static.wixstatic.com/media/083907_7e3bf795da624bf4b2c0d900f2b8151c~mv2.jpg",
    order: 10,
  },
  {
    slug: "howrah-blood-bank",
    title: "Howrah Blood Bank and Thalassemia Clinic",
    pillar: "health",
    date: "Commissioned October 2018",
    location: "Jadurberia Hospital, Howrah, West Bengal, India",
    partners: ["Howrah Lions Club"],
    description:
      "Addressing the long-standing need for a well-functioning private blood bank in Howrah — a densely urbanised city of five million on the western bank of the Hooghly River, across from Kolkata. Total project cost: under INR 1 crore (~US$150,000).",
    image:
      "https://static.wixstatic.com/media/083907_2bf921ff06da41f88fb5ba6fb4770a71~mv2.jpg",
    order: 11,
  },
  {
    slug: "oxygen-concentrators-donation",
    title: "Covid-19 — Oxygen Concentrators",
    pillar: "health",
    date: "10 May 2021",
    location: "West Bengal, Rajasthan, Maharashtra, New Delhi",
    partners: [
      "Synergy Capital",
      "Lions Hospitals (West Bengal)",
      "Future Hope School Kolkata",
      "Society of Indian Children's Welfare",
      "Kailash Satyarthi Bal Ashram Foundation",
      "Jagriti Foundation Jaipur",
      "Rural Hospital Dangsaundane, Nasik",
    ],
    description:
      "Donated 25 European oxygen concentrators (5 lpm and 10 lpm) during India's second COVID wave. Distributed across Lions Hospitals in West Bengal, Future Hope School Kolkata, the Society of Indian Children's Welfare, the Kailash Satyarthi Bal Ashram in Viratnagar, Jagriti Foundation Jaipur, and Rural Hospital Dangsaundane in Nasik.",
    image:
      "https://static.wixstatic.com/media/083907_4540d476b8f542dc9db6fb35da777c42~mv2.jpeg",
    order: 12,
  },
  {
    slug: "manzil-centre-of-disabilities",
    title: "Manzil Centre of Disabilities",
    pillar: "health",
    location: "Sharjah, UAE",
    description:
      "Manzil is a non-profit centre in Sharjah promoting inclusion through a professional learning environment for people with disabilities. Their work nurtures students' self-help, social, educational and vocational skills — the foundation supports their mission of shaping an inclusive society.",
    image:
      "https://static.wixstatic.com/media/083907_abbccfa640694145ac8395741b61c912~mv2.jpg",
    order: 13,
  },
  {
    slug: "bhuj-earthquake",
    title: "Bhuj Earthquake Hospital",
    pillar: "health",
    date: "2001 earthquake response — hospital built 2002",
    location: "Bhuj, Gujarat, India",
    partners: ["Lions Club International", "Mittal Steel employees", "L.N. Mittal"],
    description:
      "Following the 2001 Gujarat earthquake — which caused considerable and unprecedented loss of life — the foundation constructed a 40-bed hospital in Bhuj in 2002, in collaboration with the Lions Club.",
    image:
      "https://static.wixstatic.com/media/083907_1291179d277a465b8177208d11e0671a~mv2.jpeg",
    order: 14,
  },

  // ── Education & Opportunity ─────────────────────────────────────────────
  {
    slug: "the-dkm-scholarship",
    title: "The Deo Kumar Maheshwari Scholarship for Social Work",
    pillar: "education",
    date: "Commissioned 10 February 2020",
    description:
      "A scholarship in memory of Late Deo Kumar Maheshwari, founding trustee. It supports deserving Indian students pursuing undergraduate or postgraduate studies in Social Work, with the aim of awarding ten scholarships per cohort.",
    image:
      "https://static.wixstatic.com/media/083907_d52c0c57a64d4f2a8403fc0e05b57a4a~mv2.png",
    order: 20,
  },
  {
    slug: "maheshwari-school-for-all",
    title: "Maheshwari School For All",
    pillar: "education",
    date: "Established 2008",
    location: "Gondalpara and Katliya villages, Howrah",
    beneficiaries: "~60 children per year; 500+ children since 2008",
    description:
      "Pre-school holistic education for underprivileged children aged 2–6 — poetry, singing, art, sketching, geography, dance, puzzle-solving, and reading and writing in Bengali and English. Children also receive nutritious daily meals and hygiene instruction.",
    image:
      "https://static.wixstatic.com/media/083907_748de6994e704030a179dac20510abef~mv2.jpg",
    order: 21,
  },
  {
    slug: "kailash-satyarthi-foundation",
    title: "Kailash Satyarthi Children's Foundation",
    pillar: "education",
    date: "9–11 June 2019",
    partners: ["Synergy Capital", "Kailash Satyarthi Children's Foundation"],
    beneficiaries: "3,000+ participants — students, teachers, entrepreneurs, corporates",
    description:
      "Hosted Nobel Peace Laureate Kailash Satyarthi for a three-day, six-event visit reaching more than 3,000 participants. KSCF works on the principle that every child has the right to live freely, work safely, and be healthy — through Compassion, Street to School, and Child Safety programmes.",
    image:
      "https://static.wixstatic.com/media/083907_8e7ef7a1bf934fb79514ea3165414c70~mv2.jpg",
    order: 22,
  },
  {
    slug: "cricket-kit-and-practice-net-for-bal-ash-1",
    title: "Cricket Kit & Practice Net for Bal Ashram Boys",
    pillar: "education",
    date: "June 2021 (fundraiser started 2019)",
    location: "Bal Ashram, Viratnagar, Rajasthan",
    partners: ["Kailash Satyarthi Children's Foundation / Bal Ashram"],
    beneficiaries: "70 boys",
    description:
      "Angana Maheshwari's birthday fundraiser raised over US$3,000 to distribute personalised India team cricket kits, training shoes and steel water bottles to all 70 boys at Bal Ashram, and to install a professional cricket practice net on the grounds.",
    image:
      "https://static.wixstatic.com/media/083907_4016c3d4095e486a85775db8720160df~mv2.jpg",
    order: 23,
  },
  {
    slug: "educational-sponsorship",
    title: "Educational Sponsorships",
    pillar: "education",
    description:
      "Multi-programme support across Future Hope and St Xavier's, Kolkata (five female undergraduates); Tawoon's WAJD Program in Gaza (a child orphaned in 2014); Vedanta Academy in India; Manzil in Sharjah; and the Society of Indian Children's Welfare in Kolkata.",
    image:
      "https://static.wixstatic.com/media/083907_88e9ec2b2c5d4135971d1a955cb0c69b~mv2.jpg",
    order: 24,
  },
  {
    slug: "st-xaviers-kolkata",
    title: "St. Xavier's University, Kolkata",
    pillar: "education",
    description:
      "Founded in 1860 by the Society of Jesus, St Xavier's is a Christian Minority Higher Educational Institution. Trustees of the foundation helped raise nearly US$4 million in 2013 toward the modern Business School development at Rajarhat, alongside direct financial contributions.",
    image:
      "https://static.wixstatic.com/media/083907_79135a9556c54cbdb6b23c5de1648cfd~mv2.jpg",
    order: 25,
  },
  {
    slug: "future-hope",
    title: "Future Hope",
    pillar: "education",
    location: "Kolkata, India",
    description:
      "Future Hope provides opportunity through its homes, school and medical programme for some of the most vulnerable children from the streets and slums of Kolkata. The work focuses on three primary initiatives: Street to School, Life Skills, and Transformation.",
    image:
      "https://static.wixstatic.com/media/083907_e6b2bba16cae4e519788d141288edef0~mv2.png",
    order: 26,
  },
  {
    slug: "stepping-stone-day-care-centre",
    title: "Stepping Stone Day Care Centre",
    pillar: "education",
    date: "2011 – 2017",
    location: "New Friends Colony, Delhi",
    beneficiaries: "Started with 10 children; peaked at 90; 300+ since 2011",
    description:
      "Empowering special-needs underprivileged children to live with more independence and dignity. Services included daily private transport with qualified staff, nutritious meals, hygiene education, full-time special-needs teachers, physiotherapy, dance, arts, crafts and vocational training. Many children won awards in art and dance competitions, and several were absorbed into mainstream schools.",
    image:
      "https://static.wixstatic.com/media/083907_8313779567944698bb778494f87fb54c~mv2_d_3648_2736_s_4_2.jpg",
    order: 27,
  },

  // ── Community Relief ────────────────────────────────────────────────────
  {
    slug: "copy-of-cricket-kit-and-practice-net",
    title: "Ramadan Donation Drive",
    pillar: "relief",
    date: "Annual — four consecutive years since 2023",
    location: "Dubai labour camps",
    partners: ["Synergy Capital", "Little People Big Hearts (Dubai)"],
    description:
      "Each Ramadan, the foundation distributes rice, cooking oil, lentils, detergent, bath soaps, toothpaste and shaving blades in eco-friendly bags to men in Dubai labour camps. The drive started in 2021, when the brutal impact of COVID had emptied many camps — one site that once housed 300 men sheltered only 64.",
    image:
      "https://static.wixstatic.com/media/083907_92a11e84b4dc45aa8b273043e0248a82~mv2.png",
    order: 30,
  },
  {
    slug: "copy-of-maheshwari-foundation-oxyge",
    title: "A Snippet of 2022",
    pillar: "relief",
    date: "2022",
    location: "Howrah, Kolkata, Dubai, Rajasthan",
    description:
      "A 2022 year-in-review across literacy, hunger and health. ~60 children supported at Maheshwari School For All; 8 DKM scholarships awarded; food sponsorship for cow shelters and 500 children at a Paralympics event; an electric water cooler installed at a Howrah school; 40 pairs of shoes for orphanage girls in Kolkata; 400 sanitary napkin packs distributed at a Kolkata high school; a lift installed at a temple in Rajasthan; support for 200 women in Dubai labour camps; and education and treatment for a 12-year-old special-needs child.",
    image:
      "https://static.wixstatic.com/media/083907_9923ecb9fd364dbc9c17393bddac3a1b~mv2.jpg",
    order: 31,
  },
  {
    slug: "covid-19-donations",
    title: "Covid-19 — Daily Wage & Migrant Worker Relief",
    pillar: "relief",
    date: "2 April 2020",
    location: "Howrah, Kolkata, Mumbai, Ajmer, Beawar",
    partners: [
      "Lions Club of Howrah",
      "Future Hope (UK and Kolkata)",
      "Jagriti Foundation Jaipur",
    ],
    beneficiaries:
      "3,400 dry food packets — equivalent to nearly 500,000 meals; each pack fed a family of five for fifteen days",
    description:
      "The foundation pledged INR 50 lakhs (~US$67,000) toward relief for daily wage earners and migrant workers in the first weeks of the pandemic. Trustee Sangeeta Maheshwari also created a 21-day Inner Growth during Covid-19 video series on Life A Spiritual Gym.",
    image:
      "https://static.wixstatic.com/media/083907_9a9eda1a078144d38e9965db8e205f66~mv2.jpeg",
    order: 32,
  },
  {
    slug: "taal-volcano-eruption",
    title: "Taal Volcano Eruption Relief",
    pillar: "relief",
    date: "24 January 2020",
    location: "Lipa, Batangas, Philippines",
    beneficiaries: "~2,000 individuals across 500 families in five villages",
    description:
      "Taal Volcano erupted on 12 January 2020, displacing more than 20,000 people. The foundation contributed US$1,000 to a fundraiser that raised more than US$5,500. Funds bought and distributed 1,010 toiletry sets, 300 sleeping mats, 1,000 water bottles, 300 food packs, plus diapers, sanitary napkins, hygiene products and towels — all in reusable eco-friendly bags across five villages in Lipa, Batangas.",
    image:
      "https://static.wixstatic.com/media/083907_d4e4f3acf71c44a2a7f9874501a753c8~mv2.jpeg",
    order: 33,
  },
  {
    slug: "crpf-soldiers",
    title: "CRPF Soldiers in India",
    pillar: "relief",
    date: "17 February 2019",
    location: "Pulwama, Jammu & Kashmir",
    description:
      "Following the 14 February 2019 Pulwama attack — in which almost fifty paramilitary police died — the foundation donated INR 100,000 in support: INR 75,000 to Mr Bablu Santra (CRPF) and INR 25,000 to Bravehearts of CAPF.",
    image:
      "https://static.wixstatic.com/media/083907_5735c497ce97439cb276854d6a75ddbd~mv2.png",
    order: 34,
  },
  {
    slug: "pondicherry-tsunami",
    title: "Pondicherry Tsunami",
    pillar: "relief",
    date: "Response to the 2004 Indian Ocean tsunami",
    location: "Pondicherry, India",
    partners: ["Mittal Steel employees", "L.N. Mittal"],
    description:
      "The 2004 tsunami devastated many coastlines including parts of India. The foundation raised funds to construct homes for displaced families in Pondicherry, with major contributions from Mittal Steel employees and L.N. Mittal.",
    image:
      "https://static.wixstatic.com/media/083907_3ec45da5710d488982076f459d6793e4~mv2.jpg",
    order: 35,
  },

  // ── Global Partnerships ─────────────────────────────────────────────────
  {
    slug: "father-redemptorist-foundation",
    title: "Father Redemptorist Foundation & Thai Red Cross",
    pillar: "partnerships",
    location: "Chon Buri, Thailand",
    partners: ["Queen Savang Vadhana Memorial Hospital", "Thai Red Cross"],
    description:
      "Teaching and learning support for visually impaired individuals; children's home services; medicine and blood provision for monks, patients and people experiencing poverty. As reflected on this page: at Maheshwari Foundation, we believe in zero deprivation.",
    image:
      "https://static.wixstatic.com/media/083907_3f636425c90746278e42ce5b8b3854da~mv2.jpg",
    order: 40,
  },
  {
    slug: "grass-roots-business-foundation",
    title: "Grassroots Business Fund",
    pillar: "partnerships",
    location: "Africa, Asia, Latin America",
    description:
      "GBF strives to create a world where economic opportunity reaches everyone, growing viable businesses that generate sustainable earnings for people with low incomes across Africa, Asia and Latin America. GBF's High Impact Businesses have generated economic opportunities for over 1.3 million people and improved the lives of 5.2 million more. The foundation has invested US$100,000.",
    image:
      "https://static.wixstatic.com/media/083907_c8ded826d1a14128a6e866c68994aa96~mv2.jpg",
    order: 41,
  },
  {
    slug: "nausarmatatemple",
    title: "Lift Construction at Nausar Mata Temple",
    pillar: "partnerships",
    location: "Pushkar Valley, Ajmer, Rajasthan",
    description:
      "A lift installed at a 1,300-year-old hilltop temple housing nine idols of Maa Durga — to ease the climb for devotees and connect them more readily with their faith and reverence.",
    image:
      "https://static.wixstatic.com/media/083907_518dd411aedb40c4a738d65801d917a6~mv2.jpg",
    order: 42,
  },
  {
    slug: "vatsalya-bhavan",
    title: "Vatsalya Bhavan",
    pillar: "partnerships",
    location: "Khatu, Sikar district, Rajasthan",
    partners: ["Banwari Lal Savitri Bai Charitable Trust"],
    description:
      "Rebuilding Vatsalya — a Dharamshala (pilgrims' rest house) built around 1980 by the Banwari Lal Savitri Bai Charitable Trust. The foundation has pledged INR 1 crore toward the project.",
    image:
      "https://static.wixstatic.com/media/083907_177fbdffb22c4aed983ee7cdb2c08889~mv2.jpg",
    order: 43,
  },
];

export const projectsByPillar: Record<Pillar, Project[]> = {
  health: projects.filter((p) => p.pillar === "health").sort((a, b) => a.order - b.order),
  education: projects.filter((p) => p.pillar === "education").sort((a, b) => a.order - b.order),
  relief: projects.filter((p) => p.pillar === "relief").sort((a, b) => a.order - b.order),
  partnerships: projects
    .filter((p) => p.pillar === "partnerships")
    .sort((a, b) => a.order - b.order),
};

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
