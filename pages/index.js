import Link from 'next/link'
// LOCAL
import Layout from '../components/Layout'
export default function HomePage() {
  return (
    <Layout>
      <h1>HOME</h1>

      <Link href='/about'>About page</Link>
    </Layout>
  )
}
