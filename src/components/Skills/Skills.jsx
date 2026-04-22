import { motion } from 'framer-motion';
import { skillGroups } from '../../data/portfolio';
import styles from './Skills.module.css';

// containerVariants orchestrates the stagger — the parent triggers children one after another
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

// Each pill pops in from slightly below and scaled down — subtle but feels polished
const pillVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            // Each row delays a little more than the previous so the groups cascade in
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: gi * 0.1 }}
            >
              <span className={styles.groupLabel}>{group.label}</span>

              {/* The pill container is the stagger parent — it triggers children when it enters view */}
              <motion.div
                className={styles.pills}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {group.skills.map(skill => (
                  // whileHover overrides specific CSS properties inline — handy for quick hover states
                  <motion.span
                    key={skill}
                    className={styles.pill}
                    variants={pillVariants}
                    whileHover={{ scale: 1.05, borderColor: 'var(--color-accent)', color: 'var(--color-accent-light)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
