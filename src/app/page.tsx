import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <Section id="summary" title="Executive Summary">
        <div className="max-w-3xl space-y-5 text-slate-700">
          <p className="text-base leading-7 sm:text-lg">
            I’m a Senior Full Stack Engineer with experience delivering modern
            web applications, backend APIs, and AI-assisted workflows across
            complex product environments.
          </p>

          <p className="text-base leading-7 sm:text-lg">
            My work combines hands-on engineering with pragmatic technical
            decision-making across frontend systems, backend services, cloud
            delivery, and application architecture.
          </p>

          <p className="text-base leading-7 sm:text-lg">
            I’m particularly well suited to roles where strong delivery,
            end-to-end ownership, and the ability to work through ambiguity are
            as important as technical depth.
          </p>
        </div>
      </Section>

      <Section id="impact" title="Selected Impact">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              AI-driven document automation
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Designed and delivered AI-assisted redaction workflows for sensitive
              legal documents, replacing manual processes with scalable automation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              End-to-end system ownership
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Led architecture and delivery across frontend, backend, AI pipelines,
              and cloud infrastructure as a sole engineer.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Scalable API systems
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Built production APIs handling operational data search and conflict
              detection across distributed datasets.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Cloud-native architecture
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Designed systems across AWS and Azure with focus on scalability,
              performance, and cost efficiency.
            </p>
          </div>
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900">
                AWS Certified Cloud Practitioner
              </h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                AWS
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Foundation certification covering AWS cloud concepts, core services,
              security, architecture, pricing, and support.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900">
                AWS Certified AI Practitioner
              </h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                AWS
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Certification supporting practical understanding of AI and machine
              learning concepts in cloud-based systems and solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900">
                React & React Native Certification
              </h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Frontend
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Supports frontend and cross-platform development capability across web
              and mobile application delivery.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900">
                Querying Microsoft SQL Server with Transact-SQL
              </h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                SQL
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Reinforces SQL querying and relational database capability in
              production-oriented systems.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900">
                Node.js, Express.js and MongoDB Certification
              </h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Backend
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Supports backend API development and full stack JavaScript application
              delivery using modern service patterns.
            </p>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-14">

          {/* MOJ */}
          <article>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                Senior Full Stack Engineer (Contract)
              </h3>
              <p className="text-sm text-slate-500">2026 — Present</p>
            </div>

            <p className="mt-1 text-sm font-medium text-slate-600">
              UK Ministry of Justice
            </p>

            <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-700 sm:text-base">
              <p>
                Sole engineer responsible for the design and delivery of an
                AI-assisted document redaction system for sensitive Subject Access
                Request (SAR) workflows, replacing manual processes with scalable,
                automated pipelines.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Led end-to-end system architecture across backend services, AI
                  processing pipelines, and user-facing workflows.
                </li>
                <li>
                  Built scalable document processing pipelines using Python
                  (FastAPI), Node.js, and NLP tooling (Presidio, AWS Comprehend).
                </li>
                <li>
                  Designed a modular architecture separating AI processing from core
                  services to support scalability and independent model evolution.
                </li>
                <li>
                  Implemented secure document storage and audit-ready data models
                  using AWS S3 and relational databases.
                </li>
                <li>
                  Delivered APIs supporting ingestion, processing, review workflows,
                  and export functionality.
                </li>
                <li>
                  Contributed to infrastructure decisions, performance benchmarking,
                  and cost optimisation strategies for large-scale document handling.
                </li>
              </ul>
            </div>
          </article>

          {/* CLAIMS GATE */}
          <article>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                Senior Full Stack Developer
              </h3>
              <p className="text-sm text-slate-500">2025 — 2026</p>
            </div>

            <p className="mt-1 text-sm font-medium text-slate-600">
              Claims Gate
            </p>

            <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-700 sm:text-base">
              <p>
                Delivered core backend and full stack systems for a fast-scaling
                claims platform, focusing on API design, scalability, and secure
                data handling.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Designed and built a conflict checker REST API querying Firestore
                  datasets across multiple funnels to identify potential claim
                  conflicts.
                </li>
                <li>
                  Architected cloud-native solutions across AWS and Azure, improving
                  system performance and reducing operational costs.
                </li>
                <li>
                  Built containerised microservices using Node.js and Docker to
                  improve reliability and scalability.
                </li>
                <li>
                  Implemented secure API patterns with validation and encryption to
                  reduce system vulnerabilities.
                </li>
              </ul>
            </div>
          </article>

          {/* SHOORY */}
          <article>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                Full Stack Developer
              </h3>
              <p className="text-sm text-slate-500">2024 — 2025</p>
            </div>

            <p className="mt-1 text-sm font-medium text-slate-600">
              Shoory
            </p>

            <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-700 sm:text-base">
              <p>
                Core engineer building a multi-service platform covering ride-hailing,
                food delivery, and parcel logistics across web and mobile.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Developed full-stack systems using React, React Native, Node.js,
                  and MongoDB.
                </li>
                <li>
                  Built real-time tracking functionality improving user experience
                  and engagement.
                </li>
                <li>
                  Implemented CI/CD pipelines to streamline deployment and reduce
                  downtime.
                </li>
              </ul>
            </div>
          </article>

        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid gap-5">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Justice Redact
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
              AI-assisted SAR redaction workflow exploring document ingestion,
              entity identification, review flows, manual control, and export
              support for sensitive operational use cases.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Conflict Checker REST API
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
              Backend service built to identify potential conflicts by searching
              operational data across multiple funnels, designed for practical
              internal use and dependable API behaviour.
            </p>
          </div>
        </div>
      </Section>

      <Section id="strengths" title="Technical Strengths">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Frontend Systems
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-700">
              React, Next.js, TypeScript, responsive UI engineering,
              user-focused interfaces, and modern frontend delivery.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Backend & APIs
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-700">
              Node.js, Python, FastAPI, REST APIs, service design, data
              workflows, and production-oriented backend engineering.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Cloud & Delivery
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-700">
              AWS, CI/CD, deployment pipelines, infrastructure awareness, and
              pragmatic decisions around delivery and maintainability.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              AI-Assisted Workflows
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-700">
              Document intelligence, redaction workflows, entity detection,
              human review tooling, and workflow automation support.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="max-w-3xl space-y-6">

          <p className="text-base leading-7 text-slate-700 sm:text-lg">
            I’m open to senior full stack engineering opportunities where I can
            contribute through strong delivery, technical ownership, and practical
            architecture thinking.
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

  {/* Download CV */}
  <a
    href="/cv.pdf"
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium !text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_40px_rgba(15,23,42,0.35)] active:translate-y-0 active:scale-[0.98]"
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

  {/* Email Me */}
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

</div>

          {/* Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
  <a
    href="https://github.com/Elbeera"
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#181717] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(24,23,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_40px_rgba(24,23,23,0.32)]"
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
    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0A66C2] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(10,102,194,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#004182] hover:shadow-[0_16px_40px_rgba(10,102,194,0.34)]"
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
</div>

        </div>
      </Section>

      <Footer />
    </main>
  );
}