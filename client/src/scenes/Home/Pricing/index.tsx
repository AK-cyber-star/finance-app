import styles from "./styles.module.css";

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <h2 className={styles.heading}>Choose Your Plan</h2>
      <div className={styles.cardsContainer}>
        {/* Basic Plan */}
        <div className={styles.card}>
          <h3>Basic</h3>
          <p className={styles.price}>$9.99<span>/mo</span></p>
          <ul>
            <li>✔ Real-time Analytics</li>
            <li>✔ Basic Reports</li>
            <li>✔ Community Support</li>
          </ul>
          <button className={styles.ctaButton}>Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className={`${styles.card} ${styles.popular}`}>
          <h3>Pro <span className={styles.badge}>Most Popular</span></h3>
          <p className={styles.price}>$19.99<span>/mo</span></p>
          <ul>
            <li>✔ All Basic Features</li>
            <li>✔ AI Predictions</li>
            <li>✔ Priority Support</li>
          </ul>
          <button className={styles.ctaButton}>Get Started</button>
        </div>

        {/* Enterprise Plan */}
        <div className={styles.card}>
          <h3>Enterprise</h3>
          <p className={styles.price}>$49.99<span>/mo</span></p>
          <ul>
            <li>✔ Custom Reports</li>
            <li>✔ Dedicated Support</li>
            <li>✔ API Access</li>
          </ul>
          <button className={styles.ctaButton}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
