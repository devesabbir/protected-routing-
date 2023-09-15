import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


import Layout from "../../components/Layout/Layout";


const RegisterPage = () => {
  const [input, setInput] = useState({
     name:'',
     email:'',
     password:'',
     phone:'',
     address:'',
     answer:'',
  })

  const [errors, setErrors] = useState()
  const navigate = useNavigate()

  // handle Input
  const handleInput = (e) => {
      let name = e.target.name 
      let value = e.target.value
      setInput((prev) => ({
          ...prev,
          [name]: value
      }))
  }

  
  //  validate input
  const validate = () => {
      const newErrors = {}

      Object.keys(input).forEach(key => {
         if(input[key].length === 0){
            newErrors[key] = key + ' is required!'
         } 
         if (input.password.length < 6){
           newErrors.password ='password must be at least 6 characters'
         } 
      }) 

     setErrors(newErrors)
     return Object.keys(newErrors).length === 0
  }

  

  // handle Register
  const handleRegister = async (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('name', input?.name)
      formData.append('email', input?.email)
      formData.append('password', input?.password)
      formData.append('phone', input?.phone)
      formData.append('address', input?.address)
      formData.append('answer', input?.answer)

      const data = Object.fromEntries(formData)
      
      if (validate()){
         try {
           await axios.post('/api/v1/auth/register', data,
               {
                headers: {
                  "Content-Type": "multipart/form-data",
               }
              }
           )
           .then((res) => {
              if(res.status === 200){
                 toast.success('Registration successfull.')
                 navigate('/login')
              }
           })
         } catch (error) {
           toast.info(error.response.data.message)
         }
      }  

  }


 

  return (
    <Layout title={"Register"}>
      <div>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4} className="p-5">
            <div className="form-title text-center">
              <h3>Register</h3>
            </div>
            <div className="register-form">
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                    name="name" 
                    onChange={handleInput}
                    type="text" 
                    placeholder="Enter Name" 
                    />

                 <p>{errors?.name}</p>
                
                  </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                   name="email" 
                   onChange={handleInput}
                   type="email" 
                   placeholder="Enter email" 
                   />

               <p>{errors?.email}</p>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control 
                  name="password"
                  onChange={handleInput}
                  type="password" 
                  placeholder="Password" 
                 />
                 <p>{errors?.password}</p>
                </Form.Group>

                 <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control 
                    name="phone"
                    onChange={handleInput}
                    type="text" placeholder="Enter Phone" 
                    />
                   <p>{errors?.phone}</p>
                  </Form.Group>
                   
                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control 
                    name="address"
                    onChange={handleInput}
                    type="text" placeholder="Enter Address" 
                    />

                    <p>{errors?.address}</p>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>What is your favourite game:</Form.Label>
                    <Form.Control 
                    name="answer"
                    onChange={handleInput}
                    type="text" placeholder="Enter answer" 
                    />

                    <p>{errors?.answer}</p>
                  </Form.Group>
 
                <Button variant="primary" type="submit">
                    Register
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </div>
    </Layout>
  );
};

export default RegisterPage;
