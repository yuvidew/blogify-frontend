import { Button } from '@/components/ui/button'
import { SlidersHorizontal } from 'lucide-react'
import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export const CategoryBtn = ({
  onCategoryFilter,
  value
}) => {
  const btn = [
    "Programming",
    "Hollywood",
    "Film making",
    "Social media",
    "Cooking",
    "Technology",
    "Business",
    "Travel"
  ]
    return (
      <section>
        <div className='lg:block md:hidden hidden'>
          <h1>Stories from all interests</h1>
          <div className=' mt-5'>
            {btn.map((ele) => (
              <Button 
                key={ele}
                variant = {value == ele.toLocaleLowerCase() ? "default" : "secondary"}
                onClick = {() => onCategoryFilter(ele.toLowerCase())}
                className = "text-[#1f1f1f] mr-2 my-2"
              >
                {ele}
              </Button>
            ))}
          </div>
        </div>
        <div className='lg:hidden block'>
        <Sheet>
        <SheetTrigger>
          <Button variant = "secondary" size = "sm" >
            Filter <SlidersHorizontal className=' w-4 h-4 ml-3' />
          </Button>
        </SheetTrigger>
        <SheetContent className = "dark:bg-stone-900">
          <SheetHeader>
            <SheetTitle>Stories from all interests</SheetTitle>
            <SheetDescription>
              {btn.map((ele) => (
                <Button 
                  key={ele}
                  variant = {value == ele.toLocaleLowerCase() ? "default" : "secondary"}
                  onClick = {() => onCategoryFilter(ele.toLowerCase())}
                  className = "text-[#1f1f1f] mr-2 my-2"
                >
                  {ele}
                </Button>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

        </div>
      </section>
    )
}

