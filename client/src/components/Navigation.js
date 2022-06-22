import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getJobs, myJobs } from '../JS/Actions/OffreActions'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/Actions/userAction'
import { getListMsgs, getListOffers, getListRecs, getListUsers } from '../JS/Actions/AdminActions'

function Navigation() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const authUser= useSelector((state)=>state.authUserReducer.authUser)
	const authRec = useSelector((state)=>state.authRecReducer.authRec)
  const {user} = useSelector((state)=>state.authUserReducer)
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
    
 { authUser ||authRec ?
 <div className="nav-links">
   
    
    {authUser && (user.role==="user")&&
    <>
       <div><Link  className='titreNav'to='/'>Home</Link></div>
      <div><Link  className='titreNav'to='/Jobs' onClick={()=>dispatch(getJobs())}>Jobs</Link></div>
      <div><Link  className='titreNav'to='/ProfilCand'>My Profil</Link></div>
    </>
    }
       
       {/* {user.role==="admin" &&
    <>
      
      <div><Link  className='titreNav'to='/'>Home</Link></div>
      <div><Link  className='titreNav'to='/ProfilCand'>Admin </Link></div>
      <div><Link  className='titreNav'to='/ListUsers' onClick={()=>dispatch(getListUsers())}>Users </Link></div>
      <div><Link  className='titreNav'to='/ListRecruiters'onClick={()=>dispatch(getListRecs())}>Recruiters </Link></div>
      <div><Link  className='titreNav'to='/ListJobs' onClick={()=>dispatch(getListOffers())}>Offers </Link></div>
      <div><Link  className='titreNav'to='/ListMessages'onClick={()=>dispatch(getListMsgs())}>Messages </Link></div>
    </>
    } */}
  {authRec &&  
  <>
  <div><Link  className='titreNav'to='/HomeRec'>Home</Link></div>
  <div><Link  className='titreNav'to='/MyJobs' onClick={()=>dispatch(myJobs())} >My Jobs</Link></div>
  <div><Link  className='titreNav'to='/ProfilRec'>Profil</Link></div> 
  <div><Link  className='titreNav'to='/addJob'>Add Job</Link></div>
  </> 	
  }
  {

  }
  
	
  <div className=" btn-logout" onClick={()=>{dispatch(logout());navigate('/AccountUser')}}>Logout</div>
  
  
	</div>
   :
  <div className="nav-links">
  <div><Link  className='titreNav'to='/'>Home</Link></div>
  <div><Link  className='titreNav'to='/Jobs' onClick={()=>dispatch(getJobs())}>Jobs</Link></div>
  <div><Link  className='titreNav'to='/Contact'>Contact Us</Link></div>
  <div><Link className="btn" to='/AccountUser'>Account User</Link></div>
  <div><Link className="btn" to='/AccountRec'>Account Recruiter</Link></div>
  </div>
   
  }
  
</div>


    
  )
}

export default Navigation