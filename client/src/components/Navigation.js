import React from 'react'
import { Link } from 'react-router-dom'
import { getJobs } from '../JS/Actions/OffreActions'
import { useDispatch } from 'react-redux'

function Navigation() {
	const dispatch = useDispatch()

  return (
    <div className='navgation'>
     <div className="hero">
		<nav>
			<h2 className="logo">Find<span className="logo2">Job</span></h2>
			<ul>
				<li><Link  className='titreNav'to='/'>Home</Link></li>
				<li><Link  className='titreNav'to='/Jobs' onClick={()=>dispatch(getJobs())}>Jobs</Link></li>
				<li><div className='titreNav'>Campanies</div></li>
				
				<li><Link className='titreNav' to='/Contact'>Contact Us</Link></li>
			</ul>
			<Link className="btn" to='/AccountUser'>Account User</Link>
            <Link className="btn" to='/AccountRec'>Account Recruiter</Link>
        </nav>

		
	</div>
    </div>
  )
}

export default Navigation