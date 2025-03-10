import { motion } from "framer-motion";
import styles from "./styles.module.css";

const CTA = () => {
  return (
    <section id="contact" className={styles.ctaSection}>
      <motion.div
        className={styles.ctaContent}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Ready to take control of your finances?</h2>
        <p>Join thousands of users who trust Finanseer for smart financial insights.</p>
        <a href="/contact" className={styles.ctaButton}>Contact Me</a>
      </motion.div>
    </section>
  );
};

export default CTA;