// "use client"
// You can't use metadata in client component.

import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react'

// In title show product page when we reach to  this route. 
// otherwise it shows `create next app`

// `metadata` and `generateMetadata` cannot be exported at the same time
// export const metadata: Metadata = {
//     title: "Product page.",
// };

export const metadata: Metadata = {
    title: {
        default: "Product page 123.",
        template: "%s - new app",
        absolute: "",
    },
};

export const dynamicParams = false;

/**
 * using `dynamicParams` as True => it will be dynamically render all page.
 * using `dynamicParams` as false => navigate to product/4 it show as page not found return 404
 * using this time stamp will stay as it is not every time it will change.
 * 
 */
export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }]
}

type Props = {
    params: Promise<{ id: string }>
}

// Using this it gives title as per id. strickly give name as `generateMetadata`
// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
//     const { id } = await params;
//     const title = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`iphone ${id}`)
//         }, 2000);
//     })
//     return {
//         title: `Product ${title}`,
//     };
// };

// route /products/:id
const Product = async ({ params }: Props) => {
    const { id } = await params;

    if (parseInt(id) > 1000) {
        // notFound();
        redirect("/")
    }
    return (
        <div>Product id {id} with time {new Date().toLocaleTimeString()}</div>
    )
}

export default Product;

// If you want to use client component and also want to use  metadata then 
// make 1 file with client component and
// another file with metadata. and import it in your file that with metadata file.