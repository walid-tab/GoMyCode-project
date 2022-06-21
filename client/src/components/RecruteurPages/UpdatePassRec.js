import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editPasswordRec } from '../../JS/Actions/recAction'
function UpdatePassRec() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Recruteur = useSelector((state)=>state.authUserReducer.Recruteur)
  const [password,setPassword]=useState("")
  useEffect(() => {
    Recruteur && setPassword(Recruteur.setPassword)
    
   }, [Recruteur])
  return (
    <div className='Pass'>
    <div class="center">
<h1>Change Password</h1>
<form>

<div class="inputbox">
  <input type="text" required="required" onChange={(e)=>setPassword(e.target.value)} value={password}/>
  <span>Password</span>
</div>
<div class="inputbox">
  <input type="button" value="submit" onClick={()=>{dispatch(editPasswordRec({password}));navigate('/ProfilRec')}}/>
</div>
</form>
</div>
</div>
  )
}

export default UpdatePassRec