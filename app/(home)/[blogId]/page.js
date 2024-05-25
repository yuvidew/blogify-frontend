import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { Content } from './_components/Content'
import { CreatorName } from './_components/CreatorName'

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
    console.log(data);

    return (
        <div className='mt-5'>
            {data ? 
            (
                <article className=' relative'>
                    <CreatorName userId={data.userId} />
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
