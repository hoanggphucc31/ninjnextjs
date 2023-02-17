import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hoang Phuc List | HOME</title>
        <meta name="keywords" content="hoangphucs" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ispum haha</p>
        <a >
          <Link href='/hoangphuc/Test'className={styles.btn}>See HP List</Link> 
        </a>  
      </div>
    </>
  )
}

