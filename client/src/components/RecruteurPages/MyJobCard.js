import React from 'react'
import { Link } from 'react-router-dom'

function MyJobCard({job}) {
  return (
    <div className='bdCard'>
      
      
    <div className="courses-container">
  <div className="course">
      
      <div class="course-info">

          <h6>Opening Date : {job.dateOuverture}</h6>          
          <h5 style={{marginTop:"15px"}}><h6>Offre</h6>{job.offreName}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Description</h6>{job.offreDescription}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Categorie</h6>{job.offreCategorie}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Nbre Posts</h6>{job.nombrePostes}</h5>
          <h6>Opening Date : {job.dateFermeture}</h6>
          
          <div className='twiceBtn'>
          <button className="btnCardEdit"><Link to='/MyJobs/EditJob' style={{textDecoration:'none',color:'#fff'}}>Edit Job</Link></button>
          <button className="btnCard"><Link to='/MyJobs/ListCandidates' style={{textDecoration:'none',color:'#fff'}}>List of Candidates</Link></button>
          </div>
           </div>
  </div>
</div>






      
    
    
  </div>
  )
}

export default MyJobCard