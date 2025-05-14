import { Head, Link } from '@inertiajs/react'
import { Horse, Heart, Cube } from "@phosphor-icons/react";

export default function Home({ advice, user }) {

  return (
    <>
      <Head title="Homepage" />
      { user?.name || "guest" }
      <p>
        Dernier conseil :
        {advice ? (
          <Link href={`/advices/${advice.slug}`}>{advice.title}</Link>
        ) : (
          <span>Aucun conseil disponible</span>
        )}
      </p>

      <Link href="/advices/new">Créer un conseil</Link>
      <br />
      <Link href="/advices">Tous les conseils</Link>
      <br />
      <Link href="/logout" method='POST'>Déconnexion</Link>

      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
    </>
  )
}
