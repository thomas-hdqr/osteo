import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Clash Display', sans-serif`,
    body: `'Clash Display', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#F9F5EB',
        color: '#1C3879'
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
