export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  logoUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep 2024 – Present",
    title: "Intern",
    company: "Neurogica",
    companyUrl: "https://neurogica.com/",
    logoUrl: "/images/logos/neurogica.png",
  },
  {
    date: "Sep 2024",
    title: "Intern",
    company: "Leverages",
    companyUrl: "https://leverages.jp/",
    logoUrl: "/images/logos/leverages.png",
  },
  {
    date: "Aug 2024",
    title: "Intern",
    company: "LayerX",
    companyUrl: "https://layerx.co.jp/",
    logoUrl: "/images/logos/layerx.png",
  },
  {
    date: "Aug 2023 – Sep 2024",
    title: "Intern",
    company: "Taiziii",
    companyUrl: "https://taiziii.com/",
    logoUrl: "/images/logos/taiziii.png",
  },
];
