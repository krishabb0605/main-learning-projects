import { auth, currentUser } from "@clerk/nextjs/server"

export default async function DashboardPage() {
    // It's only use in server component
    const authObj = await auth();
    const userObj = await currentUser();
    console.log({ authObj, userObj })

    return <h1>Dashboard</h1>

}