import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import medusaRequest from "@lib/medusa-fetch"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME.",
}

async function getStores() {
  try{
    const res = await medusaRequest("GET", "s", {})
    if (!res.ok) {
    }
    return res.body
  } catch(e){
    return {store:{}}
  }
}


async function Home() {
  const jsonMessage = await getStores()
  .then((data) => {
    let jsonMessage = {
      "page": "landing",
      "data": data
    };
    return jsonMessage
  })
  return (
    <>
      <Hero />
      <FeaturedProducts message = {jsonMessage}/>
    </>
  )
}

export default Home
