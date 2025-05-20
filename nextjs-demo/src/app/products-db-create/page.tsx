import { addProducts } from '@/prisma-db';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function AddProductPage() {
    async function CreateProduct(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;

        await addProducts(title, parseInt(price), description);
        redirect("/products-db");
    }

    return (
        <form action={CreateProduct} className='p-4 space-y-4 max-w-96'>
            <label className='text-white'>
                Title:
                <input
                    type="text"
                    name="title"
                    className='block w-full p-2 text-black border rounded bg-white'
                />
            </label>

            <label className='text-white'>
                Price:
                <input
                    type="number"
                    name="price"
                    className='block w-full p-2 text-black border rounded bg-white'
                />
            </label>

            <label className='text-white'>
                Description:
                <textarea
                    name="description"
                    className='block w-full p-2 text-black border rounded bg-white'
                />
            </label>

            <button
                type='submit'
                className='mt-2 block w-full text-white bg-blue-500 rounded disabled:bg-gray-500 cursor-pointer'
            >
                Add Product
            </button>
        </form>
    )
}
