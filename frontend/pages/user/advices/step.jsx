import { Head } from "@inertiajs/react";
import AdvicesSection from '@/AdvicesSection/AdvicesSection';
import UserHero from "../../../components/UserHero/UserHero";

export default function Step() {
  return (
    <>
      <Head title="Mon espace" />
      <UserHero />
      <AdvicesSection stepUrl="/mon-espace/etapes" page="user" />
    </>
  )
}
