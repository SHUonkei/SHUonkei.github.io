export interface OtherItem {
  name: string;
  result?: string;
  date?: string;
}

export interface Other {
  title: string;
  description?: string;
  url?: string;
  items?: OtherItem[];
}

export const otherData: Other[] = [
  {
    title: "AtCoder",
    description: "Highest rating 1115",
    url: "https://atcoder.jp/users/rafi2",
  },
  {
    title: "SIGNATE",
    items: [
      {
        name: "Axell AI Contest 2025",
        result: "🥉 Bronze medal",
        date: "2025",
      },
      {
        name: "【SOTA】Motion Decoding Using Biosignals スケートボードトリック分類チャレンジ",
        result: "🥉 Bronze medal",
        date: "2025",
      },
      {
        name: "テクノプロ・デザイン社 日本舞踊の画像・動画解析チャレンジ",
        result: "🥈 Silver medal",
        date: "2024.09.25 – 2024.11.01",
      },
      {
        name: "RAG-1グランプリ",
        result: "🥈 Silver medal",
        date: "2024.09.05 – 2024.10.10",
      },
    ],
  },
];
