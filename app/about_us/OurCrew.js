import styles from "./page.module.css";

export default function OurCrew() {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <section className={styles.crewSection}>
      <div className={styles.headingCrew}>
        <h6>Our Team</h6>
        <h1>Who we are</h1>
        <p>we are committed to pushing the boundaries of what is possible.</p>
      </div>
      <div className={styles.crewImgDiv}>
        <div className={styles.imgName}>
          <img src="crew/image-anousheh-ansari.png" />
          <p>Anousheh Ansari</p>
          <h6>Founder-CEO</h6>
        </div>
        <div className={styles.imgName}>
          <img src="crew/image-douglas-hurley.png" alt="" />
          <p>Douglas Hurley</p>
          <h6>Co-Founder</h6>
        </div>
        <div className={styles.imgName}>
          <img src="crew/image-mark-shuttleworth.png" alt="" />
          <p>Mark huttleworth</p>
          <h6>Partner</h6>
        </div>
        <div className={styles.imgName}>
          <img src="crew/image-victor-glover.png" alt="" />
          <p>Victor Glover</p>
          <h6>Co-Partner</h6>
        </div>
      </div>

      <p className={styles.crewText}>
        Exploration: We are driven by a deep-seated desire to explore the
        unknown. We believe that the pursuit of discovery is at the heart of
        human nature, and we are committed to pushing the boundaries of what is
        possible. Innovation: At Galactica, we prioritize cutting-edge
        technology and innovation. We are constantly evolving our spacecraft,
        safety protocols, and services to ensure that our travelers experience
        the most advanced and secure space journeys available. Sustainability:
        We are committed to making space exploration sustainable for future
        generations. Our space missions are designed to minimize environmental
        impact, both on Earth and in space, and to foster a spirit of
        responsibility towards our universe. Community: We believe in the power
        of collective exploration. Our journeys are not just about reaching new
        destinations; they are about building a community of space enthusiasts
        who share a passion for the stars. ### Our Crew #### Description Our
        crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal
      </p>
    </section>
  );
}
