import { Head } from '@inertiajs/react'

export default function Home({ advice }) {

  return (
    <>
      <Head title={advice.title} />
      <p>
        conseil : {advice.title}
      </p>
    </>
  )
}
