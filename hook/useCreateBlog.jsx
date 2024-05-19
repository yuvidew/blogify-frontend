import axios from 'axios'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'

export const useCreateBlog = () => {
    const router = useRouter()
    const createBlog = async (url , data) => {
        try {
            const res = await axios.post(url , data)

            if(res.status == 201){
                enqueueSnackbar(res.data.msg , {variant : "success"})
                router.push('/write')
                window.location.reload()
            }else if(res.status == 500){
                enqueueSnackbar(res.data.msg , {variant : "error"})
            }
        } catch (error) {
            enqueueSnackbar("Failed to create Blog" , {variant : "warning"})
        }
    }
    return [createBlog]
}
