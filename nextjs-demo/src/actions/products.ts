"use server";

import { addProducts, deleteProducts, updateProducts } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
    title?: string;
    price?: string;
    description?: string;
}

export type FormState = {
    errors: Errors;
}

export async function createProduct(prevState: FormState, formData: FormData) {
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

export async function editProduct(
    id: number,
    prevState: FormState,
    formData: FormData
) {
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

    await updateProducts(id, title, parseInt(price), description);
    redirect("/products-db");
}

export async function removeProduct(id: number) {
    await deleteProducts(id);
    // Re fetch the data after delete
    revalidatePath("/products-db");
}