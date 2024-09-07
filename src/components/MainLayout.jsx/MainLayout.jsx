import  { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../Footer.jsx'
import SearchBar from '../SearchBar.jsx'

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout