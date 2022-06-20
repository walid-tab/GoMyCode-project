import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function DetailsJob() {
  let navigate=useNavigate();
//   const [loading, setLoading] = useState(true);
  const jobs = useSelector((state)=>state.OffreReducer.allJobs)
  const {id}=useParams()
 
  const job=jobs.find(job=>job._id==id)
  console.log(job)
  return (
    <div>
        


        <section className='popup'>
            <div className="content">
                <h2  style={{display:'inline'}}>  {job.offreName} 
                <div> Campanie :{ job.recruteurId.recruteurName } </div></h2>            
                <p className="rating">Number of Posts : {job.nombrePostes}</p>
                <div className="plot">                    
                  <p>Description: {job.offreDescription}</p>
                </div>
                <button className="back"  onClick={()=>navigate('/Jobs')}>Back</button>
            </div>
        </section>
    
</div>
  )
}

export default DetailsJob