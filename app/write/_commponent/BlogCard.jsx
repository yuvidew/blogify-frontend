import React from 'react'
import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import logo from "@/public/blog-icon.png"
import logoDark from "@/public/blog-icon-dark.png"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export const BlogCard = ({title , category}) => {
    return (
        <Link href={'/'}>
            <Card className = "dark:bg-stone-100 relative h-[20rem] bg-slate-200 shadow-xl text-stone-900">
                <Button 
                    variant = "secondary" 
                    size = "sm" 
                    className = "absolute text-stone-700 top-4 left-4"
                >
                    {category}
                </Button>
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
            </Card>
        </Link>
    )
}
