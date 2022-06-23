import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCandidature } from '../../JS/Actions/CandidatureActions';
import { DeleteJob } from '../../JS/Actions/OffreActions';

function MyJobCard({job}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { id } = useParams()
  return (
    <div className='bdCard'>
      
      
    <div className="courses-container">
  <div className="course">
      
      <div class="course-info">
      <button className='BtnCardDelete'onClick={()=>{dispatch(DeleteJob(job._id));navigate('/MyJobs')}}>Delete Job</button>

          <h6>Opening Date : {job.dateOuverture}</h6>          
          <h5 style={{marginTop:"15px"}}><h6>Offre</h6>{job.offreName}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Description</h6>{job.offreDescription}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Categorie</h6>{job.offreCategorie}</h5>
          <h5 style={{marginTop:"15px"}}><h6>Nbre Posts</h6>{job.nombrePostes}</h5>
          <h6>Opening Date : {job.dateFermeture}</h6>
          
          <div className='twiceBtn'>
          <button className="btnCardEdit"><Link to={`/MyJobs/EditJob/${job._id}`} style={{textDecoration:'none',color:'#fff'}}>Edit Job</Link></button>
          <button className="btnCard"><Link to={`/MyJobs/ListCandidates/${job._id}`} style={{textDecoration:'none',color:'#fff'}}  onClick={()=>dispatch(getCandidature(job._id))}>List of Candidates</Link></button>
          </div>
           </div>
  </div>
</div>






      
    
    
  </div>
  )
}

export default MyJobCard