'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { useFetch } from '@/hook/useFetch'
import { CircleUserRound } from 'lucide-react'
import React, { useEffect } from 'react'

export const CreatorName = ({userId}) => {
    const [data , fetchData] = useFetch()

    useEffect(() => {
        fetchData(`https://blogify-server-j4lx.onrender.com/api/get/user/${userId}`)
    } , [userId])

    return (
        <div>
            <div className=' flex items-center gap-2 text-stone-400'>
                <CircleUserRound className='p-0.5 w-[1.5rem] h-[1.5rem] rounded-full bg-stone-200 text-black' />
            {data ? (
                <h5>{data.name}</h5>
            ) : (
                <Skeleton className={"h-[2rem] w-32"}></Skeleton>
            )}
                <p>@ date</p>
            </div>
        </div>
    )
}
