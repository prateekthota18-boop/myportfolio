export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-heading text-lg font-bold text-dark">
          Prateek<span className="text-body">.</span>
        </p>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Prateek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
