import React from 'react'
import NavLinks from './NavLinks'
import NavSearch from './NavSearch'

export default function NavBar() {
    console.log("Navbar rendered");

    return (
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    )
}
