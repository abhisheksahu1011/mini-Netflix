import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className='d-flex align-item-center justify-content-center'>
      <h1>Page NotFound😥😥</h1>
      <NavLink to='/'> Let me guide to home page</NavLink>
    </div>
  )
}

export default NotFound
