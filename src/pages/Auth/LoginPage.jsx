import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout/Layout'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuth } from '../../context/auth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginPage = () => {
  
  const [auth, setAuth] = useAuth()
  const [input, setInput] = useState({})
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  const location = useLocation()


  // handle Input
  const handleInput = (e) => {
      let name = e.target.name 
      let value = e.target.value
      setInput((prev) => ({
          ...prev,
          [name]: value
      }))
  }

  // form validation
  const validate = () => {
    let newErrors = {};
    if (!input.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!input.password) {
      newErrors.password = 'Password is required';
    } else if (input.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  // handle Login
  const handleLogin =  (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('email', input.email)
      formData.append('password', input.password)  
      const data = Object.fromEntries(formData)
    
      if (validate()) {
        axios.post('/api/v1/auth/login', data, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then((res) => {
           setAuth((prev) => ({
              ...prev,
              user:res.data.data,
              token:res.data.token
           }))
           toast.success(res.data.message)
           localStorage.setItem('auth', JSON.stringify(res.data));
           navigate(location?.state || '/')
      
        }).catch((err) => {
          toast.error('error ')
        })
      }
  }


  return (
    <Layout title={"Login"}>
      <div>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4} className="p-5">
            <div className="form-title text-center">
              <h3>Login</h3>
            </div>
            <div className="register-form">
              <Form onSubmit={handleLogin}>
              
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                   name="email" 
                   onChange={handleInput}
                   type="text" 
                   placeholder="Enter email" 
                 />
                 {errors.email && <p>{errors.email}</p>}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control 
                  name="password"
                  onChange={handleInput}
                  type="password" 
                  placeholder="Password" 
                  />
                 {errors.password && <p>{errors.password}</p>}
                </Form.Group>
           
                 <p><Link className='me-2 ps-1' to={'/forgot-password'}>
                   Forgot Password?
                </Link></p>

                <Button variant="primary" type="submit">
                   Login
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </div>
    </Layout>
  );
}

export default LoginPage