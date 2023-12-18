import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
type character = {
    id: number;
    name: string;
    species: string;
    image: string;
    status: string;
    location: {
        name: string;
    }
}

const OtherItems = ({ characterUrl, status, currentId }: { characterUrl: string, status: string, currentId: number }) => {
    const [data, setData] = useState<character>();

    useEffect(() => {
        axios.get(characterUrl).then(res => {

            if (res.data.status.toLowerCase() == status.toLowerCase() && currentId != res.data.id) {
                setData(res.data);
            }
        })
    }, [characterUrl]);
    return (
        <>
            {data ? (
                <Link href={`${data.id}`} className="flex w-full mb-2">
                    <Image src={data?.image} width={80} height={80} alt={data?.name} />


                    <div className='flex flex-column  '>
                        <p className='text-main1 m-2'>Name:{data?.name}</p>
                        <p className='text-main2 m-2'>Status:{data?.status}</p>
                        <p className='text-main2 m-2'>Species:{data?.location.name}</p>

                    </div>
                </Link>
            ) : null}

        </>
    )
}

export default OtherItems