import { useRouter } from 'next/router'
import React from 'react'

const NewsDetails = () => {
  const router = useRouter();

  return (
    <div>News Details Id: {router.query.newsId}</div>
  )
}

export default NewsDetails