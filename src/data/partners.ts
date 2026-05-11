// "Other charities" the foundation supports or is connected to.
// Ported from /other-charities on the live site.

export interface Partner {
  name: string;
  description: string;
  website: string;
  logo: string;
}

export const partners: Partner[] = [
  {
    name: "Maggie's Centre",
    description:
      "Provides free practical, emotional and social support to people with cancer and their families.",
    website: "https://www.maggiescentres.org",
    logo: "https://static.wixstatic.com/media/083907_b8067397584a466aa374a45be8540105~mv2.jpg",
  },
  {
    name: "Sangam Centre",
    description:
      "Not-for-profit charity founded by Asian women, offering information, advice and support to communities in London.",
    website: "https://www.sangamcentre.org.uk",
    logo: "https://static.wixstatic.com/media/083907_5b98f9109839474c856ad008c3d35930~mv2.png",
  },
  {
    name: "Akshaya Patra",
    description:
      "Driven by the vision that no child in India shall be deprived of education because of hunger. Distributes meals to over a million underprivileged children daily.",
    website: "https://www.foodforeducation.org.uk",
    logo: "https://static.wixstatic.com/media/083907_29c45a220b3a4723b6f551d9581fb860~mv2.jpg",
  },
  {
    name: "TMC — The Mission for Cancer",
    description:
      "Philanthropic initiative promoting cancer prevention, treatment, and research. Half of its 150 beds provide free or subsidised care.",
    website: "https://www.tmckolkata.com",
    logo: "https://static.wixstatic.com/media/083907_28373f8a9c854ee982c3060517392faf~mv2.jpg",
  },
  {
    name: "Pratham UK",
    description:
      "An organisation that has helped over 35 million disadvantaged children learn to read.",
    website: "https://www.pratham.org.uk",
    logo: "https://static.wixstatic.com/media/083907_48ee0e671327406f9b6b08239cd2aac4~mv2.jpg",
  },
  {
    name: "After Adoption",
    description:
      "Voluntary adoption agency working throughout England and Wales, supporting everyone affected by adoption.",
    website: "https://www.afteradoption.org.uk",
    logo: "https://static.wixstatic.com/media/083907_6e8d3e22dac14ca0a2c70da34505e82e~mv2.jpg",
  },
  {
    name: "Stroke Association",
    description:
      "The UK's stroke charity — supporting survivors, families and carers, and funding stroke prevention and treatment research.",
    website: "https://www.stroke.org.uk",
    logo: "https://static.wixstatic.com/media/083907_bc708510afcd4c9f836d3da53119410d~mv2.jpg",
  },
];
