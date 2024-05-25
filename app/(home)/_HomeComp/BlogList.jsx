import { CircleUserRound, User } from 'lucide-react'
import React from 'react'
import { BlogCard } from './BlogCard'

export const BlogList = (
    {data}
) => {
    return (
        <div>
            <div className=' border-b border-black dark:border-white pb-2 px-0.5'>
                <h3 className=' text-[1.3rem]'>Home</h3>
            </div>
            <div className=' mt-4'>
                {data.length != 0 
                ? (
                    data.map((ele) => (
                        <BlogCard 
                            key={ele._id} 
                            title={ele.title}
                            userId={ele.userId}
                            content={ele.description}
                            category={ele.category}
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}
