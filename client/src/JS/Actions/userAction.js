import { FAIL, GET_CURRENT, LOADING, LOGIN, LOGOUT, REGISTER } from "../actionTypes"
import axios from 'axios'

//Register Candidat
export const register =(newUser, navigate)=>async(dispatch)=>{
     dispatch({type:LOADING})
try {
    const res = await axios.post('/api/authUser/register',newUser)
    
    dispatch({type:REGISTER, payload:res.data})
    navigate('/ProfilCand')
} catch (error) {
    dispatch({type:FAIL, payload:error.response.data})
}
}
//Login candidat
export const login =(user, navigate)=>async(dispatch)=>{
    
dispatch({type:LOADING})
try {
    const res = await axios.post('/api/authUser/login',user)
    dispatch({type:LOGIN, payload: res.data})
    
    navigate('/')
} catch (error) {
    dispatch({type:FAIL, payload:error.response.data})
}
} 
//get_current
export const getCurrent =()=>async(dispatch)=>{
const config={
    headers:{
        authorization:localStorage.getItem('token')
    }
}
try {
    const res = await axios.get('/api/authUser/current',config)
    console.log(res.data)

    dispatch({type:GET_CURRENT, payload: res.data})
} catch (error) {
    dispatch({type:FAIL})
}
} 
//logout
export const logout =()=>({type:LOGOUT});

//Edit Profil
export const editProfilUser =(user)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.put('/api/accountUser/updateAccountCand',user,config)
        console.log(res.data)    
        dispatch(getCurrent())
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 

//Edit Photo Profil
export const editPhotoUser =(user)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.put('/api/accountUser/updatePhotoCand',user,config)
        console.log(res.data)    
        dispatch(getCurrent())
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 

    //Edit Password User
    export const editPasswordUser =( updatedPass)=>async(dispatch)=>{
        const config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        try {
            const res = await axios.put('/api/accountUser/updatePasswordCand',updatedPass,config)
            console.log(res.data)    
            dispatch(getCurrent())
        } catch (error) {
            dispatch({type:FAIL})
        }
        } 