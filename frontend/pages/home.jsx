import { Head, Link } from '@inertiajs/react'

export default function Home({ advice }) {

  return (
    <>
      <Head title="Homepage" />
      <p>
        Dernier conseil :
        {advice ? (
          <Link href={`/advices/${advice.id}`}>{advice.title}</Link>
        ) : (
          <span>Aucun conseil disponible</span>
        )}
      </p>

      <Link href="/advices/new">Créer un conseil</Link>
      <br />
      <Link href="/advices">Tous les conseils</Link>
    </>
  )
}
