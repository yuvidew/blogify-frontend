'use client'
import { Editor } from '@/components/ui/Editor'

export default function BlogIdPage({params}){
    // const Editor = useMemo(() => dynamic(() => import('@/components/ui/Editor')),{ssr : false} , [])
    return (
        <div className=' container'>
            page{params.blogId}
            <div className=' '>
            <Editor/>

            </div>
        </div>
    )
}
