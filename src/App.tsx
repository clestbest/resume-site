import Resume from "./components/Resume";

function App() {
  return (
    <div className="resume-wrapper mx-auto px-4 px-md-5 py-4 py-md-5">
      <Resume />
      <footer className="text-center text-secondary mt-4" style={{ fontSize: "12px" }}>
        This site was created using React + Typescript
      </footer>
    </div>
  );
}

export default App;
