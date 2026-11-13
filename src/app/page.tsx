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
  "CV Website & AI Assistant": "موقع السيرة الذاتية ومساعد الذكاء الاصطناعي",
  "Portfolio Platform": "منصة تعريفية",
  "Built and deployed this multilingual CV website using Next.js, React, TypeScript, and Tailwind CSS, with responsive sections, theme/language toggles, and a production-ready UI architecture. Includes an AI-powered CV assistant integrated with backend APIs and deployed AWS cloud infrastructure for reliable performance and secure delivery.":
    "تم بناء ونشر هذا الموقع متعدد اللغات للسيرة الذاتية باستخدام Next.js وReact وTypeScript وTailwind CSS، مع أقسام متجاوبة وتبديل للوضع/اللغة ومعمارية واجهة جاهزة للإنتاج. يتضمن مساعد سيرة ذاتية مدعوماً بالذكاء الاصطناعي ومتكاملاً مع واجهات خلفية وبنية نشر سحابية لضمان الاعتمادية والأداء والتسليم الآمن.",
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
  "I'm interested in senior and principal-level software engineering opportunities focused on AI-enabled systems, distributed architectures, cloud-native platforms and end-to-end technical ownership. I bring hands-on experience delivering complex applications and collaborating across engineering, data science, architecture and security teams.":
    "أهتم بالفرص المهنية في هندسة البرمجيات على مستوى المهندس الأول أو المهندس الرئيسي، ولا سيما الأدوار التي تركز على الأنظمة المدعومة بالذكاء الاصطناعي، والمعماريات الموزعة، والمنصات السحابية، وتحمل المسؤولية التقنية الشاملة. أمتلك خبرة عملية في تطوير تطبيقات معقدة والعمل بالتعاون مع فرق هندسة البرمجيات وعلوم البيانات والمعمارية التقنية وأمن المعلومات.",
  "BA (Hons) in Business Management":
    "بكالوريوس الآداب (مع مرتبة الشرف) في إدارة الأعمال",
  "Education": "التعليم",
  "Middlesex University. Undergraduate degree in business management, providing a foundation in organisational management and business decision-making.":
    "جامعة ميدلسكس. درجة جامعية في إدارة الأعمال توفر أساساً معرفياً في الإدارة المؤسسية واتخاذ القرارات الإدارية.",
  "Education & Certifications": "التعليم والشهادات المهنية",

  "AI & Distributed Systems":
    "الذكاء الاصطناعي والأنظمة الموزعة",

  "AI-assisted document processing and redaction system at the UK Ministry of Justice. Responsible for application engineering across React, Next.js, Python, FastAPI, NLP integration, AWS SQS, Kubernetes processing workers, persistent review workflows and secure PDF exports.":
    "نظام لمعالجة المستندات وحجب المعلومات الحساسة بمساعدة الذكاء الاصطناعي في وزارة العدل البريطانية. أتولى هندسة التطبيق باستخدام React وNext.js وPython وFastAPI، ودمج معالجة اللغة الطبيعية (NLP)، وتنسيق المعالجة باستخدام AWS SQS وعمال Kubernetes، وتنفيذ سير مراجعة تُحفَظ حالته وتصدير ملفات PDF بصورة آمنة.",

  "Applied AI & Document Intelligence":
    "الذكاء الاصطناعي التطبيقي وذكاء المستندات",

  "August 2024 — May 2025":
    "أغسطس 2024 — مايو 2025",

  "AWS, Azure, Docker, Kubernetes, S3, SQS, RDS, ECR, GitHub Actions and CI/CD. Containerised services, scalable processing, observability and secure deployments.":
    "خبرة في AWS وAzure وDocker وKubernetes وخدمات S3 وSQS وRDS وECR، إلى جانب GitHub Actions والتكامل والتسليم المستمر (CI/CD). وتشمل تشغيل الخدمات داخل الحاويات، والمعالجة القابلة للتوسع، وقابلية رصد الأنظمة، والنشر الآمن.",

  "Built containerised backend services using Node.js, Express.js and Docker, developing reusable APIs and service components.":
    "طوّرت خدمات خلفية تعمل داخل حاويات باستخدام Node.js وExpress.js وDocker، وأنشأت واجهات API ومكونات خدمية قابلة لإعادة الاستخدام.",

  "Built reusable APIs supporting ride bookings, delivery management, parcel logistics and operational workflows.":
    "طوّرت واجهات API قابلة لإعادة الاستخدام لدعم حجز الرحلات وإدارة عمليات التوصيل والخدمات اللوجستية للطرود وسير العمل التشغيلي.",

  "Cloud-Native Delivery & Engineering Quality":
    "تسليم البرمجيات السحابية وجودة الهندسة البرمجية",

  "Collaborated with DevOps on Docker services, Kubernetes deployments, AWS infrastructure and GitHub Actions pipelines across development and staging environments.":
    "تعاونت مع فريق DevOps في إعداد الخدمات باستخدام Docker، ونشر التطبيقات عبر Kubernetes، والعمل على بنية AWS التحتية ومسارات GitHub Actions في بيئات التطوير وما قبل الإنتاج.",

  "Contributed across web applications, mobile applications, backend services and infrastructure, including real-time features, secure authentication and deployment automation.":
    "ساهمت في تطوير تطبيقات الويب والهواتف المحمولة والخدمات الخلفية والبنية التحتية، بما يشمل الوظائف الآنية والمصادقة الآمنة وأتمتة النشر.",

  "Contributed to technical decision-making, system improvements and cross-functional product delivery.":
    "ساهمت في اتخاذ القرارات التقنية وتحسين الأنظمة وتسليم المنتجات بالتعاون مع فرق متعددة التخصصات.",

  "Currently working as a Senior Full Stack Developer at the UK Ministry of Justice, where I am the sole Software Engineer responsible for the application engineering and technical delivery of Justice Redact. My work spans Python/FastAPI services, React/Next.js development, NLP integration, distributed processing, persistent document workflows, automated testing and secure deployment in a highly regulated environment.":
    "أعمل حالياً مطوّر برمجيات متكامل أول في وزارة العدل البريطانية، حيث أتولى بصفتي مهندس البرمجيات الوحيد في المشروع المسؤولية عن هندسة تطبيق Justice Redact وتنفيذه وتسليمه تقنياً. يشمل عملي تطوير الخدمات الخلفية باستخدام Python وFastAPI، وتطوير الواجهات باستخدام React وNext.js، ودمج معالجة اللغة الطبيعية، والمعالجة الموزعة، وإدارة سير عمل المستندات مع حفظ حالتها، والاختبارات الآلية، والنشر الآمن في بيئة حكومية تخضع لمتطلبات تنظيمية صارمة.",

  "Designed and deployed a multilingual professional portfolio using Next.js, React, TypeScript and Tailwind CSS on Cloudflare Pages. Built an AI CV Assistant using retrieval-augmented generation, OpenAI embeddings, semantic search and a Cloudflare Workers API with secure secret management and request rate limiting.":
    "صمّمت ونشرت موقعي المهني متعدد اللغات باستخدام Next.js وReact وTypeScript وTailwind CSS، مع استضافته على Cloudflare Pages. وطوّرت مساعداً ذكياً للسيرة الذاتية يعتمد على التوليد المعزّز بالاسترجاع (RAG)، والتمثيلات المتجهية من OpenAI، والبحث الدلالي، وواجهة API تعمل عبر Cloudflare Workers، مع إدارة آمنة لمفاتيح الوصول وتحديد معدل الطلبات.",

  "Designed and developed web and mobile applications using React, React Native, Node.js, Fastify and MongoDB.":
    "صمّمت وطوّرت تطبيقات للويب والهواتف المحمولة باستخدام React وReact Native وNode.js وFastify وMongoDB.",

  "Designed and implemented asynchronous document processing using AWS SQS, dedicated Kubernetes workers, PostgreSQL job coordination, retries and dead-letter queues.":
    "صمّمت ونفّذت معالجة غير متزامنة للمستندات باستخدام AWS SQS وعمال معالجة مخصصين على Kubernetes، مع تنسيق مهام المعالجة عبر PostgreSQL وآليات إعادة المحاولة وقوائم انتظار الرسائل التي تعذّرت معالجتها (Dead-Letter Queues).",

  "Designed and implemented modular REST APIs using NestJS.":
    "صمّمت ونفّذت واجهات REST API معيارية باستخدام NestJS، بما يدعم تنظيم الخدمات وإعادة استخدام مكوناتها.",

  "Designed application architectures across AWS and Azure with a focus on scalability, reliability and infrastructure cost efficiency.":
    "صمّمت معماريات تطبيقات على AWS وAzure، مع التركيز على قابلية التوسع والاعتمادية وكفاءة تكاليف البنية التحتية.",

  "Designed asynchronous document processing using AWS SQS, Kubernetes workers, PostgreSQL job coordination, retries and dead-letter queues to support resilient workflows.":
    "صمّمت معالجة غير متزامنة للمستندات باستخدام AWS SQS وعمال Kubernetes وتنسيق المهام عبر PostgreSQL وآليات إعادة المحاولة وقوائم انتظار الرسائل المتعثرة، لدعم سير عمل قادر على التعامل مع حالات الإخفاق والتعافي منها.",

  "Designed, developed and delivered cloud-native applications for a digital claims management company, contributing to application architecture, backend systems, infrastructure and engineering improvements.":
    "صمّمت وطوّرت وسلّمت تطبيقات سحابية الأصل لشركة متخصصة في إدارة المطالبات الرقمية، وساهمت في معمارية التطبيقات والأنظمة الخلفية والبنية التحتية والتحسينات الهندسية.",

  "Developed an internal Word-to-PDF document conversion service supporting automated document processing, reducing reliance on external document tooling and supporting more cost-efficient operational workflows.":
    "طوّرت خدمة داخلية لتحويل مستندات Word إلى PDF لدعم المعالجة الآلية للمستندات، وتقليل الاعتماد على أدوات المستندات الخارجية، والمساهمة في رفع كفاءة التكاليف التشغيلية.",

  "Developed and maintained full-stack applications with an emphasis on backend architecture, API design, database performance, reliability and maintainability.":
    "طوّرت وصنت تطبيقات متكاملة، مع التركيز على معمارية الأنظمة الخلفية وتصميم واجهات API وأداء قواعد البيانات والاعتمادية وسهولة الصيانة.",

  "Developed automated CI/CD pipelines to improve deployment consistency.":
    "طوّرت مسارات آلية للتكامل والتسليم المستمر (CI/CD) لتحسين اتساق عمليات النشر.",

  "Developed automated regression tests using Pytest, Vitest and Playwright, covering workflow navigation, concurrent operations, failure handling and document exports.":
    "طوّرت اختبارات انحدار آلية باستخدام Pytest وVitest وPlaywright، تغطي التنقل بين مراحل سير العمل، والعمليات المتداخلة بالتوازي، والتعامل مع الإخفاقات، وتصدير المستندات.",

  "Developed cloud-native application capabilities using Firebase Functions, Firestore and Vue.js.":
    "طوّرت وظائف لتطبيقات سحابية الأصل باستخدام Firebase Functions وFirestore وVue.js.",

  "Developed full-stack applications using Angular, TypeScript, Python and Node.js.":
    "طوّرت تطبيقات متكاملة باستخدام Angular وTypeScript وPython وNode.js.",

  "Developed modular components for PDF extraction, entity recognition, document classification, review-data generation and redaction application.":
    "طوّرت مكونات برمجية معيارية لاستخراج محتوى ملفات PDF، والتعرف على الكيانات، وتصنيف المستندات، وتوليد بيانات المراجعة، وتطبيق عمليات حجب المعلومات الحساسة.",

  "Developed monitoring and logging capabilities to improve troubleshooting and operational visibility.":
    "طوّرت إمكانات للمراقبة وتسجيل الأحداث لتحسين تشخيص المشكلات وزيادة وضوح الحالة التشغيلية للأنظمة.",

  "Distributed Processing & Reliability":
    "المعالجة الموزعة والموثوقية",

  "Document Automation":
    "أتمتة معالجة المستندات",

  "End-to-End Engineering Ownership":
    "المسؤولية الهندسية الشاملة",

  "Engineering experience across AWS and Azure, with Docker, Kubernetes, CI/CD, automated testing, structured logging, observability and secure application delivery.":
    "خبرة هندسية في AWS وAzure، تشمل Docker وKubernetes والتكامل والتسليم المستمر (CI/CD)، والاختبارات الآلية، وتسجيل الأحداث المنظّم، وقابلية رصد الأنظمة، وتسليم التطبيقات بصورة آمنة.",

  "Experienced in taking complex engineering requirements from technical design through implementation and delivery, collaborating with Data Science, DevOps, Architecture, Security, Product and Design teams. Particularly interested in AI systems engineering, intelligent automation, developer productivity and the design of reliable, scalable cloud-native platforms.":
    "أمتلك خبرة في تحويل المتطلبات الهندسية المعقدة من التصميم التقني إلى التنفيذ والتسليم، بالتعاون مع فرق علوم البيانات وDevOps والمعمارية التقنية وأمن المعلومات وإدارة المنتجات والتصميم. وأهتم بصورة خاصة بهندسة أنظمة الذكاء الاصطناعي والأتمتة الذكية وإنتاجية المطورين وتصميم منصات سحابية موثوقة وقابلة للتوسع.",

  "February 2026 — Present":
    "فبراير 2026 — حتى الآن",

  "Implemented API validation, secure data handling and encryption best practices.":
    "نفّذت آليات التحقق من صحة مدخلات واجهات API، وممارسات التعامل الآمن مع البيانات والتشفير.",

  "Implemented authenticated access, user-level document isolation and secure document handling, collaborating with Architecture and Security stakeholders on data protection and governance requirements.":
    "نفّذت ضوابط وصول تتطلب التحقق من هوية المستخدم، وآليات لعزل مستندات كل مستخدم عن الآخرين والتعامل الآمن مع المستندات، بالتعاون مع المعنيين بالمعمارية التقنية وأمن المعلومات بشأن حماية البيانات ومتطلبات الحوكمة.",

  "Implemented automated deployment processes and CI/CD pipelines.":
    "نفّذت عمليات نشر آلية ومسارات للتكامل والتسليم المستمر (CI/CD).",

  "Implemented chunk-based document processing and paginated review capabilities to support large PDF documents and reduce unnecessary data transfer.":
    "نفّذت معالجة المستندات على دفعات، وآليات لاستعراض بيانات المراجعة عبر صفحات متتابعة، لدعم ملفات PDF كبيرة الحجم وتقليل نقل البيانات غير الضروري.",

  "Implemented persistent document lifecycle management, versioned review decisions, asynchronous redaction operations and controlled PDF export generation.":
    "نفّذت إدارة مستمرة لدورة حياة المستندات مع حفظ حالتها، وتتبع إصدارات قرارات المراجعة، وعمليات حجب المعلومات الحساسة بصورة غير متزامنة، وإنشاء ملفات PDF للتصدير وفق ضوابط محددة.",

  "Implemented real-time tracking, secure authentication and authorisation across platform services.":
    "نفّذت إمكانات التتبع الآني وآليات المصادقة الآمنة وإدارة صلاحيات الوصول عبر خدمات المنصة.",

  "Implemented structured logging, operational event tracking and failure-handling mechanisms, supporting monitoring through OpenSearch and AWS infrastructure tooling.":
    "نفّذت تسجيل أحداث منظّماً، وتتبعاً للأحداث التشغيلية، وآليات للتعامل مع الإخفاقات، بما يدعم المراقبة باستخدام OpenSearch وأدوات متابعة بنية AWS التحتية.",

  "Integrated Microsoft Presidio, spaCy, custom entity recognisers and domain-specific post-processing into human-in-the-loop document review workflows, collaborating with Data Science.":
    "دمجت Microsoft Presidio وspaCy وأدوات مخصصة للتعرف على الكيانات، إلى جانب المعالجة اللاحقة المصممة لطبيعة المستندات، ضمن سير عمل لمراجعة المستندات بمشاركة بشرية، بالتعاون مع فريق علوم البيانات.",

  "Integrated Microsoft Presidio, spaCy, custom entity recognisers and domain-specific processing into secure, human-in-the-loop document review and redaction workflows.":
    "دمجت Microsoft Presidio وspaCy وأدوات مخصصة للتعرف على الكيانات ومعالجة متخصصة بحسب طبيعة المستندات، ضمن سير عمل آمن لمراجعة المستندات وحجب المعلومات الحساسة مع إشراف بشري.",

  "Integrated push notifications and cross-platform application capabilities.":
    "دمجت الإشعارات الفورية ووظائف التطبيقات التي تعمل عبر منصات متعددة.",

  "January 2022 — August 2024":
    "يناير 2022 — أغسطس 2024",

  "June 2025 — February 2026":
    "يونيو 2025 — فبراير 2026",

  "Lead hands-on engineering across Next.js, React, TypeScript, Python, FastAPI and reusable document-processing components.":
    "أتولى قيادة التنفيذ الهندسي المباشر باستخدام Next.js وReact وTypeScript وPython وFastAPI، إلى جانب تطوير مكونات قابلة لإعادة الاستخدام لمعالجة المستندات.",

  "Maintained technical documentation covering system architecture, APIs and integrations.":
    "أعددت وحدّثت التوثيق التقني لمعمارية النظام وواجهات API والتكاملات بين الخدمات.",

  "Microsoft Presidio, spaCy, custom entity recognition, AWS Comprehend integration, document intelligence, human-in-the-loop review, RAG and AI-assisted engineering.":
    "Microsoft Presidio وspaCy والتعرف على الكيانات باستخدام أدوات مخصصة، ودمج AWS Comprehend، وذكاء المستندات، والمراجعة بمشاركة بشرية، والتوليد المعزّز بالاسترجاع (RAG)، والهندسة البرمجية المدعومة بالذكاء الاصطناعي.",

  "Optimised Microsoft SQL Server queries and T-SQL database interactions to improve processing efficiency.":
    "حسّنت استعلامات Microsoft SQL Server والتعامل مع قواعد البيانات باستخدام T-SQL لرفع كفاءة المعالجة.",

  "Own end-to-end application engineering across architecture, frontend, backend, reusable processing components, AI integration and automated testing. Collaborate with Product, Data Science, DevOps, Architecture, Security and Design teams to deliver a secure, scalable and maintainable service.":
    "أتولى المسؤولية الهندسية الشاملة عن التطبيق، بما يشمل المعمارية التقنية والواجهات الأمامية والخدمات الخلفية ومكونات المعالجة القابلة لإعادة الاستخدام ودمج تقنيات الذكاء الاصطناعي والاختبارات الآلية. وأتعاون مع فرق إدارة المنتجات وعلوم البيانات وDevOps والمعمارية التقنية وأمن المعلومات والتصميم لتقديم خدمة آمنة وقابلة للتوسع وسهلة الصيانة.",

  "Produced technical documentation covering API behaviour, system architecture and engineering practices.":
    "أعددت توثيقاً تقنياً يشرح سلوك واجهات API ومعمارية الأنظمة والممارسات الهندسية المتبعة.",

  "Python, FastAPI, Node.js, NestJS, Express.js and Fastify. Distributed systems, REST APIs, GraphQL, asynchronous processing, event-driven architecture and persistent workflow design.":
    "Python وFastAPI وNode.js وNestJS وExpress.js وFastify، إلى جانب الأنظمة الموزعة وواجهات REST API وGraphQL والمعالجة غير المتزامنة والمعمارية القائمة على الأحداث وتصميم سير العمل مع حفظ حالته.",

  "RAG & Serverless AI":
    "التوليد المعزّز بالاسترجاع والذكاء الاصطناعي دون خوادم مخصصة",

  "React, Next.js, TypeScript, Vue.js, Angular and React Native. Experience delivering responsive web interfaces, cross-platform applications and complex user-facing workflows.":
    "React وNext.js وTypeScript وVue.js وAngular وReact Native. خبرة في تطوير واجهات ويب متجاوبة وتطبيقات متعددة المنصات وسير عمل معقد يتفاعل معه المستخدمون مباشرة.",

  "Senior Full Stack Developer":
    "مطوّر برمجيات متكامل أول",

  "Senior Software Engineer with 7+ years of experience designing, developing and delivering cloud-native applications, distributed systems and AI-enabled software across AWS and Azure. Strong experience in backend architecture, API design, full-stack engineering, asynchronous processing and secure system delivery.":
    "مهندس برمجيات أول بخبرة تزيد على سبع سنوات في تصميم وتطوير وتسليم التطبيقات السحابية الأصل والأنظمة الموزعة والحلول البرمجية المدعومة بالذكاء الاصطناعي على AWS وAzure. أمتلك خبرة واسعة في معمارية الأنظمة الخلفية وتصميم واجهات API والهندسة البرمجية المتكاملة والمعالجة غير المتزامنة وتسليم الأنظمة بصورة آمنة.",

  "Sole application engineer for Justice Redact, delivering frontend, backend, processing components, AI integration and testing in collaboration with specialist teams.":
    "أتولى بصفتي مهندس التطبيق الوحيد في مشروع Justice Redact تنفيذ الواجهات الأمامية والخدمات الخلفية ومكونات المعالجة ودمج تقنيات الذكاء الاصطناعي والاختبارات، بالتعاون مع فرق تقنية متخصصة.",

  "Sole Software Engineer responsible for the application engineering and technical delivery of Justice Redact, an AI-assisted document processing and redaction service designed to help Ministry of Justice staff identify, review and securely redact sensitive information from Subject Access Request documents.":
    "مهندس البرمجيات الوحيد المسؤول عن هندسة تطبيق Justice Redact وتنفيذه وتسليمه تقنياً. وهو خدمة لمعالجة المستندات وحجب المعلومات الحساسة بمساعدة الذكاء الاصطناعي، صُممت لمساعدة موظفي وزارة العدل البريطانية على اكتشاف المعلومات الحساسة ومراجعتها وحجبها بأمان من مستندات طلبات الوصول إلى البيانات الشخصية.",

  "Worked alongside another Full Stack Developer to build an early-stage multi-service platform supporting ride-hailing, food delivery and parcel logistics.":
    "عملت إلى جانب مطوّر برمجيات متكامل آخر على بناء منصة متعددة الخدمات في مراحلها الأولى، تدعم طلب سيارات الأجرة وتوصيل الطعام والخدمات اللوجستية للطرود.",

  "Worked across the software delivery lifecycle with an emphasis on scalable APIs, secure data handling, reliable cloud services, operational visibility and infrastructure cost considerations.":
    "عملت عبر مختلف مراحل دورة تطوير البرمجيات وتسليمها، مع التركيز على واجهات API القابلة للتوسع، والتعامل الآمن مع البيانات، والخدمات السحابية الموثوقة، ووضوح الحالة التشغيلية للأنظمة، ومراعاة تكاليف البنية التحتية.",
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
  "Senior Software Engineer with 7+ years of experience designing, developing and delivering cloud-native applications, distributed systems and AI-enabled software across AWS and Azure. Strong experience in backend architecture, API design, full-stack engineering, asynchronous processing and secure system delivery.",
  "Currently working as a Senior Full Stack Developer at the UK Ministry of Justice, where I am the sole Software Engineer responsible for the application engineering and technical delivery of Justice Redact. My work spans Python/FastAPI services, React/Next.js development, NLP integration, distributed processing, persistent document workflows, automated testing and secure deployment in a highly regulated environment.",
  "Experienced in taking complex engineering requirements from technical design through implementation and delivery, collaborating with Data Science, DevOps, Architecture, Security, Product and Design teams. Particularly interested in AI systems engineering, intelligent automation, developer productivity and the design of reliable, scalable cloud-native platforms."
];

