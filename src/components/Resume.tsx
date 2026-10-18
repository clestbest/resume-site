import meImg from "../images/me.jpeg";
import { resumeData } from "../data/resumeData";

export const Resume = () => {
  const {
    name,
    title,
    headerSkills,
    summary,
    skills,
    experience,
    education,
    certifications,
  } = resumeData;

  return (
    <>
      {/* Header */}
      <header className="pb-3 mb-4 d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-between gap-3">
        <div className="text-center text-sm-start">
          <h1 className="display-5 mb-1">{name}</h1>
          <div className="subtitle">{title}</div>
          <div
            className="mt-2"
            style={{ fontSize: "12px", letterSpacing: "0.08em", color: "#777" }}
          >
            {headerSkills.join(" · ")}
          </div>
        </div>
        <img src={meImg} alt={name} className="header-photo" />
      </header>

      {/* Summary */}
      <section className="mb-4">
        <div className="section-label">Summary</div>
        <p className="text-secondary" style={{ fontSize: "13.5px" }}>
          {summary}
        </p>
      </section>

      {/* Skills */}
      <section className="mb-4">
        <div className="section-label">Skills</div>
        <div className="row g-3">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={
                i === skills.length - 1 && skills.length % 2 === 1
                  ? "col-12"
                  : "col-12 col-md-6"
              }
            >
              <span className="skill-category">{skill.category}</span>
              <span className="skill-list">{skill.items}</span>
            </div>
          ))}
        </div>
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

      {/* Education and Certifications */}
      <section className="mb-4">
        <div className="section-label">Education and Certifications</div>
        <div className="edu-degree">{education.degree}</div>
        <div className="job-company mb-3">{education.school}</div>
        {certifications.map((cert, i) => (
          <div key={i}>
            <div className="edu-degree">{cert.name}</div>
            <div className="job-dates">{cert.issued}</div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Resume;
