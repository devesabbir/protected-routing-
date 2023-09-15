import { Routes , Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import NavigateRoute from './routes/NavigateRoute';
import Orders from './pages/User/Orders';
import Profile from './pages/User/Profile';
import CreateCateory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import AllUsers from './pages/Admin/AllUsers';






function App() {
   

  return (
   <>
      <ToastContainer
                 position="top-center"
                 autoClose={5000}
                 hideProgressBar={true}
                 newestOnTop={false}
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover
                 theme="light"
               />
   
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/dashboard' element={<PrivateRoute/>}>
               <Route path='user' element={<Dashboard/>} />   
               <Route path='user/orders' element={<Orders/>} />   
               <Route path='user/profile' element={<Profile/>} />   
         </Route>

         <Route path='/dashboard' element={<AdminRoute/>}>
              <Route path='admin' element={<AdminDashboard/>} />   
              <Route path='admin/create-category' element={<CreateCateory/>} /> 
              <Route path='admin/create-product' element={<CreateProduct/>} />
              <Route path='admin/users' element={<AllUsers/>} />      
         </Route>

         <Route path='/about' element={<AboutPage/>} />
         <Route path='/category' element={<CategoryPage/>} />
         <Route path='/cart' element={<CartPage/>} />

         <Route path='/' element={<NavigateRoute/>}>
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/login' element={<LoginPage/>} />
         </Route>

         <Route path='/forgot-password' element={<ForgotPassword/>} />
         <Route path='*' element={<NotFoundPage/>} />
     </Routes>
  
   </>
 
    
  );
}

export default App;
