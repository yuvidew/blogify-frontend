import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleUserRound } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { useCreateBlockNote } from '@blocknote/react'



export const BlogCard = ({
    title , 
    userId , 
    content,
    category
}) => {

    const [text , setDes] = useState("")
    
    const editor = useCreateBlockNote({
        initialContent: [{
            id: "f42e30b0-7d98-4fe8-bac8-6a5dc24a9fbc",
            type: "paragraph",
            props: {
                textColor: "default",
                backgroundColor: "default",
                textAlignment: "left"
            },
            content: [],
            children: []
        }],
    });

    const onMarkDown = async () => {
        console.log("object");
        const markdown = await editor.blocksToHTMLLossy(JSON.parse(content));
        setDes(markdown);
        console.log(markdown);
    }

    useEffect(() => {
        onMarkDown()
    } , [content])

    return (
        <Card className = "dark:bg-transparent  rounded-none">
            <CardHeader className = "px-0">
                <div className=' flex items-center gap-2 text-stone-400'>
                    <CircleUserRound className='p-0.5 w-[1.5rem] h-[1.5rem] rounded-full bg-stone-200 text-black' />
                    <h5>creator name</h5>
                    <p>@ date</p>
                </div>
            </CardHeader>
            <CardContent className = "px-0 ">
                <h1 className='text-[2rem] font-medium  ' >{title}</h1>
                <Badge variant="secondary" className={" capitalize mt-3"}>{category}</Badge>

                {/* <div
                    dangerouslySetInnerHTML = {{__html : text}}
                >
                </div> */}
            </CardContent>
        </Card>
    )
}
