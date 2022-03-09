import { AppProps } from 'next/app'
import '../styles/globals.css'

type AppPropsPage = AppProps

function MyApp({ Component, pageProps }: AppPropsPage) {
  return <Component {...pageProps} />
}

export default MyApp
