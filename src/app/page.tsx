import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import AskCv from "@/components/AskCv";

type TextCard = {
  title: string;
  description: string;
  iconPath: string;
  iconClass?: string;
  iconBgClass?: string;
  tag?: string;
  wide?: boolean;
};

type Experience = {
  role: string;
  period: string;
  company: string;
  summary: string;
  summarySecondary?: string;
  bullets: string[];
};

const summaryParagraphs = [
  "Senior Software Engineer with 6+ years of experience designing and scaling cloud-native, distributed systems across AWS and Azure. Proven track record of leading end-to-end development of high-performance platforms serving thousands of users, delivering measurable improvements in performance, scalability, and cost efficiency.",
  "Currently leading the development of an AI-powered document processing system within the UK Ministry of Justice, specialising in Natural Language Processing (NLP), intelligent automation, and production-grade AI system design.",
  "Expert in Node.js, Python, and TypeScript, with strong experience in microservices architectures, DevOps automation, and secure system design. Passionate about building scalable AI-driven systems and transitioning into advanced AI engineering and architecture roles.",
];

const impactItems: TextCard[] = [
  {
    title: "AI-assisted legal document processing",
    description:
      "Leading engineering work on AI-powered document processing and redaction workflows for the UK Ministry of Justice.",
    iconPath:
      "M12 4a3 3 0 1 1-2.83 4H7a2 2 0 1 0 0 4h2.17A3 3 0 1 1 12 20a3 3 0 0 1-2.83-4H7a4 4 0 1 1 0-8h2.17A3 3 0 0 1 12 4Z",
  },
  {
    title: "Sole-engineer ownership",
    description:
      "Driving architecture, backend services, and delivery decisions across a sensitive production-focused system in a high-trust environment.",
    iconPath: "M12 2 4 6v6c0 5.2 3.4 9.8 8 11 4.6-1.2 8-5.8 8-11V6l-8-4Z",
  },
  {
    title: "Backend systems and API delivery",
    description:
      "Built production APIs and operational services, including conflict checking across live datasets and multi-funnel business workflows.",
    iconPath: "M4 4h16v6H4V4Zm0 8h16v6H4v-6Zm2-6v2h2V6H6Zm0 8v2h2v-2H6Z",
  },
  {
    title: "Cloud-native architecture",
    description:
      "Experience designing scalable systems across AWS and Azure with focus on maintainability, performance, and delivery speed.",
    iconPath: "M6 19a4 4 0 1 1 .9-7.9A5 5 0 0 1 17.5 9a3.5 3.5 0 1 1 0 7H6Z",
  },
];

const certificationItems: TextCard[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    tag: "AWS",
    description:
      "Foundation certification covering AWS cloud concepts, core services, security, architecture, pricing, and support.",
    iconPath: "M7.5 18.5A4.5 4.5 0 1 1 8 9.6a5.5 5.5 0 0 1 10.6 1.7A3.7 3.7 0 1 1 18 18.5H7.5Z",
    iconClass: "text-orange-500",
    iconBgClass: "bg-orange-50",
  },
  {
    title: "AWS Certified AI Practitioner",
    tag: "AWS",
    description:
      "Certification supporting practical understanding of AI and machine learning concepts in cloud-based systems and solutions.",
    iconPath:
      "M12 4a3 3 0 1 1-2.83 4H7a2 2 0 1 0 0 4h2.17A3 3 0 1 1 12 20a3 3 0 0 1-2.83-4H7a4 4 0 1 1 0-8h2.17A3 3 0 0 1 12 4Z",
    iconClass: "text-orange-500",
    iconBgClass: "bg-orange-50",
  },
  {
    title: "React & React Native Certification",
    tag: "Frontend",
    description:
      "Supports frontend and cross-platform development capability across web and mobile application delivery.",
    iconPath:
      "M12 2c2.5 0 4.8 2.3 6.2 5.9 1.4 3.6 1.4 7.6 0 11.2C16.8 21.7 14.5 24 12 24s-4.8-2.3-6.2-5.9c-1.4-3.6-1.4-7.6 0-11.2C7.2 4.3 9.5 2 12 2Zm0 2c-1.7 0-3.5 1.9-4.7 5-1.2 3.1-1.2 6.5 0 9.6 1.2 3.1 3 5 4.7 5s3.5-1.9 4.7-5c1.2-3.1 1.2-6.5 0-9.6C15.5 5.9 13.7 4 12 4Z",
    iconClass: "text-blue-500",
    iconBgClass: "bg-blue-50",
  },
  {
    title: "Querying Microsoft SQL Server with Transact-SQL",
    tag: "SQL",
    description:
      "Reinforces SQL querying and relational database capability in production-oriented systems.",
    iconPath:
      "M12 3C7 3 3 4.8 3 7v10c0 2.2 4 4 9 4s9-1.8 9-4V7c0-2.2-4-4-9-4Zm0 2c4.4 0 7 .9 7 2s-2.6 2-7 2-7-.9-7-2 2.6-2 7-2Zm0 6c4.4 0 7-.9 7-2v3c0 1.1-2.6 2-7 2s-7-.9-7-2V9c0 1.1 2.6 2 7 2Zm0 5c4.4 0 7-.9 7-2v3c0 1.1-2.6 2-7 2s-7-.9-7-2v-3c0 1.1 2.6 2 7 2Z",
    iconClass: "text-indigo-500",
    iconBgClass: "bg-indigo-50",
  },
  {
    title: "Node.js, Express.js and MongoDB Certification",
    tag: "Backend",
    description:
      "Supports backend API development and full stack JavaScript application delivery using modern service patterns.",
    iconPath: "M4 4h16v6H4V4Zm0 8h16v6H4v-6Zm2-6v2h2V6H6Zm0 8v2h2v-2H6Z",
    iconClass: "text-emerald-500",
    iconBgClass: "bg-emerald-50",
    wide: true,
  },
];

