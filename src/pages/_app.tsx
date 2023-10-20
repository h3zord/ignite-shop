import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import CartButton from '@/components/CartButton'
import { globalStyles } from '@/styles/global'
import { Roboto } from 'next/font/google'
import { Container, Header } from '../styles/pages/app'
import { ShoppingBag } from '@/components/ShoppingBag'
import { ProductContextProvider } from '@/context/ProductContext'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  const isSucessPage = asPath.includes('/sucess?')

  return (
    <main className={roboto.className}>
      <Container>
        <ProductContextProvider>
          <Header logoPosition={isSucessPage}>
            <Link href="/">
              <Image src={logoImg.src} width="130" height="52" alt="" />
            </Link>

            {!isSucessPage && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <CartButton />
                </Dialog.Trigger>

                <ShoppingBag />
              </Dialog.Root>
            )}
          </Header>
          <Component {...pageProps} />
        </ProductContextProvider>
      </Container>
    </main>
  )
}
