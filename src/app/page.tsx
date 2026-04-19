"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import AskCv from "@/components/AskCv";
import { useLanguage } from "@/components/language/LanguageProvider";

const arTranslations: Record<string, string> = {
  "Senior Software Engineer with 6+ years of experience designing and scaling cloud-native, distributed systems across AWS and Azure. Proven track record of leading end-to-end development of high-performance platforms serving thousands of users, delivering measurable improvements in performance, scalability, and cost efficiency.":
    "مهندس برمجيات أول بخبرة تزيد عن 6 سنوات في تصميم وتوسيع الأنظمة السحابية الموزعة على AWS وAzure. سجل مثبت في قيادة التطوير الشامل لمنصات عالية الأداء تخدم آلاف المستخدمين مع تحقيق تحسينات ملموسة في الأداء وقابلية التوسع وكفاءة التكلفة.",
  "Currently leading the development of an AI-powered document processing system within the UK Ministry of Justice, specialising in Natural Language Processing (NLP), intelligent automation, and production-grade AI system design.":
    "أقود حالياً تطوير نظام لمعالجة المستندات مدعوم بالذكاء الاصطناعي داخل وزارة العدل البريطانية، مع تخصص في معالجة اللغة الطبيعية والأتمتة الذكية وتصميم أنظمة ذكاء اصطناعي جاهزة للإنتاج.",
  "Expert in Node.js, Python, and TypeScript, with strong experience in microservices architectures, DevOps automation, and secure system design. Passionate about building scalable AI-driven systems and transitioning into advanced AI engineering and architecture roles.":
    "خبير في Node.js وPython وTypeScript، مع خبرة قوية في معماريات الخدمات المصغرة وأتمتة DevOps وتصميم الأنظمة الآمنة. شغوف ببناء أنظمة قابلة للتوسع مدعومة بالذكاء الاصطناعي والانتقال إلى أدوار متقدمة في هندسة وعمارة الذكاء الاصطناعي.",
  "AI-assisted legal document processing": "معالجة المستندات القانونية بالذكاء الاصطناعي",
  "Leading engineering work on AI-powered document processing and redaction workflows for the UK Ministry of Justice.":
    "قيادة العمل الهندسي لسير معالجة المستندات والتنقيح المدعوم بالذكاء الاصطناعي لصالح وزارة العدل البريطانية.",
  "Sole-engineer ownership": "ملكية هندسية فردية",
  "Driving architecture, backend services, and delivery decisions across a sensitive production-focused system in a high-trust environment.":
    "قيادة قرارات المعمارية والخدمات الخلفية والتسليم عبر نظام حساس موجه للإنتاج ضمن بيئة عالية الثقة.",
  "Backend systems and API delivery": "أنظمة الخلفية وتسليم واجهات API",
  "Built production APIs and operational services, including conflict checking across live datasets and multi-funnel business workflows.":
    "بناء واجهات API إنتاجية وخدمات تشغيلية، بما يشمل فحص التعارض عبر بيانات حية وسير أعمال متعدد المسارات.",
  "Cloud-native architecture": "معمارية سحابية أصلية",
  "Experience designing scalable systems across AWS and Azure with focus on maintainability, performance, and delivery speed.":
    "خبرة في تصميم أنظمة قابلة للتوسع على AWS وAzure مع التركيز على سهولة الصيانة والأداء وسرعة التسليم.",
  "AWS Certified Cloud Practitioner": "شهادة AWS Cloud Practitioner",
  "Foundation certification covering AWS cloud concepts, core services, security, architecture, pricing, and support.":
    "شهادة تأسيسية تغطي مفاهيم سحابة AWS والخدمات الأساسية والأمان والمعمارية والتسعير والدعم.",
  "AWS Certified AI Practitioner": "شهادة AWS AI Practitioner",
  "Certification supporting practical understanding of AI and machine learning concepts in cloud-based systems and solutions.":
    "شهادة تدعم الفهم العملي لمفاهيم الذكاء الاصطناعي وتعلم الآلة في الأنظمة والحلول السحابية.",
  "React & React Native Certification": "شهادة React وReact Native",
  "Frontend": "الواجهة الأمامية",
  "Supports frontend and cross-platform development capability across web and mobile application delivery.":
    "تدعم قدرات تطوير الواجهة الأمامية وعبر المنصات في تطبيقات الويب والهواتف.",
  "Querying Microsoft SQL Server with Transact-SQL":
    "الاستعلام عن Microsoft SQL Server باستخدام Transact-SQL",
  SQL: "SQL",
  "Reinforces SQL querying and relational database capability in production-oriented systems.":
    "تعزز مهارات الاستعلام في SQL وقواعد البيانات العلائقية ضمن أنظمة موجهة للإنتاج.",
  "Node.js, Express.js and MongoDB Certification":
    "شهادة Node.js وExpress.js وMongoDB",
  Backend: "الخلفية",
  "Supports backend API development and full stack JavaScript application delivery using modern service patterns.":
    "تدعم تطوير واجهات API الخلفية وتسليم تطبيقات JavaScript متكاملة باستخدام أنماط خدمات حديثة.",
  "Senior Software Engineer (AI Systems)": "مهندس برمجيات أول (أنظمة ذكاء اصطناعي)",
  "2026 — Present": "2026 — حتى الآن",
  "UK Ministry of Justice": "وزارة العدل البريطانية",
  "Sole Software Engineer responsible for the design, development, and delivery of Justice Redact, an AI-assisted system for automating the redaction of sensitive information from legal Subject Access Request (SAR) documents. The platform replaces manual redaction workflows with scalable, intelligent document processing, improving efficiency, accuracy, and compliance.":
    "مهندس البرمجيات الوحيد المسؤول عن تصميم وتطوير وتسليم Justice Redact، وهو نظام مدعوم بالذكاء الاصطناعي لأتمتة تنقيح المعلومات الحساسة من مستندات طلبات الوصول للبيانات القانونية (SAR). يستبدل النظام سير العمل اليدوي بتنقيح ذكي قابل للتوسع، مما يحسن الكفاءة والدقة والامتثال.",
  "Working independently while collaborating with product managers, data scientists, designers, and DevOps specialists, I lead all engineering decisions across system architecture, backend development, and AI integration, ensuring a production-ready and scalable solution.":
    "أعمل بشكل مستقل مع التعاون مع مديري المنتجات وعلماء البيانات والمصممين ومتخصصي DevOps، وأقود جميع القرارات الهندسية عبر معمارية النظام وتطوير الخلفية ودمج الذكاء الاصطناعي لضمان حل جاهز للإنتاج وقابل للتوسع.",
  "Led end-to-end engineering of an AI-powered document redaction system, from architecture design to deployment.":
    "قدت هندسة نظام تنقيح مستندات مدعوم بالذكاء الاصطناعي من التصميم المعماري حتى النشر.",
  "Designed and developed scalable backend services using Python (FastAPI) and Node.js for AI-driven document workflows.":
    "صممت وطورت خدمات خلفية قابلة للتوسع باستخدام Python (FastAPI) وNode.js لسير مستندات مدعوم بالذكاء الاصطناعي.",
  "Built AI-assisted redaction pipelines using PyMuPDF, Microsoft Presidio, and AWS Comprehend to detect and redact sensitive entities.":
    "بنيت مسارات تنقيح مدعومة بالذكاء الاصطناعي باستخدام PyMuPDF وMicrosoft Presidio وAWS Comprehend لاكتشاف الكيانات الحساسة وتنقيحها.",
  "Architected a modular system separating backend services from AI processing components, enabling scalability and independent model evolution.":
    "صممت نظاماً معيارياً يفصل خدمات الخلفية عن مكونات المعالجة بالذكاء الاصطناعي، مما يتيح التوسع وتطوير النماذج بشكل مستقل.",
  "Designed and implemented data storage strategies using AWS S3 and relational databases for document state, versioning, and audit tracking.":
    "صممت ونفذت استراتيجيات تخزين بيانات باستخدام AWS S3 وقواعد بيانات علائقية لحالة المستندات وإدارة الإصدارات وتتبع التدقيق.",
  "Developed APIs supporting document ingestion, processing, review workflows, and export functionality.":
    "طورت واجهات API تدعم إدخال المستندات ومعالجتها وسير المراجعة ووظائف التصدير.",
  "Collaborated with data scientists to integrate and optimise NLP models for entity recognition and document classification.":
    "تعاونت مع علماء البيانات لدمج وتحسين نماذج معالجة اللغة الطبيعية للتعرف على الكيانات وتصنيف المستندات.",
  "Ensured strict compliance with data protection, security, and governance standards when handling highly sensitive legal data.":
    "ضمنت الامتثال الصارم لمعايير حماية البيانات والأمن والحوكمة عند التعامل مع بيانات قانونية شديدة الحساسية.",
  "Conducted performance benchmarking and contributed to infrastructure and cost optimisation strategies.":
    "أجريت قياسات أداء وشاركت في استراتيجيات تحسين البنية التحتية والتكلفة.",
  "Software Engineer": "مهندس برمجيات",
  "2025 — 2026": "2025 — 2026",
  "Claims Gate": "Claims Gate",
  "Joined a fast-scaling software company focused on digital claim management solutions, leading end-to-end development of core products from concept through architecture and deployment.":
    "انضممت إلى شركة برمجيات سريعة النمو تركز على حلول إدارة المطالبات الرقمية، وقادت التطوير الشامل للمنتجات الأساسية من الفكرة حتى المعمارية والنشر.",
  "Led design and technology decisions while collaborating with cross-functional teams to optimise systems and deliver reliably.":
    "قدت قرارات التصميم والتقنية بالتعاون مع فرق متعددة التخصصات لتحسين الأنظمة والتسليم بثبات.",
  "Designed and implemented scalable, cost-optimised architectures across AWS and Azure.":
    "صممت ونفذت معماريات قابلة للتوسع ومحسنة التكلفة عبر AWS وAzure.",
  "Designed APIs with strict validation and encryption best practices.":
    "صممت واجهات API بممارسات صارمة للتحقق والتشفير.",
  "Designed and deployed Docker-based microservices in Node.js, improving scalability and reliability.":
    "صممت ونشرت خدمات مصغرة مبنية على Docker باستخدام Node.js مما حسن قابلية التوسع والاعتمادية.",
  "Built cloud-native applications with Node.js, Express, Firebase Functions, and Firestore for secure API-driven systems.":
    "بنيت تطبيقات سحابية أصلية باستخدام Node.js وExpress وFirebase Functions وFirestore لأنظمة آمنة قائمة على API.",
  "Used Vue.js for dynamic, performant frontend development.":
    "استخدمت Vue.js لتطوير واجهات أمامية ديناميكية وعالية الأداء.",
  "Implemented monitoring and logging to proactively identify system issues.":
    "نفذت المراقبة وتسجيل الأحداث لاكتشاف مشاكل النظام بشكل استباقي.",
  "Full Stack Developer": "مطور متكامل",
  "2024 — 2025": "2024 — 2025",
  Shoory: "Shoory",
  "Key contributor at an early-stage startup building a multi-service platform for ride hailing, food delivery, and parcel logistics.":
    "مساهم رئيسي في شركة ناشئة مبكرة تبني منصة متعددة الخدمات لطلب السيارات وتوصيل الطعام والخدمات اللوجستية للطرود.",
  "Built both web and mobile applications, implemented real-time tracking, secure authentication, and CI/CD pipelines.":
    "بنيت تطبيقات ويب وجوال، ونفذت التتبع اللحظي والمصادقة الآمنة وخطوط CI/CD.",
  "Designed and developed a multi-service platform using React, React Native, Node.js, Fastify, and MongoDB.":
    "صممت وطورت منصة متعددة الخدمات باستخدام React وReact Native وNode.js وFastify وMongoDB.",
  "Implemented secure authentication, authorisation, and data protection mechanisms.":
    "نفذت آليات مصادقة وتفويض وحماية بيانات آمنة.",
  "Built and deployed real-time tracking systems.": "بنيت ونشرت أنظمة تتبع لحظي.",
  "Developed cross-platform web and mobile applications.":
    "طورت تطبيقات ويب وجوال متعددة المنصات.",
  "Integrated push notification services to improve retention and engagement.":
    "دمجت خدمات الإشعارات الفورية لتحسين الاحتفاظ والتفاعل.",
  "Developed automated CI/CD pipelines and maintained technical documentation.":
    "طورت خطوط CI/CD آلية وحافظت على التوثيق التقني.",
  "2022 — 2024": "2022 — 2024",
  "Union Realtime": "Union Realtime",
  "Played a key role in developing and optimising scalable applications using Angular, TypeScript, and Python with focus on reliability and maintainability.":
    "أديت دوراً رئيسياً في تطوير وتحسين تطبيقات قابلة للتوسع باستخدام Angular وTypeScript وPython مع التركيز على الاعتمادية وسهولة الصيانة.",
  "Developed and optimised software using Angular, TypeScript, Python, and Node.js.":
    "طورت وحسنت البرمجيات باستخدام Angular وTypeScript وPython وNode.js.",
  "Designed and implemented REST APIs with Nest.js.":
    "صممت ونفذت واجهات REST API باستخدام Nest.js.",
  "Optimised T-SQL database queries to improve efficiency and response times.":
    "حسنت استعلامات قواعد بيانات T-SQL لرفع الكفاءة وتسريع زمن الاستجابة.",
  "Implemented CI/CD pipelines and automated deployment processes.":
    "نفذت خطوط CI/CD وعمليات نشر آلية.",
  "Created and maintained technical documentation for API usage and system design.":
    "أنشأت وحافظت على توثيق تقني لاستخدام واجهات API وتصميم النظام.",
  "Justice Redact": "Justice Redact",
  "AI Workflow": "سير عمل ذكاء اصطناعي",
  "AI-assisted SAR redaction platform for sensitive legal workflows, covering ingestion, entity detection, review tooling, manual control, and export support.":
    "منصة تنقيح SAR مدعومة بالذكاء الاصطناعي لسير عمل قانوني حساس، وتشمل الإدخال واكتشاف الكيانات وأدوات المراجعة والتحكم اليدوي ودعم التصدير.",
  "ClaimsGate Document Engine": "محرك المستندات ClaimsGate",
  "Cost Saving": "خفض التكاليف",
  "Internal document conversion service that transformed Word files to PDF at scale, helping reduce Adobe-related costs by up to £15,000 per month.":
    "خدمة داخلية لتحويل المستندات من Word إلى PDF على نطاق واسع، ساهمت في خفض التكاليف المرتبطة بـ Adobe حتى 15,000 جنيه إسترليني شهرياً.",
  "Frontend Systems": "أنظمة الواجهة الأمامية",
  "React, Next.js, TypeScript, responsive UI engineering, user-focused interfaces, and modern frontend delivery.":
    "React وNext.js وTypeScript وهندسة واجهات متجاوبة وواجهات تركز على المستخدم وتسليم حديث للواجهة الأمامية.",
  "Backend & APIs": "الخلفية وواجهات API",
  "Node.js, Python, FastAPI, REST APIs, service design, data workflows, and production-oriented backend engineering.":
    "Node.js وPython وFastAPI وواجهات REST وتصميم الخدمات وسير البيانات وهندسة خلفية موجهة للإنتاج.",
  "Cloud & Delivery": "السحابة والتسليم",
  "AWS, CI/CD, deployment pipelines, infrastructure awareness, and pragmatic decisions around delivery and maintainability.":
    "AWS وCI/CD وخطوط النشر وفهم البنية التحتية واتخاذ قرارات عملية حول التسليم وسهولة الصيانة.",
  "AI-Assisted Workflows": "سير عمل مدعوم بالذكاء الاصطناعي",
  "Document intelligence, redaction workflows, entity detection, human review tooling, and workflow automation support.":
    "ذكاء المستندات وسير التنقيح واكتشاف الكيانات وأدوات المراجعة البشرية ودعم أتمتة سير العمل.",
  "Ask my CV": "اسأل عن سيرتي الذاتية",
  "Executive Summary": "الملخص التنفيذي",
  "Selected Impact": "أثر مختار",
  Certifications: "الشهادات",
  Experience: "الخبرة",
  "Technical Strengths": "نقاط القوة التقنية",
  "Featured Projects": "مشاريع مميزة",
  Contact: "التواصل",
  "Download CV": "تحميل السيرة الذاتية",
  "Email Me": "راسلني",
  "I'm open to senior software engineering opportunities where I can contribute through strong technical ownership, scalable system design, and building AI-driven applications in real-world environments.":
    "أنا متاح لفرص هندسة برمجيات أولى يمكنني من خلالها الإسهام بملكية تقنية قوية وتصميم أنظمة قابلة للتوسع وبناء تطبيقات مدعومة بالذكاء الاصطناعي في بيئات واقعية.",
};

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
    iconPath:
      "M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.36 6.84 9.72.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.74 0 0 .84-.27 2.75 1.06A9.33 9.33 0 0 1 12 6.7c.85 0 1.7.12 2.5.35 1.9-1.33 2.75-1.06 2.75-1.06.54 1.43.2 2.48.1 2.74.64.73 1.03 1.65 1.03 2.78 0 3.97-2.35 4.83-4.59 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z",
    className:
      "inline-flex items-center justify-center rounded-2xl bg-[#181717] px-5 py-3 text-sm font-medium text-white transition hover:bg-black",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hothyfa-elbeera/",
    iconPath:
      "M6.94 8.7A1.94 1.94 0 1 1 6.94 4.8a1.94 1.94 0 0 1 0 3.88ZM5.2 9.98h3.48V20H5.2V9.98Zm5.46 0H14v1.37h.05c.46-.88 1.58-1.8 3.26-1.8 3.49 0 4.14 2.34 4.14 5.38V20h-3.47v-4.5c0-1.07-.02-2.45-1.47-2.45-1.47 0-1.7 1.17-1.7 2.37V20h-3.47V9.98Z",
    className:
      "inline-flex items-center justify-center rounded-2xl bg-[#0A66C2] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#004182]",
  },
];

