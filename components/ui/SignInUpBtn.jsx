"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { LogOut, User } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const SignInUpBtn = ({
    className ,
}) => {
    const [isUser , setInUser] = useState(null)
    useEffect(() => {
        let data = localStorage.getItem("blogify_user_token")
        setInUser(data);
    } , [])

    const onRemove = () => {
        localStorage.removeItem("blogify_user_token")
        window.location.reload()
    }

    return (
        <div className={className}>
        {isUser ? (
                <DropdownMenu>
                <DropdownMenuTrigger className='w-full'>
                    <Link href={'/'} className='w-full'>
                    <Button 
                        variant = "default" 
                        size = "sm"
                        className ="w-full"
                    >
                        <User className='h-5 w-5' />
                    </Button>
                </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className = "w-[15rem] mt-3">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                        <DropdownMenuItem className = "w-full hover:bg-transparent">
                            <Button variant = "default" className ="w-full" onClick = {onRemove}>
                                Logout <LogOut className='w-4 h-5 ml-2' />
                            </Button>
                        </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

        ) : (
            <>
                <Link href={'/signin'}>
                    <Button 
                        variant = "black"
                        size = "sm" 
                        className = "w-full"
                    >
                        Sign In
                    </Button>
                </Link>
                <Link href={'/signup'}>
                    <Button 
                        variant = "white" 
                        size = "sm" 
                        className = "w-full"
                    >
                        Sign Up
                    </Button>
                </Link>
            </>
        )}
        </div>
    )
}
