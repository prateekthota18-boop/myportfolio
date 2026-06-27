const projects = [
  {
    id: "project-one",
    title: "Livora Interiors",
    tag: "INTERIOR DESIGN",
    tagLabel: "Live Project",
    liveUrl: "https://livora-website-tjzg.vercel.app/",
    screenshot: "/livora-screenshot.png",
  },
  {
    id: "project-two",
    title: "Sera Atelier",
    tag: "INTERIOR DESIGN",
    tagLabel: "Live Project",
    liveUrl: "https://space-sanctuary-six.vercel.app/",
    screenshot: "/sera-atelier-screenshot.png",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="w-full max-w-[370px] mx-auto" id={project.id}>
      {/* Image container — fixed 370×280, cropped, full-color images */}
      <a href={project.liveUrl} className="block" target="_blank" rel="noopener noreferrer">
        <div className="w-full overflow-hidden rounded-2xl bg-light" style={{ aspectRatio: "16 / 10" }}>
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          ) : (
            /* Placeholder skeleton — uses neutral greys */
            <div className="flex h-full w-full flex-col bg-light">
              {/* Fake browser chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-white px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-dark/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-dark/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-dark/15" />
                <span className="ml-3 h-4 w-40 rounded bg-border" />
              </div>
              {/* Fake hero content */}
              <div className="flex-1 space-y-4 px-6 py-6">
                <div className="h-5 w-24 rounded bg-dark/8" />
                <div className="h-7 w-4/5 rounded bg-dark/12" />
                <div className="h-4 w-full rounded bg-border" />
                <div className="h-4 w-3/4 rounded bg-border" />
                <div className="mt-3 flex gap-3">
                  <div className="h-8 w-24 rounded-full bg-dark/12" />
                  <div className="h-8 w-24 rounded-full bg-border" />
                </div>
                <div className="mt-2 h-20 w-full rounded-xl bg-dark/5" />
              </div>
            </div>
          )}
        </div>
      </a>

      {/* Card info — below the image */}
      <div className="pt-5">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-dark px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {project.tag}
          </span>
          <span className="text-xs text-muted">{project.tagLabel}</span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-bold text-dark">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Portfolio
        </p>
        <h2 className="font-heading mt-3 text-4xl font-extrabold text-dark sm:text-5xl">
          Recent Work
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
