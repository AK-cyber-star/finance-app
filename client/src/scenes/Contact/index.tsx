import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Upload } from "lucide-react";
import styles from "./styles.module.css";

type FormData = {
  name: string;
  email: string;
  message: string;
  file?: FileList;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section className={styles.contactSection}>
      <motion.div 
        className={styles.contactContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <p>Have questions or need assistance? Fill out the form and I'll get back to you!</p>

        {isSubmitted ? (
          <motion.div className={styles.successMessage} animate={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <p>Thank you! Your message has been sent successfully.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <User className={styles.icon} />
              <input type="text" placeholder="Your Name" {...register("name", { required: true })} />
            </div>
            {errors.name && <span className={styles.error}>Name is required</span>}

            <div className={styles.inputGroup}>
              <Mail className={styles.icon} />
              <input type="email" placeholder="Your Email" {...register("email", { required: true })} />
            </div>
            {errors.email && <span className={styles.error}>Email is required</span>}

            <div className={styles.inputGroup}>
              <MessageSquare className={styles.icon} />
              <textarea placeholder="Your Message" {...register("message", { required: true })}></textarea>
            </div>
            {errors.message && <span className={styles.error}>Message is required</span>}

            <div className={styles.inputGroup}>
              <Upload className={styles.icon} />
              <input type="file" {...register("file")} />
            </div>

            <div className={styles.btnContainer}>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;