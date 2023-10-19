import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from '@phosphor-icons/react'
import { ProductContext } from '@/context/ProductContext'
import { useContext } from 'react'
import {
  Close,
  Content,
  FinalizePurchase,
  ImageContainer,
  Overlay,
  ProductDetails,
  QuantityAndPrice,
  ShirtListContainer,
  Title,
} from '@/styles/components/ShoppingBag'

export function ShoppingBag() {
  const { productCartList } = useContext(ProductContext)

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>Sacola de compras</Title>
        <Close>
          <X weight="bold" size={24} />
        </Close>
        <ShirtListContainer>
          {productCartList.map((product) => (
            <div key={product.id}>
              <ImageContainer>
                <Image src={product.imageUrl} width={102} height={93} alt="" />
              </ImageContainer>

              <ProductDetails>
                <p>{product.name}</p>
                <span>{product.price}</span>
                <button>Remover</button>
              </ProductDetails>
            </div>
          ))}
        </ShirtListContainer>

        <QuantityAndPrice>
          <p>Quantidade</p>
          <h5>{productCartList.length} itens</h5>

          <span>Valor total</span>
          <h3>R$ 120,00</h3>
        </QuantityAndPrice>

        <FinalizePurchase>Finalizar compra</FinalizePurchase>
      </Content>
    </Dialog.Portal>
  )
}
