import { useRouter } from 'next/router'
import React from 'react'

const ProductDetailsPage = () => {
  const router = useRouter()
  console.log(router.query.productId)
  return (
    <div>
      <p>ProductDetailsPage</p>
      <p>ProductId: {router.query.productId}</p>
    </div>
  )
}

export default ProductDetailsPage