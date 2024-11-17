"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();
  const handleClick = () => {
    imageInput.current.click();
  };
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            return setPickedImage(null);
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
 }

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];

//       if (!file) {
//           setPickedImage(null);
//       return;
//     }
//     const fileReader = new FileReader();

//     fileReader.onload = () => {
//       setPickedImage(fileReader.result);
//     };

//     fileReader.readAsDataURL(file);
//   };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{} </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet!</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked image" fill />}
        </div>
        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          accept="image/png, image/jpg"
          name={name}
                  id={ name }
                  required
          onChange={handleImageChange}
        />
        <button onClick={handleClick} type="button" className={classes.button}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
