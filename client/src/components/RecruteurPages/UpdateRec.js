import React from 'react'

function UpdateRec() {
  return (
    <div className='editUser'>
        <div class="centerP">
  <h1>Edit Profil</h1>
  <form>
    
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Campanie</span>
    </div> 
    
    <div class="inputbox">
      <input type="text" required="required" />
      <span>email</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Contact number</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Adress</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Description</span>
    </div>

    <div class="inputbox">
      <input type="button" value="submit"/>
    </div>
  </form>
</div>
    </div>
  )
}

export default UpdateRec