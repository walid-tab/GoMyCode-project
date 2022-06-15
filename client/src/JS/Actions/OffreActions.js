import axios from 'axios'
import { GET_JOBS } from '../actionTypes'

export const getJobs=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/api/allJobs/jobs")
        dispatch({type:GET_JOBS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}