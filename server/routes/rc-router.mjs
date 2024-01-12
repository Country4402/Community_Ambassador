import rcController from '../controllers/rc-controller.mjs'
import express from 'express'

const router = express.Router()

// Question Routes //

router.get('/get-rcs', rcController.getRcs)
router.get('/get-rc-details/:name', rcController.getRcDetails)
router.post('/new-rc', rcController.addNewRc)

export default router