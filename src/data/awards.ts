export interface Award {
  year: string;
  title: string;
  organization?: string;
  description?: string;
  url?: string;
}

export const awardData: Award[] = [
  {
    year: "2025",
    title: "Sky大浦ICT奨学財団 奨学生",
    organization: "公益財団法人 Sky大浦ICT奨学財団",
    url: "https://www.sky-foundation.or.jp/",
  },
  {
    year: "2025",
    title: "慶應義塾維持会奨学金",
    organization: "慶應義塾",
    url: "https://kikin.keio.ac.jp/ijikai/shogaku/",
  },
  {
    year: "2024",
    title: "慶應義塾維持会奨学金",
    organization: "慶應義塾",
    url: "https://kikin.keio.ac.jp/ijikai/shogaku/",
  },
];
