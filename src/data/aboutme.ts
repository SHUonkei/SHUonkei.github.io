export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Shuitsu Koyama",
  altName: "小山 修生",
  title: "Master's Student (M1)",
  institution: "Keio University",
  institutionUrl: "https://www.keio.ac.jp/",
  // Note that links work in the description
  description:
    "I am a first-year master's student in Computer Science at <a href='https://www.keio.ac.jp/'>Keio University</a>. My research interests center on large language models (LLMs), multimodal LLMs (MLLMs), and the development of evaluation metrics.",
  email: "koyamashu3@keio.jp",
  githubUsername: "SHUonkei",
  linkedinUsername: "shuitsu-koyama-a97845277",
  funDescription: "AtCoder: rating 1115 · Signate: 2 silver, 3 bronze",
  // Add a photo at public/images/profile.jpg and uncomment the next line:
  // imageUrl: "/images/profile.jpg",
};
