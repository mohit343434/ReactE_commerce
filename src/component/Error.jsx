import React from 'react'
import Navbar from './layouts/Navbar'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
    <Navbar/>
<center>

    <h1>404 Page not found</h1>
      <Link to="/user/show">Home</Link>
</center>
    </div>
  )
}

export default Error
