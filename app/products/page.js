import Link from 'next/link'
import React from 'react'

export default function Product(){
    return (
        <div>
            <h1 className='text-center text-[1.3rem] text-slate-300'>
                <Link href={'/'} >
                Product Page
                </Link>
            </h1>
            <p className=' w-[60%] m-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, facilis autem eum earum atque sed dolores iusto accusamus ducimus neque eveniet laborum possimus ut amet quo, minus soluta nemo? Cupiditate.</p>
        </div>
    )
}
