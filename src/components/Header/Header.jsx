import React, { useState , useEffect } from 'react'
import { Container, DropdownButton, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth'


import logo from '../../assets/img/logo.png'
import { toast } from 'react-toastify';




const Header = () => {
   const [auth, setAuth] = useAuth()
   const location = useLocation()
   const [activeDash, setActiveDash] = useState()

   useEffect(() => {
     let isDash = location?.pathname?.split('/')[1] === 'dashboard'
     if (isDash) {
       setActiveDash(true)
     } else {
       setActiveDash(false)
     }
   },[location.pathname])

  //  handleLogOut
  const handleLogOut = () => {
    setAuth((prev) => ({
       ...prev,
       user: null,
       token:''
    }))
    toast.success('LogOut Successfully')
    localStorage.removeItem('auth')
  }

  return (
    <header>
     <Navbar className='p-3' bg="dark" variant="dark">
        <Container>
           <div className="brand-logo">
              <Link to="/">
                  <img src={logo} alt="logo" />
                  <span className='d-inline-block ms-2'>Dokan</span>
              </Link>
           </div>
          <Nav className="ms-auto">
            <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/category">Category</NavLink>

            {
              !auth.user ? (<>
               <NavLink className={({isActive}) => isActive ? 'active' : ''} 
              to="/register">Register</NavLink>
              <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/login">Login</NavLink>
              </>) :
               <>
              <DropdownButton className={activeDash && 'active'} title={auth.user.name}>
                    <li> <NavLink className={({isActive}) =>  isActive ? 'active' : ''} to={`/dashboard/${auth.user.role === 1 ? 'admin' : 'user'}`}>Dashboard</NavLink></li>
                    <li><NavLink onClick={handleLogOut} className={({isActive}) =>  isActive ? 'active' : ''} to="/login">Log-out</NavLink></li>
             </DropdownButton>
               </>
             }
           
            <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/cart">Cart</NavLink>
    
          </Nav>
        </Container>
      </Navbar>
   </header>
  )
}

export default Header