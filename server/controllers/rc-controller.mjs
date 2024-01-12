import db from '../connection/index.mjs'

const getRcs = (req, res) => {
  try {
    db.query(`SELECT * FROM rcs`, (err, results) => {
      res.json(results)
    })
  } catch { (err => res.redirect('error', 'http://localhost:5001/error', err)) }
}

const getRcDetails = (req, res) => {
  try {
    db.query(`SELECT * FROM rcs WHERE rcName = '${req.params.name}';`, (err, info) => {
      if (err) { console.error(err); return res.status(500).end() }
      const rcInfo = info
      res.status(200).json({
        success: true,
        rcInfo: rcInfo
      })
    })
  } catch { (err => res.redirect('error', 'http://localhost:5001/error', err)) }
}

const addNewRc = (req, res) => {
  try {
    const firstName = req.body.firstName[0].toUpperCase() + req.body.firstName.substring(1)
    const lastName = req.body.lastName[0].toUpperCase() + req.body.lastName.substring(1)
    const newRcName = firstName + " " + lastName
    const newRcPhone = req.body.phone

    db.query(`SELECT * FROM rcs WHERE rcName = "${newRcName}"`, (err, results) => {
      if (results[0] === undefined) {
        db.query(`INSERT INTO rcs (rcName, phone) VALUES ("${newRcName}","${newRcPhone}")`, (err, results) => {
          res.redirect('http://localhost:5001/new-rc/success')
        })
      } else { res.redirect('http://localhost:5001/error/existing') }
    })

  } catch { (err => res.redirect('error', 'http://localhost:5001/error', err)) }
}


const error = (req, res) => {
  res.redirect('http://localhost:5001/error')
}

export default {
  getRcs,
  getRcDetails,
  addNewRc,
  error,
}