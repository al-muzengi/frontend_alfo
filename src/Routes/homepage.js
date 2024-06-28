import React,{useContext,useState} from 'react'
import Navbar from '../components/navbar'
import { dataContext } from '../App'

const Homepage = () => {
  const {data} =useContext(dataContext)
  return (
    <div className='home_container'>
      <Navbar/>
      <div>
        {data?.map(reading =>{
          const {voltage,current,power} = reading
          return(
            <div className='reading_container'>
              <div>
              <h4>Voltage: {voltage}</h4>
              <h4>Current: {current}</h4>
              <h4>Power: {power}</h4>
              <br />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Homepage