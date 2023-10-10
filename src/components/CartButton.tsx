import { ProductContext } from '@/context/ProductContext'
import { Handbag } from '@phosphor-icons/react'
import { useContext } from 'react'

export default function CartButton() {
  const { productCartList } = useContext(ProductContext)

  return (
    <button
      disabled={!productCartList.length}
      onClick={() => console.log(productCartList)}
    >
      <Handbag size={36} weight="bold" />
      {!!productCartList.length && <span>{productCartList.length}</span>}
    </button>
  )
}
