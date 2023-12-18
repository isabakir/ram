import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SearchBar } from '../SearchBar/SearchBar'

export const Sidebar = () => {
  return (
    <nav className='flex p-2 items-center justify-center'>

      <div className='flex  justify-center md:w-full'>
        <Link href="/">
          <Image src="/Rick_and_Morty.svg" width={170} height={120} alt="RickandMorty" />
        </Link>

      </div>



    </nav>
  )
}
