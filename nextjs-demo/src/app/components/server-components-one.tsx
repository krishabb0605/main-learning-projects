import fs from 'fs';
// import ServerComponentTwo from './server-components-two';
// import ClientComponentOne from './client-components-one';

export default function ServerComponentOne() {
    fs.readFileSync("src/app/components/server-components-one.tsx", "utf-8")

    return (
        <>
            <div>Server Component One</div>
            {/* <ServerComponentTwo /> */}
            {/* <ClientComponesntOne /> */}
        </>
    )
}
