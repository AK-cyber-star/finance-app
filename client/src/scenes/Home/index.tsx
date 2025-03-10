import { ArrowForward } from "@mui/icons-material";
import ProjectDemo from "./ProjectDemo";
import styles from "./styles.module.css";
// import Testimonials from "./Testimonial";
import Pricing from "./Pricing";
import Footer from "./Footer";
// import HowItWorks from "./HowItWorks";
import WhyUs from "./WhyUs";
import CTA from "./CTA/CTA";

function Home() {
  return (
    <main id="home">
        {/* Hero Section */}
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                <h1 className={styles.HeroPrimaryText}>
                    Take Control of Your Finances with <span className={styles.heroSpan}>Finanseer</span>
                </h1>

                <p className={styles.heroP}>
                    Gain insights with real-time data visualization, predictive analytics, and seamless financial tracking.
                </p>
                <div>
                <a href="/dashboard" style={{textDecoration: "none"}} className={styles.viewDemoBtn}>
                  <button>
                    Vizualize Yourself <ArrowForward className={styles.forwardIcon} />
                  </button>
                </a>
                </div>
            </div>
        </section>
        
        {/* Video Section */}
        <ProjectDemo />

        {/* Why to use section */}
        {/* <section className={styles.whyUse}>
            <div className={styles.whyContent}>
            <h2>Why Use Finanseer?</h2>
            <p>
              Gain real-time financial insights, predict future trends, and manage your finances efficiently with our Amazing dashboard.
            </p>
          </div>

          <HowItWorks />

          <Testimonials />
          
        </section> */}
        <WhyUs />

    {/* Pricing Plan Section */}
    <Pricing />
        
    <CTA />
    <Footer />
    </main>
  )
}

export default Home