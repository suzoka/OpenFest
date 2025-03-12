import { Head } from '@inertiajs/react'

export default function Home({advice}) {
  return (
    <>
      <Head title="Homepage" />
      <p>coucou</p>
      <p>{advice.title}</p>
    </>
  )
}
