import '../styles/globals.css'
import '../styles/clash-display.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true
      });
    });
    
    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    }
  });



  return (
      <main data-scroll-container>
        <Component {...pageProps} />
      </main>
  )
}

export default MyApp