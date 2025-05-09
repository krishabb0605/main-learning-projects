"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

// route /about

// OnClick `go home` router push home path and it navigate to home page.
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About us.</h1>
      <button onClick={() => router.push("/")} className='bg-blue-500 text-white rounded-md'>
        Go Home
      </button>
    </div>
  )
}

export default About