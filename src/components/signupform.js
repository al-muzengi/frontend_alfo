import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const SignUpForm = () => {
  const [isShown,setIsShown] = useState(false)
  const [ person,  setPerson] = useState({
    fullName:'',
    zipcode:'',
    phonenumber:'',
    username:'',
    password:"",
    email:''
  })
  

  const toggleVisibility = (e) => {
    e.preventDefault()
    setIsShown(!isShown)
    }

  const handleInput = (e) =>{
    let value = e.target.value
    let name = e.target.name
    setPerson({...person, [name]:value })
  }

  const addPerson = (e) =>{
    e.preventDefault()
    if(person.fullName && person.phonenumber &&  person.username && person.password && person.email  && person.zipcode){
      axios.post('http://localhost:5000/api/users/signup',{person})
      .then(response => console.log(response))
      .catch(error => console.log(error))
    setPerson({fullName:'',phonenumber:'',zipcode:"",password:"",username:'', email:''})
    }
  else{
    alert('The Input Fields cannot be empty on Submission.')
  }
}
  
  return (
    <div className='form_container'>
      <form action="">
        <div className='input'>
          <label htmlFor="FullName"> Full Name : </label>
        <input type="text" name="fullName" id="fullName" value={person.fullName}  onChange={handleInput}/>
        </div>

        <div className='input'>
          <label htmlFor="email"> Email Address : </label>
          <input type="text" name="email" id="email"  value={person.email} onChange={handleInput} />
        </div>

        <div className='input'>
          <label htmlFor="phonenumber"> Phone Number : </label>
          <input type="text" name="phonenumber" id="phonenumber"  value={person.phonenumber} onChange={handleInput} />
        </div>

        <div className='input'>
          <label htmlFor="zipcode"> ZipCode : </label>
          <input type="text" name="zipcode" id="zipcode"  value={person.zipcode} onChange={handleInput} />
        </div>

        <div className='input'>
        <label htmlFor="username"> Username :</label>
        <input type="text" name="username" id="username"  value={person.username} onChange={handleInput}/>
        </div>

        <div className='input'>
        <label id="pwd" htmlFor="password"> Password :</label>
        <input type={isShown === false ? "password" :  "text" } name="password" id="password" value={person.password} onChange={handleInput}/>
        <button onClick={toggleVisibility} className='pwd_btn'>{ isShown === false ?< FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} /> }</button>
        </div>

        

        <div className='btn_container'>
        <button type="submit" className='btn' onClick={addPerson}>Sign Up</button> 
        </div>
      </form>
    </div>
  )
}

export default SignUpForm

