import Hero from '@/Hero/Hero'
import { Head } from "@inertiajs/react";
import AdvicesSection from '@/AdvicesSection/AdvicesSection';

export default function Step() {
  return (
    <>
      <Head title="Conseils" />
      <Hero title="Conseils" subtitle="Besoin d’un coup de pouce ? Retrouvez ici tous nos conseils pour passer à l’action." grey>
      </Hero>
      <AdvicesSection stepUrl="/conseils/etapes" page="advices" />
    </>
  )
}
