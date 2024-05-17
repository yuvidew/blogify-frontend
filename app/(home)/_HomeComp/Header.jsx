import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"
import logoDark from "@/public/logo-dark.png"
import Link from 'next/link'

export const Header = () => {
    return (
        <header className=' container w-[100%]'>
            <main className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
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
                    
                </div>
                <div className=' flex items-center justify-end gap-3'>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/products'}>Product</Link>
                </div>
            </main>
        </header>
    )
}
