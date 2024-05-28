"use client"
import { Button } from '@/components/ui/button'
import { useFetch } from '@/hook/useFetch'
import { useMutation } from '@tanstack/react-query'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { SnackbarProvider } from 'notistack'
import React from 'react'

export const LikeBtn = ({
    id
}) => {

    const {addOpinion} = useFetch()

    const {mutate} = useMutation({
        mutationFn :  (text) => addOpinion(`https://blogify-server-j4lx.onrender.com/api/post/blog/opinion/${id}` , text)
    })
    return (
        <SnackbarProvider maxSnack={3}  autoHideDuration={3000} style={{
            fontSize : '1rem'
        }}>

            <div className=' flex items-center justify-end gap-5'>
                <Button 
                    size = "sm" 
                    onClick = {() => mutate('+1')}
                >
                    <ThumbsUp/>
                </Button>

                <Button 
                    size = "sm" 
                    onClick = {() => mutate('-1')}
                >
                    <ThumbsDown/>
                </Button>
            </div>
        </SnackbarProvider>
    )
}
