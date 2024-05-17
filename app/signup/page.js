"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import sign from "@/public/signUp.png"
import signDark from "@/public/signUp-dark.png"
import { RectangleEllipsis, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function signUp(){
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({
            ...formData,
            [name] : value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <div className=' flex items-center h-[60vh] justify-center text-stone-900 dark:text-stone-50'>
            <form className="w-[25rem]" onSubmit={handleSubmit}>
                <div className=' flex items-center justify-center gap-3'>
                    <h2 className=' text-[1.3rem]'>Sign Up</h2>
                    <Image 
                        src={sign} 
                        className=' w-[1.5rem] h-[1.5rem] object-contain dark:hidden' 
                    />
                    <Image 
                        src={signDark} 
                        className=' w-[1.5rem] h-[1.5rem] object-contain hidden dark:block' 
                    />
                </div>
                <div className='flex items-center pb-[.3rem] gap-2 mt-[2rem] border-bottom border-b-[.1rem] dark:border-stone-100 border-stone-900 '>
                    <User/>
                    <Input 
                        placeholder = "Enter email.." 
                        className = "bg-transparent border-none"
                        name =  "email"
                        onChange = {handleChange}
                        value = {formData.email} 
                    />
                </div>
                <div className='flex items-center pb-[.3rem] gap-2 mt-[1.5rem] border-bottom border-b-[.1rem] dark:border-stone-100 border-stone-900 '>
                    <RectangleEllipsis />
                    <Input 
                        type = "password"
                        placeholder = "Enter password.." 
                        className = "bg-transparent border-none" 
                        name = "password"
                        onChange = {handleChange}
                        value = {formData.password}
                    />
                </div>
                <Button 
                    variant = "black"
                    className = "bg-stone-900  hover:bg-stone-100 dark:text-stone-900 w-full mt-[1rem]"
                >
                    Sign in
                </Button>
            </form>
        </div>
    )
}
