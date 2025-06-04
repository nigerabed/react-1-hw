import OurCrew from './OurCrew';
import OurPartners from './OurPartners';
import OurValues from './OurValues';
import styles from './page.module.css';

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files


export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className={styles.card}>
          <h2>Our Values</h2>
          <OurValues/>
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew/>
        </section>
        <section className="card">
          <h2>Our partners</h2>
          <OurPartners/>
        </section>
      </main>
    </div>
  );
}

export default Crew;
