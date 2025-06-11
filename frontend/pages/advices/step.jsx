import Hero from '@/Hero/Hero'
import { Head } from "@inertiajs/react";
import AdvicesSection from '@/AdvicesSection/AdvicesSection';

export default function Step() {
  return (
    <>
      <Head title="Conseils" />
      <Hero title="Conseils" subtitle="Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet." grey>
      </Hero>
      <AdvicesSection stepUrl="/conseils/etapes" page="advices" />
    </>
  )
}
