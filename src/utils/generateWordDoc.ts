import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  TabStopPosition,
  TabStopType,
} from "docx";
import { saveAs } from "file-saver";

const ACCENT = "8B5E3C";
const DARK = "1A1A1A";
const GRAY = "555555";

const sectionLabel = (text: string) =>
  new Paragraph({
    text: text.toUpperCase(),
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 80 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 4, color: "D0C9BE" },
    },
    run: { color: ACCENT, size: 18, bold: true },
  });

const bulletItem = (text: string) =>
  new Paragraph({
    bullet: { level: 0 },
    children: [new TextRun({ text, size: 22, color: GRAY })],
    spacing: { after: 60 },
  });

const jobHeader = (title: string, dates: string) =>
  new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: title, bold: true, size: 24, color: DARK }),
      new TextRun({ text: "\t" + dates, size: 20, color: "777777" }),
    ],
    spacing: { before: 160, after: 40 },
  });

const jobCompany = (text: string) =>
  new Paragraph({
    children: [new TextRun({ text, size: 20, color: ACCENT, bold: true })],
    spacing: { after: 80 },
  });

export const generateWordDoc = async () => {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: "Calibri", size: 24, color: DARK },
        },
      },
    },
    sections: [
      {
        children: [
          // Header
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                text: "Celeste Whelan",
                bold: true,
                size: 52,
                color: DARK,
                font: "Georgia",
              }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "SENIOR SOFTWARE ENGINEER",
                size: 18,
                color: ACCENT,
                bold: true,
              }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "C#  .NET  JavaScript  React  AWS  Claude Code",
                size: 18,
                color: "777777",
              }),
            ],
            spacing: { after: 200 },
          }),

          // Summary
          sectionLabel("Professional Summary"),
          new Paragraph({
            children: [
              new TextRun({
                text: "Detail-oriented Senior Software Engineer with 13+ years of experience building and enhancing enterprise-level applications using .NET technologies. Proven expertise across the full stack from back-end services and microservices in AWS to responsive front-end interfaces. An early adopter of AI-assisted development, leveraging Claude Code daily to accelerate feature delivery, improve code quality, and streamline complex workflows while maintaining full ownership of all production code. Experienced integrating marketing and personalization platforms, conversion tracking APIs, and third-party services. Consistently collaborates cross-functionally to align technical execution with business goals.",
                size: 22,
                color: GRAY,
              }),
            ],
            spacing: { after: 120 },
          }),

          // Work Experience
          sectionLabel("Work Experience"),
          jobHeader("Senior Software Engineer", "October 2019 - Present"),
          jobCompany("Scentsy, Inc - Meridian, ID"),
          bulletItem("Develop and maintain multiple enterprise-level .NET MVC applications with complex business logic, managing both front-end and back-end features across the full stack"),
          bulletItem("Create responsive, user-friendly interfaces using JavaScript, Node.js, HTML5, CSS3, SCSS, and Bootstrap with focus on cross-browser compatibility and dynamic layouts"),
          bulletItem("Implement performance optimizations including caching strategies for third-party pricing APIs that significantly reduce server load and improve response times"),
          bulletItem("Integrate and manage third-party services including Facebook CAPI, TikTok CAPI, Pinterest CAPI, Algolia search, Contentstack CMS, and Lytics CDP"),
          bulletItem("Implement conversion tracking pipelines with event deduplication, SHA-256 data normalization, and platform-specific parameter handling across major advertising platforms"),
          bulletItem("Develop AWS Lambda functions for product indexing and automation, and work with other AWS services for cloud-based solutions"),
          bulletItem("Optimize SQL Server databases for improved query performance and system efficiency"),
          bulletItem("Leverage AI-assisted development tools including Claude Code and Kiro CLI to accelerate feature development, code review, and troubleshooting while retaining full ownership of all production code"),

          jobHeader(".NET Application Developer", "June 2013 - October 2019"),
          jobCompany("Pets Best Insurance - Boise, ID"),
          bulletItem("Designed and maintained customer-facing and internal websites in ASP.NET MVC 5 with Razor"),
          bulletItem("Built a multi-step online claim submission process and a veterinarian search tool using Vue.js"),
          bulletItem("Created a Web API for third-party quote and plan management; overhauled enrollment site for desktop and mobile using Bootstrap"),

          // Technical Skills
          sectionLabel("Technical Skills"),
          new Paragraph({
            children: [
              new TextRun({ text: "Languages & Frameworks:  ", bold: true, size: 20, color: DARK }),
              new TextRun({ text: "C#, ASP.NET MVC, .NET Core, JavaScript, TypeScript, Node.js, Python, HTML5, CSS3, SCSS, Knockout.js, Vue.js, React, Bootstrap", size: 20, color: GRAY }),
            ],
            spacing: { after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Databases & Cloud:  ", bold: true, size: 20, color: DARK }),
              new TextRun({ text: "SQL Server, MongoDB, PostgreSQL, Redis, AWS Lambda, AWS CloudFormation, S3, IIS", size: 20, color: GRAY }),
            ],
            spacing: { after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Platforms & Integrations:  ", bold: true, size: 20, color: DARK }),
              new TextRun({ text: "Algolia, Contentstack CMS, Lytics CDP, Facebook CAPI, TikTok CAPI, Pinterest CAPI, Talon.One, SendGrid, Google Analytics", size: 20, color: GRAY }),
            ],
            spacing: { after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Developer Tools:  ", bold: true, size: 20, color: DARK }),
              new TextRun({ text: "Git, GitHub, Visual Studio, Jira, Figma, Gulp, WSL, Claude Code, Kiro CLI", size: 20, color: GRAY }),
            ],
            spacing: { after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Methodologies:  ", bold: true, size: 20, color: DARK }),
              new TextRun({ text: "Full-stack development, RESTful API design, microservices, unit testing, responsive design, agile/scrum", size: 20, color: GRAY }),
            ],
            spacing: { after: 80 },
          }),

          // AI & Tooling
          sectionLabel("AI & Tooling"),
          bulletItem("Daily user of Claude Code for feature development, code review, refactoring, and debugging across full-stack .NET and React projects"),
          bulletItem("Built and deployed multiple personal projects using React, TypeScript, and Vite with Claude Code as the primary development tool, including this resume site and a kiddo events website"),
          bulletItem("Uses AI-assisted workflows to reduce time-to-delivery while maintaining full understanding and ownership of all code shipped to production"),

          // Education
          sectionLabel("Education"),
          new Paragraph({
            children: [
              new TextRun({ text: "Bachelor of Science in Computer Science", bold: true, size: 24, font: "Georgia", color: DARK }),
            ],
            spacing: { after: 40 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Neumont University - South Jordan, UT", size: 20, color: ACCENT, bold: true }),
            ],
            spacing: { after: 80 },
          }),

          // Certifications
          sectionLabel("Certifications"),
          new Paragraph({
            children: [
              new TextRun({ text: "AWS Certified Cloud Practitioner", bold: true, size: 22, color: DARK }),
            ],
            spacing: { after: 40 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Issued January 2020", size: 20, color: "777777" }),
            ],
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "Celeste_Whelan_Resume.docx");
};
