import React from 'react'
import ServerComponentOne from '../components/server-components-one'
import ClientComponentOne from '../components/client-components-one'

export default function InterLeavingPage() {
    return (
        <>
            <h1>IterLeaving Page</h1>
            {/* <ServerComponentOne /> */}
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
        </>
    )
}
