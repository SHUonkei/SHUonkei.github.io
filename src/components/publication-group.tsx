import { Publication } from "@/data/publication";
import { PublicationEntry } from "@/components/publication-entry";

export function PublicationGroup({
  title,
  publications,
}: {
  title: string;
  publications: Publication[];
}) {
  if (publications.length === 0) return null;

  return (
    <div>
      <h3 className="font-serif text-xs mb-6 tracking-widest uppercase text-zinc-500">
        {title}
      </h3>
      <div className="space-y-6">
        {publications.map((publication, index) => (
          <div key={index}>
            <PublicationEntry publication={publication} />
            {index < publications.length - 1 && (
              <div className="h-px bg-zinc-200 my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
