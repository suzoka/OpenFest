import { Head, Link } from '@inertiajs/react'

export default function Home({ advices }) {

  return (
    <>
      <Head title="Advices" />
      <h1>Advices</h1>
      <ul>
        {advices.map((advice, index) => (
          <li key={index}>
            <Link href={`/advices/${advice.slug}`}>{advice.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
