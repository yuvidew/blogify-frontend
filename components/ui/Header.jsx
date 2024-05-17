import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"
import logoDark from "@/public/logo-dark.png"
import Link from 'next/link'
import ModeToggle from '@/components/ui/ModeToggle'
import { Search } from '../../app/(home)/_HomeComp/Search'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'

export const Header = () => {
    return (
        <header className=' container w-[100%]'>
            <main className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-5'>
                    <div className='h-[5rem]  flex items-center justify-start'>
                        <Image 
                            src={logo} 
                            className=' w-[3rem] h-[3rem] object-contain dark:hidden' 
                        />
                        <Image 
                            src={logoDark} 
                            className=' w-[3rem] h-[3rem] object-contain hidden dark:block' 
                        />
                    </div>
                    <div className='h-[5rem] flex items-center justify-start'>
                        <Search/>
                    </div>
                </div>
                <div className=' flex items-center justify-end gap-3'>
                    <Link href={'/write'} >
                        <Button variant = "secondary" >
                            <Edit className='h-5 w-5 mr-2'/> {" "} Write
                        </Button>
                    </Link>
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
                    <ModeToggle/>
                </div>
            </main>
        </header>
    )
}
