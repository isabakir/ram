"use client"
import CharacterCart from '@/components/CharacterCard/page';
import Loading from '@/components/Loading/page';
import StatusFilterItem from '@/components/StatusFilterItem/page';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';



const LocationDetail = ({ params }: { params: { id: number } }) => {
    const searchParams = useSearchParams();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const locationId = params.id;
    const searching = searchParams?.get("q");
    const statusSearch = [
        {
            status: "All",
            search: ''
        },
        {
            status: "Alive",
            search: "alive"
        },
        {
            status: "Dead",
            search: "dead",
        },
        {
            status: "Unknown",
            search: "unknown"
        },

    ];
    //  console.log(searching);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://rickandmortyapi.com/api/location/${locationId}`).then((res) => {

            setData(res.data.residents);
            setIsLoading(false);
        })
    }, [locationId, searching])
    return (
        <>
            <div className='flex  justify-center align-center '>
                {statusSearch.map((item) => <StatusFilterItem item={item} key={item.status} selected={item.search === searching ? true : false} />)}
            </div>
            <div className='flex flex-wrap items-center justify-center min-h-15'>


                {isLoading ? (<Loading />) : data.map((item) => <CharacterCart characterUrl={item} key={item} search={searching} />)}
            </div>
        </>
    )
}
export default LocationDetail
