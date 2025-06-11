import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

const seedProducts = async () => {
    const count = await prisma.product.count();
    if (count === 0) {
        await prisma.product.createMany({
            data: [
                { title: "Product1", price: 700, description: "Description 1" },
                { title: "Product2", price: 800, description: "Description 2" },
                { title: "Product3", price: 900, description: "Description 3" }
            ],
        });
    }
};

// Run seed if needed.
seedProducts();

export async function getProducts(query?: string) {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (query) {
        return await prisma.product.findMany({
            where: {
                OR: [
                    { title: { contains: query } },
                    { description: { contains: query } },
                ]
            }
        });
    }

    return prisma.product.findMany();
}

export async function getProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.product.findUnique({
        where: { id },
    });
}

export async function addProducts(
    title: string,
    price: number,
    description: string
) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.product.create({
        data: { title, price, description },
    });
}

export async function updateProducts(
    id: number,
    title: string,
    price: number,
    description: string
) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.product.update({
        where: { id },
        data: { title, price, description },
    });
}

export async function deleteProducts(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.product.delete({
        where: { id }
    });
}
