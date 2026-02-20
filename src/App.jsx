import ProjectCard from "./components/ProjectCard";
import "./App.css";
import {projects} from "./data/projects";

export default function App() {

  return (
    <div className="page">
      <div className="wrap">
        <header className="header">
          <p className="badge">Front-End</p>
          <h1>Felipe Leite Rodrigues</h1>
          <p className="subtitle">
            Desenvolvedor Front-End, construindo interfaces modernas e bem estruturadas.
          </p>
        </header>

        <section className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </section>

        <footer className="footer">
          <a className="link" href="https://github.com/felipeelr14" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="dot">•</span>
          <a className="link" href="https://felipeelr14.github.io/portfolio-frontend/" target="_blank" rel="noreferrer">
            Portfólio
          </a>
        </footer>
      </div>
    </div>
  );
}