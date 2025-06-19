"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "@/components/destination/PlanetCard";

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);
  const [numberOfPlanets, setNumberOfPlanets] = useState(0);

  const planets = [
    {
      name: "EUROPA",
      index: 0,
      thumbnail: "/destination/image-europa.png",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    },
    {
      name: "MOON",
      index: 1,
      thumbnail: "/destination/image-moon.png",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    },
    {
      name: "MARS",
      index: 2,
      thumbnail: "/destination/image-mars.png",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    },
    {
      name: "TITAN",
      index: 3,
      thumbnail: "/destination/image-titan.png",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    },
  ];

  const removeFromWishlist = (name) => {
    console.log(`removeFromWishlist called for: ${name}`); // Debugging log

    onAddPlanet((prevPlanets) => {
      return prevPlanets.filter((planet) => planet !== name);
    });

    setNumberOfPlanets((prevCount) => prevCount - 1);
  };

  const onAddOrRemovePlanet = (name) => {
    console.log(`onAddOrRemovePlanet called with name: ${name}`);

    const action = selectedPlanets.includes(name) ? "do-removed" : "do-add";

    if (action === "do-removed") {
      setNumberOfPlanets((prevCount) => prevCount - 1);
      onAddPlanet((prevPlanets) => {
        return prevPlanets.filter((planet) => planet !== name);
      });
    } else {
      setNumberOfPlanets((prevCount) => prevCount + 1); 
      onAddPlanet((prevPlanets) => {
        return [...prevPlanets, name];
      });
    }

  

    // setIsPlanetSelected((prevState) => !prevState);

    // TASK - React 1 week 2
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)
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

          {numberOfPlanets <= 0 ? <p>No planets in wishlist :(</p> : ""}

          <p>You have {numberOfPlanets} in your wishlist</p>
          {/* <b>List coming soon after lesson 3!</b> */}

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
         
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}

          {selectedPlanets.map((planetName, i) => (
            <AddWishlistItem
              name={planetName}
              onRemove={()=>removeFromWishlist(planetName)}
              key={i}
              thumbnail={
                planets.find((p) => p.name === planetName)?.thumbnail ||
                "/destination/image-europa.png"
              }
            />
          ))}

          {planets.map((planet) => (
            <PlanetCard
              key={planet.index}
              name={planet.name}
              index={planet.index}
              thumbnail={planet.thumbnail}
              description={planet.description}
              isPlanetSelected={selectedPlanets.includes(planet.name)}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
