import { Header } from '@/components/ui/Header'
import React from 'react'

export default function BlogIdLayout ({children}) {
    return (
        <div className=' pb-4'>
            <div>
                <Header/>
            </div>
            <div className=' container'>
                {children}
            </div>
        </div>
    )
}
