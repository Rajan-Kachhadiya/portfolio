import Head from 'next/head'
import Footer from './partial/footer'
import Header from './partial/header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="Rajan Kachhadiya - Portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Web Designer, Portfolio" />
        <meta name="author" content="Rajan Kachhadiya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Rajan Kachhadiya - Portfolio </title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}