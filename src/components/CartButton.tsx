import { ProductContext } from '@/context/ProductContext'
import { CartButtonContainter } from '@/styles/components/CartButton'
import { Handbag } from '@phosphor-icons/react'
import { forwardRef, useContext } from 'react'

function CartButton(props, ref) {
  const { productCartList } = useContext(ProductContext)

  return (
    <CartButtonContainter
      disabled={!productCartList.length}
      onClick={() => console.log(productCartList)}
      ref={ref}
      {...props}
    >
      <Handbag size={36} weight="bold" />
      {!!productCartList.length && <span>{productCartList.length}</span>}
    </CartButtonContainter>
  )
}

export default forwardRef(CartButton)
