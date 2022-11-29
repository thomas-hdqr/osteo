import '../styles/globals.css'
import '../styles/clash-display.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  const privateGtag = process.env.GOOGLE_ANALYTICS;

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id={privateGtag}"/>
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '{privateGtag}', {
      page_path: window.location.pathname,
      });
      `,
      }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

