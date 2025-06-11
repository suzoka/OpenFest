import { Head } from "@inertiajs/react";
import AdvicesSection from '@/AdvicesSection/AdvicesSection';

export default function Step() {
  return (
    <>
      <Head title="Mes conseils" />
      <AdvicesSection stepUrl="/mon-espace/etapes" />
    </>
  )
}
