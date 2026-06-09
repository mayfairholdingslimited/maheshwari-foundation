// All 23 projects ported from /our-work on the live site.
// Each project has a stable slug used for /our-work/[slug] routes.
// Pillar assignments are editorial — used to group projects on the homepage
// and on the /our-work index. Tweak as Angana refines.
//
// `description` = short summary used on listing cards.
// `body`        = full verbatim multi-paragraph text shown on the detail page.

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
  body?: string[];
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
      "The Howrah Blood Bank was formally gifted to the Lions Club of Howrah in June 2023. A new Thalassemia Unit launched on World Thalassemia Day in May 2024, providing regular blood transfusions for thalassemia patients, and a Blood Collection and Transportation Vehicle is planned in the coming months. As Sudhir Maheshwari has shared, this project fulfilled his late father's philanthropic vision.",
    body: [
      "Today, September 25th, 2023 would have been my father, Mr. D.K. Maheshwari's, 82nd birthday. On this occasion, my family and I spent the past weekend in Kolkata for a very important occasion. Before my father passed away, all too suddenly at my Dubai home in 2020, he had envisioned setting up a Blood Bank in Howrah. He had requested me and my family to consider sponsoring the entire project. This blood centre was built in 2019 but couldn't be commissioned as Covid caused many unplanned delays. Finally, the Centre was inaugurated in June this year. Maheshwari Foundation formally gifted this to the Lions Club of Howrah in Jaduberia yesterday. We also gifted and inaugurated a Thalassemia Unit, which should be able to serve society at large, especially those young children who need this life support regularly. Last but not least, we announced that we will gift a state-of-the-art, customised Blood Collection and Transportation Vehicle (BCTV). The BCTV will enhance the outreach programme to collect blood from donors in far and wide places. The BCTV is expected to be operational in 2-3 months.",
      "My father was a phenomenal philanthropist. He moved from Rajasthan to Kolkata after completing his Masters. He slowly and steadily built his professional career eventually reaching the position of CEO in a couple of jute and industrial chemical companies. Alongside his endeavour to make a decent living so that he could provide a good education to his three children, me being the eldest, he always gave the rest of his time to social causes, one of which was the Lions Club of Howrah. This Club has a history of 62 years and my father was an active member for almost 50 of those years. He was a disciplined and organised person — motivating and leading from the front was his forte. Of those fifty-odd years, for twenty years he was the Chairman of the two charitable hospitals that this club runs in Howrah.",
      "My family and friends feel blessed and grateful to have finished this important work that my father had begun. The challenges remain to make it a self-sustaining venture run professionally as an institution. We are enthused by the enthusiasm of so many members of the Club to achieve this stage soonest. We memorialised the entire Blood Bank to my father but above all, we dedicated this to every member of the Lions Club of Howrah, whose dedication and selfless work has motivated and inspired me all through my childhood till date.",
      "In an address to the guests by my son, he recounted a good statement from the Noble Laureate, Shri Rabindranath Tagore. \"Life is given to us; we earn it by giving it.\" The void left by my father continues to be felt by so many and he is still so fondly remembered by so many, is a testament to the fact that a life well loved is a life well lived. He continues to be a benchmark in his broad network of family, friends and professionals.",
      "— Sudhir Maheshwari",
      "On World Thalassemia Day, marked by this year's theme 'Empowering Lives, Embracing Progress: Equitable and Accessible Thalassaemia Treatment for All,' Synergy Capital and Maheshwari Foundation unveiled the Thalassemia Unit at the Lions Club of Howrah Blood Centre in India. At the inaugural event, six children underwent blood transfusions.",
      "World Thalassemia Day, established in 1994 by the Thalassemia International Federation (TIF), honors the memory of Panos Englezos's son, who succumbed to the disease. It serves as a poignant reminder of the global impact of thalassemia. Thalassemia encompasses a spectrum of inherited blood disorders characterized by diminished production of healthy red blood cells. Individuals with thalassemia lack adequate hemoglobin, the essential protein responsible for oxygen transportation in the body.",
      "Maheshwari Foundation and Synergy Capital are committed to raising awareness about thalassemia and providing support to affected children and their families, aiming to alleviate their challenges.",
      "Monday 27th May, 2024",
    ],
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
    body: [
      "In October 2018, Howrah Lions Club in West Bengal, India and Maheshwari Foundation identified a need to commission a Blood Bank in Howrah. Howrah is located across from Kolkata, on the western bank of the Hooghly River. Howrah is one of the most densely urbanized cities (population of 5 million people) of India and lacks a well-functioning private blood bank.",
      "The Blood Bank and Thalassemia Clinic is being commissioned at the Jadurberia Hospital of Howrah Lions' Club and is expected to be completed by the middle of 2019 at a cost of under ₹1 Crore (~$150,000).",
      "The Foundation is grateful to the Howrah Lions' Club for giving such an opportunity to commission a high-impact project in and around Howrah.",
    ],
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
    body: [
      "COVID-19 crisis in India continues to rage and is demolishing lives and livelihood of millions.",
      "Maheshwari Foundation, together with Synergy Capital, are grateful to source and provide 25 European oxygen concentrators of 5 lpm and 10 lpm capacities. Since 10 May 2021, these machines are being distributed to various organizations and hospitals across India.",
      "Our oxygen concentrators were distributed to organizations and hospitals in Kolkata, Howrah, Jaipur, Nasik, and New Delhi. Recipients included Lions Hospitals (3 hospitals across West Bengal), Future Hope School in Kolkata, the Society of Indian Children's Welfare in Kolkata, the Kailash Satyarthi Bal Ashram Foundation in Viratnagar, Jagriti Foundation in Jaipur, Sri Jinwaram, and Rural Hospital Dangsaundane in Nasik, Maharashtra.",
      "The relief work was carried out with full precautions in our social work. We hope that our small contribution has gone a long way in helping those who needed it the most. We continue to send our prayers to those fighting for their lives and send our love and gratitude to the front-line health and social welfare workers who are dedicating their lives to save people.",
    ],
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
    body: [
      "The Manzil Centre of Disabilities is a non-profit organization where they actively promote inclusion by providing a professional learning environment for persons with disabilities. Their aim is to nurture their students' potential and develop their skills of self-help, social, educational and vocational skills. All these skills are required to function in society. Manzil works on shaping an inclusive society.",
    ],
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
    body: [
      "The Bhuj earthquake of 2001 caused considerable and unprecedented loss of life and livelihood.",
      "In 2002, in collaboration with the Lions Club, the Foundation constructed a 40-bed hospital in Bhuj for the local community.",
    ],
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
    body: [
      "Maheshwari Foundation is proud to announce The Deo Kumar Maheshwari Scholarship for Studies in Social Work.",
      "The scholarship is being commissioned in memory of Late Deo Kumar Maheshwari, Founding trustee of Maheshwari Foundation in India. The Foundation is seeking to award scholarships to ten deserving candidates.",
      "Giving back to society is an integral aspect of our lives. Many people live below the poverty line and do not have a roof over their heads with no clean water to drink. At Maheshwari Foundation, our philosophy is to contribute to improving the living conditions for our communities.",
      "Mr DK Maheshwari committed over 50 years of his life to Lions Hospital in Howrah, where he set up and managed two hospitals with 40 beds capacity each in Howrah Maidan and Uluberia, West Bengal. He also led the Maheshwari School For All in Howrah where he looked after the well-being and education of over 500 children since 2008.",
      "In 2018, he led the Foundation's project to build a much-needed state-of-the-art Blood Bank and Thalassemia Clinic in Howrah which is due to be made operational soon this year.",
      "To continue his legacy, we are proud to announce this scholarship, so that his hard work and dedication to giving back to society can be passed on to the generations to come.",
      "Scholarship Eligibility",
      "The scholarship is intended to support deserving candidates who wish to pursue studies in Social Work at undergraduate or postgraduate levels. This scholarship is open to students all over India and will be selected through an application process. The scholarship is meant to meet the tuition fees of those students who will be accepted by the trustees after due consideration to their application. Any interested candidate may write to info@maheshwarifoundation.com with their background and plans along with an explanation of why they believe their case to be deserving. A copy of the CV and a college admission letter is mandatory. Already admitted students also qualify to apply.",
      "10th February 2020",
    ],
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
    body: [
      "We found a gap in education between the 2 years to 6 years old underprivileged children. This gap made it challenging for children to enter mainstream schools.",
      "Two villages in Howrah — Gondalpara and Katliya — were identified, and in each village a pre-school was set up in 2008. The aim was to initiate and help focus the little ones towards broad-based education.",
      "Our children learn poetry, singing, art and sketching. They watch national geography, dance and explore puzzle solving. They learn reading and writing in Bengali and English and are taught numerical abilities. They develop social skills and some of them have been absorbed in mainstream English-medium private schools.",
      "Our children are provided with nutritious meals and snacks daily and are taught the merits of hygiene and cleanliness.",
      "From these two schools in Howrah, approximately 60 children benefit annually from this facility. Since 2008, approximately 500 children have accessed this facility.",
    ],
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
    body: [
      "Nobel Peace Laureate, Kailash Satyarthi, has devoted his life to ensure each child has a safe place to live, safe food to eat and a place to study.",
      "The KSCF believes in 3 Ps: Policy, Practice and People. They believe that children have the right to live freely, work safely and be healthy. It is their fundamental right to live with dignity.",
      "At Maheshwari Foundation, we want to improve the lives of the disadvantaged and empower them to live independently. We collaborated with the KSCF to bring awareness in the UAE.",
      "Synergy Capital and Maheshwari Foundation hosted Mr Kailash Satyarthi for 3 days. With 6 events throughout those 3 days, we had over 3,000 participants (students, teachers, entrepreneurs and corporates) inspired by his work and initiatives, pledging to ensure child slavery is abolished globally.",
    ],
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
    body: [
      "Our Trustee, Angana Maheshwari, started a fundraiser for her birthday in 2019 for 70 boys at the Bal Ashram, part of the Kailash Satyarthi's Children Foundation.",
      "Kailash Satyarthi is a Nobel Peace Laureate. He won the award in 2014 for his dedication to eradicating child slavery globally. He has rescued around 88,000 children from various forms of child labour and child sex trafficking, and he isn't stopping his mission anytime soon.",
      "After spending 5 weeks in Viratnagar, Rajasthan, Angana decided to do some fundraising for the boys at Bal Ashram. Every day from 5–6 pm the boys would play an hour of cricket. Their love for cricket is like no other! Angana raised over $3,000 so that the boys can enhance their physical abilities with new sports equipment.",
      "Thank you to everyone who donated to this cause back in 2019 for her fundraiser. Due to COVID-19, there were many delays in procuring items to donate to the boys, but we are happy to share that all 70 boys at the Bal Ashram have now received a personalised National Indian team Cricket Kit which includes new training shoes, a personalised steel water bottle, and a professional cricket net to practice the game. The cricket net has been installed on Bal Ashram's grounds.",
      "Angana is grateful to everyone who donated for this cause — it truly means the world to her and the boys.",
    ],
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
    body: [
      "The Foundation has supported various education-oriented sponsorships.",
      "Future Hope and St Xavier's, Kolkata — The Foundation supports five female students of Future Hope to undertake higher University education at St Xavier's College, Kolkata in order that they have the opportunity to realise their capability and dreams.",
      "Tawoon's WAJD Program, Gaza — The Foundation supports a child who was orphaned in 2014 in Gaza to undertake studies in order that the affected family can rebuild their lives.",
      "Vedanta Academy, India — Vedanta Academy near Mumbai and Pune is a world resource for study, research and dissemination of Vedanta. The Foundation is participating in the educational sponsorship at this esteemed organization.",
      "Manzil, Sharjah — Manzil Centre in Sharjah, UAE is a centre for students with disabilities. The Foundation is participating in the educational sponsorship at this exemplary organization.",
      "Society of Indian Children's Welfare, Kolkata, India — The Foundation's trustees have regularly participated in the educational sponsorships at this noble organisation.",
    ],
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
    body: [
      "St Xavier's College, Kolkata was founded in 1860 by the Society of Jesus and is a Christian Minority Higher Educational Institution.",
      "Vision SXC 2020 involved developing a modern Business School at Rajarhat. The Trustees of Maheshwari Foundation helped raise nearly US$4 million in 2013 for the expansion project, alongside direct financial contributions from the Foundation.",
    ],
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
    body: [
      "Future Hope is a charitable organisation which provides opportunity through its homes, school and medical programme for some of the most vulnerable children from the streets and slums of Kolkata, India.",
      "The work focuses on three primary initiatives: Street to School, Life Skills, and Transformation.",
    ],
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
    body: [
      "This day care centre was set up in 2011 in Delhi, at the New Friends Colony premises of Leonard Cheshire Disability. The aim was to empower special needs underprivileged children to become independent and live with more dignity.",
      "Children were provided with daily to-and-fro private transportation with qualified staff from home to centre. They were provided with nutritious meals and snacks daily and were taught the merits of hygiene and cleanliness.",
      "Disabilities ranged from multiple sclerosis to mute to autism. Children were suitably grouped and educated and were looked after by full-time special needs teachers and dedicated staff. The centre had regular visits by physiotherapist, dance teacher, arts and craft teacher, and were imparted with vocational training.",
      "The training and education imparted at this centre enabled children to participate and win awards in art and dance competitions. The holistic program at the centre facilitated children to be happier, more independent and confident individuals.",
      "The program started with 10 children and the strength grew to 90 children of varying ages and disabilities. More than 300 children had accessed this facility since 2011. The centre ran from 2011 till 2017 and many children were absorbed by mainstream schools and others moved on to bigger programs.",
      "Maheshwari Foundation is grateful to Leonard Cheshire Disability, New Delhi for helping us in hosting and running this centre at its premises.",
    ],
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
    body: [
      "Maheshwari Foundation and Synergy Capital collaborated with Little People Big Hearts to donate the following items to some labour camps around Dubai. Packed in eco-friendly bags: rice, cooking oil, lentils, detergent, bath soaps, toothpaste and shaving blades. We are grateful to Little People Big Hearts for joining hands and helping us facilitate this during Ramadan.",
      "A camp that used to house over 300 men now houses only 64 men. This shows the brutal impact that the labour camps have seen because of Covid. Many have lost their jobs and those who remain continue to have hope that 'normal' life will resume. The amazing team behind Maheshwari Foundation and Synergy Capital hand-packaged individual bags of essential items for these incredible men and distributed them as conversations flowed about life, family back home, and the hope they still hold.",
    ],
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
    body: [
      "Over the course of 2022, we continued to combat the three pillars of our Foundation: literacy, hunger and health.",
      "LITERACY — We are so happy that Maheshwari School For All restarted and is in full swing after pausing due to the Covid-19 pandemic. Around 60 young children aged 2–6 study at our schools in Howrah District, West Bengal. The schools have been running for over ten years and have churned over 500 young children to higher education. Moreover, all eight scholarships pledged for young girls' university education were honoured under the Deo Kumar Maheshwari Scholarship.",
      "HUNGER & THIRST — The Foundation sponsored food to the Cow Shelter Home, which provides grains and nutrients to an animal that feeds and provides to many people. We also sponsored food for 500 children for a Paralympics event organised by Lions Club District 322B1. Finally, we are grateful to have sponsored an electric water cooler in a school in Howrah, West Bengal.",
      "HEALTH — We gifted 40 pairs of shoes to girls in an orphanage in Kolkata and distributed 400 packs of sanitary napkins to a high school in Kolkata, India, to help with hygiene. In Dubai, we visited the Senses Residential and Day Care for Special Needs in July. It was an overwhelming and gratifying experience! We spent 3 hours in the morning with children and teachers and returned with lots of food for thought. We feel blessed to contribute to and support their plans to empower their children. In addition, we sponsored a 12-year-old special needs child for school education and treatment of his limbs of hands and feet. We are also grateful to have gifted hampers of essential food and toiletries to 200 women living in labour camps in Dubai. Finally, we installed a lift / elevator at a Temple situated on a large hill in Rajasthan, which thousands of people visit daily. Without the lift, it was difficult for the elderly and disabled devotees to reach the Temple.",
      "We are grateful to be able to give back to our community in various ways, and we hope to continue helping our community in 2023.",
    ],
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
    body: [
      "Food packets distributed to 3,400 families, good for nearly 500,000 meals.",
      "Maheshwari Foundation is pleased to have pledged Indian Rupees 50 lakhs or US $67,000 for the relief effort for those who need it, with a specific target group of daily wage earners and migrant workers, to support them in their day-to-day fight against the Coronavirus (Covid-19) pandemic.",
      "The pledge is being used to support those who have been drastically affected in their day-to-day lives by the coronavirus pandemic and will be used to aid them to get through these tough times.",
      "As part of this, the Foundation has already provided over 3,400 dry food packets in Howrah, Kolkata, Mumbai, Ajmer and Beawar, in collaboration with the Lions Club of Howrah, Future Hope UK and Kolkata, and Jagriti Foundation, Jaipur. The food packets met the needs of 3,400 families of a size of five for 15 days and comprised nearly 15 kgs of grain, spices and other provisions each.",
      "The Foundation remains on standby to support and help those people and places that may be overlooked by larger charitable organizations and international government aid.",
      "The relief work was carried out with full precautions in our social work. We hope that our small contribution has gone a long way in helping those who needed it the most.",
      "As part of our efforts to help, our Trustee and Founder of Life A Spiritual Gym, Sangeeta Maheshwari, has also done a 21-day video series of 'Inner Growth during Covid19.'",
      "We thank all the millions of heroes who are supporting constructively and selflessly to deal with the Covid 19 relief efforts.",
      "— Maheshwari Foundation",
      "\"Giving is Living…Living is Giving\"",
    ],
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
    body: [
      "On 12 January 2020, the Taal Volcano, located 60 kilometres south of the capital Manila on the island of Luzon in the Philippines, erupted, spewing ash up to 14 kilometres into the air. This eruption displaced over 20,000 people from their homes and villages.",
      "Maheshwari Foundation pledged $1,000 to an initiative by a Philippines national in Dubai that resulted in a fundraiser of over $5,500. From the fundraising, items were bought and distributed to 5 Barangays (villages) in the area of Lipa Batangas to help over 2,000 individuals across 500 families.",
      "Items distributed: 1,010 toiletry-bag sets (toothbrush, toothpaste, face towels, mosquito repellent, baby wipes); 300 sleeping mats; 10 boxes of diapers; 1,000 bottles of water; 260 pieces of sanitary napkins; 160 baby diapers; 4 gallons of shampoo; 5 litres of hand soap; and approximately 40 bags of face towels, toothpaste and lotion.",
      "All items were packed in eco-friendly bags so that evacuees can re-use them for their personal use. Furthermore, 300 pieces of food packs consisting of rice, sardines and noodles were distributed to the evacuees relocated in Trece Martires City, 45 kilometres from Taal Volcano.",
    ],
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
    body: [
      "On 14 February 2019, in the Pulwama attack, almost fifty paramilitary police died. In response, the Foundation donated a total of INR 100,000: INR 75,000 to Mr Bablu Santra (CRPF) and INR 25,000 to Bravehearts of CAPF.",
    ],
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
    body: [
      "The tsunami of 2004 lashed many parts of the world including India, bringing about untold miseries and loss of life to those affected.",
      "The Foundation raised funds to construct homes for displaced families in Pondicherry. Major donors included Mittal Steel employees and L.N. Mittal.",
    ],
    image:
      "https://static.wixstatic.com/media/083907_3ec45da5710d488982076f459d6793e4~mv2.jpg",
    order: 35,
  },
  {
    slug: "nausarmatatemple",
    title: "Lift Construction at Nausar Mata Temple",
    pillar: "relief",
    location: "Pushkar Valley, Ajmer, Rajasthan",
    description:
      "A lift installed at a 1,300-year-old hilltop temple housing nine idols of Maa Durga — to ease the climb for devotees and connect them more readily with their faith and reverence.",
    body: [
      "Nausar Mata Temple is a 1,300-year-old hilltop temple in the Pushkar Valley of Ajmer, Rajasthan, housing nine idols of Maa Durga. The Foundation installed a lift for the ease of devotees to connect with their faith and reverence.",
    ],
    image:
      "https://static.wixstatic.com/media/083907_518dd411aedb40c4a738d65801d917a6~mv2.jpg",
    order: 36,
  },
  {
    slug: "vatsalya-bhavan",
    title: "Vatsalya Bhavan",
    pillar: "relief",
    location: "Khatu, Sikar district, Rajasthan",
    partners: ["Banwari Lal Savitri Bai Charitable Trust"],
    description:
      "Rebuilding Vatsalya — a Dharamshala (pilgrims' rest house) built around 1980 by the Banwari Lal Savitri Bai Charitable Trust. The foundation has pledged INR 1 crore toward the project.",
    body: [
      "The Foundation is rebuilding an existing Dharamshala (pilgrims' rest house) named Vatsalya, built around 1980 by the Banwari Lal Savitri Bai Charitable Trust in Khatu, Sikar district, Rajasthan.",
      "The Foundation has pledged INR 1 crore toward the project, with completion expected in 2019.",
    ],
    image:
      "https://static.wixstatic.com/media/083907_177fbdffb22c4aed983ee7cdb2c08889~mv2.jpg",
    order: 37,
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
    body: [
      "At Maheshwari Foundation, we believe in zero deprivation. Along the lines of our Blood Bank project in Howrah (India), we supported both the Father Redemptorist Foundation and the Queen Savang Vadhana Memorial Hospital in Chon Buri, Thailand.",
      "The Father Redemptorist Foundation supports teaching and learning for the visually impaired and supports an on-site children's home.",
      "The Queen Savang Vadhana Memorial Hospital supports the medicine and blood for monks, patients and paupers.",
      "Our pledge of over $9,000 supports the above, along with new medical equipment at the Queen Savang Vadhana Memorial Hospital.",
    ],
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
    body: [
      "Grassroots Business Fund (GBF) strives to create a world where economic opportunity reaches everyone. Their mission is to grow viable businesses that generate sustainable earnings or savings for people with low income in Africa, Asia, and Latin America.",
      "GBF's High Impact Businesses have generated economic opportunities for over 1.3 million people and improved the lives of an additional 5.2 million family members.",
      "Maheshwari Foundation investment: US$100,000.",
    ],
    image:
      "https://static.wixstatic.com/media/083907_c8ded826d1a14128a6e866c68994aa96~mv2.jpg",
    order: 41,
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

// ── Country tagging ─────────────────────────────────────────────────────────
// Country names match the GeoReach entries in site.ts exactly, so clicking a
// country on the homepage opens that country's programmes (Sangeeta: "click on
// countries and it should show the country work"). Keyed by project slug.
const projectCountries: Record<string, string[]> = {
  "howrah-blood-bank-2023": ["India"],
  "howrah-blood-bank": ["India"],
  "oxygen-concentrators-donation": ["India"],
  "manzil-centre-of-disabilities": ["United Arab Emirates"],
  "bhuj-earthquake": ["India"],
  "the-dkm-scholarship": ["India"],
  "maheshwari-school-for-all": ["India"],
  "kailash-satyarthi-foundation": ["India"],
  "cricket-kit-and-practice-net-for-bal-ash-1": ["India"],
  "educational-sponsorship": ["India", "United Arab Emirates"],
  "st-xaviers-kolkata": ["India"],
  "future-hope": ["India"],
  "stepping-stone-day-care-centre": ["India"],
  "copy-of-cricket-kit-and-practice-net": ["United Arab Emirates"],
  "copy-of-maheshwari-foundation-oxyge": ["India", "United Arab Emirates"],
  "covid-19-donations": ["India"],
  "taal-volcano-eruption": ["Philippines"],
  "crpf-soldiers": ["India"],
  "pondicherry-tsunami": ["India"],
  "father-redemptorist-foundation": ["Thailand"],
  "nausarmatatemple": ["India"],
  "vatsalya-bhavan": ["India"],
  // grass-roots-business-foundation spans Africa/Asia/Latin America — no single
  // GeoReach country, so it is intentionally left untagged.
};

export function countriesForProject(slug: string): string[] {
  return projectCountries[slug] ?? [];
}

export function projectsByCountry(country: string): Project[] {
  return projects
    .filter((p) => countriesForProject(p.slug).includes(country))
    .sort((a, b) => a.order - b.order);
}
