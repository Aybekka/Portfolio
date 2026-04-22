import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

// Smooth-scroll to a section by id while accounting for the fixed navbar height
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: offset, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver watches all sections and marks whichever is most in view as active
  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map(l => l.to)];
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (e, id) => {
    e.preventDefault();
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={`container ${styles.inner}`}>
        {/* href keeps it crawlable; onClick gives the smooth scroll effect */}
        <a href="#hero" className={styles.logo} onClick={e => handleNav(e, 'hero')}>
          MAK
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map(link => (
            <a
              key={link.to}
              href={`#${link.to}`}
              className={`${styles.navLink} ${activeId === link.to ? styles.active : ''}`}
              onClick={e => handleNav(e, link.to)}
            >
              {link.label}
            </a>
          ))}
        </nav>

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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <a
                  href={`#${link.to}`}
                  className={styles.mobileLink}
                  onClick={e => handleNav(e, link.to)}
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
