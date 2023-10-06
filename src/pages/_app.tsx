import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Roboto } from 'next/font/google'
import { Container, Header } from '../styles/pages/app'
import { Handbag } from '@phosphor-icons/react'
import { useContext } from 'react'
import {
  ProductContext,
  ProductContextProvider,
} from '@/context/ProductContext'
import Image from 'next/image'
import logoImg from '../assets/logo.svg'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { productCartList } = useContext(ProductContext)

  console.log(productCartList)

  return (
    <main className={roboto.className}>
      <Container>
        <Header>
          <Image src={logoImg.src} width="130" height="52" alt="" />
          <button disabled={true}>
            <Handbag size={48} weight="bold" />
          </button>
        </Header>
        <ProductContextProvider>
          <Component {...pageProps} />
        </ProductContextProvider>
      </Container>
    </main>
  )
}
