"use client"
import React, { useEffect, useState } from 'react'
import { CreateBlogBtn } from './CreateBlogBtn'
import { BlogCard } from './BlogCard'
import axios from 'axios'

export const Section = () => {
    const [data , setData] = useState(null)

    const fetchData = async (url) => {
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setData(null)
        }
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('blogify_user'))
        fetchData(`http://localhost:2000/api/get/blogs/${userId._id}`)
    }, [])

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            <CreateBlogBtn/>
            {data != null && data.map(ele => (
                <BlogCard key={ele._id} title = {ele.title} category={ele.category} />
            ))}
        </div>
    )
}
