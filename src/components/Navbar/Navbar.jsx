import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

// I define nav links as a constant array so adding a new section only requires one line here
const NAV_LINKS = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // I use { passive: true } because scroll listeners that don't call preventDefault can be optimised by the browser
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Locking body scroll when the mobile menu is open prevents the page from scrolling behind the overlay
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    // Animating the navbar sliding in on load gives the page a polished first impression
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={`container ${styles.inner}`}>
        {/* Clicking the logo scrolls back to the top — a nice UX touch */}
        <Link to="hero" smooth duration={600} className={styles.logo}>
          MAK
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map(link => (
            // spy + activeClass highlights the link for whichever section is currently in view
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-80}
              className={styles.navLink}
              activeClass={styles.active}
              spy
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* The burger button is hidden on desktop via CSS — only visible on mobile */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* AnimatePresence lets Framer Motion animate the menu out when it closes */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {/* Staggered entrance for each link makes the mobile menu feel more alive */}
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className={styles.mobileLink}
                  // Closing the menu on click avoids the user having to dismiss it manually
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
