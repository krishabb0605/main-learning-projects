"use client"
import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isLoaded: userIsLoaded, isSignedIn, user } = useUser();

    // When ot signin component is not render...
    if (!isLoaded || !userId) {
        return null;
    }

    if (!userIsLoaded || !isSignedIn) {
        return null;
    }

    return (
        <>
            <p>
                Count: {count}
            </p>
            <button onClick={() => setCount(count + 1)}            >
                Increment
            </button>
        </>
    )

}