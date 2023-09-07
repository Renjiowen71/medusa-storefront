"use client"

import { useIntersection } from "@lib/hooks/use-in-view"
import React, { useRef } from "react"
import StoreProducts from "@modules/products/components/store-products"
import { Store } from "../../../types/global"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type StoreTemplateProps = {
  store: Store
  products: PricedProduct[]
}


const StoreTemplate: React.FC<StoreTemplateProps> = ({ store, products }) => {
  
  let message = {
    "page": "stores",
    "data": store
  };
  try{
    globalThis.top?.postMessage(message)
  } catch(e){}

  const info = useRef<HTMLDivElement>(null)

  const inView = useIntersection(info, "0px")

  return (
    <div className="content-container flex flex-col relative" style={{padding:'20px'}}>
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-2xl-regular text-gray-900 max-w-lg">
        {store.name}'s Products
        </p>
      </div>
        <StoreProducts productsORs={products} />
    </div>
  )
}

export default StoreTemplate
