# M.Aybek Karaçağ — Personal Portfolio

A personal portfolio website built with React and Framer Motion to showcase my projects, skills, freelance experience, and education as a Full Stack Developer.

---

## What It Does

- Presents a single-page scrollable layout with seven sections: Hero, About, Skills, Projects, Experience, Contact, and a footer.
- Animates every section into view using Framer Motion scroll-triggered transitions.
- Features a typewriter effect in the Hero section that cycles through job titles.
- Displays three featured projects (Task.Planner, Tasty.Treats, Focus.Frame) with live and GitHub links.
- Provides direct contact via email, GitHub, and LinkedIn — no backend required.

---

## Technologies Used

| Tool | Purpose |
|------|---------|
| React 18 | UI components and state |
| Vite 8 | Dev server and production bundler |
| Framer Motion | Scroll animations, hover effects, typewriter |
| react-scroll | Smooth anchor navigation |
| CSS Modules | Scoped component styles |
| CSS Custom Properties | Design token system (colours, spacing, fonts) |
| Google Fonts | Inter (sans) + JetBrains Mono (monospace) |

No Redux — there is no complex shared state, so local component state is enough.

---

## Folder Structure

```
src/
├── components/
│   ├── Navbar/          # Fixed header with scroll-spy active links and mobile hamburger
│   ├── Hero/            # Full-height landing section with typewriter animation
│   ├── About/           # Two-column bio with initials avatar and stat blocks
│   ├── Skills/          # Grouped skill pills with staggered entrance animation
│   ├── Projects/        # Project grid — Projects.jsx renders the grid, ProjectCard.jsx is one card
│   ├── Experience/      # Two-column Work / Education timeline
│   └── Contact/         # Contact cards (email, GitHub, LinkedIn) and footer
├── data/
│   └── portfolio.js     # Single source of truth for all content (projects, skills, experience, contact)
├── hooks/               # Reserved for custom hooks (currently unused)
├── styles/
│   ├── variables.css    # Design tokens — colours, fonts, spacing, shadows
│   └── global.css       # CSS reset, scrollbar, base typography, shared utility classes
├── App.jsx              # Root layout — imports and orders all sections
└── main.jsx             # React DOM entry point
```

---

## How to Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The dev server starts at `http://localhost:5173`.

---

## Adding Your CV

Place your CV PDF in the `public/` folder named exactly:

```
public/Muhammet_Aybek_Karacag_Fullstack.pdf
```

The "Download CV" button in the Hero section is already wired to this path.

---

## Updating Content

All text, links, and data live in `src/data/portfolio.js`. To add a project, skill, or update contact details, edit only that file — no component changes needed.
