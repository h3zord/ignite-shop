import { ReactNode } from 'react'

export interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }[]
}

export interface SuccessProps {
  costumerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export interface IProductProviderProps {
  children: ReactNode
}

export interface IProductData {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

export interface IProductContext {
  productCartList: IProductData[]
  setProductCartListProxy: (data: IProductData[]) => void
  addProductToCart: (data: IProductData) => void
  removeProductFromCart: (id: string) => void
}
