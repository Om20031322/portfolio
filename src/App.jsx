import './App.css';

const profile = {
  name: 'Om Shah',
  title: 'Software Development Engineer / Full Stack Software Engineer',
  location: 'Arizona, USA',
  email: 'omjshah27052003@gmail.com',
  github: 'https://github.com/Om20031322',
  linkedin: 'https://www.linkedin.com/in/omshah272003/',
  resume: `${import.meta.env.BASE_URL}Om-Shah-Resume.pdf`,
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const profileHighlights = ['React + API work', 'Cloud deployment', 'AI project experience'];

const skillGroups = [
  {
    title: 'Frontend',
    icon: '<>',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Responsive UI'],
  },
  {
    title: 'Backend',
    icon: '{}',
    skills: ['Python', 'FastAPI', 'Java', 'Django', 'Flask', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: 'DB',
    skills: ['SQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Data Modeling'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'CL',
    skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
  {
    title: 'AI & Search',
    icon: 'AI',
    skills: ['RAG', 'LLMs', 'Vector Embeddings', 'Semantic Search', 'OpenAI APIs', 'NLP'],
  },
  {
    title: 'Engineering',
    icon: 'SE',
    skills: ['System Design', 'Testing', 'Authentication', 'Caching', 'Kafka', 'Observability'],
  },
];

const featuredSkills = new Set([
  'React',
  'FastAPI',
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'SQL',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
  'Redis',
  'Kafka',
]);

const projects = [
  {
    title: 'Cloud-Native Full Stack E-Commerce Platform',
    category: 'Full stack + cloud native',
    description:
      'A full-stack e-commerce platform with authentication, product catalog APIs, cart management, order checkout, Redis-backed caching, and cloud-native deployment structure.',
    impact: 'Impact: Demonstrates end-to-end product engineering with deployable cloud-ready architecture.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'GitHub Actions'],
    link: 'https://github.com/Om20031322/cloud-native-fullstack-ecommerce-platform',
  },
  {
    title: 'LLM-Powered Semantic Search Engine',
    category: 'RAG + intelligent search',
    description:
      'A semantic question-answering system using FastAPI, PostgreSQL, vector embeddings, and retrieval-augmented generation concepts for intelligent document search.',
    impact: 'Impact: Shows practical AI search design for contextual retrieval and backend integration.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'Vector Search', 'RAG', 'LLMs'],
    link: 'https://github.com/Om20031322/llm-powered-semantic-search-engine',
  },
  {
    title: 'AI-Powered Customer Support System',
    category: 'AI + real-time platform',
    description:
      'An AI-powered customer support platform with real-time ticket handling, secure authentication, Kafka-based event streaming, Redis caching, and PostgreSQL workflows.',
    impact: 'Impact: Highlights event-driven backend design with real-time support workflows.',
    tech: ['React', 'Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    link: 'https://github.com/Om20031322/ai-customer-support-system',
  },
  {
    title: 'JEE Dropout Analysis Tableau Dashboard',
    category: 'Analytics + visualization',
    description:
      'A data analytics and visualization project focused on JEE dropout analysis using Tableau dashboards, data cleaning, visual storytelling, and insight generation.',
    impact: 'Impact: Converts raw education data into clear, decision-oriented dashboard insights.',
    tech: ['Tableau', 'Data Analytics', 'Data Visualization', 'Dashboarding', 'Excel'],
    link: 'https://github.com/Om20031322/jee-dropout-analysis-tableau',
  },
  {
    title: 'Captive Portal Simulation Dashboard',
    category: 'Networking + simulation',
    description:
      'A networking-focused simulation dashboard demonstrating captive portal flow, authentication behavior, client connection states, and network access control concepts.',
    impact: 'Impact: Communicates networking and authentication concepts through an interactive UI.',
    tech: ['React', 'Networking', 'Dashboard', 'Simulation', 'Authentication'],
    link: 'https://github.com/Om20031322/captive-portal-simulation-dashboard',
  },
];

const certifications = [
  {
    name: 'AWS Academy Graduate - Data Engineering - Training Badge',
    issuer: 'AWS Academy',
    issued: '09/27/2025',
    hours: '40 hours',
    pdf: `${import.meta.env.BASE_URL}_Data_Engineering___Training_Badge.pdf`,
    credly: 'https://www.credly.com/go/oqVuavMB',
    accent: 'Data Engineering',
  },
  {
    name: 'AWS Academy Graduate - Machine Learning Foundations - Training Badge',
    issuer: 'AWS Academy',
    issued: '11/19/2025',
    hours: '20 hours',
    pdf: `${import.meta.env.BASE_URL}AWS_Machine_Learning__Training_Badge.pdf`,
    credly: 'https://www.credly.com/go/KXdGW7Wg',
    accent: 'Machine Learning',
  },
  {
    name: 'AWS Academy Graduate - Machine Learning for Natural Language Processing - Training Badge',
    issuer: 'AWS Academy',
    issued: '11/30/2025',
    hours: '20 hours',
    pdf: `${import.meta.env.BASE_URL}AWS_Machine_Learning_for_NLP.pdf`,
    credly: 'https://www.credly.com/go/OWlIgyZ9',
    accent: 'NLP Systems',
  },
];

const experience = [
  {
    role: 'Full Stack Software Engineer',
    company: 'ServiceNow',
    period: 'Nov 2025 - Current',
    points: [
      'Built AI-enabled microservices with FastAPI, React, PostgreSQL, and Kubernetes for scalable internal workflows.',
      'Implemented RAG search features with vector embeddings, semantic retrieval, and OpenAI API integrations.',
      'Automated ticket triage and backend orchestration flows to reduce manual workflow steps.',
      'Improved service reliability with structured logging, API monitoring, and containerized deployment practices.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Infinite Infolab',
    period: 'Feb 2022 - Jul 2024',
    points: [
      'Developed backend services with Django, Flask, FastAPI, and PostgreSQL for enterprise web applications.',
      'Built responsive React and Redux interfaces connected to reliable REST API workflows.',
      'Improved release consistency with Docker deployments, AWS EC2 hosting, and CI/CD workflows.',
      'Delivered reusable modules for authentication, database design, API integrations, and backend utilities.',
    ],
  },
];

const education = [
  {
    degree: "Master's in Information Technology",
    school: 'Arizona State University, USA',
    period: 'Expected May 2026',
  },
  {
    degree: 'Bachelor of Engineering in Information Technology',
    school: 'Gujarat Technological University, India',
    period: 'May 2024',
  },
];

function SectionHeading({ kicker, title, children }) {
  return (
    <div className="section-heading">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children && <p className="section-copy">{children}</p>}
    </div>
  );
}

function Icon({ name }) {
  if (name === 'github') {
    return (
      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.72c-2.78.61-3.37-1.19-3.37-1.19-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 5.96c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    );
  }

  const labels = {
    arrow: '→',
    download: '↓',
    mail: '@',
    external: '↗',
  };

  return (
    <span className="icon text-icon" aria-hidden="true">
      {labels[name]}
    </span>
  );
}

function ButtonLink({ href, children, variant = 'primary', download = false, icon }) {
  const isExternal = href?.startsWith('http');

  return (
    <a
      className={`btn btn-${variant}`}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      download={download}
    >
      {icon && <Icon name={icon} />}
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Om Shah home">
          <span className="brand-mark">OS</span>
          <span>Om Shah</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>

      <main>
        <section id="home" className="hero section reveal">
          <div className="hero-content">
            <p className="availability">Open to SDE, full stack, backend, and AI roles</p>
            <h1>
              Hi, I&apos;m <span>Om Shah</span>. I build scalable full-stack and AI-powered software.
            </h1>
            <p className="hero-intro">
              Entry-level software engineer focused on full stack development, backend systems,
              cloud-native applications, and AI-powered software projects.
            </p>

            <div className="hero-actions">
              <ButtonLink href="#projects" icon="arrow">
                View Projects
              </ButtonLink>
              <ButtonLink href={profile.resume} variant="secondary" download icon="download">
                Download Resume
              </ButtonLink>
              <ButtonLink href={profile.github} variant="ghost" icon="github">
                GitHub
              </ButtonLink>
              <ButtonLink href={profile.linkedin} variant="ghost" icon="external">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} variant="ghost" icon="mail">
                Email
              </ButtonLink>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile photo and quick facts">
            <div className="photo-card">
              <img src={profile.photo} alt="Om Shah" />
              <div className="photo-badge photo-badge-top">Entry-Level SDE</div>
              <div className="photo-badge photo-badge-bottom">Full Stack + AI</div>
            </div>
            <div className="hero-stats">
              {profileHighlights.map((item) => (
                <div key={item}>
                  <strong>{item.split(' ')[0]}</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section reveal">
          <SectionHeading kicker="About" title="Full Stack Engineer with AI Systems Focus">
            I combine full stack development, backend system design, cloud deployment, and applied AI to
            build reliable, user-focused software products.
          </SectionHeading>

          <div className="about-grid">
            <article className="about-card">
              <span className="card-number">01</span>
              <h3>Product-minded engineering</h3>
              <p>
                I care about clear user flows, maintainable interfaces, and building features that solve
                real product needs without unnecessary complexity.
              </p>
            </article>
            <article className="about-card">
              <span className="card-number">02</span>
              <h3>Scalable backend systems</h3>
              <p>
                I build API-first services with thoughtful data models, authentication, caching, deployment
                workflows, and reliability practices.
              </p>
            </article>
            <article className="about-card">
              <span className="card-number">03</span>
              <h3>AI-powered application development</h3>
              <p>
                I work with LLMs, RAG concepts, semantic retrieval, and AI features that make applications
                more useful, searchable, and context-aware.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <SectionHeading kicker="Skills" title="Technical toolkit">
            A balanced foundation for full stack applications, scalable backend services, cloud-ready
            software, and AI-enabled product features.
          </SectionHeading>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <div className="pill-list">
                  {group.skills.map((skill) => (
                    <span className={featuredSkills.has(skill) ? 'featured-skill' : undefined} key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section reveal">
          <SectionHeading kicker="Featured Projects" title="Selected engineering work">
            Five focused projects showing full stack delivery, cloud architecture, AI search, analytics, and
            networking-oriented product thinking.
          </SectionHeading>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-impact">{project.impact}</p>
                <div className="pill-list dark-pills">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  <Icon name="github" />
                  View Repository
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section certifications-section reveal">
          <SectionHeading kicker="Certifications" title="AWS Academy credentials">
            Training badges that support my foundation in data engineering, machine learning, and natural
            language processing for AI-focused software roles.
          </SectionHeading>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="cert-card" key={cert.name}>
                <a
                  className="cert-preview"
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View certificate PDF for ${cert.name}`}
                >
                  <span>AWS Academy</span>
                  <strong>{cert.accent}</strong>
                  <small>Graduate Badge</small>
                </a>
                <div className="cert-body">
                  <p className="cert-issuer">{cert.issuer}</p>
                  <h3>{cert.name}</h3>
                  <div className="cert-meta">
                    <span>Issued: {cert.issued}</span>
                    <span>{cert.hours}</span>
                  </div>
                  <div className="cert-actions">
                    <a href={cert.pdf} target="_blank" rel="noreferrer">
                      View Certificate
                    </a>
                    <a href={cert.credly} target="_blank" rel="noreferrer">
                      Verify Badge
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <SectionHeading kicker="Experience" title="Professional experience">
            Clean, practical engineering work across backend platforms, user interfaces, cloud deployments,
            automation, and AI-enabled application features.
          </SectionHeading>

          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-card" key={`${job.company}-${job.period}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <span>{job.period}</span>
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section education-section reveal">
          <SectionHeading kicker="Education" title="Academic foundation">
            Formal preparation in information technology, software engineering, and practical systems work.
          </SectionHeading>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <h3>{item.degree}</h3>
                <p className="school">{item.school}</p>
                <p>{item.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section reveal">
          <div className="contact-card">
            <p className="kicker">Contact</p>
            <h2>Ready to contribute to a strong engineering team.</h2>
            <p>
              I am open to entry-level Software Development Engineer, Full Stack Engineer, Backend Engineer,
              and AI-focused software roles.
            </p>
            <div className="contact-actions">
              <ButtonLink href={`mailto:${profile.email}`} icon="mail">
                Email Me
              </ButtonLink>
              <ButtonLink href={profile.linkedin} variant="secondary" icon="external">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.github} variant="secondary" icon="github">
                GitHub
              </ButtonLink>
            </div>
            <div className="contact-meta">
              <span>{profile.location}</span>
              <span>{profile.email}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Om Shah. Built with React.</p>
      </footer>
    </div>
  );
}
