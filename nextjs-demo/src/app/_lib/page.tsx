import React from 'react'

// Using underScore(_lib) on the start of the folder it became private folders you can't see all pages that are under this folder
// You can't navigate to this route
// Used for keeping your UI logic seperate from the route.
const PrivateRoute = () => {
    return (
        <div>You can not view this in the browser</div>
    )
}

export default PrivateRoute