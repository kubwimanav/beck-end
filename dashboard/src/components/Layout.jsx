import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import DashHome from './DashHome'

function Layout() {
  return (
    <div className=' flex flex-row'>
          <Sidebar />
          <div>
              <Navbar />
              <DashHome/>
          </div>
    </div>
  )
}

export default Layout
