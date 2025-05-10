import React from 'react'

// Here using [...slug] you need to give path /docs/{something} eg. /docs/feature1/concept1/example1
// But if you navigate to only; /docs it gives 404 error you can't navigate

// But if you want to make it optional rename folder name with extra sqare bracket [[...slug]]

// Route: docs/routing/catch-all-segments
const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = await params;
    if (slug?.length) {

        return (
            <ul> Slug values:
                {
                    slug.map((slugValue, i) => <li key={i}>{slugValue}</li>)
                }
            </ul>
        )
    }

    return <h1>Docs for Home page.</h1>
}

export default Docs