const impactItems: TextCard[] = [
  {
    title: "Applied AI & Document Intelligence",
    description:
      "Integrated Microsoft Presidio, spaCy, custom entity recognisers and domain-specific processing into secure, human-in-the-loop document review and redaction workflows.",
    iconPath:
      "M12 4a3 3 0 1 1-2.83 4H7a2 2 0 1 0 0 4h2.17A3 3 0 1 1 12 20a3 3 0 0 1-2.83-4H7a4 4 0 1 1 0-8h2.17A3 3 0 0 1 12 4Z",
  },
  {
    title: "End-to-End Engineering Ownership",
    description:
      "Sole application engineer for Justice Redact, delivering frontend, backend, processing components, AI integration and testing in collaboration with specialist teams.",
    iconPath: "M12 2 4 6v6c0 5.2 3.4 9.8 8 11 4.6-1.2 8-5.8 8-11V6l-8-4Z",
  },
  {
    title: "Distributed Processing & Reliability",
    description:
      "Designed asynchronous document processing using AWS SQS, Kubernetes workers, PostgreSQL job coordination, retries and dead-letter queues to support resilient workflows.",
    iconPath: "M4 4h16v6H4V4Zm0 8h16v6H4v-6Zm2-6v2h2V6H6Zm0 8v2h2v-2H6Z",
  },
  {
    title: "Cloud-Native Delivery & Engineering Quality",
    description:
      "Engineering experience across AWS and Azure, with Docker, Kubernetes, CI/CD, automated testing, structured logging, observability and secure application delivery.",
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
  {
    title: "BA (Hons) in Business Management",
    tag: "Education",
    description:
      "Middlesex University. Undergraduate degree in business management, providing a foundation in organisational management and business decision-making.",
    iconPath:
      "M12 3 2 9l10 6 10-6-10-6Zm-6 10v5c4 3 8 3 12 0v-5M21 10v7",
    iconClass: "text-indigo-600",
    iconBgClass: "bg-indigo-50",
  },
];

const experienceItems: Experience[] = [
  {
    "role": "Senior Full Stack Developer",
    "period": "February 2026 — Present",
    "company": "UK Ministry of Justice",
    "summary": "Sole Software Engineer responsible for the application engineering and technical delivery of Justice Redact, an AI-assisted document processing and redaction service designed to help Ministry of Justice staff identify, review and securely redact sensitive information from Subject Access Request documents.",
    "summarySecondary": "Own end-to-end application engineering across architecture, frontend, backend, reusable processing components, AI integration and automated testing. Collaborate with Product, Data Science, DevOps, Architecture, Security and Design teams to deliver a secure, scalable and maintainable service.",
    "bullets": [
      "Lead hands-on engineering across Next.js, React, TypeScript, Python, FastAPI and reusable document-processing components.",
      "Designed and implemented asynchronous document processing using AWS SQS, dedicated Kubernetes workers, PostgreSQL job coordination, retries and dead-letter queues.",
      "Integrated Microsoft Presidio, spaCy, custom entity recognisers and domain-specific post-processing into human-in-the-loop document review workflows, collaborating with Data Science.",
      "Developed modular components for PDF extraction, entity recognition, document classification, review-data generation and redaction application.",
      "Implemented persistent document lifecycle management, versioned review decisions, asynchronous redaction operations and controlled PDF export generation.",
      "Implemented chunk-based document processing and paginated review capabilities to support large PDF documents and reduce unnecessary data transfer.",
      "Developed automated regression tests using Pytest, Vitest and Playwright, covering workflow navigation, concurrent operations, failure handling and document exports.",
      "Implemented structured logging, operational event tracking and failure-handling mechanisms, supporting monitoring through OpenSearch and AWS infrastructure tooling.",
      "Implemented authenticated access, user-level document isolation and secure document handling, collaborating with Architecture and Security stakeholders on data protection and governance requirements.",
      "Collaborated with DevOps on Docker services, Kubernetes deployments, AWS infrastructure and GitHub Actions pipelines across development and staging environments."
    ]
  },
  {
    "role": "Full Stack Developer",
    "period": "June 2025 — February 2026",
    "company": "Claimsgate",
    "summary": "Designed, developed and delivered cloud-native applications for a digital claims management company, contributing to application architecture, backend systems, infrastructure and engineering improvements.",
    "summarySecondary": "Worked across the software delivery lifecycle with an emphasis on scalable APIs, secure data handling, reliable cloud services, operational visibility and infrastructure cost considerations.",
    "bullets": [
      "Designed application architectures across AWS and Azure with a focus on scalability, reliability and infrastructure cost efficiency.",
      "Built containerised backend services using Node.js, Express.js and Docker, developing reusable APIs and service components.",
      "Developed cloud-native application capabilities using Firebase Functions, Firestore and Vue.js.",
      "Implemented API validation, secure data handling and encryption best practices.",
      "Developed monitoring and logging capabilities to improve troubleshooting and operational visibility.",
      "Contributed to technical decision-making, system improvements and cross-functional product delivery."
    ]
  },
  {
    "role": "Full Stack Developer",
    "period": "August 2024 — May 2025",
    "company": "Shoory",
    "summary": "Worked alongside another Full Stack Developer to build an early-stage multi-service platform supporting ride-hailing, food delivery and parcel logistics.",
    "summarySecondary": "Contributed across web applications, mobile applications, backend services and infrastructure, including real-time features, secure authentication and deployment automation.",
    "bullets": [
      "Designed and developed web and mobile applications using React, React Native, Node.js, Fastify and MongoDB.",
      "Built reusable APIs supporting ride bookings, delivery management, parcel logistics and operational workflows.",
      "Implemented real-time tracking, secure authentication and authorisation across platform services.",
      "Integrated push notifications and cross-platform application capabilities.",
      "Developed automated CI/CD pipelines to improve deployment consistency.",
      "Maintained technical documentation covering system architecture, APIs and integrations."
    ]
  },
  {
    "role": "Full Stack Developer",
    "period": "January 2022 — August 2024",
    "company": "Union Realtime",
    "summary": "Developed and maintained full-stack applications with an emphasis on backend architecture, API design, database performance, reliability and maintainability.",
    "bullets": [
      "Developed full-stack applications using Angular, TypeScript, Python and Node.js.",
      "Designed and implemented modular REST APIs using NestJS.",
      "Optimised Microsoft SQL Server queries and T-SQL database interactions to improve processing efficiency.",
      "Implemented automated deployment processes and CI/CD pipelines.",
      "Produced technical documentation covering API behaviour, system architecture and engineering practices."
    ]
  }
];

const projectItems: TextCard[] = [
  {
    title: "Justice Redact",
    tag: "AI & Distributed Systems",
    description:
      "AI-assisted document processing and redaction system at the UK Ministry of Justice. Responsible for application engineering across React, Next.js, Python, FastAPI, NLP integration, AWS SQS, Kubernetes processing workers, persistent review workflows and secure PDF exports.",
    iconPath: "M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm6 1.5V9h4.5",
  },
  {
    title: "ClaimsGate Document Engine",
    tag: "Document Automation",
    description:
      "Developed an internal Word-to-PDF document conversion service supporting automated document processing, reducing reliance on external document tooling and supporting more cost-efficient operational workflows.",
    iconPath: "M6 3h9l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm8 1.5V7h2.5M8 11h8v2H8v-2Zm0 4h8v2H8v-2Z",
    iconClass: "text-emerald-600",
    iconBgClass: "bg-emerald-50",
  },
  {
    title: "CV Website & AI Assistant",
    tag: "RAG & Serverless AI",
    description:
      "Designed and deployed a multilingual professional portfolio using Next.js, React, TypeScript and Tailwind CSS on Cloudflare Pages. Built an AI CV Assistant using retrieval-augmented generation, OpenAI embeddings, semantic search and a Cloudflare Workers API with secure secret management and request rate limiting.",
    iconPath:
      "M4 5h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm2 2v9h12V7H6Zm5 12h2v2h-2v-2Z",
    iconClass: "text-indigo-600",
    iconBgClass: "bg-indigo-50",
  },
];

const strengthItems: TextCard[] = [
  {
    title: "Frontend Systems",
    description:
      "React, Next.js, TypeScript, Vue.js, Angular and React Native. Experience delivering responsive web interfaces, cross-platform applications and complex user-facing workflows.",
    iconPath: "M4 5h16v10H4V5Zm2 2v6h12V7H6Zm3 10h6v2H9v-2Z",
  },
  {
    title: "Backend & APIs",
    description:
      "Python, FastAPI, Node.js, NestJS, Express.js and Fastify. Distributed systems, REST APIs, GraphQL, asynchronous processing, event-driven architecture and persistent workflow design.",
    iconPath: "M4 4h16v6H4V4Zm0 8h16v6H4v-6Zm2-6v2h2V6H6Zm0 8v2h2v-2H6Z",
  },
  {
    title: "Cloud & Delivery",
    description:
      "AWS, Azure, Docker, Kubernetes, S3, SQS, RDS, ECR, GitHub Actions and CI/CD. Containerised services, scalable processing, observability and secure deployments.",
    iconPath: "M6 19a4 4 0 1 1 .9-7.9A5 5 0 0 1 17.5 9a3.5 3.5 0 1 1 0 7H6Z",
  },
  {
    title: "AI-Assisted Workflows",
    description:
      "Microsoft Presidio, spaCy, custom entity recognition, AWS Comprehend integration, document intelligence, human-in-the-loop review, RAG and AI-assisted engineering.",
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

      <Section id="ask-my-cv" title={t("Ask my CV")}>
        <AskCv key={language} />
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

      <Section id="certifications" title={t("Education & Certifications")}>
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
              "I'm interested in senior and principal-level software engineering opportunities focused on AI-enabled systems, distributed architectures, cloud-native platforms and end-to-end technical ownership. I bring hands-on experience delivering complex applications and collaborating across engineering, data science, architecture and security teams."
            )}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-black dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
              </svg>
              {t("Download CV")}
            </a>
            <a
              href="mailto:h.s.elbeera@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M4 4h16a2 2 0 0 1 2 2v.01L12 13 2 6.01V6a2 2 0 0 1 2-2Zm0 4.24 7.4 5.18a1 1 0 0 0 1.2 0L20 8.24V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.24Z" />
              </svg>
              {t("Email Me")}
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`${link.className} gap-2.5`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-translate-y-px h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d={link.iconPath} />
                </svg>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}