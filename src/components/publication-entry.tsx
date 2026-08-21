import Image from "next/image";
import { Publication } from "@/data/publication";

// Names to highlight in the author list (the site owner).
const OWN_NAMES = ["Shuitsu Koyama", "小山修生"];

function AuthorList({ authors }: { authors: string }) {
  const pattern = new RegExp(`(${OWN_NAMES.join("|")})`, "g");
  const parts = authors.split(pattern);

  return (
    <p className="text-sm text-zinc-600 mb-2">
      {parts.map((part, index) =>
        OWN_NAMES.includes(part) ? (
          <strong key={index} className="font-bold underline">
            {part}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  );
}

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  const links = [
    { label: "Paper", url: publication.paperUrl },
    { label: "Slides", url: publication.slidesUrl },
    { label: "Code", url: publication.codeUrl },
    { label: "BibTeX", url: publication.bibtex },
  ].filter((link) => link.url);

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {publication.imageUrl && (
        <div className="w-full sm:w-[35%] flex-shrink-0 relative rounded-lg">
          <Image
            src={publication.imageUrl}
            alt={publication.title}
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-lg transition-all duration-300 p-2"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row flex-wrap gap-2 items-center mb-2">
          <div className="group flex px-2 py-1 rounded-md items-center shadow border border-rose-100 relative overflow-hidden hover:rotate-1 transition-all duration-300">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
            <p className="text-xs text-amber-700 font-medium relative">
              {publication.conference} {publication.year}
            </p>
          </div>
          {publication.award && (
            <div className="group flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow border border-amber-100/50 relative overflow-hidden hover:rotate-1 transition-all duration-300">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              <p className="text-xs text-amber-700 font-medium relative">
                {publication.award}
              </p>
            </div>
          )}
        </div>
        <h3 className="text-md mb-1">{publication.title}</h3>
        <AuthorList authors={publication.authors} />
        {publication.tldr && (
          <p className="text-xs text-zinc-500 mb-2">{publication.tldr}</p>
        )}
        {links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-2">
            {links.map((link, index) => (
              <span key={link.label} className="flex flex-row items-center gap-2">
                {index > 0 && <span className="text-sm text-zinc-400">|</span>}
                <a
                  href={link.url}
                  className="text-sm text-zinc-600 hover:text-blue-600 hover:underline transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
