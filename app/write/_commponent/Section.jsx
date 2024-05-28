"use client"
import React from 'react'
import { CreateBlogBtn } from './CreateBlogBtn'
import { BlogCard } from './BlogCard'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@/components/ui/skeleton'
import { useFetch } from '@/hook/useFetch'


export const Section = () => {
    const userId = JSON.parse(localStorage.getItem('blogify_user'))
    const {fetchData} = useFetch()
    const {data , isLoading} = useQuery({
        queryKey : [`blogs` , userId._id],
        queryFn : () => fetchData(`https://blogify-server-j4lx.onrender.com/api/get/blogs/${userId._id}`)
    })

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            <CreateBlogBtn/>
            {!isLoading 
            ? ( data.map(ele => (
                <BlogCard key={ele._id} title = {ele.title} category={ele.category} id = {ele._id} />
            )))
            : (
                [1 ,2 ,3 ,4 ,5].map((ele) => (
                    <Skeleton key={ele} className={'h-[20rem]'} />
                ))
            )
            }
        </div>
    )
}
