import Link from 'next/link';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <h3>Your Brand</h3>
          <p>Custom web development for businesses that need more than templates.</p>
        </div>
        
        <nav className={styles.links}>
          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Resources</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/docs">Documentation</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </nav>
      </div>
      
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
} 