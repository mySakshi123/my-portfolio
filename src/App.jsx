import { useEffect } from 'react'
import './App.css'
import profile from './images/Images/Profile.jpeg'

const skills = [
  { title: 'Programming', items: ['Java', 'JavaScript', 'SQL'] },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3','Tailwind'] },
  { title: 'Backend', items: ['Spring Boot', 'Spring MVC', 'Hibernate / JPA', 'REST APIs'] },
  { title: 'Database & Tools', items: ['MySQL','MongoDb' , 'Git', 'GitHub', 'Maven' ,'Postman'] },
  { title: 'AI & Emerging Technologies' , items: ['LLM API' , 'Prompt Engineering' , 'AI Integration Fundamentals']}
]

const projects = [
  {
    number: '01',
    title: 'Smart Expense Tracker',
    description:
      'A full-stack application for managing expenses, organizing categories, tracking spending, and identifying monthly expense patterns.',
    stack: 'React · Spring Boot · MySQL · Hibernate',
    type: 'FULL-STACK APPLICATION',
  },
  {
    number: '02',
    title: 'Event Management System',
    description:
      'An event management and booking application built around a React interface and REST APIs for backend operations.',
    stack: 'React · Java · Spring Boot · MySQL',
    type: 'WEB APPLICATION',
  },
  {
    number: '03',
    title: 'Amazon Clone',
    description:
      'A frontend practice project inspired by an e-commerce shopping experience, built to practise React components and UI development.',
    stack: 'React · JavaScript · HTML · CSS',
    type: 'FRONTEND PROJECT',
  },
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio-shell">
      <aside className="profile-sidebar">
        <a href="#home" className="sidebar-brand">
          SB<span>.</span>
        </a>

        <div className="sidebar-profile">
          <div className="portrait-ring">
            <img
              src={profile}
              alt="Sakshi Bhosale"
              className="profile-photo"
            />
          </div>

          <p className="sidebar-greeting">HELLO, I'M</p>
          <h2>Sakshi Bhosale</h2>
          <p className="sidebar-role">Java & Full-Stack Developer</p>

          <div className="availability">
            <span className="availability-dot" />
            Open to opportunities
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <a href="#home"><span>01</span> Home</a>
          <a href="#about"><span>02</span> About me</a>
          <a href="#skills"><span>03</span> Skills</a>
          <a href="#projects"><span>04</span> Projects</a>
          <a href="#journey"><span>05</span> Journey</a>
          <a href="#contact"><span>06</span> Contact</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-socials">
            <a
              href="https://github.com/SakshiBhosale04"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/bhosalesakshi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
          <p>Built with curiosity & code.</p>
        </div>
      </aside>

      <main className="portfolio-main">
        <section className="hero-section" id="home">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />

          <div className="hero-content reveal">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              COMPUTER SCIENCE POST GRADUATE
            </p>

            <h1>
              Turning ideas
              <br />
              into <span>working</span>
              <br />
              applications.
            </h1>

            <p className="hero-description">
              I'm Sakshi, a developer interested in building useful web
              applications with Java, Spring Boot and React. I enjoy
              understanding how things work and turning that knowledge into
              practical projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button-primary">
                Explore my work <span>↗</span>
              </a>
              <a href="#contact" className="button-secondary">
                Let's connect
              </a>
            </div>

            <div className="hero-meta">
              <span><i /> Java & Spring Boot</span>
              <span><i /> React & JavaScript</span>
            </div>
          </div>

          <div className="hero-index">
            <span>PORTFOLIO</span>
            <span>2026 — PRESENT</span>
          </div>
        </section>

        <section className="content-section about-section reveal" id="about">
          <p className="section-label">01 / A LITTLE ABOUT ME</p>
          <h2>
            Learning by building.
            <br />
            <span>Growing with every project.</span>
          </h2>
          <p className="section-description">
            I hold an M.Sc. in Computer Science and am developing my skills
            in Java-based backend development and modern frontend technologies.
            My focus is on writing understandable code, building full-stack
            applications, and improving through consistent hands-on practice.
          </p>

          <div className="education-strip">
            <div className="education-mark">M.Sc.</div>
            <div>
              <h3>Master of Science — Computer Science</h3>
              <p>MES Abasaheb Garware College · 2025</p>
            </div>
          </div>

          <div className="education-strip">
            <div className="education-mark">B.Sc.</div>
            <div>
              <h3>Bachelor of Science — Computer Science</h3>
              <p>Pratibha College of Commerce and Computer Studies · 2023</p>
            </div>
          </div>
        </section>

        <section className="content-section skills-section reveal" id="skills">
          <p className="section-label">02 / MY TOOLKIT</p>
          <h2>Technologies I work with<span>.</span></h2>
          <p className="section-description">
            The tools and technologies I use in my learning and projects.
          </p>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <span className="skill-number">0{index + 1}</span>
                  <span className="skill-arrow">↗</span>
                </div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section projects-section reveal" id="projects">
          <p className="section-label">03 / SELECTED WORK</p>
          <h2>Things I've built<span>.</span></h2>
          <p className="section-description">
            Practical projects that help me connect concepts with real
            application development.
          </p>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-details">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                </div>
                <span className="project-decoration">↗</span>
              </article>
            ))}
          </div>
          <p className="projects-note">
            Project source-code and live-demo links can be added after
            verifying the published repositories.
          </p>
        </section>

        
<section className="content-section journey-section reveal" id="journey">
  <p className="section-label">04 / MY JOURNEY</p>
  <h2>Education & experience<span>.</span></h2>

  <div className="journey-item">
    <span className="journey-dot" />
    <div>
      <p className="journey-date">AUG 2026 – PRESENT</p>
      <h3>Freelance Web Developer</h3>
      <p className="journey-company">Freelancing Project</p>
      <p>
        Currently developing a marriage bureau website, focusing on
        responsive design, user-friendly interfaces, and frontend
        functionality. Applying practical web development skills to
        build a smooth and accessible user experience.
      </p>
    </div>
  </div>

  <div className="journey-item">
    <span className="journey-dot" />
    <div>
      <p className="journey-date">JAN – FEB 2026</p>
      <h3>Web Developer Intern</h3>
      <p className="journey-company">CodeTech</p>
      <p>
        Practised frontend development using React, HTML, CSS, and
        JavaScript, including reusable UI components and REST API
        integration.
      </p>
    </div>
  </div>

  <div className="journey-item">
    <span className="journey-dot" />
    <div>
      <p className="journey-date">JUL – DEC 2025</p>
      <h3>Java & Full-Stack Developer Training</h3>
      <p className="journey-company">The Kiran Academy, Pune</p>
      <p>
        Gained practical experience with Java, Spring Boot, REST CRUD
        operations, MVC, MySQL, and Git through hands-on training.
      </p>
    </div>
  </div>
</section>


        <section className="contact-section reveal" id="contact">
          <p className="section-label">05 / HAVE AN OPPORTUNITY?</p>
          <h2>Let's build something<br /><span>meaningful.</span></h2>
          <p>
            I'm interested in entry-level Java and full-stack development
            opportunities where I can contribute, learn and grow.
          </p>

          <div className="contact-actions">
            <a className="button-primary" href="mailto:YOUR_EMAIL@example.com">
              Email me <span>↗</span>
            </a>
            <a
              className="button-secondary"
              href="https://www.linkedin.com/in/bhosalesakshi/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <footer className="portfolio-footer">
          <span>© 2026 Sakshi Bhosale</span>
          <span>Designed with purpose. Built with React.</span>
        </footer>
      </main>
    </div>
  )
}

export default App
