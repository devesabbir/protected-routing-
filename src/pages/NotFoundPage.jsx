import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const NotFoundPage = () => {
  return (
    <Layout title={'Opps! Not Found!'}>
          <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'70vh'}}>
              <h1 className='text-danger'>404</h1>
              <p>Opps! Page Not Found.</p>
              <Link className='btn btn-info' to={'/'}>Go Back</Link>
          </div>
    </Layout>
  )
}

export default NotFoundPage