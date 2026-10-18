export const resumeData = {
  name: "Celeste Whelan",
  title: "Senior Software Engineer",
  headerSkills: ["C#", ".NET", "JavaScript", "AWS", "Claude Code"],
  summary:
    "Senior Software Engineer with 13+ years of experience building business software in C#, .NET, and SQL Server. Hands-on experience calling Anthropic and Gemini model APIs. Recently built AI features that read real estate emails and pull out deals, tasks, and key dates for brokers. Designed a way to turn unclear AI results into simple choices so users can resolve them in seconds. Portfolio: celestewhelan.com. Uses AI tools like Claude Code and GitHub Copilot to build and test software faster.",
  skills: [
    {
      category: "AI",
      items: "Anthropic and Gemini model APIs, Claude Code, Claude Design, GitHub Copilot, Kiro CLI; AI email pipeline (Python, FastAPI, Postgres)",
    },
    {
      category: "Languages and frameworks",
      items: "C#, .NET, ASP.NET (MVC and Core), REST APIs, JavaScript, TypeScript, Python",
    },
    {
      category: "Databases",
      items: "SQL Server, PostgreSQL, MongoDB, Redis",
    },
    {
      category: "Cloud",
      items: "AWS (Lambda, CloudFormation, S3), GCP",
    },
    {
      category: "Tools and methods",
      items: "Visual Studio, SQL Server Management Studio, Git, agile/scrum, unit testing",
    },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      dates: "July 2026 – Present",
      company: "Alaris Mail - Boise, ID",
      bullets: [
        "As my first task, built the document part of the AI email pipeline in Python. It uses OCR for PDFs to pull out dates, people, and deal data.",
        "Built features for the AI email pipeline (Python, FastAPI, Postgres) that uses Anthropic and Gemini models to read emails and attachments and pull out commercial real estate deals, tasks, and key dates.",
        "Designed a question system that turns unclear AI results into clear, clickable choices, so brokers can resolve edge cases in seconds.",
        "Compared Anthropic and Gemini models and refined prompts over time for the AI email pipeline. Built smoke tests with an answer key of over 100 example emails to measure AI accuracy, and reviewed AI outputs to mark them correct or incorrect. Kept 1,000+ automated tests passing and checked every change against real production emails to keep the system reliable.",
        "Redesigned the entire Alaris website, including its layout, styling, and content, using Claude Design to create design comps (mockups) for every page.",
      ],
    },
    {
      title: "Senior Software Engineer",
      dates: "October 2019 – April 2026",
      company: "Scentsy, Inc. - Meridian, ID",
      bullets: [
        "Built and maintained multiple enterprise .NET MVC applications (C#, ASP.NET) with complex business rules, working on both front-end and back-end code.",
        "Designed and integrated REST APIs and third-party services, including marketing, search, and content platforms.",
        "Led the front-end build of a full enterprise website rebrand, including a style guide, site-wide layout and styling overhaul, and CMS-driven content (Contentstack), with a responsive design using Bootstrap and SCSS.",
        "Optimized SQL Server databases to improve query speed and overall system performance.",
        "Added caching for third-party pricing APIs, which cut server load and sped up response times.",
        "Built conversion tracking pipelines with event deduplication and data normalization for Facebook, TikTok, and Pinterest.",
        "Built AWS Lambda functions for product indexing and automation.",
        "Set up and managed 100+ Talon.One promotion campaigns across global markets, including API integration and VAT-aware logic for European storefronts.",
        "Used Claude Code, GitHub Copilot, and Kiro CLI to speed up development, code reviews, troubleshooting, and documentation, while keeping full ownership of all production code.",
      ],
    },
    {
      title: ".NET Application Developer",
      dates: "June 2013 – October 2019",
      company: "Pets Best Insurance - Boise, ID",
      bullets: [
        "Designed and maintained customer-facing and internal websites in ASP.NET MVC 5 with Razor.",
        "Built a multi-step online claim submission process and a veterinarian search tool using Vue.js.",
        "Created a Web API for third-party quote and plan management, and overhauled the enrollment site for desktop and mobile using Bootstrap.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Neumont University - South Jordan, UT",
  },
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issued: "Issued January 2020",
    },
  ],
};
