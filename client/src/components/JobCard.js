import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({job}) {
  return (
    <div className='bdCard'>
      
      
      <div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Recruiter</h6>
			<h2>{job.recruteurName}</h2>
			
		</div>
		<div class="course-info">
			
			<h6>Job</h6>
			<h2>{job.offreName}</h2>
      
			<button class="btnCard"><Link to={`/Jobs/${job._id}`} style={{textDecoration:'none',color:'#fff'}}>View more</Link></button>
		</div>
	</div>
</div>




  

        
      
      
    </div>

  )
}

export default JobCard