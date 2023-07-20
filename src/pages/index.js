import { Button } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react'
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const HomePage = () => {

  return (
    <div>
      <Head>
        <title>
          Home Page
        </title>
        <meta name="home page" description="this page is home page" />
      </Head>
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