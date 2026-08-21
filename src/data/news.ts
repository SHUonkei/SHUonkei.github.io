export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  // NOTE: dates below are approximate — please verify/adjust.
  {
    date: "August 2026",
    title: "First-author paper accepted at EMNLP 2026 Main Conference",
    description:
      "\"Rigel: Self-Distilled Score Adaptation for Image and Video Captioning Evaluation\" was accepted at the EMNLP 2026 Main Conference (acceptance rate 15.4%, h5-index 218). Looking forward to presenting our work in Budapest, Hungary. 🇭🇺",
  },
  {
    date: "August 2026",
    title: "学生奨励賞 at MIRU 2026",
    description:
      "Received the Student Encouragement Award (学生奨励賞) at MIRU 2026 for \"To What Extent Does MLLM-as-a-Judge Exhibit Cross-Model Preference Bias?\".",
  },
  {
    date: "December 2025",
    title: "Two papers accepted at ICASSP 2026",
    description:
      "Two papers (PENGUIN and a decomposition-based state space model for multivariate time-series forecasting) were accepted at ICASSP 2026.",
  },
];
