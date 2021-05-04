import Link from 'next/link'
// LOCAL

import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout
      title='ABOUT'
      keywords='web developer, shopify expert, full-stack webdeveloper, google certified, google'
      description='Full Stack web developer, Shopify expert, ecommerce developer'
    >
      <h1>This is about Page</h1>
      <p>This is section where will write about myself</p>
      <p>Version 1.0.0</p>
      <Link href='/'>Home</Link>
    </Layout>
  )
}
