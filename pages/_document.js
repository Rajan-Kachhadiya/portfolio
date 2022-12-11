import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='!scroll-smooth'>
      <Head />
      <body className='bg-body-color text-primary text-base font-base'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}