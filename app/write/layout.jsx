import { Header } from '@/components/ui/Header'
import React from 'react'

const writeLayout = ({children}) => {
    return (
        <div className='pb-4'>
            <div>
                <Header/>
            </div>
            {children}
        </div>
    )
}

export default writeLayout
