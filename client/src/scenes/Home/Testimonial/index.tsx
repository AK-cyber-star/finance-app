import styles from "./styles.module.css";

import { motion } from "framer-motion";

const testimonials = [
    { id: 1, name: "Evelyn", img: "/img1.svg", text: "Finanseer transformed how I track my expenses!" },
    { id: 2, name: "Oliver", img: "/img2.svg", text: "The predictive analytics feature is a game-changer." },
    { id: 3, name: "Scarlett", img: "/img3.svg", text: "A must-have for anyone serious about their finances." },
    { id: 4, name: "Zachary", img: "/img4.png", text: "Simple, powerful, and extremely helpful." }
];

function Testimonials() {
  return (
    <div className={styles.testimonialsWrapper}>
        <h2>What Our Users Say</h2>
        <motion.div
        className={styles.testimonials}
            animate={{x: ["0%", "-100%"]}}
            transition={{repeat: Infinity, duration: 10, ease: "linear"}}
        >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className={styles.testimonial}>
                    <img className={styles.testimonialImg} src={testimonial.img} alt={`${testimonial.name} - testimonial`}/>
                    <p>"{testimonial.text}" - {testimonial.name}</p>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default Testimonials