
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OtherItems from './OthersItem/page'

const Others = ({ locationUrl, status, currentId }: { locationUrl: string, status: string, currentId: number }) => {

    const [locationData, setLocationData] = useState([]);

    useEffect(() => {
        axios.get(locationUrl).then(res => {

            setLocationData(res.data.residents);


        })
    }, [locationUrl, status]);
    return (
        <div className='md:w-full p-4 ml-15'>
            <h4 className='text-main2 mb-3 ' style={{ textAlign: 'center' }}>Other</h4>
            <div style={{ maxHeight: 400, overflowY: 'auto', marginLeft: 5, padding: 5 }}>
                {
                    locationData ? locationData.map((item) =>
                        <OtherItems characterUrl={item} status={status} currentId={currentId} key={item} />
                    ) : null
                }
            </div>


        </div>
    )
}

export default Others