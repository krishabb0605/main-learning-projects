import { notFound } from 'next/navigation';
import React from 'react'


// route /products/:id
const Product = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    if (parseInt(id) > 1000) {
        notFound();
    }
    return (
        <div>Product id {id}</div>
    )
}

export default Product