import React, { useState, useEffect } from 'react'
import { getRcDetails } from '../../api'
import { useParams, Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import './RcDetails.css'

const rcDetails = () => {

  const { name } = useParams()
  const [rc, setRc] = useState({})

  useEffect(() => {
    getRcDetails(name)
      .then(rc => {
        setRc(rc.data.rcInfo[0])
      })
  }, []) // eslint-disable-line


  return (
    <>
     <h1>{rc.rcName}</h1>
     <h2>{rc.phone}</h2>
     
    </>
  )

}

export default rcDetails