// Trustee bios + photos — ported verbatim from the live site.
// Photo URLs are hotlinked from static.wixstatic.com for now;
// when Angana provides originals, swap to local /public/trustees/* assets.
// Order below = display order on /trustees (2-column grid: rows of 2).

export interface Trustee {
  name: string;
  role: string;
  bio: string;
  photo: string;
  inMemoriam?: boolean;
}

export const trustees: Trustee[] = [
  // Row 1
  {
    name: "Sudhir Maheshwari",
    role: "Trustee",
    bio: "Founder of Synergy, his own investments and advisory venture established in April 2015, with operations across the UAE, UK, Singapore and India.",
    photo:
      "https://static.wixstatic.com/media/083907_191de455f9324cdca7819af0f1b5cf5d~mv2.jpeg",
  },
  {
    name: "Sangeeta Maheshwari",
    role: "Trustee",
    bio: "A global citizen, author and Economics graduate, Sangeeta Maheshwari has keen interests in holistic living and alternative therapies. She is the founder of #LifeASpiritualGym.",
    photo:
      "https://static.wixstatic.com/media/083907_141dceb14f2547198ff374dc386c35e5~mv2_d_2657_3719_s_4_2.jpg",
  },
  // Row 2
  {
    name: "Mr Deo Kumar Maheshwari",
    role: "Founding Trustee — In Memoriam (25 September 1941 – 7 January 2020)",
    bio: "Mr Deo Kumar Maheshwari was born in Vidisha, India on 25 September 1941. He completed his postgraduate studies in Commerce in Ajmer in 1962, then moved to Kolkata where he built a distinguished professional career before retiring in March 2011. He devoted over 50 years to Lions Hospital in Howrah, established and managed two 40-bed hospitals in Howrah Maidan and Uluberia, West Bengal, led Maheshwari School For All — which has educated more than 500 children since 2008 — and in 2018 spearheaded the Howrah Blood Bank and Thalassemia Clinic.",
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
  },
  // Row 3
  {
    name: "Angana Maheshwari",
    role: "Trustee",
    bio: "Angana has had the fortune of a global life. Having lived in five countries — now her sixth — she has had the opportunity to serve her community in many different ways.",
    photo:
      "https://static.wixstatic.com/media/083907_70b68689069544ed986bd212f94e4352~mv2_d_3643_5464_s_4_2.jpg",
  },
  {
    name: "Ayush Maheshwari",
    role: "Trustee",
    bio: "Ayush has had the fortune of living in five countries and travelling to over fifty. With that global exposure he has served various communities along the way.",
    photo:
      "https://static.wixstatic.com/media/083907_470f6121adac4bd9bfbb08bb34615dbc~mv2.jpeg",
  },
];
