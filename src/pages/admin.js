import React from 'react'
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import RootLayout from '@/components/Layouts/RootLayout';

const AdminPage = () => {
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return (
    <RootLayout><DashboardLayout>{page}</DashboardLayout></RootLayout>
  )
}