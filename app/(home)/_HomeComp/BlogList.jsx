import React from 'react'
import { BlogCard } from './BlogCard'
import { Skeleton } from '@/components/ui/skeleton'
import { CategoryBtn } from './CategoryBtn'

export const BlogList = ({
    data,
    category,
    onSetCategory
}) => {
    return (
        <div>
            <div className=' border-b border-black dark:border-white pb-2 px-0.5 flex items-center justify-between'>
                <h3 className=' text-[1.3rem]'>Home</h3>
                <div className=' lg:hidden block'>
                    <CategoryBtn 
                        value={category}
                        onCategoryFilter = {onSetCategory}
                    />
                </div>
            </div>
            <div className=' mt-4'>
                {data.length != 0 
                ? (
                    data.map((ele) => (
                        <BlogCard 
                            key={ele._id} 
                            id = {ele._id}
                            title={ele.title}
                            userId={ele.userId}
                            content={ele.description}
                            category={ele.category}
                            like = {ele.like}
                            dislike = {ele.dislike}
                        />
                    ))
                ) : (
                    [1 ,2 ,3 ,4 ,5].map((ele) => (
                    <div key={ele} className=' mt-[2rem]'>
                        <Skeleton className={" h-[2rem] w-[10rem] mt-[3rem]"} />
                        <Skeleton className={" h-[2rem] w-full mt-4"} />
                        <Skeleton className={" h-[2rem] w-[4rem] mt-4"} />
                    </div>
                    ))
                )}
            </div>
        </div>
    )
}
