import Preloader from '@/components/ui/Preloader/Preloader'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Preloader />
      <Component {...pageProps} />
    </>
  )
}
