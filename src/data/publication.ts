export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "arXiv",
    title: "MLLM-as-a-Judge Exhibits Model Preference Bias",
    authors: "Shuitsu Koyama, Yuiga Wada, Daichi Yashima, Komei Sugiura",
    paperUrl: "https://arxiv.org/abs/2604.11589",
    imageUrl: "/images/mllm.png",
    tldr: "Preprint",
  },
  {
    year: "2026",
    conference: "arXiv",
    title: "Neural Stochastic Processes for Satellite Precipitation Refinement",
    authors:
      "Shunya Nagashima, Takumi Bannai, Shuitsu Koyama, Tomoya Mitsui, Shuntaro Suzuki",
    paperUrl: "https://arxiv.org/abs/2604.10414",
    imageUrl: "/images/nsp.png",
    tldr: "Preprint",
  },
  {
    year: "2026",
    conference: "ICASSP",
    title:
      "PENGUIN: General Vital Sign Reconstruction from PPG with Flow Matching State Space Model",
    authors:
      "Shuntaro Suzuki, Shuitsu Koyama, Shinnosuke Hirano, Shunya Nagashima",
    paperUrl: "https://arxiv.org/abs/2602.03858",
    imageUrl: "/images/penguin.png",
  },
  {
    year: "2026",
    conference: "ICASSP",
    title:
      "A Decomposition-based State Space Model for Multivariate Time-Series Forecasting",
    authors:
      "Shunya Nagashima, Shuntaro Suzuki, Shuitsu Koyama, Shinnosuke Hirano",
    paperUrl: "https://arxiv.org/abs/2602.05389",
    imageUrl: "/images/decomp.png",
  },
  {
    year: "2026",
    conference: "人工知能学会全国大会 (JSAI)",
    title: "MLLM-as-a-Judgeにおける自己選好バイアスの軽減",
    authors: "小山修生, 和田唯我, 八島大地, 杉浦孔明",
    imageUrl: "/images/mllm.png",
  },
  {
    year: "2025",
    conference: "MIRU",
    title: "MLLM-as-a-Judge は自己を選好する",
    authors: "小山修生, 平野愼之助, 松田一起, 杉浦孔明",
    imageUrl: "/images/miru2025.png",
    tldr: "IS2-110",
  },
  {
    year: "2024",
    conference: "MIRU",
    title: "演奏音復元のための手書き邦楽譜文字認識",
    authors: "栗田笑実花, 大山智也, 小山修生, 五十川麻理子",
    imageUrl: "/images/score.png",
  },
];
