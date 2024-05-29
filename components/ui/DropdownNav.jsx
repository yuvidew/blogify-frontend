import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, LayoutGrid } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { Button } from './button'
import { SignInUpBtn } from './SignInUpBtn'
import ModeToggle from './ModeToggle'


export const DropdownNav = () => {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger className=' outline-none'>
            <LayoutGrid />
        </DropdownMenuTrigger>
        <DropdownMenuContent className = "mr-5 mt-2 w-[10rem]">
            <DropdownMenuLabel>Links</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className=' lg:flex items-center justify-end gap-3 '>
                    <Link href={'/write'} >
                        <Button variant = "secondary" size = "sm" className = "w-full">
                            <Edit className='h-5 w-5 '/> {" "} <span className=' ml-2'>Write</span>
                        </Button>
                </Link>
                <SignInUpBtn className={"mt-2"} />
                <ModeToggle className={"mt-2"}/>
            </div>
        </DropdownMenuContent>
        </DropdownMenu>

    )
}
