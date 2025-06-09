"use client"

import React, { useActionState } from 'react'
import { createProduct, FormState } from '@/actions/products';

export default function AddProductPage() {
    const initialState: FormState = {
        error: {},
    }

    const [state, formAction, isPending] = useActionState(
        createProduct,
        initialState
    );

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
