import  { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx'

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar/>
      <Outlet/>
    </Fragment>
  )
}

export default MainLayout