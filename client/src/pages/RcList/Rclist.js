import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getRcs } from '../../api'

const Rclist = () => {

  const [rcs, setRcs] = useState([])
  useEffect(() => { retrieveRcs() }, [])

  const retrieveRcs = async () => {
    try {
      await getRcs()
        .then(res => {
          setRcs(res.data)
        })
    } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
  }

  if (rcs.length) {

    return (
      <>
        <h1 className=" mb-5 gold"><u>RCList page</u></h1>

        {rcs.map(rc => {
          return (
            <div key={rc.rcName}>
              <h1><Link to={`/rc-details/${rc.rcName}`}>{rc.rcName}</Link></h1>
            </div>
          )
        })
        }
      </>
    )
  }

}


export default Rclist