const experienceItems: Experience[] = [
  {
    role: "Senior Software Engineer (AI Systems)",
    period: "2026 — Present",
    company: "UK Ministry of Justice",
    summary:
      "Sole Software Engineer responsible for the design, development, and delivery of Justice Redact, an AI-assisted system for automating the redaction of sensitive information from legal Subject Access Request (SAR) documents. The platform replaces manual redaction workflows with scalable, intelligent document processing, improving efficiency, accuracy, and compliance.",
    summarySecondary:
      "Working independently while collaborating with product managers, data scientists, designers, and DevOps specialists, I lead all engineering decisions across system architecture, backend development, and AI integration, ensuring a production-ready and scalable solution.",
    bullets: [
      "Led end-to-end engineering of an AI-powered document redaction system, from architecture design to deployment.",
      "Designed and developed scalable backend services using Python (FastAPI) and Node.js for AI-driven document workflows.",
      "Built AI-assisted redaction pipelines using PyMuPDF, Microsoft Presidio, and AWS Comprehend to detect and redact sensitive entities.",
      "Architected a modular system separating backend services from AI processing components, enabling scalability and independent model evolution.",
      "Designed and implemented data storage strategies using AWS S3 and relational databases for document state, versioning, and audit tracking.",
      "Developed APIs supporting document ingestion, processing, review workflows, and export functionality.",
      "Collaborated with data scientists to integrate and optimise NLP models for entity recognition and document classification.",
      "Ensured strict compliance with data protection, security, and governance standards when handling highly sensitive legal data.",
      "Conducted performance benchmarking and contributed to infrastructure and cost optimisation strategies.",
    ],
  },
  {
    role: "Software Engineer",
    period: "2025 — 2026",
    company: "Claims Gate",
    summary:
      "Joined a fast-scaling software company focused on digital claim management solutions, leading end-to-end development of core products from concept through architecture and deployment.",
    summarySecondary:
      "Led design and technology decisions while collaborating with cross-functional teams to optimise systems and deliver reliably.",
    bullets: [
      "Designed and implemented scalable, cost-optimised architectures across AWS and Azure.",
      "Designed APIs with strict validation and encryption best practices.",
      "Designed and deployed Docker-based microservices in Node.js, improving scalability and reliability.",
      "Built cloud-native applications with Node.js, Express, Firebase Functions, and Firestore for secure API-driven systems.",
      "Used Vue.js for dynamic, performant frontend development.",
      "Implemented monitoring and logging to proactively identify system issues.",
    ],
  },
  {
    role: "Full Stack Developer",
    period: "2024 — 2025",
    company: "Shoory",
    summary:
      "Key contributor at an early-stage startup building a multi-service platform for ride hailing, food delivery, and parcel logistics.",
    summarySecondary:
      "Built both web and mobile applications, implemented real-time tracking, secure authentication, and CI/CD pipelines.",
    bullets: [
      "Designed and developed a multi-service platform using React, React Native, Node.js, Fastify, and MongoDB.",
      "Implemented secure authentication, authorisation, and data protection mechanisms.",
      "Built and deployed real-time tracking systems.",
      "Developed cross-platform web and mobile applications.",
      "Integrated push notification services to improve retention and engagement.",
      "Developed automated CI/CD pipelines and maintained technical documentation.",
    ],
  },
  {
    role: "Full Stack Developer",
    period: "2022 — 2024",
    company: "Union Realtime",
    summary:
      "Played a key role in developing and optimising scalable applications using Angular, TypeScript, and Python with focus on reliability and maintainability.",
    bullets: [
      "Developed and optimised software using Angular, TypeScript, Python, and Node.js.",
      "Designed and implemented REST APIs with Nest.js.",
      "Optimised T-SQL database queries to improve efficiency and response times.",
      "Implemented CI/CD pipelines and automated deployment processes.",
      "Created and maintained technical documentation for API usage and system design.",
    ],
  },
];

