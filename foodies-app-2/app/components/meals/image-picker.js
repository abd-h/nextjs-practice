"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ name, label }) => {
  const [pickedImage, setPickedImage] = useState();
  const imagePickerRef = useRef();

  const handleImagePicker = () => {
    imagePickerRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];

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
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image picked by the user" fill />
          )}
        </div>
        <input
          ref={imagePickerRef}
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePicker}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
