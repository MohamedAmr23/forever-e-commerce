import  { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Fragment>
        <Outlet/>
    </Fragment>
  )
}

export default MainLayout