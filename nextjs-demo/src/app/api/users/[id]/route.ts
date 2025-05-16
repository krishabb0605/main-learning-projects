

// Need to file name route.js

import { users } from "@/constant";

// Here get request will be get: /users
// export async function GET(request: Request, { params }: { params: { id: string } }) {
//     const { id } = await params;
//     const user = users.find((user) => user.id === parseInt(id))
//     return Response.json(user)
// }

export async function GET() {
    return Response.json(users)
}