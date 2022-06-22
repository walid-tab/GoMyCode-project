import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteOneOffer } from '../../JS/Actions/AdminActions'

function JobCard({job}) {
  const dispatch = useDispatch()

  return (
    <div className='bdCard'>
      
      
    <div className="courses-container">
  <div className="course">
      
      <div class="course-info">
      <button className='BtnCardDelete'onClick={()=>{dispatch(deleteOneOffer(job._id))}}>Delete Job</button>

          <h6>Opening Date : {job.dateOuverture}</h6>          
          <h5 style={{marginTop:"15px"}}><h6>Offre</h6>{job.offreName}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Description</h6>{job.offreDescription}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Categorie</h6>{job.offreCategorie}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Nbre Posts</h6>{job.nombrePostes}</h5>
          <h6>Opening Date : {job.dateFermeture}</h6>
          
          <div className='twiceBtn'>
          
          
          </div>
           </div>
  </div>
</div>






      
    
    
  </div>
  )
}

export default JobCard