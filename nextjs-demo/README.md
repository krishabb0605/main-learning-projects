This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Development Steps
**1. Initial Project Setup**

- Initialized the project using create-next-app.
- Set up the basic folder structure and configuration.

**2. Server and Client Components**

-  Learn concept of server and client components in Next.js.
- Created basic examples to demonstrate the differences and usage.

**3. Basic Routing in Next.js**

- Implemented foundational routing using the app directory.
- Created a few pages to test navigation.

**4. Layout Concepts**
- Applied shared layout using layout.tsx.
- Demonstrated persistent layout across different routes.

**5. Navigation Between Pages**
- Implemented navigation using next/link.
- Connected multiple pages with navigation links.

**6. Users API - GET and POST**
- Created GET and POST API routes under /api/user.
- Allowed client-side interaction with user data.

**7. Server and Client Data Fetching**
- Implemented data fetching on both server and client sides.
- Used Next.js features like fetch in server components.

**8. Mock API and User Functionality**
- Used [MockAPI](https://mockapi.io/) to simulate backend services.
- Developed UI to display and manage mock user data.

**9. Authentication via Clerk**
- Integrated [Clerk](https://mockapi.io/)  for user authentication.
- Secured routes and fetched user data post-authentication.

## Dependencies

[jsonplaceholder](https://jsonplaceholder.typicode.com/)- For dummy backend data.

[MockAPI](https://mockapi.io/) – For simulating backend APIs.
- Create a new project.
- Add a resource (e.g., users).
- Use the provided GET API endpoint.


[Clerk](https://mockapi.io/) –  For authentication.
- Sign up on Clerk and create an application.
- Choose your sign-in methods (e.g., email, github).
- Install required Clerk dependencies.
- Set up environment variables using Clerk’s signing secret.
- Update your middleware to use Clerk authentication

Prisma

npx prisma init --datasource-provider sqlite

Add product model and run migration using
npx prisma migrate dev --name init
