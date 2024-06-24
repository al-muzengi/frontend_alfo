import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    username:'',
    password:''
  })
  const [isShown,setIsShown] = useState(false)
  const username = user.username
  const password = user.password

  const handleLogin =(e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/users/login',{username,password})
    .then(response =>{
      if(response.data === 'allow'){
        navigate('/homepage')
      }
    })
    .catch(error => alert('Invalid Username or Password'))
  }
  const handleInput = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const toggleVisibility = (e) => {
    e.preventDefault()
    setIsShown(!isShown)
  }

  return (
    <>
    <form action="" method='' onSubmit={handleLogin}>

      <input id='user_name' type="text" placeholder='Username' required value={user.username} onChange={handleInput} name='username'/>

      <input type={isShown === false ? "password" :  "text" } name="password" required placeholder='Password' id='pass_word' value={user.password} onChange={handleInput}/>
      <button onClick={toggleVisibility} className='pwd_btn2'>{ isShown === false ?< FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} /> }</button>

      <button type='submit'className='form_btn' onClick={handleLogin}>Log In</button>
    </form>
    </>
  )
}

export default LoginForm