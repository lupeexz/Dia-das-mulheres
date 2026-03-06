export default function PageCard({ title, subtitle, children }) {
  return (
    <section className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
      <div className="border-b border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-white/5 to-teal-400/10 px-6 py-6">
        <h1 className="text-2xl font-bold tracking-tight text-purple-400 md:text-3xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
      <div className="px-6 py-8 text-slate-200">
    {children}
    </div>
    </section>
  );
}
