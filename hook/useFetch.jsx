import axios from 'axios'
import { useState } from 'react'

export const useFetch = () => {
    const [data , setData] = useState([])
    const [isTrue , setIsTrue] = useState(true)

    const fetchData = async (url) => {
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            return(null)
        }
    }

    const addDescription = async (url , data) => {
        try{
            const res  = await axios.patch(url , {
                description : data,
                date : new Date()
            })
            if(res.status == 200){
                setIsTrue(false)
            }
            return res.status
        }catch(err){
            setIsTrue(true)
            return null
        }finally{
            setIsTrue(false)
        }
    }

    return [data , fetchData , addDescription , isTrue]
}
