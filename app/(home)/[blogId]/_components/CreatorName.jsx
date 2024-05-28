'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { useFetch } from '@/hook/useFetch'
import { useQuery } from '@tanstack/react-query'
import { CircleUserRound } from 'lucide-react'
import React from 'react'

export const CreatorName = ({userId}) => {
    const {fetchData} = useFetch()
    const {data , isLoading} = useQuery({
        queryKey : ['user' , userId],
        queryFn : () => fetchData(`https://blogify-server-j4lx.onrender.com/api/get/user/${userId}`)
    })


    return (
        <div>
            <div className=' flex items-center gap-2 text-stone-400'>
                <CircleUserRound className='p-0.5 w-[1.5rem] h-[1.5rem] rounded-full bg-stone-200 text-black' />
            {!isLoading ? (
                <h5>{data.name}</h5>
            ) : (
                <Skeleton className={"h-[2rem] w-32"}></Skeleton>
            )}
                <p>@ date</p>
            </div>
        </div>
    )
}
