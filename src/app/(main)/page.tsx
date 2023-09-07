import { redirect } from 'next/navigation'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home= () => {
  redirect('/index.html');
}

export default Home
