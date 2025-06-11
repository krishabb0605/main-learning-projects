"use client"

import React, { useState } from 'react'

// When you use `useState` in this component it only render this component twice.
// but if you put useState in `navbar` it renders all 3 component twice.
export default function NavSearch() {
    console.log("NavSearch rendered...");
    const [search, setsearch] = useState("");

    return (
        <div>
            <div>Nav search input: {search}</div>
            <button onClick={() => setsearch("Hello")}>Click</button>
        </div>
    )
}
