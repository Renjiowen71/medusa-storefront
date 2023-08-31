import medusaRequest from "@lib/medusa-fetch"
import StoreTemplate from "@modules/stores/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { handle: string }
}

async function getStore(handle: string) {
  try{
    const res = await medusaRequest("GET", "s/"+handle, {})
    if (!res.ok) {
      notFound()
    }
    return res.body
  } catch(e){
    return {store:{}}
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { store } = await getStore(params.handle)
  if (!store.id) {
    notFound()
  }

  return {
    title: `${store.name} | Acme Store`,
    description: `${store.name}`,
    openGraph: {
      title: `${store.name} | Acme Store`,
      description: `${store.name}`,
    },
  }
}

export default async function CollectionPage({ params }: Props) {
  const { store, products } = await getStore(params.handle)
  return <StoreTemplate store={store} products={products}/>
}
