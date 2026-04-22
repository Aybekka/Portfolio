import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

// I keep the roles in an array so it's easy to add or reorder titles without touching the logic
const ROLES = ['Full Stack Developer', 'React Specialist', 'UI Engineer', 'JavaScript Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  // displayed holds the currently visible slice of the target string
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // This effect drives the typewriter — I derived the state machine from a few articles and it took me
  // a while to get the timing right so the pause before deleting feels natural
  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      // Type one character every 60ms — fast enough to feel snappy, slow enough to read
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      // Pause for 2 seconds at full text before starting to delete
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      // Delete is faster than typing — 35ms feels like a quick erase
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      // Move to the next role once the string is fully erased
      setDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // I use a factory variant so I can pass a custom delay per element via the `custom` prop
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: delay => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } }),
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* aria-hidden keeps the decorative grid out of the accessibility tree */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Staggered delays on each element give a cascading reveal on page load */}
        <motion.p
          className={styles.greeting}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          className={styles.name}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          M.Aybek Karaçağ
        </motion.h1>

        <motion.div
          className={styles.roleRow}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          {/* displayed updates character by character from the useEffect above */}
          <span className={styles.role}>{displayed}</span>
          {/* The blinking cursor is pure CSS animation — no JS needed */}
          <span className={styles.cursor} aria-hidden="true">|</span>
        </motion.div>

        <motion.p
          className={styles.subtext}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          A motivated developer passionate about building responsive, user-focused
          web applications — from pixel-perfect UIs to clean REST APIs.
        </motion.p>

        <motion.div
          className={styles.ctas}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          {/* react-scroll Link wraps the button so it smooth-scrolls instead of jumping */}
          <Link to="projects" smooth duration={600} offset={-80}>
            <button className={styles.btnPrimary}>View Projects</button>
          </Link>
          {/* download attribute tells the browser to save the file rather than open it */}
          <a
            href="/Muhammet_Aybek_Karacag_Fullstack.pdf"
            download
            className={styles.btnSecondary}
          >
            Download CV
          </a>
        </motion.div>

        {/* The scroll hint fades in last so it doesn't compete with the main content */}
        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Link to="about" smooth duration={600} offset={-80}>
            {/* Looping y animation draws the eye downward without being annoying */}
            <motion.span
              className={styles.arrow}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              aria-label="Scroll down"
            >
              ↓
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
