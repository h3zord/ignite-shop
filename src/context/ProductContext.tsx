import { createContext, useState } from 'react'
import {
  IProductContext,
  IProductData,
  IProductProviderProps,
} from '@/Interfaces'

export const ProductContext = createContext({} as IProductContext)

export function ProductContextProvider({ children }: IProductProviderProps) {
  const [productCartList, setProductCartList] = useState<IProductData[]>([])

  const setProductCartListProxy = (data: IProductData[]) => {
    setProductCartList(data)
  }

  const addProductToCart = (data: IProductData) => {
    const productAlreadyExists = productCartList.some(
      ({ id }) => id === data.id,
    )

    if (!productAlreadyExists) {
      setProductCartList((prevState) => [...prevState, data])
    }
  }

  const removeProductFromCart = (id: string) => {
    const filteredProducts = productCartList.filter(
      (product) => product.id !== id,
    )

    setProductCartList(filteredProducts)
  }

  return (
    <ProductContext.Provider
      value={{
        productCartList,
        setProductCartListProxy,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
