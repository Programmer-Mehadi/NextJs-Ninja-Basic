import { useRouter } from 'next/router'
import React from 'react'

const CatchAllRoutes = () => {
  const router = useRouter();
  return (
    <div><p>Catch All Routes:</p>

      <ul>
        {
          router.query?.slug && router.query.slug.map((s) => {
            return <li key={s}>{s}</li>
          })
        }
      </ul>
    </div>
  )
}

export default CatchAllRoutes