import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1.5">{experience.date}</span>
      <div className="col-span-3 flex items-center gap-3">
        {experience.logoUrl && (
          <img
            src={experience.logoUrl}
            alt={experience.company}
            className="w-11 h-11 rounded-lg object-contain border border-zinc-200 bg-white p-1 shrink-0"
          />
        )}
        <div className="flex flex-col min-w-0">
          <h3 className="text-base font-serif leading-tight">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                className="hover:text-zinc-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h3>
          <p className="text-sm text-zinc-500">{experience.title}</p>
          {experience.advisor && (
            <p className="text-sm text-zinc-600 italic mt-1">
              Advisor: {experience.advisor}
            </p>
          )}
          {experience.manager && (
            <p className="text-sm text-zinc-600 italic mt-1">
              Manager: {experience.manager}
            </p>
          )}
          {experience.description && (
            <p className="text-sm text-zinc-600 leading-relaxed mt-1">
              {experience.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
