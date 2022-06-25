import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteOneRec } from '../../JS/Actions/AdminActions'

function RecruiterCard({recruteur}) {
  const dispatch=useDispatch()
	return (
    <div className='BodyRec'>
      <div className="card-container">
	
	  <img className="roundRec" src={recruteur&&recruteur.imageRec ? `images/${recruteur.imageRec}`: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"} alt="user"/>
	<h3>{recruteur.recruteurName} </h3>
	<h6>{recruteur.adress}</h6>	
	<div className="skills">
		<h6>Email</h6>
		<ul>
			<li>{recruteur.email}</li>			
		</ul>
	</div>
	<span className="pro" onClick={()=>dispatch(deleteOneRec(recruteur._id))}>Delete</span>
</div>

    </div>
  )
}

export default RecruiterCard