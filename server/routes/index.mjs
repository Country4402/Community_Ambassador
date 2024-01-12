import rcRouter from './rc-router.mjs'
import express from 'express'

const router = express.Router()

router.use('/', rcRouter)

export default router