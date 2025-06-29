"use client"
// must have error.tsx
import React, { useEffect } from 'react'

const Error = ({ error }: { error: Error }) => {
    useEffect(() => {
        console.log({ error })
    }, [error]);

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-2xl text-red-500'>Error while fetching users data</div>
        </div>
    )
}

export default Error