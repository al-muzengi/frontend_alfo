import React,{useContext,useState} from 'react'
import Navbar from '../components/navbar'
import { dataContext } from '../App'

const Homepage = () => {
  const {data} =useContext(dataContext)
  return (
    <div className='home_container'>
      <Navbar/>
      <h1>EMPTY SPACE TO BE FILLED</h1>
    </div>
  )
}

export default Homepage