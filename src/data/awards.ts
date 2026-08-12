export interface Award {
  year: string;
  title: string;
  organization?: string;
  description?: string;
  url?: string;
}

export const awardData: Award[] = [
  {
    year: "2026",
    title: "MIRU 学生奨励賞",
    organization: "第29回 画像の認識・理解シンポジウム (MIRU)",
    description:
      "To What Extent Does MLLM-as-a-Judge Exhibit Cross-Model Preference Bias?",
  },
  {
    year: "2024",
    title: "KLL-ONE 学生コンテスト 2024 優秀賞",
    organization: "慶應義塾大学理工学部 KLL",
    url: "https://sites.google.com/view/kllincubation",
  },
];
