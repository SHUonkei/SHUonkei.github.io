import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{education.year}</span>
        <div className="col-span-3 flex items-start gap-3">
          {education.logoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={education.logoUrl}
              alt={education.institution}
              className="w-11 h-11 rounded-lg object-contain border border-zinc-200 bg-white p-1 shrink-0"
            />
          )}
          <div>
            <h3 className="text-base mb-1 font-serif">
              {education.institution}
            </h3>
            <p className="text-sm text-zinc-600">{education.degree}</p>
            {education.advisor && (
              <p className="text-sm text-zinc-500 mt-2 italic">
                Advisor: {education.advisor}
              </p>
            )}
            {education.thesis && (
              <p className="text-sm text-zinc-500 mt-2 italic">
                Thesis:{" "}
                {education.thesisUrl ? (
                  <a
                    href={education.thesisUrl}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {education.thesis}
                  </a>
                ) : (
                  education.thesis
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
