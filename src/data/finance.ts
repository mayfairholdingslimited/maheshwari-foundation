// Annual reports + banking details — ported from /finance on the live site.

export interface AnnualReport {
  year: number;
  pdf: string;
}

export const annualReports: AnnualReport[] = [
  { year: 2024, pdf: "https://static.wixstatic.com/ugd/083907_58c73fa2321744f3b2e233e8eefa2d95.pdf" },
  { year: 2023, pdf: "https://static.wixstatic.com/ugd/083907_b23d63f0228045e9b93c5a1cc7885233.pdf" },
  { year: 2022, pdf: "https://static.wixstatic.com/ugd/083907_57fb3b05a1084b16a67f6d5076edb591.pdf" },
  { year: 2021, pdf: "https://static.wixstatic.com/ugd/083907_5bd997c25e274e029e1f7baaeda0262c.pdf" },
  { year: 2020, pdf: "https://static.wixstatic.com/ugd/083907_7e4a0efdf2734419a9aa3938c0539274.pdf" },
  { year: 2019, pdf: "https://static.wixstatic.com/ugd/083907_095da72ec4c249e19ec8a8b1099e5318.pdf" },
  { year: 2018, pdf: "https://static.wixstatic.com/ugd/083907_e3b972f49f2c46f08d8738fa77c7cd01.pdf" },
  { year: 2017, pdf: "https://static.wixstatic.com/ugd/083907_03f28e8704f9457491829040a31c657e.pdf" },
  { year: 2016, pdf: "https://static.wixstatic.com/ugd/083907_a8f6301408da4296b8e6318a7d88640f.pdf" },
  { year: 2015, pdf: "https://static.wixstatic.com/ugd/083907_c89a14a1a6984c9ea4805737e565c1c0.pdf" },
  { year: 2014, pdf: "https://static.wixstatic.com/ugd/083907_6396f579cf984fd1b51769097d0024bb.pdf" },
  { year: 2013, pdf: "https://static.wixstatic.com/ugd/083907_cfa261a518c74c2495ce5d2b4ecbb1c2.pdf" },
  { year: 2012, pdf: "https://static.wixstatic.com/ugd/083907_867cb5276e044a9ea8e87c3e8fa95e3e.pdf" },
];

export const banking = {
  ukBanker: "HSBC Bank Plc, 69 Pall Mall, London SW1Y 5EY",
  indiaBanker: "ICICI Bank, D-1 Alaknanda Shopping Center, New Delhi 110019",
  accountant: "Jon Mills, Black and White CCA, Herriard Park, Hampshire RG25 2PL",
} as const;

export const financeNote =
  "The audited accounts for Maheshwari Foundation, UK are linked below. The audit of accounts for Maheshwari Foundation India will be undertaken shortly.";
