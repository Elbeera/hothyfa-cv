export default function Hero() {
    return (
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                        Senior Full Stack Engineer
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Hothyfa
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                        I build scalable web platforms, backend APIs, and AI-assisted systems
                        with a focus on strong architecture, pragmatic delivery, and real
                        product value.
                    </p>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                        My experience spans frontend engineering, backend services, cloud
                        delivery, and complex workflows in high-trust and regulated
                        environments.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#experience"
                            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium !text-white transition hover:opacity-90"
                        >
                            View Experience
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium !text-slate-900 transition hover:border-slate-900"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}