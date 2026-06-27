import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="font-heading text-2xl font-extrabold tracking-tight text-dark select-none"
        >
          Prateek<span className="text-body">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-body transition-colors hover:text-dark"
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://wa.me/919381325063?text=Hey%20Prateek!%20I'd%20like%20to%20chat%20about%20a%20web%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 rounded bg-dark transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-dark transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-dark transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="font-heading text-2xl font-bold text-dark"
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://wa.me/919381325063?text=Hey%20Prateek!%20I'd%20like%20to%20chat%20about%20a%20web%20project."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="rounded-full bg-dark px-7 py-3 text-base font-semibold text-white"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
