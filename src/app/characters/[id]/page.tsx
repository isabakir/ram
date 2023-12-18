"use client"
import CharacterCart from '@/components/CharacterCard/page';
import Loading from '@/components/Loading/page';
import Others from '@/components/Others/page';
import StatusFilterItem from '@/components/StatusFilterItem/page';

import axios from 'axios';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type character = {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    type: string;
    gender: string;
    origin: { name: string; }
    location: {
        url: string;
    }
}


const CharacterDetail = ({ params }: { params: { id: number } }) => {
    const searchParams = useSearchParams();

    const [data, setData] = useState<character>();
    const [isLoading, setIsLoading] = useState(true);
    //console.log(searchParams.get("q"));

    const characterId = params.id;



    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`).then((res) => {

            setData(res.data);

            setIsLoading(false);
        })
    }, [characterId])
    return (
        <>
            {data ? (
                <div className='flex  flex-wrap justify-center  p-4 min-h-15'>

                    <div className='flex   justify-center flex-column p-4'>
                        <h2 className='text-main2 mb-3' style={{ textAlign: 'center' }}>{data?.name}</h2>
                        <Image src={data?.image} width={300} height={300} alt={data?.name} />
                        <div className={`${data.status == 'Alive' ? "bg-alive" : ""} ${data.status == 'Dead' ? "bg-dead" : ""} h-44 mt-2 flex justify-center items-center text-black`} style={{ width: 300 }}> <h4>{data.status}</h4></div>
                        <div className='flex flex-column  '>

                            <p className='text-main1 m-2'>Species:{data?.species}</p>
                            <p className='text-main1 m-2'>Type:{data?.type}</p>
                            <p className='text-main1 m-2'>Gender:{data?.gender}</p>
                            <p className='text-main1 m-2'>Origin:{data?.origin.name}</p>
                        </div>
                    </div>
                    <Others locationUrl={data.location.url} status={data.status} currentId={data.id} />


                </div>
            ) : ""}

        </>
    )
}
export default CharacterDetail
