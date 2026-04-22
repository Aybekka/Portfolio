import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="section-label">What I&apos;ve Built</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </motion.div>

        {/* I pass the index down so each card can stagger its entrance delay independently */}
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
