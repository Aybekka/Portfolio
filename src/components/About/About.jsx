import { motion } from 'framer-motion';
import styles from './About.module.css';

// Quick stat numbers that give recruiters a snapshot at a glance
const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '3', label: 'Projects Shipped' },
  { value: '2', label: 'Freelance Clients' },
  { value: '2', label: 'Languages' },
];

// Reusable animation variant — I define it outside the component so it isn't recreated on every render
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        {/* once: true means the animation only fires the first time the element enters the viewport */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {/* Sliding in from opposite sides gives the two-column layout a nice reveal effect */}
          <motion.div
            className={styles.avatarCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className={styles.avatar}>
              {/* Using initials as a placeholder avoids the need for an actual photo */}
              <span className={styles.initials}>MAK</span>
              <div className={styles.avatarGlow} />
            </div>
          </motion.div>

          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            // Slight delay so the avatar arrives just before the text — feels more natural
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <p className={styles.bio}>
              I&apos;m a Full Stack Developer with a solid foundation built through the{' '}
              <span className={styles.highlight}>GoIT Full Stack Developer programme</span> and
              hands-on freelance work. I specialise in building performant, responsive interfaces
              with React, while staying comfortable on the backend with Node.js and REST APIs.
            </p>
            <p className={styles.bio}>
              I love the intersection of clean code and great user experience — every project is
              a chance to solve a real problem and sharpen my craft. From drag-and-drop task boards
              to SEO-optimised client websites, I bring{' '}
              <span className={styles.highlight}>analytical thinking and attention to detail</span>{' '}
              to everything I build.
            </p>
            <p className={styles.bio}>
              Native in both{' '}
              <span className={styles.highlight}>English and Turkish</span>, I work comfortably
              with international teams and clients — and I&apos;m always eager to take on
              new challenges that push me to grow.
            </p>

            {/* Stats sit below the bio so they feel like a natural summary rather than a header */}
            <div className={styles.stats}>
              {STATS.map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
