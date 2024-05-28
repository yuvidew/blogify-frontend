import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import React from 'react'
import { Content } from './_components/Content'
import { CreatorName } from './_components/CreatorName'
import { LikeBtn } from './_components/LikeBtn'
import { CommitBox } from './_components/CommitBox'

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
                    <CreatorName userId={data.userId} />
                    <div className=' flex justify-between'>
                        <h1 className='text-[2.4rem] font-medium  '>{data.title}</h1>
                        <LikeBtn id = {params.blogId} />
                    </div>
                    <div className=' mt-3'>
                        <Content content={data.description} />
                    </div>
                    <div className=' border-t mt-4'>
                        <CommitBox id = {params.blogId} />
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
