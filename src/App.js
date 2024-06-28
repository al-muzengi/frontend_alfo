import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './CSS/index.css'
import './CSS/home.css'
import './CSS/loginform.css'
import './CSS/signupform.css'
import Login from './Routes/login'
import Homepage from './Routes/homepage'
import Signup from './Routes/signup'

export const dataContext = React.createContext()

const App = () => {
  const [data,setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:5000/api/readings/';
      try {
        const response = await axios(url);
        setData(response.data)
      }catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <Router >
      <dataContext.Provider value={{data}}>
      <Routes>
        <Route path='/homepage' element={<Homepage />} /> 
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </dataContext.Provider> 
    </Router>
  )
}

export default App
