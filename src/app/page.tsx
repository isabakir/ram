

import Link from 'next/link';


export default function Home() {






  return (
    <main >


      <div className='flex justify-center flex-wrap box w-full'>
        <Link href="/locations">
          <h3 className='text-main2 p-2 m-2'>Locations</h3>
        </Link>
        <Link href="/characters">  <h3 className='text-main2  p-2 m-2'>Characters</h3></Link>
        <Link href="/favorites"><h3 className='text-main2  p-2 m-2'> My Favorites</h3></Link>
      </div>
    </main>
  )
}
