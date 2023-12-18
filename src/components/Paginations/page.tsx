import { useRouter } from 'next/navigation'
import React from 'react'
type info = {
    prev: string;
    next: string;
    pages: number;

}


const Paginations = ({ info, current }: { info: any, current: string }) => {
    const router = useRouter();
    const showPage = 5
    const starter = Math.max(1, parseInt(current) - Math.floor(showPage / 2));
    const ender = Math.min(starter + showPage - 1, info.pages);

    const pagesList = Array.from({ length: ender - starter + 1 }, (_, index) => starter + index);

    const changePage = (pageNumber: number) => {
        router.push(`?page=${pageNumber}`);
    }
    return (

        <div className='flex items-center justify-center'>

            {pagesList.map((pageNumber) => (
                <p key={pageNumber} className={`${pageNumber == parseInt(current) ? "border-b-main1" : ""} m-2 p-2 text-main1 pointer `} onClick={() => changePage(pageNumber)}> {pageNumber}</p>
            ))}
        </div>
    )
}

export default Paginations