"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

type itemProps = {
    status: string;
    search: string;
}
const StatusFilterItem = ({ item, selected }: { item: itemProps, selected: boolean }) => {
    const router = useRouter();
    const params = useSearchParams();
    // console.log(item);

    const filterCharacter = () => {

        router.push(`?q=${item.search}${params.get("page") ? "&page=" + params.get("page") : ""}`);

    }
    return (
        <div className={`${selected ? "border-b-main1" : ""} text-main1 p-2 m-2 pointer `} onClick={() => filterCharacter()}>{item.status}</div>
    )
}

export default StatusFilterItem