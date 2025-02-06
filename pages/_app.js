import '../styles/globals.css'
import '../styles/clash-display.css'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <GoogleTagManager gtmId="GTM-TTFHTLZL" />
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-G6N865B7PN`}/>
      <Script strategy='lazyOnload' id=''>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-G6N865B7PN');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

