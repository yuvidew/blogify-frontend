import axios from "axios"
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

export const useAuthentication = () => {
    const router = useRouter()
    const onAuth = async (url ,  data ) => {
        try {
            const res = await axios.post(url, data)
            if(res.status == 200 && res.data.msg){
                enqueueSnackbar(res.data.msg , {variant : "success"})
                router.push("/singin")
            }else if(res.status == 404){
                enqueueSnackbar(res.data.msg , {variant : "error"})
            }else if(res.status == 400){
                enqueueSnackbar(res.data.msg , {variant : "warning"})
            }else if(res.status == 201){
                enqueueSnackbar(res.data.msg , {variant : "success"})
                localStorage.setItem("blogify_user_token" , res.data.auth)
                localStorage.setItem("blogify_user" , JSON.stringify(res.data.user))
                router.push("/")
            }else if(res.status == 401){
                enqueueSnackbar(res.data.msg , {variant : "error"})
            }
        } catch (error) {
            await enqueueSnackbar("Failed to create account" , {variant : "error"})
        }
    }
    return [onAuth]
}
