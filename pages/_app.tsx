import { AppProps } from 'next/dist/next-server/lib/router/router'
import 'bulma/css/bulma.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
