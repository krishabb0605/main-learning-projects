"use client"

import { useState } from "react"
// import ClientComponentTwo from "./client-components-two";
// import ServerComponentOne from "./server-components-one";

// Any component inside client component become client components.
// So inside client component import server component is not supported.
// You can pass it as children.
export default function ClientComponentOne({ children }: { children: React.ReactNode }) {
    const [name, setName] = useState("Batman");
    console.log({ name })

    return (
        <>
            <div>Client Component One</div>
            <button onClick={() => setName("hello")}>Click</button>
            {/* <ClientComponentTwo /> */}
            {/* <ServerComponentOne /> */}
            {children}
        </>
    )
}
