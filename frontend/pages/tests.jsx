import { useEffect } from 'react'
import { Head } from '@inertiajs/react'
import { Alien } from '@phosphor-icons/react'
import ConnectionForm from '../components/ConnectionForm/ConnectionForm.jsx'
import Partners from '../components/Partners/Partners.jsx'
import Stats from '../components/Stats/Stats.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home({ user }) {
  return (
    <>
      <ConnectionForm />
      <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
        <Partners
          name="APF France Handicap"
          role={[{ label: 'Association' }]}
          image="/images/apf.png"
          description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Partners
          name="Université Gustave EIffel - IUT de Marne-la-Vallée"
          role={[{ label: 'Université', color: 'yellow' }]}
          image="/images/iut.png"
          description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Partners
          name="Ministère de la culture"
          role={[{ label: 'Ministère', color: 'red' }]}
          image="/images/ministere.png"
          description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <Footer />
    </>
  )
}
