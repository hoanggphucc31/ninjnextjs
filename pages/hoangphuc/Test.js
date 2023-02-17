import React from 'react'
import Styles from '../../styles/Hoangphuc.module.css'
import Link from 'next/link';

export const getStaticProps = async() => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return { 
    props: { ninjas: data }
  }
}
function Test({ninjas}) {
  return (
    <div>
      <h1>All Hoang Phuc</h1>
      {ninjas.map((ninja) => (
        <Link href={'/hoangphuc/' + ninja.id } key={ninja.id}>
          <div className={Styles.single}>
            <h3>{ninja.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Test