const projectItems: TextCard[] = [
  {
    title: "Justice Redact",
    tag: "AI Workflow",
    description:
      "AI-assisted SAR redaction platform for sensitive legal workflows, covering ingestion, entity detection, review tooling, manual control, and export support.",
    iconPath: "M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm6 1.5V9h4.5",
  },
  {
    title: "ClaimsGate Document Engine",
    tag: "Cost Saving",
    description:
      "Internal document conversion service that transformed Word files to PDF at scale, helping reduce Adobe-related costs by up to £15,000 per month.",
    iconPath: "M6 3h9l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm8 1.5V7h2.5M8 11h8v2H8v-2Zm0 4h8v2H8v-2Z",
    iconClass: "text-emerald-600",
    iconBgClass: "bg-emerald-50",
  },
];

const strengthItems: TextCard[] = [
  {
    title: "Frontend Systems",
    description:
      "React, Next.js, TypeScript, responsive UI engineering, user-focused interfaces, and modern frontend delivery.",
    iconPath: "M4 5h16v10H4V5Zm2 2v6h12V7H6Zm3 10h6v2H9v-2Z",
  },
  {
    title: "Backend & APIs",
    description:
      "Node.js, Python, FastAPI, REST APIs, service design, data workflows, and production-oriented backend engineering.",
    iconPath: "M4 4h16v6H4V4Zm0 8h16v6H4v-6Zm2-6v2h2V6H6Zm0 8v2h2v-2H6Z",
  },
  {
    title: "Cloud & Delivery",
    description:
      "AWS, CI/CD, deployment pipelines, infrastructure awareness, and pragmatic decisions around delivery and maintainability.",
    iconPath: "M6 19a4 4 0 1 1 .9-7.9A5 5 0 0 1 17.5 9a3.5 3.5 0 1 1 0 7H6Z",
  },
  {
    title: "AI-Assisted Workflows",
    description:
      "Document intelligence, redaction workflows, entity detection, human review tooling, and workflow automation support.",
    iconPath: "M12 4a3 3 0 1 1-2.8 4H7a2 2 0 1 0 0 4h2.2A3 3 0 1 1 12 20a3 3 0 0 1-2.8-4H7a4 4 0 1 1 0-8h2.2A3 3 0 0 1 12 4Z",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Elbeera",
    className:
      "inline-flex items-center justify-center rounded-2xl bg-[#181717] px-5 py-3 text-sm font-medium text-white transition hover:bg-black",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hothyfa-elbeera/",
    className:
      "inline-flex items-center justify-center rounded-2xl bg-[#0A66C2] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#004182]",
  },
];

function InfoCard({ item }: { item: TextCard }) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md",
        item.wide ? "sm:col-span-2" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBgClass ?? "bg-slate-100"}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 ${item.iconClass ?? "text-slate-700"}`}>
            <path d={item.iconPath} />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <h3 className="min-w-0 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 break-words">{item.title}</h3>
            {item.tag ? (
              <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{item.tag}</span>
            ) : null}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <Section id="ask-cv" title="Ask my CV">
        <AskCv />
      </Section>

      <Section id="summary" title="Executive Summary">
        <div className="max-w-3xl space-y-5 text-slate-700">
          {summaryParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-7 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section id="impact" title="Selected Impact">
        <div className="grid gap-5 sm:grid-cols-2">
          {impactItems.map((item) => (
            <InfoCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid gap-4 sm:grid-cols-2">
          {certificationItems.map((item) => (
            <InfoCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-14">
          {experienceItems.map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-600">{item.company}</p>
              <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-700 sm:text-base">
                <p>{item.summary}</p>
                {item.summarySecondary ? <p>{item.summarySecondary}</p> : null}
                <ul className="list-disc space-y-2 pl-5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="strengths" title="Technical Strengths">
        <div className="grid gap-5 sm:grid-cols-2">
          {strengthItems.map((item) => (
            <InfoCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid gap-5">
          {projectItems.map((item) => (
            <InfoCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="max-w-3xl space-y-6">
          <p className="text-base leading-7 text-slate-700 sm:text-lg">
            I&apos;m open to senior software engineering opportunities where I can contribute through strong technical ownership,
            scalable system design, and building AI-driven applications in real-world environments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
            >
              Download CV
            </a>
            <a
              href="mailto:h.s.elbeera@gmail.com"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900"
            >
              Email Me
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={link.className}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}