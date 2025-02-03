'use client'

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit({ children, ...props }) {
    
    const { pending } = useFormStatus()
    
    return (
        <>
        <button disable={pending.toString()} {...props}>{pending? 'Submitting...' : children} </button>
        </>
    )
}