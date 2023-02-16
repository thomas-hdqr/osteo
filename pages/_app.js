import '../styles/globals.css'
import '../styles/clash-display.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}/>
      <Script strategy='lazyOnload' id=''>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

