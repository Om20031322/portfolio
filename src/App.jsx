import './App.css';

const profile = {
  name: 'Om Shah',
  title: 'Software Engineer',
  location: 'Arizona, USA',
  email: 'om.s@itjobinbox.com',
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

const profileHighlights = ['3+ Years Experience', 'Microservices & APIs', 'Cloud-Native + AI Systems'];

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: '<>',
    skills: ['Java', 'Python', 'SQL', 'JavaScript', 'Go', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: '{}',
    skills: ['Spring Boot', 'Spring MVC', 'Node.js', 'Express', 'FastAPI', 'REST APIs', 'SOAP', 'JSP', 'Servlets'],
  },
  {
    title: 'Databases',
    icon: 'DB',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'CL',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD', 'CloudWatch'],
  },
  {
    title: 'AI & Data',
    icon: 'AI',
    skills: ['LLMs', 'RAG', 'Vector Embeddings', 'AI Inference Serving', 'ML Optimization', 'NLP', 'TensorFlow', 'scikit-learn'],
  },
  {
    title: 'Engineering',
    icon: 'SE',
    skills: ['Microservices', 'Kafka', 'JWT', 'Spring Security', 'Testing', 'Observability', 'Prometheus', 'ELK'],
  },
];

const featuredSkills = new Set([
  'Java',
  'Python',
  'Spring Boot',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
  'LLMs',
  'RAG',
  'Microservices',
  'Kafka',
]);

const projects = [
  {
    title: 'AI-Powered Customer Support Platform',
    category: 'AI + event-driven platform',
    description:
      'Built a production-style AI-powered customer support platform integrating LLM-based conversational workflows, real-time messaging, and Kafka-driven event streaming across distributed services.',
    impact:
      'Impact: Designed scalable microservices with Redis caching, PostgreSQL workflows, JWT authentication, and Kubernetes-ready deployment for reliable enterprise support operations.',
    tech: ['LLMs', 'Kafka', 'Redis', 'PostgreSQL', 'JWT', 'Docker', 'Kubernetes', 'Microservices'],
    link: 'https://github.com/Om20031322/ai-customer-support-system',
  },
  {
    title: 'LLM-Powered Semantic Q&A Search Engine',
    category: 'RAG + semantic search',
    description:
      'Developed an LLM-powered semantic search engine using vector embeddings and Retrieval-Augmented Generation architecture for contextual enterprise question answering.',
    impact:
      'Impact: Optimized retrieval and inference workflows to support high-concurrency search with fast response times across distributed backend services.',
    tech: ['FastAPI', 'Python', 'RAG', 'Vector Embeddings', 'PostgreSQL', 'LLMs', 'Semantic Search'],
    link: 'https://github.com/Om20031322/llm-powered-semantic-search-engine',
  },
  {
    title: 'Cloud-Native Full Stack E-Commerce Platform',
    category: 'Full stack + cloud-native',
    description:
      'Built a scalable full-stack e-commerce platform using React, FastAPI, PostgreSQL, and AWS with secure authentication, product catalog management, and real-time order workflows.',
    impact:
      'Impact: Implemented Redis caching, asynchronous backend processing, Dockerized Kubernetes deployments, and CI/CD automation for reliable production-style delivery.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'AWS', 'Redis', 'Docker', 'Kubernetes', 'GitHub Actions'],
    link: 'https://github.com/Om20031322/cloud-native-fullstack-ecommerce-platform',
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
    category: 'Data Engineering',
    pdf: `${import.meta.env.BASE_URL}_Data_Engineering___Training_Badge.pdf`,
    credly: 'https://www.credly.com/go/oqVuavMB',
  },
  {
    name: 'AWS Academy Graduate - Machine Learning Foundations - Training Badge',
    issuer: 'AWS Academy',
    issued: '11/19/2025',
    hours: '20 hours',
    category: 'Machine Learning',
    pdf: `${import.meta.env.BASE_URL}AWS_Machine_Learning__Training_Badge.pdf`,
    credly: 'https://www.credly.com/go/KXdGW7Wg',
  },
  {
    name: 'AWS Academy Graduate - Machine Learning for Natural Language Processing - Training Badge',
    issuer: 'AWS Academy',
    issued: '11/30/2025',
    hours: '20 hours',
    category: 'NLP Systems',
    pdf: `${import.meta.env.BASE_URL}AWS_Machine_Learning_for_NLP.pdf`,
    credly: 'https://www.credly.com/go/OWlIgyZ9',
  },
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'ServiceNow',
    period: 'Nov 2025 - Present',
    points: [
      'Designed and shipped Java, Go, Spring Boot, and REST API-based microservices, reducing average request latency by 35%.',
      'Built workflow automation and external integrations using Node.js and Express with reliable data-sync pipelines.',
      'Refactored legacy services into Docker and Kubernetes-based deployments using CI/CD pipelines.',
      'Created observability dashboards with CloudWatch, Prometheus, and ELK, reducing MTTR by 50%.',
      'Developed secure authentication and authorization layers with Spring Security and role-based access control.',
      'Tuned PostgreSQL and MongoDB queries with caching to improve throughput by 45%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Infinite Infolab',
    period: 'Feb 2022 - Jul 2024',
    points: [
      'Delivered full-stack applications using Java, Spring MVC, JavaScript, React.js, and REST APIs.',
      'Built backend microservices for high-volume transactions using PostgreSQL and MySQL.',
      'Created API integrations with Node.js, Express, and Flask across multiple third-party systems.',
      'Supported migration from monolithic systems to cloud-native microservices with Dockerized deployments.',
      'Built Jenkins CI pipelines to reduce deployment errors and improve release cycles.',
      'Contributed to ML-driven features including preprocessing, model training, optimization, and AI inference serving.',
    ],
  },
];

