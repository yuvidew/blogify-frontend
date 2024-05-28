'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

const queryClient = new QueryClient({
    defaultOptions : {
        queries : {
            staleTime : 10000
        }
        }
    })
export const QueryProvider = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
