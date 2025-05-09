export const users = [
    {
        id: 1, name: "john doe"
    },
    {
        id: 2,
        name: 'jane doe'
    }
];

// Need to file name route.js
// Here get request will be get: /users
export async function GET() {
    return Response.json(users)
}

export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        name: user.name,
    }
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}