import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
        <h2 className='text-3xl'>Welcome</h2>
        <Link href='/properties'>show properties</Link>
    </div>
  )
}

export default HomePage