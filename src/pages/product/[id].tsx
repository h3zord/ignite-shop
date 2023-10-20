import Image from 'next/image'
import Stripe from 'stripe'
import { useContext } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { stripe } from '@/services/stripe'
import { ProductProps } from '@/Interfaces'
import { ProductContext } from '@/context/ProductContext'
import { formatPrice } from '@/utils'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product({ product }: ProductProps) {
  const { addProductToCart } = useContext(ProductContext)

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{formatPrice(product.price)}</span>

        <p>{product.description}</p>

        <button
          onClick={() =>
            addProductToCart({
              id: product.id,
              name: product.name,
              imageUrl: product.imageUrl,
              price: product.price,
              defaultPriceId: product.defaultPriceId,
            })
          }
        >
          Colocar na sacola
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_Ogv55CiGp2I4yX' },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: Number(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
