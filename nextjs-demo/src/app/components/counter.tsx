"use client";
import { useAuth, useUser } from '@clerk/nextjs';
import React, { useState } from 'react'

const Counter = () => {
    // We cant use usestate in server component.
    // You have to write `use client`

    // const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();

    const [count, setCount] = useState(0);
    console.log("Counter compoent");

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    )
}

/**
 * server component: 
 *  - fetching data
 *  - accessing backend resources
 *  - keeping sensitive info. on the server
 * 
 * client component:
 *  - using browser only apis
 *  - using hooks like useState and useEffects
 *  - interactivity and event listner
 */
export default Counter