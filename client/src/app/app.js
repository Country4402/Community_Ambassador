import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorExisting from '../pages/Error/ErrorExisting'
import AddNewRc from '../pages/AddNewRc/AddNewRc'
import RcDetails from '../pages/RcDetails/RcDetails'
import NewRcSuccess from '../pages/AddNewRc/NewRcSuccess/NewRcSuccess'
import Rclist from "../pages/RcList"
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import './app.css'

const App = () => {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/rclist" element={ <Rclist />} />
          <Route exact path="/rc-details/:name" element={<RcDetails />} />
          <Route exact path="/new-rc/success" element={<NewRcSuccess />} />
          <Route exact path="/newrc" element={<AddNewRc />} />
          <Route exact path="/error" element={<Error />} />
          <Route exact path="/error/existing" element={<ErrorExisting />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  )

}

export default App