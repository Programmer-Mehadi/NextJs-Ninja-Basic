import { Button } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react'
import RootLayout from '../../components/Layouts/RootLayout';

const HomePage = () => {

  return (
    <div>
      <p>HomePage</p>
      <Button type="primary" size={"large"}>
        <Link href="/products">Products</Link>
      </Button>
    </div>

  )
}

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}