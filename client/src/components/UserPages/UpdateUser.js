import React from 'react'

function UpdateUser() {
  return (
    <div className='editUser'>
        <div class="centerP">
  <h1>Edit Profil</h1>
  <form>
    
    <div class="inputbox">
      <input type="text" required="required" />
      <span>firstName</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>LastName</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Age</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>email</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Number Phone</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Adress</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Bio</span>
    </div>

    <div class="inputbox">
      <input type="button" value="submit"/>
    </div>
  </form>
</div>
    </div>
  )
}

export default UpdateUser