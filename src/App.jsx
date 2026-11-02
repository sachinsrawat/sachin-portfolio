
import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Campus Lost & Found",
    description:
      "A platform designed to help students report, discover and recover lost belongings on campus.",
    tech: ["React", "JavaScript", "CSS"],
    category: "Web Application",
    link: "https://github.com/sachinsrawat/campus-lost-and-found",
  },
  {
    number: "02",
    title: "Subscription Sentinel",
    description:
      "A subscription management concept for organizing recurring expenses and tracking payments.",
    tech: ["React", "JavaScript", "CSS"],
    category: "Web Application",
    link: "https://github.com/sachinsrawat/subscription-sentinel",
  },
  {
    number: "03",
    title: "Opportunity Compass",
    description:
      "A project concept for organizing career opportunities, applications and important deadlines.",
    tech: ["React", "JavaScript", "CSS"],
    category: "Web Application",
    link: "https://github.com/sachinsrawat/opportunity-compass",
  },
  {
    number: "04",
    title: "PaletteLens",
    description:
      "A color palette exploration concept for discovering and organizing color combinations.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend Project",
    link: "https://github.com/sachinsrawat/palettelens",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Responsive Design",
  "Git",
  "GitHub",
  "DOM Manipulation",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="header">
        <a href="#home" className="logo" onClick={closeMenu}>
          SR<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M SACHIN</p>

            <h1>
              Building digital
              <br />
              experiences<span>.</span>
            </h1>

            <p className="hero-description">
              I'm a BCA student and aspiring Front-End Developer
              passionate about building clean, responsive and
              user-friendly web experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work ↗
              </a>
              <a href="#contact" className="button button-secondary">
                Get in touch
              </a>
            </div>

            <div className="hero-location">
              <span className="status-dot"></span>
              Based in Dehradun, India
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top">
              <span>PORTFOLIO / 2026</span>
              <span>01 — 04</span>
            </div>
            <div className="hero-monogram">SR</div>
            <div className="card-bottom">
              <span>SACHIN SINGH RAWAT</span>
              <span>FRONT-END DEVELOPER</span>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE ↓
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>A little about me<span>.</span></h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm Sachin Singh Rawat, a Computer Applications student
              interested in creating useful things for the web.
            </p>

            <div className="about-details">
              <p>
                I enjoy working with modern web technologies, exploring
                interface design and turning ideas into functional
                websites. I'm currently developing my front-end skills
                through hands-on projects.
              </p>
              <div className="about-facts">
                <div>
                  <span>EDUCATION</span>
                  <strong>Bachelor of Computer Applications</strong>
                </div>
                <div>
                  <span>GRADUATION</span>
                  <strong>Expected 2027</strong>
                </div>
                <div>
                  <span>LOCATION</span>
                  <strong>Dehradun, India</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / SKILLS</p>
            <h2>My toolkit<span>.</span></h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span>0{index + 1}</span>
                <strong>{skill}</strong>
                <span>↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>Things I've built<span>.</span></h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="section-heading">
            <p className="eyebrow">04 / EDUCATION</p>
            <h2>Learning every day<span>.</span></h2>
          </div>

          <div className="education-card">
            <span>2024 — 2027</span>
            <div>
              <h3>Bachelor of Computer Applications</h3>
              <p>Undergraduate student · Expected graduation 2027</p>
            </div>
            <span>IN PROGRESS</span>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Have a project in mind?</h2>
          <h2 className="contact-accent">Let's talk<span>.</span></h2>

          <a
            href="mailto:sachinsrawat0310@gmail.com"
            className="button button-primary"
          >
            Send me an email ↗
          </a>

  
<div className="contact-links">
  <a href="mailto:sachinsrawat0310@gmail.com">Email</a>

  <a href="tel:+919528367452">
    +91 9528367452
  </a>

  <a
    href="https://www.linkedin.com/in/sachin-rawat-920626426"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/sachinsrawat"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>
</div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          SR<span>.</span>
        </a>
        <p>Designed & built by Sachin Singh Rawat · 2026</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
