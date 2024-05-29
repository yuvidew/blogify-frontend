"use client"

import React, { useEffect, useState } from 'react'
import { BlogList } from './BlogList'
import { CategoryBtn } from './CategoryBtn'
import { TopBlog } from './TopBlog'
import { useRouter, useSearchParams } from 'next/navigation'
import { useFetch } from '@/hook/useFetch'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const Section = () => {
    const router = useRouter()
    const searchQuery = useSearchParams()
    const category = searchQuery.get("category")
    const [data , setData] = useState([])

    const fetchData = async (url) => {
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setData([])
        }
    }
    
    const onSetCategory = (query) => {
        const newQuery = new URLSearchParams(searchQuery.toString());
        newQuery.set("category" , query)
        router.push(`?${newQuery.toString()}`)
    }

    useEffect(() => {
        if(category){
            fetchData(`https://blogify-server-j4lx.onrender.com/api/get/blogs/?category=${category}`)
        }else{
            fetchData(`https://blogify-server-j4lx.onrender.com/api/get/blogs`)

        }
    } , [category])

    

    return (
        <div className="flex items-start gap-x-3 mt-5">
            <div className="lg:w-[65%] w-full">
                <BlogList 
                    data = {data}
                    category={category}
                    onSetCategory={onSetCategory}
                />
            </div>
            <div className='lg:w-[35%] lg:block hidden'>
                <CategoryBtn 
                    value={category}
                    onCategoryFilter = {onSetCategory}
                />
                <TopBlog/>
            </div>
        </div>
    )
}
