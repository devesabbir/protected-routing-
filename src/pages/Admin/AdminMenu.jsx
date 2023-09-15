import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <div>
    <ul>
        <li> <NavLink to={'/dashboard/admin/create-category'}>Category</NavLink></li>
        <li> <NavLink to={'/dashboard/admin/create-product'}>Product</NavLink></li> 
        <li> <NavLink to={'/dashboard/admin/users'}>Users</NavLink></li>
    </ul>
</div>
  )
}

export default AdminMenu