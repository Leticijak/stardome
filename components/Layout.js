import Head from 'next/head'

// LOCAL

import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Bane Tijanic, web development ',
  description: 'get your internet presence today',
  keywords:
    'web development, build website, how to make a website, looking for web developer',
}
