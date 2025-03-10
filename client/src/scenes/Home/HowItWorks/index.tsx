import { BarChart, Brain, CreditCard, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const steps = [
  {
    icon: <CreditCard size={40} />,
    title: "1. Connect Your Accounts",
    description: "Securely sync your bank accounts and credit cards for real-time financial insights."
  },
  {
    icon: <BarChart size={40} />,
    title: "2. Track Your Expenses",
    description: "Visualize where your money goes with interactive graphs and analytics."
  },
  {
    icon: <Brain size={40} />,
    title: "3. AI-Powered Predictions",
    description: "Get smart financial forecasts and budgeting insights based on past trends."
  },
  {
    icon: <LineChart size={40} />,
    title: "4. Optimize & Grow",
    description: "Use personalized recommendations to optimize spending and achieve financial goals."
  }
];

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2>How Finanseer Works</h2>
      <p>Manage your finances effortlessly with AI-driven insights and interactive dashboards.</p>
      
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className={styles.stepCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
