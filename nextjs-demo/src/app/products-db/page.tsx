import { getProducts } from '@/prisma-db';
import React from 'react'
import ProductsDetails from './product-details';

export type Product = {
    id: number;
    title: string | null;
    price: number;
    description: string | null;
}

export default async function ProductsDbPage() {
    const products: Product[] = await getProducts();

    return <ProductsDetails products={products} />
}
