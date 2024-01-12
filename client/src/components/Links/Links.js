import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'
import React from 'react'
import './Links.css'

const Links = () => {

  return (
    <>
      <Link to="/" className="navbar-brand gold"><h2 className="hover gold">Community Ambassador Program</h2></Link>
      
        <div className="btn-group dropleft">
          <div className="btn gold" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><h2>Menu</h2></div>
          <div className="dropdown-menu text-center">
            <Link to="/" className="nav-link gold hover mb-3"><span>Home</span ></Link>
            <Link to="/RCList" className="nav-link gold hover mb-3"><span>RC List</span ></Link>
            <Link to="/newRC" className="nav-link gold hover mb-3"><span>Add New RC</span ></Link>
            
          </div>
        </div>
        
    </>
  )

}

export default Links