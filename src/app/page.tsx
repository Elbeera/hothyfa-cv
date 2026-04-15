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
            Senior Software Engineer with 6+ years of experience designing and scaling cloud-native, distributed systems across AWS and Azure. Proven track record of leading end-to-end development of high-performance platforms serving thousands of users, delivering measurable improvements in performance, scalability, and cost efficiency.
          </p>

          <p className="text-base leading-7 sm:text-lg">
            Currently leading the development of an AI-powered document processing system within the UK Ministry of Justice, specialising in Natural Language Processing (NLP), intelligent automation, and production-grade AI system design.
          </p>

          <p className="text-base leading-7 sm:text-lg">
            Expert in Node.js, Python, and TypeScript, with strong experience in microservices architectures, DevOps automation, and secure system design. Passionate about building scalable AI-driven systems and transitioning into advanced AI engineering and architecture roles.
          </p>
        </div>
      </Section>

      <Section id="impact" title="Selected Impact">
        <div className="grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  <path d="M12 4a3 3 0 1 1-2.83 4H7a2 2 0 1 0 0 4h2.17A3 3 0 1 1 12 20a3 3 0 0 1-2.83-4H7a4 4 0 1 1 0-8h2.17A3 3 0 0 1 12 4Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  AI-assisted legal document processing
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Leading engineering work on AI-powered document processing and
                  redaction workflows for the UK Ministry of Justice.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  <path d="M12 2 4 6v6c0 5.2 3.4 9.8 8 11 4.6-1.2 8-5.8 8-11V6l-8-4Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Sole-engineer ownership
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Driving architecture, backend services, and delivery decisions
                  across a sensitive production-focused system in a high-trust
                  environment.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  <path d="M4 4h16v6H4V4Zm0 8h16v6H4v-6Zm2-6v2h2V6H6Zm0 8v2h2v-2H6Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Backend systems and API delivery
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Built production APIs and operational services, including conflict
                  checking across live datasets and multi-funnel business workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  <path d="M6 19a4 4 0 1 1 .9-7.9A5 5 0 0 1 17.5 9a3.5 3.5 0 1 1 0 7H6Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Cloud-native architecture
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Experience designing scalable systems across AWS and Azure with
                  focus on maintainability, performance, and delivery speed.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50">
              <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5 w-5 text-orange-500"
>
  <path d="M7.5 18.5A4.5 4.5 0 1 1 8 9.6a5.5 5.5 0 0 1 10.6 1.7A3.7 3.7 0 1 1 18 18.5H7.5Z" />
</svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
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

            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-orange-500"
                >
                  {/* AI / nodes icon */}
                  <path d="M12 4a3 3 0 1 1-2.83 4H7a2 2 0 1 0 0 4h2.17A3 3 0 1 1 12 20a3 3 0 0 1-2.83-4H7a4 4 0 1 1 0-8h2.17A3 3 0 0 1 12 4Z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
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

            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-blue-500"
                >
                  {/* atom icon */}
                  <path d="M12 2c2.5 0 4.8 2.3 6.2 5.9 1.4 3.6 1.4 7.6 0 11.2C16.8 21.7 14.5 24 12 24s-4.8-2.3-6.2-5.9c-1.4-3.6-1.4-7.6 0-11.2C7.2 4.3 9.5 2 12 2Zm0 2c-1.7 0-3.5 1.9-4.7 5-1.2 3.1-1.2 6.5 0 9.6 1.2 3.1 3 5 4.7 5s3.5-1.9 4.7-5c1.2-3.1 1.2-6.5 0-9.6C15.5 5.9 13.7 4 12 4Z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
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

            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-indigo-500"
                >
                  {/* database icon */}
                  <path d="M12 3C7 3 3 4.8 3 7v10c0 2.2 4 4 9 4s9-1.8 9-4V7c0-2.2-4-4-9-4Zm0 2c4.4 0 7 .9 7 2s-2.6 2-7 2-7-.9-7-2 2.6-2 7-2Zm0 6c4.4 0 7-.9 7-2v3c0 1.1-2.6 2-7 2s-7-.9-7-2V9c0 1.1 2.6 2 7 2Zm0 5c4.4 0 7-.9 7-2v3c0 1.1-2.6 2-7 2s-7-.9-7-2v-3c0 1.1 2.6 2 7 2Z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
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

            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:col-span-2">
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-emerald-500"
                >
                  {/* server / backend icon */}
                  <path d="M4 4h16v6H4V4Zm0 8h16v6H4v-6Zm2-6v2h2V6H6Zm0 8v2h2v-2H6Z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
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
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-14">

          {/* MOJ */}
          <article>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                Senior Software Engineer (AI Systems)
              </h3>
              <p className="text-sm text-slate-500">2026 — Present</p>
            </div>

            <p className="mt-1 text-sm font-medium text-slate-600">
              UK Ministry of Justice
            </p>

            <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-700 sm:text-base">
              <p>
                Sole Software Engineer responsible for the design, development, and delivery of Justice Redact, an AI-assisted system for automating the redaction of sensitive information from legal Subject Access Request (SAR) documents. The platform replaces manual redaction workflows with scalable, intelligent document processing, improving efficiency, accuracy, and compliance.
              </p>
              <p>
                Working independently while collaborating with product managers, data scientists, designers, and DevOps specialists, I lead all engineering decisions across system architecture, backend development, and AI integration, ensuring a production-ready and scalable solution.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Led end-to-end engineering of an AI-powered document redaction system, from initial architecture design through to implementation and deployment.
                </li>
                <li>
                  Designed and developed scalable backend services using Python (FastAPI) and Node.js to support AI-driven document processing workflows.
                </li>
                <li>
                  Built AI-assisted redaction pipelines integrating PyMuPDF, Microsoft Presidio, and AWS Comprehend to detect and redact sensitive entities within unstructured legal documents.
                </li>
                <li>
                  Architected modular system separating backend services from AI processing components, enabling scalability and independent model evolution.
                </li>
                <li>
                  Deigned and implemented data storage strategies using AWS S3 for document storage and relational databases for structured document state, versioning, and audit tracking.
                </li>
                <li>
                  Developed APIs supporting document ingestion, processing, review workflows, and export functionality for end users.
                </li>
                <li>
                  Collaborated with data scientists for integrate and optimise NLP models for entity recognition and document classification.
                </li>
                <li>
                  Ensured strict compliance with data protection, security, and governance standards when handling highly sensitive legal data.
                </li>
                <li>
                  Conducted performance benchmarking and contributed to infrastructure and cost optimisation strategies for scalable AI processing.
                </li>
              </ul>
            </div>
          </article>

          {/* CLAIMS GATE */}
          <article>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                Software Engineer
              </h3>
              <p className="text-sm text-slate-500">2025 — 2026</p>
            </div>

            <p className="mt-1 text-sm font-medium text-slate-600">
              Claims Gate
            </p>

            <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-700 sm:text-base">
              <p>
                Joined a fast-scaling software company focused on digital claim management solutions, leading the end-to-end development of core products from initial concept through architecture and deployment. Lead design and technology decisions, ensuring scalable, high-performance solutions. Collaborate with cross-functional teams to optimise systems, streamline processes, and deliver projects on time while maintaining high standards.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Designed and implemented scalable, cost-optimised architectures across AWS and Azure, improving performance and reducing operational costs.
                </li>
                <li>
                  Designed APIs with strict validation and encryption best practices to prevent vulnerabilities.
                </li>
                <li>
                  Designed and deployed Docker-based containerised microservices using Node.js, improving scalability, reliability, and cost effective.
                </li>
                <li>
                  Built and deployed cloud-native applications using Node.js, Express, Firebase Functions, and Firestore enabling fast and secure API-driven systems.
                </li>
                <li>
                  Utilised Vue.js for dynamic and performant front-end development, optimising user experience and responsiveness.
                </li>
                <li>
                  Implemented monitoring and logging solutions to track application performance and proactively identify system issues.
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
                Key contributor at an early stage startup building a multi-service platform for ride hailing, food delivery, and parcel logistics. I played a key role in designing and developing the platform from the ground up, building both Web and Mobile applications for ride-hailing, food delivery, and parcel services. Working alongside another Full Stack Developer, I implemented real-time tracking, secure authentication, and automated CI/CD pipelines to enhance system performance, scalability, and user experience.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Designed and developed a multi-service platform for ride-requesting, food delivery, and parcel services using React, React Native, Node.js, Fastify, and MongoDB.
                </li>
                <li>
                  Implemented secure authentication, authorisation, and data protection mechanisms to ensure compliance and user safety.
                </li>
                <li>
                  Built and deployed real-time tracking systems, improving user engagement.
                </li>
                <li>
                  Developed cross-platform Web and Mobile applications, ensuring seamless user experience across devices.
                </li>
                <li>
                  Integrated push notification services, boosting user retention and engagement.
                </li>
                <li>
                  Developed automated CI/CD pipelines, streamlining feature deployments and reducing downtime.
                </li>
                <li>
                  Maintained comprehensive technical documentation.
                </li>
              </ul>
            </div>
          </article>

          {/* UNION REALTIME */}
          <article>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                Full Stack Developer
              </h3>
              <p className="text-sm text-slate-500">2024 — 2025</p>
            </div>

            <p className="mt-1 text-sm font-medium text-slate-600">
              Union Realtime
            </p>

            <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-700 sm:text-base">
              <p>
                I played a key role in developing and optimising scalable software applications using Angular, TypeScript, and Python, focusing on performance, reliability, and maintainability. I designed and implemented REST APIs, optimised database queries, and enhanced system stability through performance tuning.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Developed and optimised scalable software applications using Angular, TypeScript, Python and Node.js ensuring high performance and reliability.
                </li>
                <li>
                  Designed and implemented REST APIs with Nest.js, improving modularity and maintainability.
                </li>
                <li>
                  Optimised TSQL database queries, enhancing eﬃciency and response times for better user experience.
                </li>
                <li>
                  Implemented CI/CD pipelines and automated deployment processes, significantly reducing release cycle time.
                </li>
                <li>
                  Created and maintained comprehensive technical documentation, ensuring clarity in API usage, system design, and best practices.
                </li>
              </ul>
            </div>
          </article>

        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid gap-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm6 1.5V9h4.5" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Justice Redact
                  </h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    AI Workflow
                  </span>
                </div>

                <p className="mt-3 text-base leading-7 text-slate-700">
                  AI-assisted SAR redaction platform for sensitive legal document
                  workflows, covering ingestion, entity detection, review tooling,
                  manual control, and export support in a high-trust environment.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-emerald-600"
                >
                  <path d="M6 3h9l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm8 1.5V7h2.5M8 11h8v2H8v-2Zm0 4h8v2H8v-2Z" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    ClaimsGate Document Engine
                  </h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Cost Saving
                  </span>
                </div>

                <p className="mt-3 text-base leading-7 text-slate-700">
                  Internal document conversion service built to transform Word
                  documents into PDF at scale, running as a PM2-managed process on an
                  Azure virtual machine and helping reduce Adobe-related costs by up
                  to £15,000 per month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="strengths" title="Technical Strengths">
        <div className="grid gap-5 sm:grid-cols-2">

          {/* Frontend */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  {/* monitor icon */}
                  <path d="M4 5h16v10H4V5Zm2 2v6h12V7H6Zm3 10h6v2H9v-2Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Frontend Systems
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  React, Next.js, TypeScript, responsive UI engineering,
                  user-focused interfaces, and modern frontend delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  {/* server icon */}
                  <path d="M4 4h16v6H4V4Zm0 8h16v6H4v-6Zm2-6v2h2V6H6Zm0 8v2h2v-2H6Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Backend & APIs
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Node.js, Python, FastAPI, REST APIs, service design, data
                  workflows, and production-oriented backend engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Cloud */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  {/* cloud icon */}
                  <path d="M6 19a4 4 0 1 1 .9-7.9A5 5 0 0 1 17.5 9a3.5 3.5 0 1 1 0 7H6Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Cloud & Delivery
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  AWS, CI/CD, deployment pipelines, infrastructure awareness, and
                  pragmatic decisions around delivery and maintainability.
                </p>
              </div>
            </div>
          </div>

          {/* AI */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-700"
                >
                  {/* brain/network icon */}
                  <path d="M12 4a3 3 0 1 1-2.8 4H7a2 2 0 1 0 0 4h2.2A3 3 0 1 1 12 20a3 3 0 0 1-2.8-4H7a4 4 0 1 1 0-8h2.2A3 3 0 0 1 12 4Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  AI-Assisted Workflows
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Document intelligence, redaction workflows, entity detection,
                  human review tooling, and workflow automation support.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="max-w-3xl space-y-6">

          <p className="text-base leading-7 text-slate-700 sm:text-lg">
            I’m open to senior software engineering opportunities where I can contribute through strong technical ownership, scalable system design, and building AI-driven applications in real-world environments.
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