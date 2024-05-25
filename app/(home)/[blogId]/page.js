import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { Content } from './_components/Content'

const fetchData = async (id) => {
    try {
        const res = await axios.get(`https://blogify-server-j4lx.onrender.com/api/get/blog/${id}`)
        if(res.status == 200){
            return res.data
        }else{
            return null
        }
    } catch (error) {
        return null
    }
}

export default async function BlogPage({params}){
    const data = await fetchData(params.blogId)


    return (
        <div className='mt-5'>
            {data ? 
            (
                <article className=' relative'>
                    <div className=' flex items-center gap-2 text-stone-400'>
                        <CircleUserRound className='p-0.5 w-[1.5rem] h-[1.5rem] rounded-full bg-stone-200 text-black' />
                        <h5>Creator Name</h5>
                        <p>@ date</p>
                    </div>
                    <h1 className='text-[2.4rem] font-medium  '>{data.title}</h1>
                    <div className=' mt-3'>
                        <Content content={data.description} />
                    </div>
                </article>
            ) 
            : 
            (
                <div>
                    <Skeleton className={'h-[3rem]'}></Skeleton>
                </div>
            )}
        </div>
    )
}
