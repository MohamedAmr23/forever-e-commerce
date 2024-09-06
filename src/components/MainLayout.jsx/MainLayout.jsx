import  { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../Footer.jsx'

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout