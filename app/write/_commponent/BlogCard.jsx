import React from 'react'
import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import logo from "@/public/blog-icon.png"
import logoDark from "@/public/blog-icon-dark.png"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { EllipsisVertical, Trash } from 'lucide-react'
import axios from 'axios'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { useRouter } from 'next/navigation'



export const BlogCard = ({title , category , id}) => {
    const router = useRouter()
    const onDelete = async () => {
        try {
            const res = await axios.delete(`https://blogify-server-j4lx.onrender.com/api/delete/blogs/:${id}`)
            if(res.status == 201){
                enqueueSnackbar(res.data.msg , {variant : "success"})
                window.location.reload()
            }
        } catch (error) {
            enqueueSnackbar("Failed To delete this blog!" , {variant : "warning"})
            
        }
    }
    
    const onSwitch = () => {
        if(!localStorage.getItem("blogify_user_token")){
            enqueueSnackbar("Login or sign up then you create the blog" , {variant : "warning"})
        }else{
            router.push(`/write/${id}`)
        }
    } 

    return (
        <SnackbarProvider maxSnack={3}  autoHideDuration={3000} style={{
            fontSize : '1rem'
        }}>
            <Card className = "dark:bg-stone-100 cursor-pointer relative h-[20rem] bg-slate-200 shadow-xl text-stone-900">
                <div className=' absolute w-[100%] p-4 flex items-center justify-between'>
                    <Button 
                        variant = "secondary" 
                        size = "sm" 
                        className = "text-stone-700"
                    >
                        {category}
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className = " p-0 ">
                            <DropdownMenuItem 
                                onClick = {onDelete} 
                                className = "flex items-center cursor-pointer gap-2 p-3 hover:bg-stone-800"
                            >
                                <Trash className=' text-red-600 w-5 h-5' /> My Account
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div onClick={onSwitch} className=''>
                    <CardHeader className = "flex items-center justify-center h-[70%] mt-3">
                        <Image 
                            src={logoDark} 
                            className=' w-[5rem] h-[5rem] object-contain dark:hidden' 
                            alt='logo'
                        />
                        <Image 
                            src={logo} 
                            className=' w-[6rem] h-[6rem] object-contain hidden dark:block' 
                            alt='logo'
                        />
                    </CardHeader>
                    <CardFooter>
                        <h4 className=' text-[1.3rem] '>{title}</h4>
                    </CardFooter>
                </div>
            </Card>
        </SnackbarProvider>
    )
}
