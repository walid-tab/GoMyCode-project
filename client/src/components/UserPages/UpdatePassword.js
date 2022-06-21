import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editPasswordUser } from '../../JS/Actions/userAction'

function UpdatePassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.authUserReducer.user)
  const [password,setPassword]=useState("")
  useEffect(() => {
    user && setPassword(user.setPassword)
    
   }, [user])

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
      <input type="button" value="submit"  onClick={()=>{dispatch(editPasswordUser({password}));navigate('/ProfilCand')}}/>
    </div>
  </form>
</div>
    </div>
  )
}

export default UpdatePassword