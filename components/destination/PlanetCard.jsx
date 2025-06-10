import styles from "@/components/destination/destination.module.css";
export default function PlanetCard({
  name,
  index,
  thumbnail,
  description,
  isPlanetSelected, 
  onAddOrRemovePlanet,
}) {
  return (
    <div className={styles.planetCard}>
    <img
      className={styles.planetThumbnail}
      src={thumbnail}
      alt=""
    />
    <div className={styles.planetDescription}>
      <h2> {isPlanetSelected ? "SELECTED" : name}</h2>
      <p>
        {description}
      </p>
    </div>
    <button
      className="roundButton"
      onClick={() => onAddOrRemovePlanet(name, index)}
    >
      {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
    </button>
  </div>
  );
}