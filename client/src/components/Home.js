import React from 'react'

function Home() {
  return (
    <div className='bodySearch'> 
      <div className='welcome'>Find Your Job</div>
      <div class="button_box2">
          <form class="form-wrapper-2 cf">
          <input type="text" placeholder="Search here..." required/>
          <button type="submit">Search</button>
          </form>
          </div>      
    </div>
  )
}

export default Home