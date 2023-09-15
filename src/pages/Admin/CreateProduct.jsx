import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import AdminMenu from './AdminMenu'

const CreateProduct = () => {
  return (
    <Layout title={'Create Product'}>
         <Container>
        <Row>
             <Col lg={3} style={{borderRight:'1px solid #ddd', height:'85vh'}}>
                <AdminMenu/>
             </Col> 
             <Col lg={9}>
                 <h2>Create Product</h2>
             </Col>
         </Row>
        </Container>
    </Layout>
  )
}

export default CreateProduct