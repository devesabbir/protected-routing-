import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import UserMenu from './UserMenu'

const Orders = () => {
  return (
   <Layout title={'Orders'}>
      <Container>
        <Row>
             <Col lg={3} style={{borderRight:'1px solid #ddd', height:'85vh'}}>
                <UserMenu/>
             </Col> 
             <Col lg={9}>
                 <h2>Orders</h2>
             </Col>
         </Row>
        </Container>
   </Layout>
  )
}

export default Orders