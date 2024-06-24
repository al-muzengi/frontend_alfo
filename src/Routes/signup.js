import React from 'react'
import SignUpForm from '../components/signupform'

const Signup = () => {
  return (
    <>
    <div className='typewriter_container'>
          <div id='one' className='typed_out'>Hello There</div>    
    </div><br />
    <div className='typewriter_container'>
          <div id='two' className='typed_out'>Please Fill In Your Details</div>
    </div>
    <SignUpForm/>
    </>
  )
}

export default Signup