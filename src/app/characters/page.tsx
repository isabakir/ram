"use client"
import React, { useEffect, useState } from 'react'


import { useSearchParams } from 'next/navigation';
import Paginations from '@/components/Paginations/page';
import CharacterCart from '@/components/CharacterCard/page';
import axios from 'axios';
import StatusFilterItem from '@/components/StatusFilterItem/page';

type character = {
    id: number;
    name: string;
    image: string;
    type: string;
    gender: string;
    species: string;
    status: string;
    url: string;
    origin: {
        name: string;
    };


}

const Characters = () => {
    const [data, setData] = useState([]);
    const [info, setInfo] = useState();
    const params = useSearchParams();
    const page = params.get("page") || "1";
    const searching = params?.get("q") || "";


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
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then(res => {
            setData(res.data.results);
            setInfo(res.data.info);

        })


    }, [page, searching])




    return (
        <main >
            <div className='flex  justify-center align-center '>
                {statusSearch.map((item) => <StatusFilterItem item={item} key={item.status} selected={item.search === searching ? true : false} />)}
            </div>

            <div className='flex justify-center flex-wrap box w-full'>
                {data.length > 0 && data.map((item: character) => (searching ? (searching == item.status.toLowerCase() ? <CharacterCart characterUrl={item.url} key={item.id} search={searching} /> : null) : <CharacterCart characterUrl={item.url} key={item.id} search={searching} />))}

            </div>
            <div>
                <Paginations info={info} current={page} />
            </div>
        </main>
    )
}


export default Characters