import { motion } from 'framer-motion';
import { experience, education } from '../../data/portfolio';
import styles from './Experience.module.css';

// I extracted TimelineItem as an inner component to avoid repeating the same card structure twice
function TimelineItem({ item, index }) {
  return (
    // Sliding in from the left matches the timeline's left-border direction — feels intentional
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
    >
      {/* The dot sits on the border line — positioning is handled entirely in CSS */}
      <div className={styles.dot} />
      <div className={styles.card}>
        <div className={styles.meta}>
          <span className={styles.period}>{item.period}</span>
          <span className={styles.location}>{item.location}</span>
        </div>
        <h3 className={styles.role}>{item.role}</h3>
        <p className={styles.company}>{item.company}</p>
        {/* Using index as key here is acceptable since the bullets array never changes order */}
        <ul className={styles.bullets}>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Two separate columns so work and education can be scanned independently */}
        <div className={styles.columns}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Work</h3>
            <div className={styles.timeline}>
              {experience.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Education</h3>
            <div className={styles.timeline}>
              {education.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
