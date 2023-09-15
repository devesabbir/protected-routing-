import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import AdminMenu from './AdminMenu'

const AdminDashboard = () => {
  return (
    <Layout title={'Dashboard'}>
        <Container>
        <Row>
             <Col lg={3} style={{borderRight:'1px solid #ddd', height:'85vh'}}>
                <AdminMenu/>
             </Col> 
             <Col lg={9}>
                 <h2>Dashboard</h2>
             </Col>
         </Row>
        </Container>
   </Layout>
  )
}

export default AdminDashboard