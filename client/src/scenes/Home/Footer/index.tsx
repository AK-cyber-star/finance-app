import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Quick Links */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Center Section - Newsletter */}
        <div className={styles.section}>
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest insights.</p>
          <div className={styles.newsletter}>
            <input type="email" placeholder="Enter your email" />
            <button><Mail size={20} /></button>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#"><Facebook size={24} /></a>
            <a href="#"><Twitter size={24} /></a>
            <a href="#"><Linkedin size={24} /></a>
            <a href="#"><Instagram size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Legal */}
      <div className={styles.legal}>
        <p>© {new Date().getFullYear()} Finanseer. All Rights Reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
