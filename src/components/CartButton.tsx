import { ProductContext } from '@/context/ProductContext'
import { CartButtonContainter } from '@/styles/components/CartButton'
import { Handbag } from '@phosphor-icons/react'
import { ButtonHTMLAttributes, useContext } from 'react'

function CartButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { productCartList } = useContext(ProductContext)

  return (
    <CartButtonContainter disabled={!productCartList.length} {...props}>
      <Handbag size={36} weight="bold" />
      {!!productCartList.length && <span>{productCartList.length}</span>}
    </CartButtonContainter>
  )
}

export default CartButton
