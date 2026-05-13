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

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/trustees", label: "Trustees" },
  { href: "/our-work", label: "Our Work" },
  { href: "/finance", label: "Finance" },
  { href: "/gratitude", label: "Gratitude" },
  { href: "/partners", label: "Partners" },
] as const;

export const impactStats = [
  { value: "500+", label: "children educated at Maheshwari School For All since 2008" },
  { value: "4,300+", label: "people fed across Dubai labour camps" },
  { value: "23", label: "programmes delivered since 2001" },
  { value: "5", label: "continents reached" },
] as const;

export const pillarMeta = {
  health: {
    title: "Health & Wellbeing",
    blurb:
      "Care for the vulnerable — from blood supply and thalassemia treatment to oxygen provision and inclusion of the differently abled.",
    image:
      "https://static.wixstatic.com/media/083907_7e3bf795da624bf4b2c0d900f2b8151c~mv2.jpg",
  },
  education: {
    title: "Education & Opportunity",
    blurb:
      "Long-term scholarships and school support — from a village pre-school in Howrah to higher education in Kolkata, with stops in Sharjah, Delhi and beyond.",
    image:
      "https://static.wixstatic.com/media/083907_748de6994e704030a179dac20510abef~mv2.jpg",
  },
  relief: {
    title: "Community Relief",
    blurb:
      "Showing up in moments of crisis, and feeding those who feed cities — from labour camps in Dubai to villages in Batangas.",
    image:
      "https://static.wixstatic.com/media/083907_92a11e84b4dc45aa8b273043e0248a82~mv2.png",
  },
  partnerships: {
    title: "Global Partnerships",
    blurb:
      "Multiplying impact through trusted institutional partners — from the Thai Red Cross to the Lions Club to the Grassroots Business Fund.",
    image:
      "https://static.wixstatic.com/media/083907_3f636425c90746278e42ce5b8b3854da~mv2.jpg",
  },
} as const;

export const locations = [
  { country: "India", places: "New Delhi, Kolkata, Howrah, Bhuj, Pondicherry" },
  { country: "United Arab Emirates", places: "Labour camps across Dubai & Sharjah" },
  { country: "Philippines", places: "Nueva Ecija, Batangas" },
  { country: "Uganda", places: "Bwindi" },
  { country: "Thailand", places: "Chon Buri, Bangkok" },
] as const;
