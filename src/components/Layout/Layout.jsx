import React from 'react'
import {Helmet} from "react-helmet";



import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <>
       <Helmet>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={[...keywords]} />
          <meta name="author" content={author} />
          <title>{title +' - Shop Now'}</title>
       </Helmet>
       
        <Header/>
           <main style={{minHeight:'85vh'}}>
               {children}
          </main>
        <Footer/>
   </>
  )
}


Layout.defaultProps = {
   title:'E-commerce -Shop Now',
   description:'Best online shop',
   keywords:['bdshop', 'online shop', 'buy your products'],
   author:'Sabbir Hossain'
}


export default Layout