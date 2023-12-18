"use client"
import CharacterCart from '@/components/CharacterCard/page';
import { useAppSelector } from '@/redux/hooks'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const Favorites = () => {
    const favorite = useAppSelector(state => state.favorite.fav);

    return (
        <div className='flex flex-wrap  justify-center align-center '>
            {favorite.length ? favorite.map(item =>
                <CharacterCart characterUrl={`https://rickandmortyapi.com/api/character/${item}`} search={""} />
            ) : <div className=' flex flex-column justify-center'>
                <h3 className='text-black'>No Favorites</h3>
                <Link href="/" className='text-main2 flex  justify-center m-2 p-2'>Go Home</Link>
            </div>}


        </div>
    )
}

export default Favorites