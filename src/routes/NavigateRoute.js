import React, { useState, useEffect  } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/auth'
import axios from 'axios'
import LoadingSpinner from '../components/Spinner/LoadingSpinner'


const NavigateRoute = () => {

    const [okay, setOkay] = useState()
    const [auth] = useAuth()
 

   useEffect(() => {
      const authCheck = async () => {
        let res = await axios.get('/api/v1/auth/me', {
            headers: {
                authorization: 'Bearer ' + auth?.token
            }
        })      
        if (res.data.success) {
            setOkay(true)
        } else {
            setOkay(false) 
        }
      }
      if(auth?.token) authCheck() 
   },[auth?.token])

   return okay ? <LoadingSpinner path='/' /> : <Outlet/>
}

export default NavigateRoute