"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "@/components/destination/PlanetCard";

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);
  const [numberOfPlanets, setNumberOfPlanets] = useState(0);
  const [isPlanetSelected, setIsPlanetSelected] = useState(false);

  // let isPlanetSelected = false;
  // let numberOfPlanets = 0;

  const onAddOrRemovePlanet = (name, index) => {
    setIsPlanetSelected((prevState) => !prevState);
    setNumberOfPlanets((prevCount) => {
      // Check if the planet is already selected
      if (isPlanetSelected === true) {
        // If it is selected, remove it and decrease the count
        onAddPlanet((prevPlanets) =>
          prevPlanets.filter((planet) => planet !== name)
        );
        return prevCount - 1;
      } else {
        // If it is not selected, add it and increase the count
        onAddPlanet((prevPlanets) => [...prevPlanets, name]);
        return prevCount + 1;
      }
    });
    // TASK - React 1 week 2
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)

    console.log(
      `You seleceted the following planet: ${name}, with the index of ${index}`
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}

          <p>No planets in wishlist :(</p>
          <p>You have {numberOfPlanets} in your wishlist</p>
          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}

          <AddWishlistItem onAddWishlistItem={onAddPlanet} />

          <PlanetCard
            name={"EUROPA"}
            index={0}
            thumbnail="/destination/image-europa.png"
            description="Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers."
            isPlanetSelected={isPlanetSelected}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={"MOON"}
            index={1}
            thumbnail="/destination/image-europa.png"
            description="Mars, the Red Planet, is a barren yet fascinating world with
            vast deserts, towering volcanoes, and the deepest canyon in the
            solar system. As humanity’s next frontier, Mars invites us to
            dream of colonization and the possibilities of life beyond
            Earth.Mars, the Red Planet, is a barren yet fascinating world
            with vast deserts, towering volcanoes, and the deepest canyon in
            the solar system. As humanity’s next frontier, Mars invites us
            to dream of colonization and the possibilities of life beyond
            Earth."
            isPlanetSelected={isPlanetSelected}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={"MARS"}
            index={2}
            thumbnail="/destination/image-europa.png"
            description="Our closest celestial neighbor, the Moon, is a silent witness to
                Earth's history. With its stunning craters and desolate
                landscapes, the Moon offers a unique glimpse into space
                exploration's past and future, making it a perfect destination
                for lunar adventurers."
            isPlanetSelected={isPlanetSelected}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={"TITAN"}
            index={3}
            thumbnail="/destination/image-europa.png"
            description="Titan, Saturn's largest moon, is a world of dense atmosphere and
                liquid methane lakes. This enigmatic moon is shrouded in a thick
                orange haze, concealing a landscape that is both alien and
                strangely familiar, beckoning explorers to uncover its secrets."
            isPlanetSelected={isPlanetSelected}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;
