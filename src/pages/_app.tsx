import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../styles/global.css';

import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
