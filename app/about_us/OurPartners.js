import styles from "./page.module.css";

export default function OurPartners() {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <section className={styles.partnersSection}>
      <div className={styles.headingPartners}>
        <h6>Our Partners</h6>
        <p>
          We collaborate with some of the most <br /> respected names in the
          space and
          <br /> technology industries to make <br /> every journey
          extraordinary.
        </p>
      </div>
      <div className={styles.partnersContainer}>
        <div className={styles.partnersList}>
          <div className={styles.partner}>
            <img src="/business_partners/alphabet-logo.png" alt="Partner 1" />
          </div>
          <div className={styles.partner}>
            <img src="/business_partners/amazon_logo.png" alt="Partner 2" />
          </div>
          <div className={styles.partner}>
            <img src="/business_partners/CBC_Logo_White.png" alt="Partner 3" />
          </div>
          <div className={styles.partner}>
            <img
              src="/business_partners/Microsoft-Logo-white.png"
              alt="Partner 4"
            />
          </div>
          <div className={styles.partner}>
            <img src="/business_partners/nyu-logo.png" alt="Partner 4" />
          </div>
          <div className={styles.partner}>
            <img
              src="/business_partners/QueensLogo_white.png"
              alt="Partner 4"
            />
          </div>
          <div className={styles.partner}>
            <img src="/business_partners/samsung-logo.png" alt="Partner 4" />
          </div>
          <div className={styles.partner}>
            <img src="/business_partners/sodexo-logo.png" alt="Partner 4" />
          </div>
        </div>
      </div>
    </section>
  );
}
