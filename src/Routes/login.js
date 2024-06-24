import React from 'react'
import LoginForm from '../components/login'
import {useNavigate} from 'react-router-dom' 

const Login = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    navigate('/signup')
  }

  return (
  <div className='page_container'>
    <div className='form'>
      <div className='greeting'>
        <h1>Hello</h1>
        <h3>Sign in to your Account</h3>
      </div>
      <div className='loginform'>
        <LoginForm/>
      </div>
      <div className = 'new_user_greeting'>
        <h5>New to our site?</h5> 
        <h5> Sign up now to get an account</h5> </div>
        <button className= 'sign_up_btn' onClick={handleClick}>SIGN UP</button>
    </div>
  </div>
  )
}

export default Login