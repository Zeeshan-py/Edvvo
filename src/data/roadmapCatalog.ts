// Lightweight metadata: importing this does not download lesson content.
export const roadmapCatalog = [
  { id: 14, slug: 'data-engineering', title: 'Data Engineering Roadmap', description: 'Build reliable data pipelines with SQL, validation and repeatable imports. Deliver a tested event-data pipeline and an operational runbook.' },
  { id: 15, slug: 'applied-machine-learning', title: 'Applied Machine Learning Roadmap', description: 'Move from a clear prediction problem to an evaluated model. Practice baselines, leakage-safe pipelines and responsible error analysis.' },
  { id: 16, slug: 'qa-test-automation', title: 'QA & Test Automation Roadmap', description: 'Learn risk-based testing, clear bug reporting and reliable Playwright automation. Build a portfolio test suite with CI and diagnostic evidence.' },
  { id: 17, slug: 'business-intelligence', title: 'Business Intelligence Roadmap', description: 'Turn business questions into trustworthy metrics and accessible Power BI dashboards. Build a reporting model, validate totals and document a handover.' },
  { id: 1, slug: 'web-development', title: 'Web Development Roadmap', description: 'Learn HTML, CSS, JavaScript and full-stack development through a step-by-step path with code examples and source links.' },
  { id: 6, slug: 'ui-ux-design', title: 'UI/UX Design Roadmap', description: 'Explore user research, interface design and prototyping with a structured learning path for aspiring product designers.' },
  { id: 3, slug: 'medical-studies', title: 'Medical Student Roadmap', description: 'Organize your medical studies with foundational topics and further reading. Verify professional requirements with your institution.' },
  { id: 4, slug: 'robotics-embedded-systems', title: 'Robotics & Embedded Systems Roadmap', description: 'Build foundations in electronics, programming and robotics with practical learning steps and further study resources.' },
  { id: 5, slug: 'cybersecurity', title: 'Cybersecurity Roadmap', description: 'Explore security fundamentals, defensive tools and ethical practice through a structured cybersecurity learning path.' },
  { id: 7, slug: 'blockchain-web3', title: 'Blockchain & Web3 Roadmap', description: 'Study blockchain concepts, smart contracts and decentralized application development with a guided technical learning path.' },
  { id: 8, slug: 'digital-marketing-seo', title: 'Digital Marketing & SEO Roadmap', description: 'Develop foundations in content, search optimization and measurement through a practical digital marketing learning path.' },
  { id: 9, slug: 'game-development', title: 'Game Development & AR/VR Roadmap', description: 'Explore game programming, interaction design and publishing through a structured path with learning resources and examples.' },
  { id: 10, slug: 'python-data-analysis', title: 'Python & Data Analysis Roadmap', description: 'Turn a small dataset into a reproducible report. Learn Python, clean data with pandas and explain your findings with clear charts.' },
  { id: 11, slug: 'android-development', title: 'Android Development Roadmap', description: 'Build an offline study planner with Kotlin and Jetpack Compose. Practice app state, storage, accessibility and testing.' },
  { id: 12, slug: 'cloud-devops', title: 'Cloud & DevOps Roadmap', description: 'Take a small application from your laptop to a repeatable deployment. Practice Git, containers, CI, monitoring and safe rollbacks.' },
  { id: 13, slug: 'web-accessibility', title: 'Web Accessibility Roadmap', description: 'Make a student resource page usable with a keyboard and assistive technology. Learn semantic HTML, forms and accessible testing.' },
];
export const roadmapUrl = (id: number) => `/roadmaps/${roadmapCatalog.find(item => item.id === id)!.slug}`;
