import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='h-28 bg-purple-700 flex justify-between items-center text-white'>
        <div className='logo font-bold text-lg ml-2'>Bitlinks</div>
        <ul className='flex justify-center gap-4 items-center'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/generate"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                
            <Link href="/generate"><button className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-1'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-1 mr-2'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}
