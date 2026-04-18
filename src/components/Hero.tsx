"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                            Senior Software Engineer
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
                            Hothyfa Elbeera
                        </h1>
                        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
                            Currently leading AI-powered document processing work for the UK Ministry of Justice, specialising in production-grade AI workflows, cloud-native systems, and high-trust software delivery.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#experience"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium !text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_40px_rgba(15,23,42,0.35)] active:translate-y-0 active:scale-[0.98] dark:bg-slate-100 dark:!text-slate-950 dark:hover:bg-white"
                            >

                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                                >
                                    {/* briefcase icon */}
                                    <path d="M7 7V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v3H3V9a2 2 0 0 1 2-2h2Zm2 0h6V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1Zm12 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5h18Zm-11 2v2h4v-2h-4Z" />
                                </svg>
                                View Experience
                            </a>

                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)] active:translate-y-0 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-300"

                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                                >
                                    {/* code / terminal icon */}
                                    <path d="M8.7 16.7a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.4 1.4L5.4 12l3.3 3.3a1 1 0 0 1 0 1.4Zm6.6 0a1 1 0 0 1 0-1.4L18.6 12l-3.3-3.3a1 1 0 1 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4 0Z" />
                                </svg>
                                View Projects
                            </a>
                        </div>

                        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium !text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_40px_rgba(15,23,42,0.35)] active:translate-y-0 active:scale-[0.98] dark:bg-slate-100 dark:!text-slate-950 dark:hover:bg-white"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                                >
                                    <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
                                </svg>
                                Download CV
                            </a>

                            <a
                                href="mailto:h.s.elbeera@gmail.com"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)] active:translate-y-0 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-300"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                                >
                                    <path d="M4 4h16a2 2 0 0 1 2 2v.01L12 13 2 6.01V6a2 2 0 0 1 2-2Zm0 4.24 7.4 5.18a1 1 0 0 0 1.2 0L20 8.24V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.24Z" />
                                </svg>
                                Email Me
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-48 w-48 overflow-hidden rounded-full bg-slate-900 sm:h-64 sm:w-64 lg:h-80 lg:w-80 dark:bg-slate-800">
                            <Image
                                src="/profile-circle.png"
                                alt="Hothyfa profile"
                                width={320}
                                height={320}
                                priority
                                className="h-full w-full object-cover object-[center_top]"
                            />
                        </div>
                        <div className="mt-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-200">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                                Open to contract roles
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}