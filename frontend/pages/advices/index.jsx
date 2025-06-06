import { Head, Link } from '@inertiajs/react'
import Hero from '@/Hero/Hero'
import AdvicesCard from '../../components/AdvicesCard/AdvicesCard'

export default function Home({ advices }) {

  return (
    <>
      <Head title="Conseils" />
      <Hero title="Conseils" subtitle="Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. " grey>
        <p>recherche</p>
      </Hero>
      <ul>
        {advices.map((advice, index) => (
          <AdvicesCard key={index} data={advice} />
        ))}
      </ul>
    </>
  )
}
