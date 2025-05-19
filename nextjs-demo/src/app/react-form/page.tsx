"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function CreateProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/react-form/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    price,
                    description
                })
            });

            if (response.ok) {
                router.push("/products-db")
            }
        }
        catch (error) {
            console.error(error);
        } finally {

            setLoading(false)
        }

    }

    return (
        <form onSubmit={handleSubmit} className='p-4 space-y-4 max-w-96'>
            <label className='text-white'>
                Title:
                <input
                    type="text"
                    name="title"
                    className='block w-full p-2 text-black border rounded bg-white'
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <label className='text-white'>
                Price:
                <input
                    type="number"
                    name="price"
                    className='block w-full p-2 text-black border rounded bg-white'
                    onChange={(e) => setPrice(e.target.value)}
                />
            </label>

            <label className='text-white'>
                Description:
                <textarea
                    name="description"
                    className='block w-full p-2 text-black border rounded bg-white'
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>

            <button
                type='submit'
                className='mt-2 block w-full text-white bg-blue-500 rounded disabled:bg-gray-500 cursor-pointer'
                disabled={loading}
            >
                {loading ? 'Submiting...' : 'Submit'}
            </button>
        </form>
    )
}
