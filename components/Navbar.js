import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='h-28 bg-purple-700 flex justify-between items-center text-white'>
        <Link href="/"><div className='logo font-bold text-lg ml-2'>Bitlinks</div></Link>
        <ul className='flex justify-center gap-4 items-center'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-1 cursor-pointer'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-1 mr-2 cursor-pointer'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}