type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
  };
  
  export default function Section({ id, title, children }: SectionProps) {
    return (
      <section
        id={id}
        className="scroll-mt-24 border-t border-slate-200 px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {title}
              </h2>
            </div>
  
            <div>{children}</div>
          </div>
        </div>
      </section>
    );
  }