import Header from "@/Header/Header"
import Footer from "@/Footer/Footer"
import { usePage } from '@inertiajs/react'

export default function Layout({ children }) {

  const { url } = usePage();


  return (
    <>
      <Header />
      <div>{children}</div>

      {
        !url.startsWith('/connection') &&
        !url.startsWith('/registration') &&
        <Footer />
      }
    </>
  )
}
