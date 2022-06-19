import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getJobs } from '../JS/Actions/OffreActions'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/Actions/userAction'

function Navigation() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const authUser= useSelector((state)=>state.authUserReducer.authUser)
	// const authRec = useSelector((state)=>state.authRecReducer.authRec)

  return (

	<div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      Find<span className="logo2">Job</span>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
    
 { authUser?
 (<div className="nav-links">
    <div><Link  className='titreNav'to='/'>Home</Link></div>
    <div><Link  className='titreNav'to='/Jobs' onClick={()=>dispatch(getJobs())}>Jobs</Link></div>
    <div><Link  className='titreNav'to='/ProfilCand'>Profil</Link></div>
	<div><Link  className='titreNav'to='/Contact'>Contact Us</Link></div>
	<div className=" btn-logout" onClick={()=>{dispatch(logout());navigate('/AccountUser')}}>Logout</div>	
  </div>)
  :
  (<div className="nav-links">
  <div><Link  className='titreNav'to='/'>Home</Link></div>
  <div><Link  className='titreNav'to='/Jobs' onClick={()=>dispatch(getJobs())}>Jobs</Link></div>
  <div><Link  className='titreNav'to='/Contact'>Contact Us</Link></div>
  <div><Link className="btn" to='/AccountUser'>Account User</Link></div>
  <div><Link className="btn" to='/AccountRec'>Account Recruiter</Link></div>
</div>)
   
  }
  
</div>


    
  )
}

export default Navigation