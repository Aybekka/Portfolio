import { motion } from 'framer-motion';
import { contact } from '../../data/portfolio';
import styles from './Contact.module.css';

// I build the contact items from the data file so the href and display value stay in sync automatically
const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: contact.email,
    // mailto: opens the user's default mail client — simplest no-backend contact solution
    href: `mailto:${contact.email}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/aybekka',
    href: contact.github,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammet-aybek-karacag',
    href: contact.linkedin,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={styles.header}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <div className="section-divider" />
          <p className={styles.subtext}>
            I&apos;m currently open to new opportunities. Whether you have a project in mind, a
            question, or just want to say hello — my inbox is always open.
          </p>
        </motion.div>

        <div className={styles.cards}>
          {CONTACT_ITEMS.map((item, i) => (
            // Using motion.a directly so Framer Motion can animate the anchor without a wrapper div
            <motion.a
              key={item.label}
              href={item.href}
              // Email opens the mail client in the same window — external links open in a new tab
              target={item.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.cardLabel}>{item.label}</span>
              <span className={styles.cardValue}>{item.value}</span>
            </motion.a>
          ))}
        </div>

        {/* Phone is displayed as text rather than a link — I didn't want to encourage cold calls */}
        <motion.p
          className={styles.phone}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          📞 {contact.phone}
        </motion.p>
      </div>

      <footer className={styles.footer}>
        <p>© 2026 M.Aybek Karaçağ</p>
      </footer>
    </section>
  );
}
