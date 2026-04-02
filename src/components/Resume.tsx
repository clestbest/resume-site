import meImg from "../images/me.jpeg";

export const Resume = () => {
  return (
    <>
      {/* Header */}
      <header className="pb-3 mb-4 d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-between gap-3">
        <div className="text-center text-sm-start">
          <h1 className="display-5 mb-1">Celeste Whelan</h1>
          <div className="subtitle">Senior Software Engineer</div>
          <div
            className="mt-2"
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "#777",
            }}
          >
            C# &middot; .NET &middot; JavaScript &middot; TypeScript &middot;
            React &middot; AWS &middot; SQL Server &middot; Claude Code
          </div>
        </div>
        <img src={meImg} alt="Celeste Whelan" className="header-photo" />
      </header>
      {/* Summary */}
      <section className="mb-4">
        <div className="section-label">Professional Summary</div>
        <p className="text-secondary" style={{ fontSize: "13.5px" }}>
          Detail-oriented Senior Software Engineer with 13+ years of experience
          building and enhancing enterprise-level applications using .NET
          technologies. Proven expertise across the full stack - from back-end
          services and microservices in AWS to responsive front-end interfaces.
          Experienced integrating marketing and personalization platforms,
          conversion tracking APIs, and AI-assisted developer tooling to improve
          workflow efficiency. Consistently collaborates cross-functionally to
          align technical execution with business and marketing goals.
        </p>
      </section>
      {/* Experience */}
      <section className="mb-4">
        <div className="section-label">Work Experience</div>
        {/* Job 1 */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-1">
            <span className="job-title">Senior Software Engineer</span>
            <span className="job-dates">October 2019 - Present</span>
          </div>
          <div className="job-company mb-2">Scentsy, Inc - Meridian, ID</div>
          <ul className="resume-list">
            <li>
              Develop and maintain multiple enterprise-level .NET MVC
              applications with complex business logic, managing both front-end
              and back-end features across the full stack
            </li>
            <li>
              Create responsive, user-friendly interfaces using JavaScript,
              Node.js, HTML5, CSS3, SCSS, and Bootstrap with focus on
              cross-browser compatibility and dynamic layouts
            </li>
            <li>
              Implement performance optimizations including caching strategies
              for third-party pricing APIs that significantly reduce server load
              and improve response times
            </li>
            <li>
              Integrate and manage third-party services including Facebook CAPI,
              TikTok CAPI, Pinterest CAPI, Algolia search, Contentstack CMS, and
              Lytics CDP to enhance marketing capabilities, personalization, and
              site functionality
            </li>
            <li>
              Implement conversion tracking pipelines with event deduplication,
              SHA-256 data normalization, and platform-specific parameter
              handling across major advertising platforms
            </li>
            <li>
              Develop AWS Lambda functions for product indexing and automation,
              and work with other AWS services for cloud-based solutions
            </li>
            <li>
              Optimize SQL Server databases for improved query performance and
              system efficiency
            </li>
            <li>
              Leverage AI-assisted development tools including Claude Code and
              Kiro CLI to accelerate feature development, code review, and
              troubleshooting - while retaining full ownership and understanding
              of all production code
            </li>
          </ul>
        </div>
        {/* Job 2 */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-1">
            <span className="job-title">.NET Application Developer</span>
            <span className="job-dates">June 2013 - October 2019</span>
          </div>
          <div className="job-company mb-2">
            Pets Best Insurance - Boise, ID
          </div>
          <ul className="resume-list">
            <li>
              Designed, maintained, and deployed code for multiple
              customer-facing and internal websites in ASP.NET MVC 5 with Razor
            </li>
            <li>
              Built a multi-step claim submission process for customers to
              submit insurance claims online
            </li>
            <li>
              Created a veterinarian search tool using Vue.js on top of MVC
            </li>
            <li>
              Overhauled the enrollment website for desktop and mobile using
              Bootstrap; implemented custom skins for multiple partner companies
            </li>
            <li>
              Created a new Web API allowing third-party companies to create
              quotes, add pets, and manage plan selections
            </li>
            <li>
              Implemented multiple A/B tests using database and Google Optimize
              solutions
            </li>
          </ul>
        </div>
        {/* Job 3 */}
        <div className="mb-0">
          <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-1">
            <span className="job-title">.NET Application Developer</span>
            <span className="job-dates">April 2012 - June 2013</span>
          </div>
          <div className="job-company mb-2">
            Ascend Management Innovations - Nashville, TN
          </div>
          <ul className="resume-list">
            <li>
              Developed and maintained web applications for healthcare
              industries in ASP.NET
            </li>
            <li>Converted a legacy classNameic ASP application to C#</li>
          </ul>
        </div>
      </section>
      {/* Skills */}
      <section className="mb-4">
        <div className="section-label">Technical Skills</div>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <span className="skill-category">Languages &amp; Frameworks</span>
            <span className="skill-list">
              CC#, ASP.NET MVC, .NET Core, JavaScript, TypeScript, Node.js,
              Python, HTML5, CSS3, SCSS, Knockout.js, Vue.js, React, Bootstrap
            </span>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-category">Databases &amp; Cloud</span>
            <span className="skill-list">
              SQL Server, MongoDB, PostgreSQL, Redis, AWS Lambda, AWS
              CloudFormation, S3, IIS
            </span>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-category">Platforms &amp; Integrations</span>
            <span className="skill-list">
              Algolia, Contentstack CMS, Lytics CDP, Facebook CAPI, TikTok CAPI,
              Pinterest CAPI, Talon.One, SendGrid, Google Analytics
            </span>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-category">Developer Tools</span>
            <span className="skill-list">
              Git, GitHub, Visual Studio, Jira, Figma, Gulp, WSL, Claude Code,
              Kiro CLI
            </span>
          </div>
          <div className="col-12">
            <span className="skill-category">Methodologies</span>
            <span className="skill-list">
              Full-stack development, RESTful API design, microservices, unit
              testing, responsive design, agile/scrum
            </span>
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="mb-4">
        <div className="section-label">Education</div>
        <div className="edu-degree">
          Bachelor of Science in Computer Science
        </div>
        <div className="job-company">Neumont University - South Jordan, UT</div>
      </section>
      {/* Certitications */}
      <section className="mb-0">
        <div className="section-label">Certifications</div>
        <div className="fw-500" style={{ fontSize: "13.5px" }}>
          AWS Certified Cloud Practitioner
        </div>
        <div className="job-dates">Issued January 2020</div>
      </section>
    </>
  );
};
export default Resume;
