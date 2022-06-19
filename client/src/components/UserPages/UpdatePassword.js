import React from 'react'

function UpdatePassword() {
  return (
    <div className='Pass'>
        <div class="center">
  <h1>Change Password</h1>
  <form>
    
    <div class="inputbox">
      <input type="text" required="required" />
      <span>Password</span>
    </div>
    <div class="inputbox">
      <input type="button" value="submit"/>
    </div>
  </form>
</div>
    </div>
  )
}

export default UpdatePassword