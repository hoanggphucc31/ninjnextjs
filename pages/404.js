import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function NotFound() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
  return (
    <div className='not-found'>
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <a><Link href='/'>Homepage</Link></a></p>
    </div>
  )
}

export default NotFound