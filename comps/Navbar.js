import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <h1>HP list</h1>
        </div>
        <a><Link href='/'>HOME</Link></a>
        <a><Link href='/About'>About</Link></a>
        <a><Link href='/hoangphuc/Test'>All Listing</Link></a>
    </nav>
  )
}

export default Navbar