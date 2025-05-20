"use client"

import { useFormStatus } from "react-dom"

export default function Submit() {
    // useFormStatus is used for getting previous session data.
    const { pending } = useFormStatus()
    return (
         <button
                type='submit'
                className='mt-2 block w-full text-white bg-blue-500 rounded disabled:bg-gray-500 cursor-pointer'
                disabled={pending}
            >
                Add Product
            </button>
    )
}
