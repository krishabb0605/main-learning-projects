import "server-only"
// This package validate only used for server side rendering.

export default function serverSideFunction() {
    console.log(
        `
        use multiple libraries,
        use environmental varibales,
        interact with database,
        process confidential information,
        `
    )
    return "server Side result"
}
