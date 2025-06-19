"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({
  onAddWishlistItem,
  name,
  onRemove,
  thumbnail,
}) => {
  const [thumbnail2, onThumbnailChange] = useState(thumbnail);
  const [inputCustomWishlist, setInputCustomWishlist] = useState("");
  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  // 2. Connect the onThumbnailChange to the <select>

  
  const onAddItemPressed = () => {
    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    // call the onAddWishlistItem here
    setInputCustomWishlist("");
    onAddWishlistItem(inputCustomWishlist, thumbnail);
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input id="customWishlist" type="text" value={inputCustomWishlist} onChange={(e)=> setInputCustomWishlist(e.target.value)}/>
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail"  onChange={(e) => onThumbnailChange(e.target.value)} value={thumbnail2}>
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>

      <div className={styles.wishlistItem}>
        <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
        <b>{name}</b>
        <button onClick={onAddItemPressed}>ADD CUSTOM</button>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};
