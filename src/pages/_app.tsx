import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { Provider } from 'react-redux'
import store from '../store'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Login Wiser</title>
        <meta name="description" content="Challenge Wiser" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
