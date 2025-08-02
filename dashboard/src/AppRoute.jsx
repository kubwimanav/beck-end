import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashHome from './components/DashHome'
import Layout from './components/Layout'

function AppRoute() {
    return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
           <Route index element={<DashHome />} />
      </Route>
          
    </Routes>
</BrowserRouter>
  )
}

export default AppRoute
