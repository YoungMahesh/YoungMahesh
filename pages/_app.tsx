import type { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/left-side.css'
import '../styles/right-side.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
