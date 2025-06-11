"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

// route /about

// OnClick `go home` router push home path and it navigate to home page.

// Using replace we can't go back to about page
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About us.</h1>
      <button onClick={() => router.replace("/")} className='bg-blue-500 text-white rounded-md'>
        Go Home
      </button>
    </div>
  )
}

export default About