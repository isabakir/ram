"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from '../../../node_modules/next/link';
import Image from '../../../node_modules/next/image';
import Loading from '../Loading/page';
import Skeleton from 'react-loading-skeleton';
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/redux/hooks';
import { favAction } from '@/redux/favSlice';
type character = {
    id: number;
    name: string;
    image: string;
    type: string;
    gender: string;
    species: string;
    status: string;
    origin: {
        name: string;
    };


}


type StatusMap = {
    [key: string]: React.ReactNode;

}

const CharacterCart = ({ characterUrl, search }: { characterUrl: string, search: string | null }) => {
    const [character, setCharacter] = useState<character | undefined>();
    const favorite = useSelector((state: any) => state.favorite.fav);
    const dispatch = useAppDispatch();



    const status: StatusMap = {
        'Alive': <div className='w-10 h-10 bg-alive m-2 rounded-full'></div>,
        'Dead': <div className='w-10 h-10 bg-dead m-2 rounded-full'></div>,
        'unknown': <div className='w-10 h-10 bg-gray m-2  rounded-full'></div>
    }


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get<character>(characterUrl);


                if (search) {

                    if (response.data.status.toLowerCase() !== search.toLowerCase()) return;
                }
                setCharacter(response.data);

            } catch (error) {
                console.error('Error fetching character data:', error);
            }
        };

        fetchData();

    }, [characterUrl])

    return (
        <>
            {character ? (



                <div className="flex w1-4 md:w-full   box  p-2 m-2 min-h-15 rounded-xl bg-default  relative ">
                    <div className='absolute t-5 r-5 w-25 h-25 index-999'>
                        <IconContext.Provider value={{ color: favorite.includes(character.id) ? 'red' : "white" }}>
                            <FaHeart onClick={() => dispatch(favAction(character.id))} size={25} />
                        </IconContext.Provider>
                    </div>
                    <Link href={`/characters/${character.id}`} className="  w-full   flex text-white box   ">
                        <div className='p-4 w-full'>
                            <div className='w-full min-h-4 relative flex items-start justify-between border-b border-color-main2'>
                                <div style={{
                                    width
                                        : '100px'
                                }}>
                                    {character ? (<Image src={character.image} width={100} height={100} alt={character.name} />) : (<Skeleton width={100} height={100} />)}


                                </div>
                                <div className='w-full p-2 ml-15' >

                                    <div className='flex items-center'>
                                        <b className='w1-2'>Gender :</b> <b className='m-2 w1-2'>  {character?.gender}</b>
                                    </div>
                                    <div className='flex items-center'>
                                        <b className='w1-2'>Type :</b> <b className='m-2 w1-2'>  {character?.type ? character.type : "No Type"}</b>
                                    </div>
                                    <div className='flex items-center'>
                                        <b className='w1-2'> Status  :</b> <b className='m-2 w1-2 flex items-center '>    {character?.status} {character ? status[character.status] : ""}</b>
                                    </div>
                                </div>
                            </div>
                            <div className='p-4 flex flex-wrap justify-between border-b w-full min-h-3'>
                                <span> Name:</span>
                                <div className='w1-2'>
                                    <b>{character?.name}</b>
                                </div>
                            </div>
                            <div className='p-4 flex  flex-wrap justify-between border-b w-full min-h-3'>
                                <span> Species: </span>
                                <div className='w1-2'>
                                    <b>{character?.species}</b>
                                </div>
                            </div>
                            <div className='p-4 flex  flex-wrap justify-between  border-b w-full min-h-3'>
                                <span> Origin: </span>
                                <div className='w1-2'>

                                    <b>{character?.origin.name}</b>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

            ) : null}
        </>

    )
}

export default CharacterCart