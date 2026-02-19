import { publications, AUTHOR_NAME } from "@/data/publications";

interface Props {
  variant?: "home" | "cv";
}

export function PublicationsSection({ variant = "home" }: Props) {
  if (variant === "cv") {
    return <CvPublications />;
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Publications</h2>
      <div className="space-y-4">
        {publications.map((pub) => (
          <div key={pub.title} className="space-y-0.5">
            <a
              href={pub.url}
              className="font-semibold leading-snug hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.title}
            </a>
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
            <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {pub.conference}
            </div>
          </div>
        ))}
      </div>
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
