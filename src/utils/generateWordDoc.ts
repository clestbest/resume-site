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
import { resumeData } from "../data/resumeData";

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
  const { name, title, headerSkills, summary, experience, skills, aiTooling, education, certifications } = resumeData;

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
            children: [new TextRun({ text: name, bold: true, size: 52, color: DARK, font: "Georgia" })],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [new TextRun({ text: title.toUpperCase(), size: 18, color: ACCENT, bold: true })],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [new TextRun({ text: headerSkills.join("  \u00B7  "), size: 18, color: "777777" })],
            spacing: { after: 200 },
          }),

          // Summary
          sectionLabel("Professional Summary"),
          new Paragraph({
            children: [new TextRun({ text: summary, size: 22, color: GRAY })],
            spacing: { after: 120 },
          }),

          // Work Experience
          sectionLabel("Work Experience"),
          ...experience.flatMap((job) => [
            jobHeader(job.title, job.dates),
            jobCompany(job.company),
            ...job.bullets.map(bulletItem),
          ]),

          // Technical Skills
          sectionLabel("Technical Skills"),
          ...skills.map((skill) =>
            new Paragraph({
              children: [
                new TextRun({ text: skill.category + ":  ", bold: true, size: 20, color: DARK }),
                new TextRun({ text: skill.items, size: 20, color: GRAY }),
              ],
              spacing: { after: 80 },
            })
          ),

          // AI & Tooling
          sectionLabel("AI & Tooling"),
          ...aiTooling.map(bulletItem),

          // Education
          sectionLabel("Education"),
          new Paragraph({
            children: [new TextRun({ text: education.degree, bold: true, size: 24, font: "Georgia", color: DARK })],
            spacing: { after: 40 },
          }),
          new Paragraph({
            children: [new TextRun({ text: education.school, size: 20, color: ACCENT, bold: true })],
            spacing: { after: 80 },
          }),

          // Certifications
          sectionLabel("Certifications"),
          ...certifications.flatMap((cert) => [
            new Paragraph({
              children: [new TextRun({ text: cert.name, bold: true, size: 22, color: DARK })],
              spacing: { after: 40 },
            }),
            new Paragraph({
              children: [new TextRun({ text: cert.issued, size: 20, color: "777777" })],
            }),
          ]),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${name.replace(" ", "_")}_Resume.docx`);
};
