import React from 'react'
import { deleteOneUser } from '../../JS/Actions/AdminActions'
import { useDispatch } from 'react-redux'

function UserCard({user}) {
	const dispatch=useDispatch()
	return (
    <div className='BodyUser'>
      <div className="card-container">
	<span className="pro" onClick={()=>{dispatch(deleteOneUser(user._id))}}>Delete</span>
	{/* <img className="round" src={user.imageCand} alt="user" /> */}
	<img className="round" src={user&&user.imageCand ? `images/${user.imageCand}`: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"} alt="user"/>
	<h3>{user.firstName} {user.lastName}</h3>
	<h6>{user.role}</h6>
	
	
	<div className="skills">
		<h6>Email</h6>
		<ul>
			<li>{user.email}</li>			
		</ul>
	</div>
</div>

    </div>
  )
}

export default UserCard