import meImg from "../images/me.jpeg";
import { resumeData } from "../data/resumeData";

export const Resume = () => {
  const { name, title, headerSkills, summary, experience, skills, aiTooling, education, certifications } = resumeData;

  return (
    <>
      {/* Header */}
      <header className="pb-3 mb-4 d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-between gap-3">
        <div className="text-center text-sm-start">
          <h1 className="display-5 mb-1">{name}</h1>
          <div className="subtitle">{title}</div>
          <div className="mt-2" style={{ fontSize: "12px", letterSpacing: "0.08em", color: "#777" }}>
            {headerSkills.join(" · ")}
          </div>
        </div>
        <img src={meImg} alt={name} className="header-photo" />
      </header>

      {/* Summary */}
      <section className="mb-4">
        <div className="section-label">Professional Summary</div>
        <p className="text-secondary" style={{ fontSize: "13.5px" }}>{summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <div className="section-label">Work Experience</div>
        {experience.map((job, i) => (
          <div key={i} className={i < experience.length - 1 ? "mb-4" : "mb-0"}>
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-1">
              <span className="job-title">{job.title}</span>
              <span className="job-dates">{job.dates}</span>
            </div>
            <div className="job-company mb-2">{job.company}</div>
            <ul className="resume-list">
              {job.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-4">
        <div className="section-label">Technical Skills</div>
        <div className="row g-3">
          {skills.map((skill, i) => (
            <div key={i} className={skill.category === "Methodologies" ? "col-12" : "col-12 col-md-6"}>
              <span className="skill-category">{skill.category}</span>
              <span className="skill-list">{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AI & Tooling */}
      <section className="mb-4">
        <div className="section-label">AI &amp; Tooling</div>
        <ul className="resume-list">
          {aiTooling.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-4">
        <div className="section-label">Education</div>
        <div className="edu-degree">{education.degree}</div>
        <div className="job-company">{education.school}</div>
      </section>

      {/* Certifications */}
      <section className="mb-0">
        <div className="section-label">Certifications</div>
        {certifications.map((cert, i) => (
          <div key={i}>
            <div className="fw-500" style={{ fontSize: "13.5px" }}>{cert.name}</div>
            <div className="job-dates">{cert.issued}</div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Resume;
