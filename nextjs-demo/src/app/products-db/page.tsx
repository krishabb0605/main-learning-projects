import { getProducts } from '@/prisma-db';
import React from 'react'
import ProductsDetails from './product-details';

export type Product = {
    id: number;
    title: string | null;
    price: number;
    description: string | null;
}

export default async function ProductsDbPage({
    searchParams
}: { searchParams: Promise<{ query?: string }> }) {
    const { query } = await searchParams;
    const products: Product[] = await getProducts(query);

    return <ProductsDetails products={products} />
}
