"use client"
import React, { useEffect, useState } from 'react'
import { CreateBlogBtn } from './CreateBlogBtn'
import { BlogCard } from './BlogCard'
import axios from 'axios'

export const Section = () => {
    const [data , setData] = useState([])

    const fetchData = async (url) => {
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setData([])
        }
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('blogify_user'))
        fetchData(`https://blogify-server-j4lx.onrender.com/api/get/blogs/${userId._id}`)
    }, [])

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            <CreateBlogBtn/>
            {data.length != 0 
            ? ( data.map(ele => (
                <BlogCard key={ele._id} title = {ele.title} category={ele.category} id = {ele._id} />
            )))
            : (
                <p>Loading...</p>
            )
            }
        </div>
    )
}
