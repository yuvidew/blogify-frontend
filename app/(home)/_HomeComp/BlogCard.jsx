

import React, { useEffect} from 'react'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { CircleUserRound } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { useFetch } from '@/hook/useFetch'
import Link from 'next/link'



export const BlogCard = ({
    title , 
    userId , 
    category,
    id
}) => {

    const [data , fetchData] = useFetch("")

    useEffect(() => {
        fetchData(`https://blogify-server-j4lx.onrender.com/api/get/user/${userId}`)
    } , [userId])

    return (
        <Link href={`/${id}`}>
            <Card className = "dark:bg-transparent  rounded-none ">
                <CardHeader className = "px-0">
                    <div className=' flex items-center gap-2 text-stone-400'>
                        <CircleUserRound className='p-0.5 w-[1.5rem] h-[1.5rem] rounded-full bg-stone-200 text-black' />
                        <h5>{data.name}</h5>
                        <p>@ date</p>
                    </div>
                </CardHeader>
                <CardContent className = "px-0 ">
                    <h1 className='text-[2rem] font-medium  ' >{title}</h1>
                    <Badge variant="secondary" className={" capitalize mt-3"}>{category}</Badge>

                    {/* <div
                        dangerouslySetInnerHTML = {{__html : text}}
                    >
                    </div> */}
                </CardContent>
            </Card>
        </Link>
    )
}

