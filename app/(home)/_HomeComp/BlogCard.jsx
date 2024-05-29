

import React, { useEffect} from 'react'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { CircleUserRound, ThumbsDown, ThumbsUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { useFetch } from '@/hook/useFetch'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@/components/ui/skeleton'

export const BlogCard = ({
    title , 
    userId , 
    category,
    id,
    like , 
    dislike
}) => {

    const {fetchData} = useFetch("")
    const {data , isLoading} = useQuery({
        queryKey : ['user for blog card' , userId],
        queryFn : () => fetchData(`https://blogify-server-j4lx.onrender.com/api/get/user/${userId}`)
    })


    return (
        <Link href={`/${id}`}>
            <Card className = "dark:bg-transparent  rounded-none ">
                <CardHeader className = "px-0">
                    <div className=' flex items-center justify-between'>
                        <div className=' flex items-center gap-2 text-stone-400'>
                            <CircleUserRound className='p-0.5 w-[1.5rem] h-[1.5rem] rounded-full bg-stone-200 text-black' />
                            {!isLoading ? (
                                <h5>{data.name}</h5>
                            ):(
                                <Skeleton className={'h-[2rem] w-[4rem]'} />
                            )}
                            <p>@ date</p>
                        </div>
                        <div className=' flex items-center justify-end gap-3'>
                            <h3 className='flex items-center gap-2 text-stone-400'><ThumbsUp/> {like}</h3>
                            <h3 className='flex items-center gap-2 text-stone-400 mr-5'><ThumbsDown/> {dislike}</h3>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className = "px-0 ">
                    <h1 className='lg:text-[2rem] md:text-[2rem] text-[1.5rem] font-medium  ' >{title}</h1>
                    <Badge variant="secondary" className={" capitalize mt-3"}>{category}</Badge>
                </CardContent>
            </Card>
        </Link>
    )
}

