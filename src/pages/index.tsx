import Stripe from 'stripe'
import Image from 'next/image'
import Link from 'next/link'
import { HomeContainer, Product } from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import { stripe } from '@/services/stripe'
import { Handbag } from '@phosphor-icons/react'
import { HomeProps } from '@/Interfaces'
import { useContext } from 'react'
import { ProductContext } from '@/context/ProductContext'
import { formatPrice } from '@/utils'
import 'keen-slider/keen-slider.min.css'

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  const { addProductToCart } = useContext(ProductContext)

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product className="keen-slider__slide" key={product.id}>
            <Link href={`/product/${product.id}`}>
              <Image src={product.imageUrl} width={520} height={480} alt="" />
            </Link>

            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{formatPrice(product.price)}</span>
              </div>
              <button onClick={() => addProductToCart(product)}>
                <Handbag size={36} weight="bold" color="#ffffff" />
              </button>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Number(price.unit_amount / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
