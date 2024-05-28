import axios from 'axios'
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react'

export const useFetch = () => {
    const [data , setData] = useState([])
    const [isTrue , setIsTrue] = useState(true)

    const fetchData = async (url) => {
        try {
            const res = await axios.get(url)
            return res.data
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

    const addOpinion = async (url , data) => {
        try {
            const res = await axios.post(url , {
                opinion : data
            }) 

            if(res.status == 201 && data == +1){
                enqueueSnackbar("You like this blog" , {variant : "success"})
            }else if(data == -1){
                enqueueSnackbar("You dislike this blog" , {variant : "warning"})
            }
        } catch (error) {
            enqueueSnackbar("Failed to add opinion" , {variant : "warning"})
        }
    }

    const text = "hello"

    return {
        data , 
        fetchData , 
        addDescription , 
        isTrue , 
        addOpinion , 
        text
    }
}
