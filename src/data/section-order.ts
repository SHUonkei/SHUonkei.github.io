export enum Section {
  Education = "education",
  Experience = "experience",
  Portfolio = "portfolio",
  Publication = "publication",
  News = "news",
  Award = "award",
  Fellowship = "fellowship",
  Service = "service",
  Other = "other",
}

// Sections rendered above the tab bar, in order.
export const sectionOrder = [Section.News];

export interface TabGroup {
  label: string;
  sections: Section[];
}

// Sections grouped into tabs. A tab holding a single section hides its own
// heading, since the tab label already names it.
export const tabGroups: TabGroup[] = [
  { label: "Publications", sections: [Section.Publication] },
  { label: "Awards", sections: [Section.Award, Section.Fellowship] },
  { label: "Experience", sections: [Section.Experience, Section.Education] },
  { label: "Other", sections: [Section.Service, Section.Portfolio, Section.Other] },
];
