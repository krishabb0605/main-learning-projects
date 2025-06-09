"use client"

import { addProducts } from '@/prisma-db';
import { redirect } from 'next/navigation';
import React, { useActionState } from 'react'
import Submit from '../components/Submit';

type Errors = {
    title?: string;
    price?: string;
    description?: string;
}

type FormState = {
    error: Errors;
}

export default function AddProductPage() {
    const initialState: FormState = {
        error: {},
    }

    const [state, formAction, isPending] = useActionState(
        createProduct,
        initialState
    );

    async function createProduct(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;

        const errors: Errors = {};

        if (!title) {
            errors.title = "Title is required";
        }
        if (!price) {
            errors.price = "Price is required";
        }
        if (!description) {
            errors.description = "Description is required";
        }
        if (Object.keys(errors).length > 0) {
            return { errors };
        }

        await addProducts(title, parseInt(price), description);
        redirect("/products-db");
    }

    return (
        <form action={formAction} className='p-4 space-y-4 max-w-96'>
            <div>

                <label className='text-white'>
                    Title:
                    <input
                        type="text"
                        name="title"
                        className='block w-full p-2 text-black border rounded bg-white'
                    />
                </label>
                {state.errors?.title &&
                    <p className='text-red-500'>{state.errors.title}</p>
                }
            </div>

            <div>

                <label className='text-white'>
                    Price:
                    <input
                        type="number"
                        name="price"
                        className='block w-full p-2 text-black border rounded bg-white'
                    />
                </label>
                {state.errors?.price &&
                    <p className='text-red-500'>{state.errors.price}</p>
                }
            </div>

            <div>

                <label className='text-white'>
                    Description:
                    <textarea
                        name="description"
                        className='block w-full p-2 text-black border rounded bg-white'
                    />
                </label>
                {state.errors?.description &&
                    <p className='text-red-500'>{state.errors.description}</p>
                }
            </div>

            {/* <Submit /> */}

            <button
                type='submit'
                className='mt-2 block w-full text-white bg-blue-500 rounded disabled:bg-gray-500 cursor-pointer'
                disabled={isPending}
            >
                Add Product
            </button>
        </form>
    )
}
