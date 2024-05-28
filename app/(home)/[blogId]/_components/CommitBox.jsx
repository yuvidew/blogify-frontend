'use client'

import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { SendHorizontal, User } from 'lucide-react'
import React, { useState } from 'react'


const getCommit = async (id) => {
    const res = await axios.get(`https://blogify-server-j4lx.onrender.com/api/get/blog/commit/${id}`)
    return res.data
}

export const CommitBox = ({
    id
}) => {
    const addCommit = async (commit ) => {
        const res = await axios.post(`https://blogify-server-j4lx.onrender.com/api/post/blog/commit/${id}` , commit)
        return res.data
    }
    const {mutate} = useMutation({
        mutationFn : addCommit
    })
    const {data , isLoading } = useQuery({
        queryKey : ["commit"],
        queryFn : () => getCommit(id)
    })
    
    const [commit , setCommit] = useState('')
    const user = JSON.parse(localStorage.getItem('blogify_user'))
    const onSubmit = () => {
        let obj = {
            email : user.email,
            name : user.name,
            text : commit
        }
        mutate(obj , id)
    }


    return (
        <section className=' pb-10'>
        <h1 className=' mt-3 text-[1.2rem]'>Enter your Commit</h1>
            <div className=' flex items-center gap-4 mt-2 lg:w-[50%]'>
                <Input 
                    placeholder = "Add a commit.." 
                    className = "bg-slate-50 rounded-full placeholder:text-stone-700 text-stone-900"
                    value = {commit}
                    onChange = {(e) => setCommit(e.target.value)} 
                />
                <SendHorizontal onClick={onSubmit} className=' cursor-pointer text-stone-400'  />
            </div>
            {!isLoading  ? (
                <ul className=' bg-stone-800 px-4 py-3 rounded-md mt-5'>
                    {data.map((ele  , index) => (
                        <li key={index} className=' mb-3 border-b border-b-stone-700 py-8'>
                            <div className=' flex items-start gap-4'>
                                <div>
                                    <User className='p-2 rounded-full bg-stone-400 text-stone-900 w-[3rem] h-[3rem]' />
                                </div>
                                <div>
                                    <p className=' text-stone-500'>{ele.name}</p>
                                    <p className=' text-[1.1rem]'>{ele.text}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <Skeleton className={'h-[4rem] w-full'} />
            )}
        </section>
    )
}
