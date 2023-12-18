"use client"
import React from 'react'
import { fetchLocationData } from '@/lib/fetch'
import { LocationCard } from '../../components/LocationCard/page';
import { useSearchParams } from 'next/navigation';
import Paginations from '@/components/Paginations/page';
const Locations = async () => {

    const params = useSearchParams();
    const page = params.get("page") || "1";

    const { info, data } = await fetchLocationData(page);
    // console.log(data, info);


    return (
        <main >


            <div className='flex justify-center flex-wrap box w-full'>
                {data.length > 0 && data.map((item) => (<LocationCard item={item} key={item.id} />))}

            </div>
            <div>
                <Paginations info={info} current={page} />
            </div>
        </main>
    )
}


export default Locations