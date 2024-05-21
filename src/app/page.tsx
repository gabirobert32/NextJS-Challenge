import { Suspense } from 'react'
import Layout from '../../components/Layout'
import './Page.scss'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <Layout />
      </main>
    </Suspense>
  )
}
