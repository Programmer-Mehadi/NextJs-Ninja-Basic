import { Button } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react'

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