function InfoCard({
  item,
  t,
}: {
  item: TextCard;
  t: (value: string) => string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700",
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
            <h3 className="min-w-0 break-words text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{t(item.title)}</h3>
            {item.tag ? (
              <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300">{t(item.tag)}</span>
            ) : null}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{t(item.description)}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const t = (value: string) => (isArabic ? arTranslations[value] ?? value : value);

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <Hero />

      <Section id="ask-cv" title={t("Ask my CV")}>
        <AskCv />
      </Section>

      <Section id="summary" title={t("Executive Summary")}>
        <div className="max-w-3xl space-y-5 text-slate-700 dark:text-slate-300">
          {summaryParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-7 sm:text-lg">
              {t(paragraph)}
            </p>
          ))}
        </div>
      </Section>

      <Section id="impact" title={t("Selected Impact")}>
        <div className="grid gap-5 sm:grid-cols-2">
          {impactItems.map((item) => (
            <InfoCard key={item.title} item={item} t={t} />
          ))}
        </div>
      </Section>

      <Section id="certifications" title={t("Certifications")}>
        <div className="grid gap-4 sm:grid-cols-2">
          {certificationItems.map((item) => (
            <InfoCard key={item.title} item={item} t={t} />
          ))}
        </div>
      </Section>

      <Section id="experience" title={t("Experience")}>
        <div className="space-y-14">
          {experienceItems.map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t(item.role)}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t(item.period)}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{t(item.company)}</p>
              <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-700 sm:text-base dark:text-slate-300">
                <p>{t(item.summary)}</p>
                {item.summarySecondary ? <p>{t(item.summarySecondary)}</p> : null}
                <ul className="list-disc space-y-2 pl-5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{t(bullet)}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="strengths" title={t("Technical Strengths")}>
        <div className="grid gap-5 sm:grid-cols-2">
          {strengthItems.map((item) => (
            <InfoCard key={item.title} item={item} t={t} />
          ))}
        </div>
      </Section>

      <Section id="projects" title={t("Featured Projects")}>
        <div className="grid gap-5">
          {projectItems.map((item) => (
            <InfoCard key={item.title} item={item} t={t} />
          ))}
        </div>
      </Section>

      <Section id="contact" title={t("Contact")}>
        <div className="max-w-3xl space-y-6">
          <p className="text-base leading-7 text-slate-700 sm:text-lg dark:text-slate-300">
            {t(
              "I'm open to senior software engineering opportunities where I can contribute through strong technical ownership, scalable system design, and building AI-driven applications in real-world environments."
            )}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-black dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
              </svg>
              {t("Download CV")}
            </a>
            <a
              href="mailto:h.s.elbeera@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M4 4h16a2 2 0 0 1 2 2v.01L12 13 2 6.01V6a2 2 0 0 1 2-2Zm0 4.24 7.4 5.18a1 1 0 0 0 1.2 0L20 8.24V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.24Z" />
              </svg>
              {t("Email Me")}
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={link.className}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="mr-2 inline-block h-4 w-4 align-[-2px]" aria-hidden="true">
                  <path d={link.iconPath} />
                </svg>
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