import React from 'react'
import {
    Card,
} from "@/components/ui/card"
import { Plus } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CreateBlogForm } from './CreateBlogForm'



export const CreateBlogBtn = () => {
    return (
        <Dialog>
        <DialogTrigger>
            <Card className = "dark:bg-stone-100 h-[20rem] bg-slate-200 shadow-xl text-stone-900">
                <div className='h-full flex items-center justify-center flex-col gap-2'>
                    <Plus 
                        className=' text-stone-700 w-24 h-24 font-medium bg-stone-300 rounded-full cursor-pointer' 
                    />
                    <h3 className=' text-[1.3rem] mt-4'>Write new blog</h3>
                    <p className=' text-center w-[80%] text-stone-700'>
                        share your thoughts & knowledge to every one
                    </p>
                </div>
            </Card>
        </DialogTrigger>
        <DialogContent className = " ">
            <CreateBlogForm/>
        </DialogContent>
        </Dialog>

    )
}
