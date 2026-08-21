import { ReactNode } from "react";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationGroup } from "@/components/publication-group";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { AwardEntry } from "@/components/award-entry";
import { awardData } from "@/data/awards";
import { fellowshipData } from "@/data/fellowships";
import { OtherEntry } from "@/components/other-entry";
import { otherData } from "@/data/others";
import { serviceData } from "@/data/service";
import { SectionTabs, Tab } from "@/components/section-tabs";
import { sectionOrder, tabGroups, Section } from "@/data/section-order";

const sectionTitles: Record<Section, string> = {
  [Section.News]: "News",
  [Section.Education]: "Education",
  [Section.Publication]: "Publications",
  [Section.Experience]: "Experience",
  [Section.Award]: "Awards",
  [Section.Fellowship]: "Fellowships",
  [Section.Portfolio]: "Portfolio",
  [Section.Service]: "Academic Service",
  [Section.Other]: "Other",
};

// Returns the body of a section, or null when it has no entries.
function sectionBody(section: Section): ReactNode {
  switch (section) {
    case Section.News:
      return newsData.length > 0 ? (
        <div className="space-y-12">
          {newsData.map((news, index) => (
            <NewsEntry key={index} news={news} />
          ))}
        </div>
      ) : null;
    case Section.Education:
      return educationData.length > 0 ? (
        <div className="space-y-12">
          {educationData.map((education, index) => (
            <EducationEntry key={index} education={education} />
          ))}
        </div>
      ) : null;
    case Section.Publication:
      return publicationData.length > 0 ? (
        <div className="space-y-16">
          <PublicationGroup
            title="International Conference"
            publications={publicationData.filter(
              (p) => p.venueType === "international",
            )}
          />
          <PublicationGroup
            title="Domestic Conference"
            publications={publicationData.filter(
              (p) => p.venueType === "domestic",
            )}
          />
          <PublicationGroup
            title="Preprint"
            publications={publicationData.filter(
              (p) => p.venueType === "preprint",
            )}
          />
        </div>
      ) : null;
    case Section.Experience:
      return experienceData.length > 0 ? (
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <ExperienceEntry key={index} experience={experience} />
          ))}
        </div>
      ) : null;
    case Section.Award:
      return awardData.length > 0 ? (
        <div className="space-y-12">
          {awardData.map((award, index) => (
            <AwardEntry key={index} award={award} />
          ))}
        </div>
      ) : null;
    case Section.Fellowship:
      return fellowshipData.length > 0 ? (
        <div className="space-y-12">
          {fellowshipData.map((fellowship, index) => (
            <AwardEntry key={index} award={fellowship} />
          ))}
        </div>
      ) : null;
    case Section.Portfolio:
      return portfolioData.length > 0 ? (
        <div className="space-y-12">
          {portfolioData.map((portfolio, index) => (
            <PortfolioEntry key={index} portfolio={portfolio} />
          ))}
        </div>
      ) : null;
    case Section.Service:
      return serviceData.length > 0 ? (
        <div className="space-y-12">
          {serviceData.map((service, index) => (
            <OtherEntry key={index} other={service} />
          ))}
        </div>
      ) : null;
    case Section.Other:
      return otherData.length > 0 ? (
        <div className="space-y-12">
          {otherData.map((other, index) => (
            <OtherEntry key={index} other={other} />
          ))}
        </div>
      ) : null;
    default:
      return null;
  }
}

export default function Home() {
  // Sections above the tab bar keep their own heading.
  const leadingSections = sectionOrder
    .map((section) => ({ section, body: sectionBody(section) }))
    .filter((entry) => entry.body !== null);

  const tabs: Tab[] = tabGroups
    .map((group) => {
      const bodies = group.sections
        .map((section) => ({ section, body: sectionBody(section) }))
        .filter((entry) => entry.body !== null);
      return { group, bodies };
    })
    .filter(({ bodies }) => bodies.length > 0)
    .map(({ group, bodies }) => ({
      label: group.label,
      content: (
        <div className="space-y-24">
          {bodies.map(({ section, body }) => (
            <section key={section}>
              {/* A single-section tab is already named by its tab label. */}
              {bodies.length > 1 && (
                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                  {sectionTitles[section]}
                </h2>
              )}
              {body}
            </section>
          ))}
        </div>
      ),
    }));

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {leadingSections.map(({ section, body }) => (
              <section key={section}>
                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                  {sectionTitles[section]}
                </h2>
                {body}
              </section>
            ))}

            <SectionTabs tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  );
}
