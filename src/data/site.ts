export const site = {
  name: "Maheshwari Foundation",
  tagline: "Quiet work, lasting change.",
  email: "info@maheshwarifoundation.com",
  charityNumber: "1145228",
  social: {
    instagram: "https://www.instagram.com/maheshwarifoundation/",
    linkedin: "https://www.linkedin.com/company/maheshwari-foundation/",
    facebook: "https://www.facebook.com/theMaheshwariFoundation/",
  },
} as const;

export const impactStats = [
  { value: "4,300+", label: "people fed in Dubai labour camps" },
  { value: "5", label: "countries reached" },
  { value: "8", label: "university students supported at St Xavier's" },
  { value: "4", label: "consecutive years of Ramadan distribution" },
] as const;

export const pillars = [
  {
    id: "health",
    title: "Health & Wellbeing",
    blurb:
      "Care for the most vulnerable — from blood supply and thalassemia treatment to clean water and cancer care.",
    highlights: [
      "Howrah Blood Bank (2019 & 2023)",
      "Thalassemia and blood transfusion programme — since 2021",
      "Filter water coolers — Don Bosco School & Swami Narayan Temple",
      "Cancer treatment for a child, via Lions Club",
    ],
  },
  {
    id: "education",
    title: "Education & Opportunity",
    blurb:
      "Long-term scholarships and school support — from Kolkata to Bwindi to Nueva Ecija.",
    highlights: [
      "DKM Scholarship for Social Work — since 2020",
      "Uganda Education Scholar, Bwindi — since 2023",
      "Philippines Education Scholar — graduated May 2026",
      "St Xavier's University, Kolkata — 8 students since 2021",
    ],
  },
  {
    id: "relief",
    title: "Community Relief",
    blurb:
      "Showing up in moments of crisis, and feeding those who feed cities.",
    highlights: [
      "Dubai labour camps — 4,300+ individuals across 18 camps",
      "Ramadan food distribution — four consecutive years",
      "Taal Volcano relief, Pondicherry Tsunami, Bhuj Earthquake",
      "CRPF soldier support in India",
    ],
  },
  {
    id: "partnerships",
    title: "Global Partnerships",
    blurb:
      "Multiplying impact through trusted institutional partners.",
    highlights: [
      "$100,000 commitment to Lions Club philanthropy",
      "Father Redemptorist Foundation & Thai Red Cross",
      "Grassroots Business Fund",
      "Kailash Satyarthi Children's Foundation",
    ],
  },
] as const;

export const locations = [
  { country: "India", places: "Kolkata, Howrah, Delhi, Pondicherry, Bhuj" },
  { country: "United Arab Emirates", places: "Dubai labour camps" },
  { country: "Philippines", places: "Nueva Ecija, Batangas" },
  { country: "Uganda", places: "Bwindi" },
  { country: "Thailand", places: "Bangkok" },
] as const;
