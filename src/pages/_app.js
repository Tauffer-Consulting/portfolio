import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';
import * as ga from '../lib/google-analytics';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }

  }, [router.events])


  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} strategy='afterInteractive' />
        <Script id='google-analytics-script' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
