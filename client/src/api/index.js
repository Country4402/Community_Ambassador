import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const getRcs = async () => {
  try {
    const res = await Api.get('/get-rcs')
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5001/error', err)) }
}

export const getRcDetails = async name => {
  try {
    const res = await Api.get(`/get-rc-details/${name}`)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5001/error', err)) }
}

export const newRc = async () => {
  try {
    const res = await Api.post('/new-rc')
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5001/error', err)) }
}


const Apis = {
  newRc,
  getRcs,

}

export default Apis