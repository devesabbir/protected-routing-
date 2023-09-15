import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import UserMenu from './UserMenu'

const Profile = () => {
  return (
   <Layout title={'Profile'}>
         <Container>
        <Row>
             <Col lg={3} style={{borderRight:'1px solid #ddd', height:'85vh'}}>
                <UserMenu/>
             </Col> 
             <Col lg={9}>
                 <h2>Profile</h2>
             </Col>
         </Row>
        </Container>
   </Layout>
  )
}

export default Profile