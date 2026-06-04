import { Award } from "@/data/awards";

export function AwardEntry({ award }: { award: Award }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{award.year}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">
            {award.url ? (
              <a
                href={award.url}
                className="hover:text-zinc-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {award.title}
              </a>
            ) : (
              award.title
            )}
          </h3>
          {award.organization && (
            <p className="text-sm text-zinc-600">{award.organization}</p>
          )}
          {award.description && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              {award.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
