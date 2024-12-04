'use client';

import { useFormStatus } from 'react-dom';

import classes from './submit-button.module.css';

const SubmitButton = () => {

    const status = useFormStatus();


    return (
      <>
        <p className={classes.actions}>
          <button disable={status.pending} type="submit">{`${
            status.pending ? "Submitting..." : "Share Meal"
          }`}</button>
        </p>
      </>
    );
}

export default SubmitButton;