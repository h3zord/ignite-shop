import { Content, Overlay } from '@/styles/components/ShoppingBag'
import * as Dialog from '@radix-ui/react-dialog'

export function ShoppingBag() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        <Dialog.Close>x</Dialog.Close>
      </Content>
    </Dialog.Portal>
  )
}
