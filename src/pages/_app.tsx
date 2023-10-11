import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { globalStyles } from '@/styles/global'
import { Roboto } from 'next/font/google'
import { Container, Header } from '../styles/pages/app'
import { ProductContextProvider } from '@/context/ProductContext'
import { CartButton } from '@/components/CartButton'
import type { AppProps } from 'next/app'
import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingBag } from '@/components/ShoppingBag'

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
        <ProductContextProvider>
          <Header>
            <Link href="/">
              <Image src={logoImg.src} width="130" height="52" alt="" />
            </Link>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                {/* <CartButton /> */}
                <p>Botão</p>
              </Dialog.Trigger>

              <ShoppingBag />
            </Dialog.Root>
          </Header>
          <Component {...pageProps} />
        </ProductContextProvider>
      </Container>
    </main>
  )
}
