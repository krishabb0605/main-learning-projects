"use client"

import { useState } from "react"

export default function ClientComponentTwo() {
    const [name, setName] = useState("Batman");
    console.log({ name })

    return (
        <>
            <div>Client Component Two</div>
            <button onClick={() => setName("hello")}>Click</button>
        </>
    )
}
