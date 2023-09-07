"use client"
import ProductPreview from "../product-preview"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductPreviewType } from "types/global"
import { useProducts } from "medusa-react"
import { useCart } from "medusa-react"
import transformProductPreview from "@lib/util/transform-product-preview"
import { Region } from "@medusajs/medusa"


type StoreProductsProps = {
  productsORs: PricedProduct[]
}


const StoreProducts = ( {productsORs} : StoreProductsProps) => {
  const { cart} = useCart()
  const productPreviewTypes: ProductPreviewType[] = []
  productsORs.forEach(productOR => {
    const { products, isLoading } = useProducts({
      id: productOR.id, 
      cart_id: cart?.id, 
      region_id: cart?.region?.id
    })
    const product = products?.[0];
    if(product?.id&&cart){
      try{
        const productPreviewType: ProductPreviewType = transformProductPreview(product, cart.region);
        productPreviewTypes.push(productPreviewType);
      } catch(e){
        console.log(e)
      }
    }
  })
  return (
    <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8">
      {productPreviewTypes.map((p) => (
        <li key={p.id}>
          <ProductPreview {...p} />
        </li>
      ))}
    </ul>
  )
}

export default StoreProducts
