import React from 'react'
import Link from 'next/link';
import style from './locationCard.module.css';
interface Props {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];

}

export const LocationCard = ({ item }: { item: Props }) => {
    //console.log(item);
    return (
        <>
            <Link href={`/locations/${item.id}`} className="  w1-4  md:w-full  flex">
                <div className=" w-full  flex flex-column items-start justify-start border p-2 m-2 min-h-15 rounded-xl bg-default  ">
                    <div className='p-4 w-full'>
                        <div className='p-4 flex flex-wrap justify-between border-b w-full min-h-3'>
                            <span> Name:</span>
                            <div className='w1-2'>
                                <b>{item.name}</b>
                            </div>
                        </div>
                        <div className='p-4 flex  flex-wrap justify-between border-b w-full min-h-3'>
                            <span> Type: </span>
                            <div className='w1-2'>
                                <b>{item.type}</b>
                            </div>
                        </div>
                        <div className='p-4 flex  flex-wrap justify-between  border-b w-full min-h-3'>
                            <span> Dimension: </span>
                            <div className='w1-2'>
                                <b>{item.dimension}</b>
                            </div>
                        </div>
                        <div className='p-4 flex  flex-wrap justify-between  border-b w-full min-h-3'>
                            <span> Resident Count: </span>
                            <div className='w1-2'>
                                <b>{item.residents.length}</b>
                            </div>
                        </div>
                    </div>


                </div>
            </Link>
        </>
    )
}
