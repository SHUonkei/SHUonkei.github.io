export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // NOTE: years below are inferred (M1 in 2026) — please verify/correct.
  {
    year: "2026 – Present",
    institution: "Keio University",
    degree: "M.S. in Computer Science",
  },
  {
    year: "2022 – 2026",
    institution: "Keio University",
    degree: "B.S. in Computer Science",
  },
];
