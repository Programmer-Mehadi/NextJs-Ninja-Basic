import React from 'react'
import DashboardLayout from '../../components/Layouts/DashboardLayout';

const Dashboard = () => {
  return (
    <div>Dashboard Home Page</div>
  )
}

export default Dashboard;


Dashboard.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}