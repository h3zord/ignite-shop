import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { SuccessProps } from '@/Interfaces'
import { stripe } from '@/services/stripe'
import { ImageContainer, SuccessContainer } from '@/styles/pages/sucess'
import { GetServerSideProps } from 'next'

export default function Success({ costumerName, imageUrlList }: SuccessProps) {
  return (
    <SuccessContainer>
      <ImageContainer>
        {imageUrlList.map((imageUrl: string) => (
          <div key={imageUrl}>
            <Image src={imageUrl} width={120} height={110} alt="" />
          </div>
        ))}
      </ImageContainer>

      <h1>Compra efetuada</h1>

      <p>
        Uhuul <strong>{costumerName}</strong>, sua compra de{' '}
        {imageUrlList.length}{' '}
        {imageUrlList.length === 1 ? 'camiseta' : 'camisetas'} já está a caminho
        da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items.data.price.product'],
  })

  const costumerName = session.customer_details.name

  const imageUrlList = session.line_items.data.map(({ price }) => {
    const product = price.product as Stripe.Product

    return product.images[0]
  })

  return {
    props: {
      costumerName,
      imageUrlList,
    },
  }
}
