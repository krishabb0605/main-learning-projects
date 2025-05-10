"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

// In app folder creating not-found file it automatically take invalid path to this file.
// You can create seperate file for each folder or else it take main not-found file.

// Here used hook so need to convert it as client component.
const NotFound = () => {
    const pathname = usePathname();
    const productId = pathname.split("/")[2]
    return (
        <div>
            <h2>Page not found.</h2>
            <p>Product id {productId} is greater than 1000.</p>
        </div>
    )
}

export default NotFound