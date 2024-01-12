import { Link } from 'react-router-dom'
import React from 'react'

const NewRcSuccess = () => {

  return (
    <>
      <div id="img">
        <div id="lightBox">
          <h1 className="green">SUCCESS!!</h1>
          <h2 className="my-5 white">New RC Added</h2>
          <div className="row">
            <Link to="/" className="btn hover gold col-4 offset-4"><h4>Home</h4></Link>
          </div>
        </div>
      </div>
    </>
  )

}

export default NewRcSuccess