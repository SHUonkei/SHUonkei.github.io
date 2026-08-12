import { Other } from "@/data/others";

export function OtherEntry({ other }: { other: Other }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        {other.logoUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={other.logoUrl}
            alt={other.title}
            className="w-11 h-11 rounded-lg object-contain border border-zinc-200 bg-white p-1 shrink-0"
          />
        )}
        <div>
          <h3 className="text-base mb-1 font-serif">
            {other.url ? (
              <a
                href={other.url}
                className="hover:text-zinc-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {other.title}
              </a>
            ) : (
              other.title
            )}
          </h3>
          {other.description && (
            <p className="text-sm text-zinc-600">{other.description}</p>
          )}
        </div>
      </div>
      {other.items && (
        <div className="mt-2 space-y-2">
          {other.items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-x-2">
              <span className="text-xs text-zinc-500 mt-0.5">{item.date}</span>
              <div className="col-span-3">
                <p className="text-sm text-zinc-700">{item.name}</p>
                {item.result && (
                  <p className="text-xs text-zinc-500">{item.result}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
