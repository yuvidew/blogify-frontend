"use client"
import { Editor } from '@/components/ui/Editor'
import Spinner from '@/components/ui/Spinner';
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';

import { Skeleton } from '@/components/ui/skeleton';
import { useFetch } from '@/hook/useFetch';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FolderCheck } from 'lucide-react';

export default function BlogIdPage({params}){
    const {fetchData , addDescription } = useFetch();
    const {data , isLoading} = useQuery({
        queryKey : ["Blog" , params.blogId],
        queryFn : () => fetchData(`https://blogify-server-j4lx.onrender.com/api/get/blog/${params.blogId}`)
    })

    const {mutate , isPending } = useMutation({
        mutationFn : (description) => addDescription(`https://blogify-server-j4lx.onrender.com/api/patch/blog/${params.blogId}`,  description)
    })


    return (
        <div className=' container mt-7'>
            <section className='lg:w-[70%] m-auto relative' >   
                <Button
                    className = " absolute right-0 lg:block hidden"
                    size = "sm"
                >
                    {isPending ? <Spinner size={"lg"} /> : <FolderCheck  />}
                </Button>
                {!isLoading ? (
                    <article className=''>
                        <div className='mb-5'>
                            <h1 className='lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>{data.title}</h1>
                            <div className=' flex items-center'>
                                <Badge 
                                    variant = "secondary" 
                                    size = "sm"
                                    className = "mt-2"
                                >
                                    {data.category}
                                </Badge>
                                <Button
                                    className = "  lg:hidden block bg-transparent hover:bg-transparent text-white pt-1"
                                    size = "sm"
                                >
                                    {isPending ? <Spinner size={"lg"} /> : <FolderCheck  />}
                                </Button>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <Editor 
                                onChange={mutate}
                                initialContent={data.description}
                            />
                        </div>
                    </article>
                ) : (
                    <article className=' mt-3'>
                        <div className='mb-3'>
                            <Skeleton className={"h-[2rem] w-[70%]"} />
                            <Skeleton className={"h-[2.3rem] w-[8rem] mt-3"} />
                            <div className='mt-5'>
                                <Skeleton className={"h-[10rem] w-full"} />
                            </div>
                        </div>
                    </article>
                )}
            </section>
        </div>
    )
}
