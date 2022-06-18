import axios from 'axios'
import { FAIL, GET_CURRENT_REC, LOADING, LOGIN_REC, LOGOUT, REGISTER_REC } from '../actionTypes'

//Register Recruiter
export const registerRec =(newRec, navigate)=>async(dispatch)=>{
     
     dispatch({type:LOADING})
try {
    const res = await axios.post('/api/authRec/registerRec',newRec)
    console.log(res.data)
    dispatch({type:REGISTER_REC, payload:res.data})
    navigate('/ProfilRec')
} catch (error) {
    dispatch({type:FAIL, payload:error.response.data})
}
}
//Login Recruiter
export const loginRec =(Recruteur, navigate)=>async(dispatch)=>{
dispatch({type:LOADING})
try {
    const res = await axios.post('/api/authRec/loginRec',Recruteur)
    dispatch({type:LOGIN_REC, payload: res.data})
    navigate('/MyListJobs')
} catch (error) {
    dispatch({type:FAIL, payload:error.response.data})
}
} 
//get_current
export const getCurrentRec =()=>async(dispatch)=>{
const config={
    headers:{
        authorization:localStorage.getItem('token')
    }
}
try {
    const res = await axios.get('/api/authRec/currentRec',config)
    console.log(res.data)

    dispatch({type:GET_CURRENT_REC, payload: res.data})
} catch (error) {
    dispatch({type:FAIL})
}
} 
//logout
export const logout =()=>({type:LOGOUT});