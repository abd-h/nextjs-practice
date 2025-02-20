'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitBtn({ children, props }) {
    const {pending} = useFormStatus();
    return (
        <button disable={pending} {...props} >{pending? 'Submitting...' : 'Submit'} </button>
    )
}