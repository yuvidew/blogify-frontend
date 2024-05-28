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


export const SignInUpBtn = () => {
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
        <div>
        {isUser ? (
            <Link href={'/'} >
                <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button 
                        variant = "default" 
                        size = "sm"
                    >
                        <User/>
                    </Button>
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

            </Link>
        ) : (
            <>
                <Link href={'/signin'}>
                    <Button 
                        variant = "black"
                        size = "sm" 
                    >
                        Sign In
                    </Button>
                </Link>
                <Link href={'/signup'}>
                    <Button 
                        variant = "white" 
                        size = "sm" 
                    >
                        Sign Up
                    </Button>
                </Link>
            </>
        )}
        </div>
    )
}
