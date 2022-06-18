import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function DetailsJob() {
  let navigate=useNavigate();
  const [loading, setLoading] = useState(true);
  return (
    <div><div>
        
    {
        loading? <div class="ring">Loading  <span></span></div>: 

        <section className='popup'>
            <div className="content">
                <h2  style={{display:'inline'}}>{job.offreName} 
                <div  style={{display:'inline'}}> ({ job.recruteurName } €)</div></h2>            
                <p className="rating">Post : {job.nombrePostes}</p>
                <div className="plot">
                    <img  src={job.image} alt="img-detail"  className="" />
                    <p>{job.offreDescription}</p>
                </div>
                <button className="back"  onClick={()=>navigate('/Jobs')}>Back</button>
            </div>
        </section>
    }
</div></div>
  )
}

export default DetailsJob