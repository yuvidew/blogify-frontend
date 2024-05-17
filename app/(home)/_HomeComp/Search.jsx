"use client"
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Search = () => {
    const router = useRouter()
    const searchQuery= useSearchParams()
    const search = searchQuery.get("query")

    const onSetSearchQuery = (query) => {
        const newQuery = new URLSearchParams(searchQuery.toString());
        newQuery.set("query" , query)
        router.push(`?${newQuery.toString()}`)
    }

    return (
        <div className=' flex items-center bg-stone-200 dark:bg-stone-100 text-stone-900 justify-start gap-1 px-2 rounded-lg'>
            <SearchIcon 
                className=' w-4 h-4 text-stone-800'
            />
            <Input 
                className = " bg-transparent border-none placeholder:text-stone-900 w-[10rem]"
                placeholder = "Search here.."
                value = {search}
                onChange = {(e) => onSetSearchQuery(e.target.value)}
            />
        </div>
    )
}
