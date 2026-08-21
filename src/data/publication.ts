export type VenueType = "international" | "domestic" | "preprint";

export interface Publication {
  year: string;
  conference: string;
  venueType: VenueType;
  title: string;
  authors: string;
  paperUrl?: string;
  slidesUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "EMNLP",
    venueType: "international",
    title:
      "Rigel: Self-Distilled Score Adaptation for Image and Video Captioning Evaluation",
    authors:
      "Shuitsu Koyama, Kazuki Matsuda, Yuiga Wada, Shinnosuke Hirano, Daichi Yashima, Komei Sugiura",
    paperUrl: "https://arxiv.org/abs/2606.29997",
    imageUrl: "/images/rigel.png",
    tldr: "Main Conference (acceptance rate 15.4%, h5-index 218)",
  },
  {
    year: "2026",
    conference: "ICASSP",
    venueType: "international",
    title:
      "PENGUIN: General Vital Sign Reconstruction from PPG with Flow Matching State Space Model",
    authors:
      "Shuntaro Suzuki, Shuitsu Koyama, Shinnosuke Hirano, Shunya Nagashima",
    paperUrl: "https://arxiv.org/abs/2602.03858",
    slidesUrl:
      "https://speakerdeck.com/neurogica/penguin-general-vital-sign-reconstruction-from-ppg-with-flow-matching-state-space-models-icassp-2026",
    imageUrl: "/images/penguin.png",
    award: "🎤 Oral Presentation",
    tldr: "Acceptance rate 41.3%",
  },
  {
    year: "2026",
    conference: "ICASSP",
    venueType: "international",
    title:
      "A Decomposition-based State Space Model for Multivariate Time-Series Forecasting",
    authors:
      "Shunya Nagashima, Shuntaro Suzuki, Shuitsu Koyama, Shinnosuke Hirano",
    paperUrl: "https://arxiv.org/abs/2602.05389",
    slidesUrl:
      "https://speakerdeck.com/neurogica/decompssm-a-decomposition-based-state-space-model-for-multivariate-time-series-forecasting-icassp-2026",
    imageUrl: "/images/decomp.png",
    award: "🎤 Oral Presentation",
    tldr: "Acceptance rate 41.3%",
  },
  {
    year: "2026",
    conference: "MIRU",
    venueType: "domestic",
    title:
      "To What Extent Does MLLM-as-a-Judge Exhibit Cross-Model Preference Bias?",
    authors: "Shuitsu Koyama, Yuiga Wada, Daichi Yashima, Komei Sugiura",
    imageUrl: "/images/philautia.png",
    award: "学生奨励賞 (Student Encouragement Award)",
    tldr: "OS1E-03 (査読有, 採択率 33.5%)",
  },
  {
    year: "2026",
    conference: "MIRU",
    venueType: "domestic",
    title: "Speculative Decodingに基づく高速な画像キャプション向け自動評価尺度",
    authors: "野口拓海, 和田唯我, 小山修生, 杉浦孔明",
    imageUrl: "/images/kaus.png",
  },
  {
    year: "2026",
    conference: "MIRU",
    venueType: "domestic",
    title: "Binomial Deviance ResidualによるMLLM-as-a-Judgeのモデル選好の解析",
    authors: "細屋達稀, 小山修生, 八島大地, 和田唯我, 杉浦孔明",
    imageUrl: "/images/bdr.png",
  },
  {
    year: "2026",
    conference: "人工知能学会全国大会 (JSAI)",
    venueType: "domestic",
    title: "MLLM-as-a-Judgeにおける自己選好バイアスの軽減",
    authors: "小山修生, 和田唯我, 八島大地, 杉浦孔明",
    imageUrl: "/images/mllm.png",
  },
  {
    year: "2025",
    conference: "MIRU",
    venueType: "domestic",
    title: "MLLM-as-a-Judge は自己を選好する",
    authors: "小山修生, 平野愼之助, 松田一起, 杉浦孔明",
    imageUrl: "/images/miru2025.png",
    tldr: "IS2-110",
  },
  {
    year: "2024",
    conference: "MIRU",
    venueType: "domestic",
    title: "演奏音復元のための手書き邦楽譜文字認識",
    authors: "栗田笑実花, 大山智也, 小山修生, 五十川麻理子",
    imageUrl: "/images/score.png",
  },
  {
    year: "2026",
    conference: "arXiv",
    venueType: "preprint",
    title: "MLLM-as-a-Judge Exhibits Model Preference Bias",
    authors: "Shuitsu Koyama, Yuiga Wada, Daichi Yashima, Komei Sugiura",
    paperUrl: "https://arxiv.org/abs/2604.11589",
    imageUrl: "/images/mllm.png",
  },
  {
    year: "2026",
    conference: "arXiv",
    venueType: "preprint",
    title: "Neural Stochastic Processes for Satellite Precipitation Refinement",
    authors:
      "Shunya Nagashima, Takumi Bannai, Shuitsu Koyama, Tomoya Mitsui, Shuntaro Suzuki",
    paperUrl: "https://arxiv.org/abs/2604.10414",
    imageUrl: "/images/nsp.png",
  },
];
