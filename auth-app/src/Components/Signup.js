import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function Signup() {

    const [userDetails, setUserDetails] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
       
    
      })
      const { fullName, email, password, confirmPassword } = userDetails
      const [error, setError] = useState(false)
      const [submit, setSubmit] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true)
        if (fullName.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            setError(true);
          }
          else if(password!==confirmPassword)
          {
            setError(true)
          }
          else if( !(email.includes('@') && email.includes('.') && email.substr(email.lastIndexOf('.')+1).length>1) )
          {
            
            setError(true)
          }
          else {
            setError(false);
            }
            
        }
    
      
  return (
    <Container className='main-container'>
      <h1 className='display-4'>Signup</h1>
      <br />
      <br />
      <Form onSubmit={handleSubmit}>
        {/* <Form > */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name"
            value={fullName}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                fullName: e.target.value

              })
            }
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={email}
            onChange={
              (e) => setUserDetails({
                ...userDetails,
                email: e.target.value
              })
            }
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={password}
            onChange={
              (e) => setUserDetails({
                ...userDetails,
                password: e.target.value
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password"
            value={confirmPassword}
            onChange={
              (e) => setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value
              })
            }
           

          />
        </Form.Group>
        {submit && (error ? (
     
          <p style={{ color: 'red' }}>

            Error!! All fields are manditory
          </p>
    
        ) : (<p style={{ color: 'green' }}>

          Successfully!! Signed up!!
        </p>
       
        )
         
        )
      
        }


        <Button variant="light" type="submit">
          Signup
        </Button>

      </Form>
    </Container>
  )
}

export default Signup