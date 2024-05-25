"use client"
import { Editor } from '@/components/ui/Editor'
import Spinner from '@/components/ui/Spinner';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useFetch } from '@/hook/useFetch';
import { FolderCheck } from 'lucide-react';
import { useEffect } from 'react';

export default function BlogIdPage({params}){
    const [data , fetchData , addDescription , isTrue] = useFetch()
    useEffect(() => {
        fetchData(`https://blogify-server-j4lx.onrender.com/api/get/blog/${params.blogId}`)
    }, [])

    const onChange = (description) => {
        addDescription(`https://blogify-server-j4lx.onrender.com/api/patch/blog/${params.blogId}`,  description);
    }

    console.log(data);


    return (
        <div className=' container mt-7'>
            <section className='lg:w-[70%] m-auto relative' >   
                <Button
                    className = " absolute right-0"
                    size = "sm"
                >
                    {isTrue ? <Spinner size={"lg"} /> : <FolderCheck  />}
                </Button>
                {data.length !=0 ? (
                    <article className=''>
                        <div className='mb-5'>
                            <h1 className='text-[2rem]'>{data.title}</h1>
                            <Button 
                                variant = "secondary" 
                                size = "sm"
                                className = "mt-2"
                            >
                                {data.category}
                            </Button>
                        </div>
                        <div className='mb-5'>
                            <Editor 
                                onChange={onChange}
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
