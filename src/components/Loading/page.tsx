import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (

        <div className="flex flex-wrap justify-center  w-full ">
            <Skeleton count={8} containerClassName="flex flex-wrap w-full justify-center items-center" className=' min-h-15 p-2 m-2 w1-4' borderRadius={"1rem"} style={{}} />
        </div>

    )
}

export default Loading