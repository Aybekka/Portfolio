import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const n = projects.length;

const cardVariants = {
  enter: (dir) => ({ x: dir > 0 ? '110%' : '-110%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir) => ({ x: dir > 0 ? '-110%' : '110%', opacity: 0 }),
};

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (d) => {
    setDir(d);
    setStartIndex(i => (i + d + n) % n);
  };

  const visibleProjects = Array.from({ length: 3 }, (_, i) => projects[(startIndex + i) % n]);

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

        <div className={styles.sliderOuter}>
          <button className={styles.navBtn} onClick={() => go(-1)} aria-label="Previous project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.sliderTrack}>
            <div className={styles.grid}>
              <AnimatePresence mode="popLayout" custom={dir}>
                {visibleProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    className={styles.cardWrapper}
                    custom={dir}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { duration: 0.4, ease: 'easeInOut' },
                      opacity: { duration: 0.3 },
                      layout: { duration: 0.4, ease: 'easeInOut' },
                    }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <button className={styles.navBtn} onClick={() => go(1)} aria-label="Next project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {projects.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot}${i === startIndex ? ` ${styles.dotActive}` : ''}`}
              onClick={() => { setDir(i >= startIndex ? 1 : -1); setStartIndex(i); }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
