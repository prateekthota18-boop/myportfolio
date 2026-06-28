const categories = [
  {
    label: "Interior Design",
    projects: [
      {
        id: "project-livora",
        title: "Livora Interiors",
        tag: "Interior Design",
        tagLabel: "Live Project",
        liveUrl: "https://livora-website-tjzg.vercel.app/",
        screenshot: "/livora-screenshot.png",
      },
      {
        id: "project-sera",
        title: "Sera Atelier",
        tag: "Interior Design",
        tagLabel: "Live Project",
        liveUrl: "https://space-sanctuary-six.vercel.app/",
        screenshot: "/sera-atelier-screenshot.png",
      },
    ],
  },
  {
    label: "Real Estate",
    projects: [
      {
        id: "project-meridian",
        title: "Meridian Builds",
        tag: "Real Estate",
        tagLabel: "Live Project",
        liveUrl: "https://meridian-modern-homes.vercel.app/",
        screenshot: "/meridian-screenshot.png",
      },
    ],
  },
  {
    label: "Healthcare",
    projects: [
      {
        id: "project-skin-elements",
        title: "The Skin Elements",
        tag: "Healthcare",
        tagLabel: "Live Project",
        liveUrl: "https://prateekthota18-boop.github.io/skin-elements-vaishnavi/",
        screenshot: "/skin-elements-screenshot.png",
      },
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className="w-full max-w-[370px] mx-auto rounded-[20px] bg-white overflow-hidden"
      id={project.id}
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image container — fixed 370×280, cropped, full-color images */}
      <a href={project.liveUrl} className="block" target="_blank" rel="noopener noreferrer">
        <div className="w-full overflow-hidden bg-light" style={{ aspectRatio: "16 / 10" }}>
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full flex-col bg-light">
              <div className="flex items-center gap-2 border-b border-border bg-white px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-dark/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-dark/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-dark/15" />
                <span className="ml-3 h-4 w-40 rounded bg-border" />
              </div>
              <div className="flex-1 space-y-4 px-6 py-6">
                <div className="h-5 w-24 rounded bg-dark/8" />
                <div className="h-7 w-4/5 rounded bg-dark/12" />
                <div className="h-4 w-full rounded bg-border" />
                <div className="h-4 w-3/4 rounded bg-border" />
              </div>
            </div>
          )}
        </div>
      </a>

      {/* Card info — padded below the image */}
      <div className="px-5 pb-5 pt-4">
        {/* Category tag pill */}
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-dark px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {project.tag}
          </span>
          <span className="text-xs text-muted">{project.tagLabel}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold leading-snug text-dark">
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
        <h2 className="display-heading font-heading mt-3 text-4xl font-extrabold text-dark sm:text-5xl">
          Recent Work
        </h2>

        <div className="mt-16 space-y-20">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category subheading */}
              <div className="mb-10 flex items-center gap-4">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  {cat.label}
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Projects grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {cat.projects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
