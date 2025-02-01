'use client'

import { useRef, useState } from 'react';
import classes from "./image-picker.module.css";
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const inputImage = useRef();
  const [pickerImage, setPickerImage] = useState();

  const handleInputImageClick = (e) => {
    inputImage.current.click();
  }

  const handleInputChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickerImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickerImage(fileReader.result);
    }

    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={ classes.controls }>
          <div className={ classes.preview }>
            { !pickerImage && <p>No Image is Selected</p> }
            {pickerImage && <Image src={pickerImage} alt='Selected Image by the user' fill />}
          </div>
          <input
            type="file"
            className={classes.input}
            id={name}
            accept="image/png image/jpeg"
            name={ name }
            ref={ inputImage }
            onChange={handleInputChange}
          />
          <button className={classes.button} type="button" onClick={handleInputImageClick}>Pick an Image</button>
        </div>
      </div>
    </>
  );
}
