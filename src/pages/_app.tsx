import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Roboto } from 'next/font/google'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import logoImg from '../assets/logo.svg'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Container>
        <Header>
          <Image src={logoImg.src} width="130" height="52" alt="" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </main>
  )
}
