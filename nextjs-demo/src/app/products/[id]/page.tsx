import React from 'react'

// route /products/:id
const Product = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    return (
        <div>Product id {id}</div>
    )
}

export default Product