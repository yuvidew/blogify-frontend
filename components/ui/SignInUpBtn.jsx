"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { User } from 'lucide-react'

export const SignInUpBtn = () => {
    const [isUser , setInUser] = useState(null)
    useEffect(() => {
        let data =  localStorage.getItem("blogify_user_token")
        setInUser(data);
    } , [])

    return (
        <div>
        {isUser ? (
            <Link href={'/'} >
                <User/>
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
