export interface OtherItem {
  name: string;
  result?: string;
  date?: string;
}

export interface Other {
  title: string;
  description?: string;
  url?: string;
  logoUrl?: string;
  items?: OtherItem[];
}

export const otherData: Other[] = [
  {
    title: "AtCoder",
    description: "Highest rating 1115",
    url: "https://atcoder.jp/users/rafi2",
    logoUrl: "/images/logos/atcoder.png",
  },
  {
    title: "SIGNATE",
    items: [
      {
        name: "Axell AI Contest 2025",
        result: "🥉 Bronze medal",
        date: "2025.07.25 – 2025.08.26",
      },
      {
        name: "テクノプロ・デザイン社 日本舞踊の画像・動画解析チャレンジ",
        result: "🥈 Silver medal",
        date: "2024.09.25 – 2024.11.01",
      },
      {
        name: "Motion Decoding Using Biosignals",
        result: "🥉 Bronze medal",
        date: "2024.07.25 – 2024.10.28",
      },
      {
        name: "RAG-1グランプリ",
        result: "🥈 Silver medal",
        date: "2024.09.05 – 2024.10.10",
      },
    ],
  },
  {
    title: "数学オリンピック 夏季セミナー 2019",
    description:
      "参加（論文選考通過）・『ガロア理論講義』（足立恒雄）を輪読",
    url: "https://www.imojp.org/archive/mo2019/seminar2019/index.html",
  },
];
