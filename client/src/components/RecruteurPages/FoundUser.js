import React from 'react'

function FoundUser({user}) {
  return (
    <div className='bodyFound'>

<figure class="snip0045 red">
	<figcaption>
		<h2>{user.firstName} <span>{user.lastName}</span></h2>
		<h4>{user.email} </h4>
		<p>{user.skills}</p>
		<div class="icons">
			
		</div>	
	</figcaption>
	<img src={user.imageCand ? `images/${user.imageCand}`: "https://bootdey.com/img/Content/avatar/avatar7.png"} alt=""/>	
	<div class="position">{user.specialite}</div>
</figure>



    </div>
  )
}

export default FoundUser