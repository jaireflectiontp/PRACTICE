import React from 'react'
import '../../Welcome/welcome.scss'
import profpic from '../../../Images/developer.jpg'
const Profile = () => {
  return (
    <div>
      <div className='profileBox'>
       <img src={profpic} alt='profile pic'/>
      </div>
      <h2>Jay Rautel</h2>
    </div>
  )
}

export default Profile
