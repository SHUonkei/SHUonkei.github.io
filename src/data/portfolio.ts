export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

// No projects yet — add entries here to show a Portfolio section.
export const portfolioData: Portfolio[] = [];
