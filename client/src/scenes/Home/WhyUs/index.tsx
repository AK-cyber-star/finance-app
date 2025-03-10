import { motion } from "framer-motion";
import { TrendingUp, BarChart3, ShieldCheck, Users } from "lucide-react";
import styles from "./styles.module.css";
import HowItWorks from "../HowItWorks";
import Testimonials from "../Testimonial";

const features = [
  {
    icon: <TrendingUp size={40} />,
    title: "Real-Time Insights",
    description: "Get instant updates on your financial health and cash flow.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "AI-Powered Predictions",
    description: "Machine Learning helps forecast financial trends for smart decisions.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure & Reliable",
    description: "Industry-leading security ensures your data remains protected.",
  },
  {
    icon: <Users size={40} />,
    title: "User-Friendly Dashboard",
    description: "Intuitive UI with customizable widgets for a seamless experience.",
  },
];

const WhyUs = () => {
  return (
    <section id="features" className={styles.whyUse}>
      {/* Header */}
      <motion.div
        className={styles.whyContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Why Use Finanseer?</h2>
        <p>
          Gain real-time financial insights, predict future trends, and manage your finances efficiently with our AI-powered dashboard.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <HowItWorks />
      <Testimonials />
    </section>
  );
};

export default WhyUs;
