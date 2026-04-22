// I keep all portfolio content in one place so updating any text only ever requires touching this file

export const projects = [
  {
    id: 1,
    title: 'Task.Planner',
    description:
      'Feature-rich task management app with subtasks, priority levels, drag-and-drop reordering, a freehand drawing canvas per task, bilingual UI (EN/TR), and dark/light theming. Built with React 18 and Redux Toolkit.',
    tags: ['React', 'Redux Toolkit', 'dnd-kit', 'CSS Modules', 'Framer Motion'],
    liveUrl: 'https://task-planner-six-sandy.vercel.app/',
    githubUrl: 'https://github.com/aybekka/Task.Planner',
    // featured drives the "Featured" badge — I only mark the most complex project
    featured: true,
  },
  {
    id: 2,
    title: 'Tasty.Treats',
    description:
      'Recipe discovery platform built with a 9-person team. Responsible for the Recipe Modal and Rating Popup, integrating the TastyTreats REST API via Axios to fetch recipe details and handle user rating interactions.',
    tags: ['JavaScript ES6+', 'Axios', 'REST API', 'Vite', 'Scrum'],
    liveUrl: 'https://tastytreats-js-group.github.io/tasty-treats/',
    githubUrl: 'https://github.com/tastytreats-js-group/tasty-treats',
    featured: false,
  },
  {
    id: 3,
    title: 'Focus.Frame',
    description:
      'Fully responsive web interface built from scratch using semantic HTML5 and modern CSS. Demonstrates mastery of Flexbox and Grid layouts, hover effects, and smooth animations across all screen sizes.',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
    liveUrl: 'https://aybekka.github.io/Focus.Frame/',
    githubUrl: 'https://github.com/aybekka/Focus.Frame',
    featured: false,
  },
];

// I group skills by category so the Skills section can render them with labelled rows
export const skillGroups = [
  {
    label: 'Frontend',
    skills: ['HTML5', 'CSS3 / SASS', 'JavaScript ES6+', 'React', 'Redux Toolkit', 'Framer Motion'],
  },
  {
    label: 'Backend & APIs',
    skills: ['Node.js', 'REST API', 'Axios'],
  },
  {
    label: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Vite', 'npm', 'Figma'],
  },
  {
    label: 'Web & Optimisation',
    skills: ['WordPress', 'Elementor', 'SEO', 'Performance Optimisation', 'Responsive Design'],
  },
];

// Work experience — separated from education so the timeline can render two columns independently
export const experience = [
  {
    id: 1,
    type: 'work',
    role: 'Freelance Web Developer & SEO Specialist',
    company: 'EPOS Grup Danışmanlık ve Ticaret LTD. ŞTİ.',
    period: 'Project-Based',
    location: 'Ankara, Türkiye',
    bullets: [
      'Designed and developed responsive websites using HTML5, CSS3, JavaScript, React, and WordPress/Elementor.',
      'Performed on-page SEO optimisation including keyword research, meta tags, schema markup, and performance improvements.',
      'Collaborated directly with clients to gather requirements and deliver results aligned with business goals.',
    ],
  },
  {
    id: 2,
    type: 'work',
    role: 'Freelance Full Stack Web Developer',
    company: 'MEGAR Laboratuvar ve Test Ekipmanları Belgelendirme Danışmanlık Sistem Bilişim',
    period: 'Project-Based',
    location: 'Türkiye',
    bullets: [
      'Developed and maintained full stack web applications contributing to both front-end and back-end development.',
      'Built responsive UIs with HTML5, CSS3, JavaScript, and React tailored to company business needs.',
      'Collaborated with stakeholders to define requirements and deliver functional web solutions.',
    ],
  },
];

export const education = [
  {
    id: 3,
    type: 'education',
    role: 'Full Stack Developer Course',
    company: 'GoIT',
    period: '2025 – Ongoing',
    location: 'Online',
    bullets: [
      'Completed intensive full-stack programme covering React, Redux, Node.js, REST APIs, and Git workflows.',
      'Built multiple team and solo projects applying agile methodologies and code review practices.',
    ],
  },
  {
    id: 4,
    type: 'education',
    role: 'Software Engineering (Did not graduate)',
    company: 'Atılım University',
    period: '2019 – 2022',
    location: 'Ankara, Türkiye',
    bullets: [
      'Studied core computer science foundations including algorithms, data structures, and software design principles.',
      'Did not conclude studies with a degree.',
    ],
  },
];

// Contact details are centralised here so the Contact component never hardcodes any personal info
export const contact = {
  email: 'aybekka@gmail.com',
  phone: '+90 539 709 5744',
  github: 'https://github.com/aybekka',
  linkedin: 'https://www.linkedin.com/in/muhammet-aybek-karacag/',
};
