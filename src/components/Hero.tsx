"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

export default function Hero() {
    return (
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto w-full max-w-6xl">
                <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
                    <div className="max-w-3xl">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="mb-4"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                Open to contract roles
                            </span>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.08}
                            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500"
                        >
                            Senior Full Stack Engineer
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.16}
                            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                        >
                            Hothyfa
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.24}
                            className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg"
                        >
                            I build scalable web platforms, backend APIs, and AI-assisted systems
                            with a focus on strong architecture, pragmatic delivery, and real
                            product value.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.32}
                            className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg"
                        >
                            My experience spans frontend engineering, backend services, cloud
                            delivery, and complex workflows in high-trust and regulated
                            environments.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.4}
                            className="mt-8 flex flex-col gap-3 sm:flex-row"
                        >
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
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.48}
                            className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                        >
                            <a
                                href="https://github.com/Elbeera"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#181717] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(24,23,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_40px_rgba(24,23,23,0.32)] active:translate-y-0 active:scale-[0.98]"
                            >
                                <span className="relative">
                                    <span className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="relative h-4 w-4 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                                    >
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.81 0c2.21-1.49 3.18-1.18 3.18-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.82 1.19 3.08 0 4.43-2.71 5.4-5.29 5.69.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                    </svg>
                                </span>
                                <span className="text-white transition-transform duration-300 group-hover:translate-x-0.5">
                                    GitHub
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/hothyfa-elbeera/"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0A66C2] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(10,102,194,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#004182] hover:shadow-[0_16px_40px_rgba(10,102,194,0.34)] active:translate-y-0 active:scale-[0.98]"
                            >
                                <span className="relative">
                                    <span className="absolute inset-0 rounded-full bg-white/15 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="relative h-4 w-4 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                                    >
                                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                                    </svg>
                                </span>
                                <span className="text-white transition-transform duration-300 group-hover:translate-x-0.5">
                                    LinkedIn
                                </span>
                            </a>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.56}
                            className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                        >
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_40px_rgba(15,23,42,0.35)] active:translate-y-0 active:scale-[0.98]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                                >
                                    <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
                                </svg>
                                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                    Download CV
                                </span>
                            </a>

                            <a
                                href="mailto:h.s.elbeera@gmail.com"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)] active:translate-y-0 active:scale-[0.98]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4 text-slate-700 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                                >
                                    <path d="M4 4h16a2 2 0 0 1 2 2v.01L12 13 2 6.01V6a2 2 0 0 1 2-2Zm0 4.24 7.4 5.18a1 1 0 0 0 1.2 0L20 8.24V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.24Z" />
                                </svg>
                                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                    Email Me
                                </span>
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="absolute inset-0 rounded-full bg-slate-200 blur-2xl opacity-30 scale-110" />

                        <div className="relative flex justify-center lg:justify-end">
                            {/* soft background glow */}
                            <div className="absolute inset-0 scale-110 rounded-full bg-slate-300 blur-2xl opacity-30" />

                            {/* ring wrapper */}
                            <div className="relative rounded-full p-[4px] bg-slate-900 shadow-[0_10px_40px_rgba(15,23,42,0.35)]">
  <Image
    src="/profile.png"
    alt="Hothyfa profile"
    width={320}
    height={320}
    priority
    className="rounded-full object-cover h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
  />
</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}