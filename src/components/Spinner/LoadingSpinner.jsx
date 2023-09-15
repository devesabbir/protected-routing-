import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';


const LoadingSpinner = ({path}) =>  {
   const [count, setCount] = useState(3)
   const navigate = useNavigate()
   const location = useLocation()
   
   useEffect(() => {
      const interval = setInterval(() => {
        setCount((prev) => --prev)
      }, 1000)
    
     count === 0 && navigate(path, {
        state: location?.pathname
     })
     return () => clearInterval(interval)
   },[count, navigate, location, path])

  return (
     <div style={{height:'100vh'}} className="d-flex flex-column justify-content-center align-items-center" >
          <h6>Redirect to you within {count} seconds </h6>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
         </Spinner>
     </div>
  );
}

export default LoadingSpinner;