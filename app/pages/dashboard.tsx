import React from 'react'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
        Welcome to Dashboard
        <Outlet />
        </div>
  )
}

export default Dashboard