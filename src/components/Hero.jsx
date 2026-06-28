export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white pt-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 py-20 md:flex-row md:gap-20 md:py-28 lg:py-36">
        {/* ── Left content ──────────────────── */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Hey, I'm Prateek 👋
          </p>

          <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-dark sm:text-6xl lg:text-7xl">
            Web<br />Developer
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-body">
            Minimal by design, specific by intent — every site I build tells
            that business's story, not a template's.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              id="cta-get-in-touch"
              href="https://wa.me/919381325063?text=Hey%20Prateek!%20I'd%20like%20to%20chat%20about%20a%20web%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-dark px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              Get In Touch
            </a>
            <a
              id="cta-view-portfolio"
              href="#portfolio"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-light"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* ── Right: circular profile photo placeholder ── */}
        <div className="relative flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {/* Outer ring */}
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full border border-border p-2">
            {/* Inner circle – photo placeholder */}
            <div
              id="profile-photo"
              className="h-full w-full overflow-hidden rounded-full"
            >
              <img
                src="/prateek.jpg"
                alt="Prateek"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Decorative dots — subtle black */}
          <span className="sparkle sparkle-delay-1 absolute -top-3 right-6 h-2.5 w-2.5 rounded-full bg-dark/30" />
          <span className="sparkle sparkle-delay-2 absolute -bottom-1 left-8 h-2 w-2 rounded-full bg-dark/20" />
          <span className="sparkle sparkle-delay-3 absolute top-1/4 -right-4 h-1.5 w-1.5 rounded-full bg-dark/25" />
          <span className="sparkle sparkle-delay-4 absolute bottom-1/4 -left-3 h-3 w-3 rounded-full bg-dark/15" />
          <span className="sparkle sparkle-delay-1 absolute top-10 -left-6 h-2 w-2 rounded-full bg-dark/20" />
        </div>
      </div>
    </section>
  );
}
