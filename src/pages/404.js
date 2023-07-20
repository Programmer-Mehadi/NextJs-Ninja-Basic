import { useRouter } from 'next/router'
import React from 'react'

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/")
  }, 5000);
  return (
    <div>No Page Found</div>
  )
}

export default ErrorPage