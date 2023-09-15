import React, { useState } from 'react'
import axios from 'axios'

import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';


import Layout from '../../components/Layout/Layout'


const ForgotPassword = () => {
  
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
  
    
     if (!input.newPassword) {
        newErrors.newPassword = 'New Password is required';
      } else if (input.newPassword.length < 6) {
        newErrors.newPassword = 'Password must be at least 6 characters';
      }

      if (!input.answer ) {
        newErrors.answer = 'answer is required';
      }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  // handle Login
  const handleLogin =  (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('email', input.email)
      formData.append('newPassword', input.newPassword)  
      formData.append('answer', input.answer)  
      const data = Object.fromEntries(formData)
     
      if (validate()) {

        axios.post('/api/v1/auth/forgot-pass', data, {
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
    <Layout title={"Forgot Password"}>
      <div>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4} className="p-5">
            <div className="form-title text-center">
              <h3>Reset Your Password</h3>
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
                 {errors.email && <p className='text-danger'>{errors.email}</p>}
                </Form.Group>
                 
                <Form.Group className="mb-3" controlId="newpassword">
                  <Form.Label>New Password:</Form.Label>
                  <Form.Control 
                  name="newPassword"
                  onChange={handleInput}
                  type="password" 
                  placeholder="New Password" 
                  />
                 {errors.newPassword && <p className='text-danger' >{errors.newPassword}</p>}
                </Form.Group>
                
                
                 <Form.Group className="mb-3" controlId="address">
                    <Form.Label>What is your favourite game:</Form.Label>
                    <Form.Control 
                    name="answer"
                    onChange={handleInput}
                    type="text" placeholder="Enter answer" 
                    />

                    <p className='text-danger' >{errors?.answer}</p>
                  </Form.Group>
           
                 <p><Link className='me-2 ps-1' to={'/login'}>
                    login?
                </Link></p>

                <Button variant="primary" type="submit">
                    Change Password
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

export default ForgotPassword