import styles from "./page.module.css";

export default function OurValues() {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <section className={styles.valueSection}>
        <div className={styles.ourValues}>
          <div>
            <div className={styles.valueHeader}>
              <h2>01</h2>
              <h3>Love Your Craft</h3>
              <p>
                xploration: We are driven by a deep-seated desire to explore the
                unknown. <br /> We believe that the pursuit of discovery is at
              </p>
            </div>
            <div className={styles.valueHeader}>
              <h2>02</h2>
              <h3>Be Bold. Be humble</h3>
              <p>
                xploration: We are driven by a deep-seated desire to explore the
                unknown <br /> xploration: We are driven by a deep-seated desire{" "}
                <br />
                to explore the unknown.
              </p>
            </div>
          </div>

          <div>
            <div className={styles.valueHeader}>
              <h2>03</h2>
              <h3>Be better. Always push forward</h3>
              <p>
                xploration: We are driven by a deep-seated desire to explore the
                unknown. <br /> We believe that the pursuit of discovery <br />{" "}
                is at the heart of human nature
              </p>
            </div>
            <div className={styles.valueHeader}>
              <h2>04</h2>
              <h3>Be a Professional</h3>
              <p>
                xploration: We are driven by a deep-seated desire to explore the
                unknown. <br /> We believe that the pursuit of discovery is at
                the heart of human nature
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
