import Resume from "./components/Resume";

function App() {
  return (
    <div className="resume-wrapper mx-auto px-4 px-md-5 py-4 py-md-5">
      <div className="d-flex justify-content-end mb-3">
        <a
          href="https://drive.google.com/uc?export=download&id=1tNAwS3Hl0ymvjM6yznEXGJVF9QV4uskU"
          download="Celeste_Whelan_Resume.pdf"
          className="btn btn-sm"
          style={{ fontSize: "12px", color: "#8b5e3c", border: "1px solid #d0c9be" }}
        >
          Download Resume
        </a>
      </div>
      <Resume />
      <footer className="text-center text-secondary mt-4" style={{ fontSize: "12px" }}>
        This site was created using React + Typescript
      </footer>
    </div>
  );
}

export default App;
