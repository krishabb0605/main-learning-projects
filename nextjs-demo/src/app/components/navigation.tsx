"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


// usePathname only used in client component
const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav>
            <Link href="/" className={pathname === '/' ? 'font-bold mr-4' : 'mr-4 text-blue-500'}>
                Home
            </Link>
            <Link href="/about" className={pathname === '/about' ? 'font-bold mr-4' : 'mr-4 text-blue-500'}>
                About
            </Link>
            <Link href="/products/1" className={pathname.startsWith('/products/1') ? 'font-bold mr-4' : 'mr-4 text-blue-500'}>
                Product 1
            </Link>

            <SignedOut>
                <SignInButton mode='modal'>Sign In</SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}

export default Navigation