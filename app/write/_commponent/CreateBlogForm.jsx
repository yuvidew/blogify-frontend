"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { SnackbarProvider } from 'notistack'
import { useCreateBlog } from '@/hook/useCreateBlog'


export const CreateBlogForm = () => {
    const [createBlog] = useCreateBlog()
    const [title , setTitle] = useState("")
    const [category , setCategory] = useState('')

    
    const handleSubmit = () => {
        let blogInfo = {
            title : title,
            category : category,
            id : JSON.parse(localStorage.getItem("blogify_user"))._id
        }
        createBlog('https://blogify-server-j4lx.onrender.com/api/post/createBlog' , blogInfo)
    }

    return (
        <SnackbarProvider maxSnack={3}  autoHideDuration={3000} style={{
            fontSize : '1rem'
        }}>
            <div>
                <h1>Add the title & category of your blog </h1>
                <form action="" className=' mt-6' onSubmit={ (e) => {
                    e.preventDefault();
                    handleSubmit()
                }}>
                    <Input 
                        placeholder = "Enter blog title.." 
                        className = "placeholder:text-stone-200"
                        onChange = {(e) => setTitle(e.target.value)}
                        value = {title}
                    />

                    <Select className = "mt-3" name='category' onValueChange={(e) => setCategory(e)} value={category}>
                        <SelectTrigger  className="w-full mt-3">
                            <SelectValue 
                            
                                placeholder="Select blog category.."  
                                className = "placeholder:text-stone-200"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="programming">Programming</SelectItem>
                            <SelectItem value="hollywood">Hollywood</SelectItem>
                            <SelectItem value="film making">Film making</SelectItem>
                            <SelectItem value="social media">Social media</SelectItem>
                            <SelectItem value="cooking">Cooking</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button size = "sm" className = "mt-3">
                        Submit
                    </Button>
                </form>
            </div>
        </SnackbarProvider>
    )
}
