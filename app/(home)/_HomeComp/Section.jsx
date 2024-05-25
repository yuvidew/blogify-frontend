"use client"

import React, { useEffect } from 'react'
import { BlogList } from './BlogList'
import { CategoryBtn } from './CategoryBtn'
import { TopBlog } from './TopBlog'
import { useRouter, useSearchParams } from 'next/navigation'
import { useFetch } from '@/hook/useFetch'

export const Section = () => {
    const router = useRouter()
    const searchQuery = useSearchParams()
    const category = searchQuery.get("category")
    const [data , fetchData] = useFetch()

    const onSetCategory = (query) => {
        const newQuery = new URLSearchParams(searchQuery.toString());
        newQuery.set("category" , query)

        router.push(`?${newQuery.toString()}`)
    }

    useEffect(() => {
        fetchData(`https://blogify-server-j4lx.onrender.com/api/get/blogs`)
    } , [])


    return (
        <div className="flex items-start gap-x-3 mt-5">
            <div className="w-[65%]">
                <BlogList 
                    data = {data}
                />
            </div>
            <div className='w-[35%]'>
                <CategoryBtn 
                    onCategoryFilter = {onSetCategory}
                />
                <TopBlog/>
            </div>
        </div>
    )
}
