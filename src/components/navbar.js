import React from 'react'
import { nav_items } from '../data'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='nav_bar'>
    {nav_items.map((item) =>{
      const {title,id,link} = item
      return(
        <div key={id} >
          <NavLink to={link} className="nav_items" style={({isActive}) => {
            return {color:isActive? '#007beb' : 'white'}
          }}>{title}</NavLink>
        </div>
      )
    })}
    </div>
  )
}

export default Navbar