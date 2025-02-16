"use client";

import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ name, label }) {
  const [pickedImage, setPickedImage] = useState();
  const inputImage = useRef();

  const handlePickedImageClick = () => {
    inputImage.current.click();
  };

  const handlePickedImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
        setPickedImage(null);
        return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label} </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image is Picked</p>}
          {pickedImage && (
            <Image src={pickedImage} fill alt="Selected Image by user" />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          id={name}
          ref={inputImage}
          onChange={handlePickedImageChange}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickedImageClick}
        >
          Picker Image
        </button>
      </div>
    </div>
  );
}
