import React from 'react'

function JobCard({job}) {
  return (
    <div >
      
      {/* <h4 className="card-title">{job.offreName}</h4> */}
      
<div class="blog_post">
  <div class="img_pod">
    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image"/>
  </div>
  <div class="container_copy">
    <h3>12 January 2019</h3>
    <h1>{job.offreName}</h1>
    <p>.</p>
    <a class="btn_primary"  target="_blank">Read More</a>
  </div>
  
</div>
      
        
      
      
    </div>
  
  
  


    
  )
}

export default JobCard