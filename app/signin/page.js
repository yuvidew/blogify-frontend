"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import sign from "@/public/sign.png"
import signDark from "@/public/sign-dark.png"
import { RectangleEllipsis, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuthentication } from '@/hook/useAuthentication'
import { SnackbarProvider } from 'notistack'
import { useMutation } from '@tanstack/react-query'
import Spinner from '@/components/ui/Spinner'

export default function SignIn(){
    const [onAuth] = useAuthentication();
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    })
    const {mutate , isPending} = useMutation({
        mutationFn : (formData) => onAuth("https://blogify-1edn.onrender.com/api/post/signin" , formData)
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
        mutate(formData)
    }

    return (
        <SnackbarProvider maxSnack={3}  autoHideDuration={3000} style={{
            fontSize : '1rem'
        }}>
            <div className=' flex items-center h-[60vh] justify-center text-stone-900 dark:text-stone-50'>
                <form className="w-[25rem]" onSubmit={handleSubmit}>
                    <div className=' flex items-center justify-center gap-3'>
                        <h2 className=' text-[1.3rem]'>Sign In</h2>
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
                        className = "bg-stone-900  hover:bg-stone-800 dark:text-stone-900 w-full mt-[1.5rem]"
                    >
                        {isPending  ? <Spinner/> : "Sign In"}
                    </Button>
                    <p className=' text-slate-500 mt-[1rem] flex items-center gap-2'>
                        All ready you have a account? 
                        <Link href={'/signup'} className=' underline text-blue-500 ' >Sign up</Link>
                    </p>
                </form>
            </div>
        </SnackbarProvider>
    )
}
