// Trustee bios + photos — ported verbatim from the live site.
// Photo URLs are hotlinked from static.wixstatic.com for now;
// when Angana provides originals, swap to local /public/trustees/* assets.
// Order below = display order on /trustees (2-column grid: rows of 2).

export interface Trustee {
  name: string;
  role: string;
  bio: string;
  /** Optional extra bio text, hidden behind a "Read more" toggle. */
  bioMore?: string;
  photo: string;
  inMemoriam?: boolean;
  /** LinkedIn profile URL — when set, the trustee's name + photo link out. */
  linkedin?: string;
}

export const trustees: Trustee[] = [
  // Row 1
  {
    name: "Sudhir Maheshwari",
    role: "Trustee",
    bio: "Co-Founder of the Maheshwari Foundation and Founder & Managing Director of Synergy Capital — his investment and advisory venture established in April 2015, with operations spanning the UAE, UK, India and Singapore. His mission was, and remains, to demonstrate that care knows no borders.",
    photo: "/trustees/sudhir.jpg",
    linkedin: "https://www.linkedin.com/in/sudhir-maheshwari/",
  },
  {
    name: "Sangeeta Maheshwari",
    role: "Trustee",
    bio: "A global citizen, author and Economics graduate, Sangeeta Maheshwari brings a deep passion for holistic living and alternative therapies to everything she does. Through her most recent book, \u201cFill Your Own Cup,\u201d she inspires readers to embrace self-care and wellness as powerful catalysts for meaningful change.",
    photo: "/trustees/sangeeta.jpg",
    linkedin: "https://www.linkedin.com/in/sangeeta-maheshwari/",
  },
  // Row 2
  {
    name: "Mr Deo Kumar Maheshwari",
    role: "Founding Trustee — In Memoriam (25 September 1941 – 7 January 2020)",
    bio: "Mr Deo Kumar Maheshwari was born in Vidisha, India on 25 September 1941. He completed his postgraduate studies in Commerce in Ajmer in 1962, then moved to Kolkata where he built a distinguished professional career before retiring in March 2011.",
    bioMore: "He devoted over 50 years to Lions Hospital in Howrah, established and managed two 40-bed hospitals in Howrah Maidan and Uluberia, West Bengal, led Maheshwari School For All — which has educated more than 500 children since 2008 — and in 2018 spearheaded the Howrah Blood Bank and Thalassemia Clinic.",
    photo:
      "https://static.wixstatic.com/media/083907_67fc47deaba24172b51105bf891af25d~mv2.jpg",
    inMemoriam: true,
  },
  {
    name: "Vishwanath Prasad",
    role: "India Trustee",
    bio: "Vishwanath is the India Trustee and an administrator for the Stepping Stones school in New Delhi, India.",
    photo:
      "https://static.wixstatic.com/media/083907_6669609f044a418aa5c606c67f602499~mv2.png",
    linkedin: "https://www.linkedin.com/in/vishwanath-prasad-b8b26a31a/",
  },
  // Row 3
  {
    name: "Angana Maheshwari",
    role: "Trustee",
    bio: "Angana has had the fortune of a global life. Having lived in five countries — now her sixth — she has had the opportunity to serve her community in many different ways.",
    photo: "/trustees/angana.jpg",
    linkedin: "https://www.linkedin.com/in/anganamaheshwari/",
  },
  {
    name: "Ayush Maheshwari",
    role: "Trustee",
    bio: "Ayush has had the fortune of living in five countries and travelling to over fifty. With that global exposure he has served various communities along the way.",
    photo: "/trustees/ayush.jpg",
    linkedin: "https://www.linkedin.com/in/ayush-maheshwari-660519138/",
  },
];
