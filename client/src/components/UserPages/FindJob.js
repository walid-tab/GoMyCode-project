import React from 'react'
import { Link } from 'react-router-dom'

function FindJob({jobs}) {
  return (
    <div className='bdCard'>
      
      
      <div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Recruiter</h6>
			<h2>{jobs.recruteurId.recruteurName}</h2>
			
		</div>
		<div class="course-info">
			
			<h6>Job : {jobs.dateOuverture}</h6>
			
			<h3 style={{marginTop:"15px"}}>{jobs.offreName}</h3>
      
			<button class="btnCard">
        
        <Link to={`/Jobs/Details/${jobs._id}`} style={{textDecoration:'none',color:'#fff'}}>
          View more
        </Link></button>
		</div>
	</div>
</div>

    </div>
  )
}

export default FindJob