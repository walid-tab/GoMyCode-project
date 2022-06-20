import axios from 'axios'
import { GET_JOBS, MY_JOBS } from '../actionTypes'

export const getJobs=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/api/allJobs/jobs")
        dispatch({type:GET_JOBS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const myJobs=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        const res=await axios.get("/api/accountRec/myJobs",config)
        dispatch({type:MY_JOBS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}