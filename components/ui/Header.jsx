import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"
import logoDark from "@/public/logo-dark.png"
import Link from 'next/link'
import ModeToggle from '@/components/ui/ModeToggle'
import { Search } from '../../app/(home)/_HomeComp/Search'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'
import { SignInUpBtn } from '@/components/ui/SignInUpBtn'
import { SMSearchBar } from '@/components/ui/SMSearchBar'

export const Header = () => {
    return (
        <header className=' container w-[100%]'>
            <main className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-5'>
                <Link href={'/'} >
                    <div className='h-[5rem]  flex items-center justify-start'>
                        <Image 
                            src={logo} 
                            className=' w-[3rem] h-[3rem] object-contain dark:hidden' 
                            alt='logo'
                        />
                        <Image 
                            src={logoDark} 
                            className=' w-[3rem] h-[3rem] object-contain hidden dark:block' 
                            alt='logo'
                        />
                    </div>
                </Link>
                    <div className='h-[5rem] flex items-center justify-start'>
                        <div className='lg:block md:hidden hidden'>
                            <Search/>
                        </div>
                        <div className='lg:hidden md:block block'>
                            <SMSearchBar/>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-end gap-3'>
                    <Link href={'/write'} >
                        <Button variant = "secondary" >
                            <Edit className='h-5 w-5 '/> {" "} <span className='lg:block md:hidden hidden ml-2'>Write</span>
                        </Button>
                    </Link>
                    <SignInUpBtn/>
                    <ModeToggle/>
                </div>
            </main>
        </header>
    )
}
