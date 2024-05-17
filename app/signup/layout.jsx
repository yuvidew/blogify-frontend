import { Header } from '@/components/ui/Header'
import React from 'react'

const SignInLayout = ({children}) => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            {children}
        </div>
    )
}

export default SignInLayout
