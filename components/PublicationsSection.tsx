import { publications, AUTHOR_NAME } from "@/data/publications";

interface Props {
  variant?: "home" | "cv";
}

export function PublicationsSection({ variant = "home" }: Props) {
  if (variant === "cv") {
    return <CvPublications />;
  }

  return (
    <section className="row">
      <h2 className="row-label">Selected Publications</h2>
      <ul className="ruled">
        {publications.map((pub) => (
          <li key={pub.title} className="pub">
            <a
              href={pub.url}
              className="pub-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.title}
            </a>
            <div className="pub-authors">
              {pub.authors.map((author, i) => (
                <span key={author}>
                  <span
                    className={
                      author === AUTHOR_NAME ? "font-[var(--w-strong)]" : undefined
                    }
                  >
                    {author}
                  </span>
                  {i < pub.authors.length - 1 && ", "}
                </span>
              ))}
            </div>
            <div className="pub-meta">
              <span className="tag">{pub.conference}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CvPublications() {
  return (
    <div className="space-y-3">
      {publications.map((pub) => (
        <div key={pub.title}>
          <div className="text-sm">
            {pub.authors.map((author, i) => (
              <span key={author}>
                <span
                  className={
                    author === AUTHOR_NAME ? "font-medium" : undefined
                  }
                >
                  {author}
                </span>
                {i < pub.authors.length - 1 && ", "}
              </span>
            ))}
          </div>
          <a
            href={pub.url}
            className="font-medium leading-snug hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {pub.title}
          </a>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            {pub.conference}
          </div>
        </div>
      ))}
    </div>
  );
}