const education = [
  {
    degree: 'Master, Information Technology',
    school: 'Arizona State University, USA',
    period: 'Aug 2024 - May 2026',
  },
  {
    degree: 'Bachelor of Engineering, Information Technology',
    school: 'Gujarat Technological University',
    period: 'Aug 2021 - May 2024',
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
            <p className="availability">
              Open to Software Engineer, Backend Engineer, Full Stack Engineer, and AI Software Engineer roles
            </p>
            <h1>
              Hi, I&apos;m <span>Om Shah</span>. I build scalable backend, full-stack, and AI-powered
              software systems.
            </h1>
            <p className="hero-intro">
              Software Engineer with 3+ years of experience designing microservices, REST APIs,
              cloud-native applications, CI/CD workflows, and AI-enabled platforms using Java, Python,
              Node.js, React, AWS, Docker, and Kubernetes.
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
              <div className="photo-badge photo-badge-top">Software Engineer</div>
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
          <SectionHeading kicker="About" title="Software Engineer with backend, cloud, and AI focus">
            Software Engineer with 3+ years of experience building scalable microservices, backend
            systems, full-stack applications, cloud-native platforms, and AI-powered software solutions.
          </SectionHeading>

          <div className="about-grid">
            <article className="about-card">
              <span className="card-number">01</span>
              <h3>Backend and microservices engineering</h3>
              <p>
                I design and build reliable backend services, REST APIs, authentication flows, and
                data-driven systems using Java, Python, Node.js, Spring Boot, and modern database
                technologies.
              </p>
            </article>
            <article className="about-card">
              <span className="card-number">02</span>
              <h3>Cloud-native delivery</h3>
              <p>
                I work with Docker, Kubernetes, AWS, Jenkins, and CI/CD pipelines to improve deployment
                consistency, system reliability, and production readiness.
              </p>
            </article>
            <article className="about-card">
              <span className="card-number">03</span>
              <h3>AI-enabled software systems</h3>
              <p>
                I build AI-powered applications using LLM workflows, RAG, vector embeddings, semantic
                search, and inference-focused backend APIs.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <SectionHeading kicker="Skills" title="Technical toolkit">
            A practical toolkit for scalable backend services, full-stack applications, cloud-native
            delivery, and AI-enabled software systems.
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
            Five focused projects showing full-stack delivery, cloud architecture, AI search, analytics, and
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
                <div className="cert-preview" aria-label={`${cert.name} certification preview`}>
                  <span>{cert.issuer}</span>
                  <strong>{cert.category}</strong>
                  <small>Graduate Badge</small>
                </div>
                <div className="cert-body">
                  <div className="cert-content">
                    <p className="cert-issuer">{cert.issuer}</p>
                    <h3>{cert.name}</h3>
                    {(cert.issued || cert.hours) && (
                      <div className="cert-meta">
                        {cert.issued && <span>{cert.issued === 'Credential' ? 'Credential' : `Issued: ${cert.issued}`}</span>}
                        {cert.hours && <span>{cert.hours}</span>}
                      </div>
                    )}
                  </div>
                  {(cert.pdf || cert.credly) && (
                    <div className="cert-actions">
                      {cert.pdf && (
                        <a className="cert-action-primary" href={cert.pdf} target="_blank" rel="noreferrer">
                          View Certificate
                        </a>
                      )}
                      {cert.credly && (
                        <a className="cert-action-secondary" href={cert.credly} target="_blank" rel="noreferrer">
                          Verify Badge
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <SectionHeading kicker="Experience" title="Professional experience">
            Practical engineering work across backend platforms, microservices, cloud deployments,
            automation, observability, and AI-enabled application features.
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
              I am open to Software Engineer, Backend Engineer, Full Stack Engineer, and AI Software
              Engineer roles.
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
