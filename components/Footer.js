import Link from 'next/link'

// Local
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Bane Tijanic 2021</p>
      <Link href='/about'>About me</Link>
    </footer>
  )
}
