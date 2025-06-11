import { useEffect } from 'react'
import { Head } from '@inertiajs/react'
import { Alien } from '@phosphor-icons/react'
import Heading from '@/Heading/Heading.jsx'
import Button from '@/Button/Button.jsx'
import Label from '@/Label/Label.jsx'
import Team from '@/Team/Team.jsx'
import Partners from '@/Partners/Partners.jsx'
import Stats from '@/Stats/Stats.jsx'
import Footer from '@/Footer/Footer.jsx'
import Hero from '@/Hero/Hero'
import AuthForm from '../components/AuthForm/AuthForm.jsx'
import UserHero from '../components/UserHero/UserHero.jsx'

export default function Home({ user, errors }) {
  return (
    <>
      <Hero title="Styles Guide" subtitle="Pour tester tout les composants sans craintes ni risques ! ✌️🤓" grey />

      <Heading as="h1"> OpenFest </Heading>

      <Stats title="Festivals en France chaque année" color="yellow" number={'100+'} />

      <div style={{ marginBottom: '50px' }}>
        <div style={{ display: 'flex', gap: '30px', marginLeft: '5px', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontFamily: 'Poppins_Bold' }}> Labels avec couleur prédéfinie</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Label color="violet"> color="violet"</Label>
              <Label color="red"> color="red"</Label>
              <Label color="yellow"> color="yellow"</Label>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontFamily: 'Poppins_Bold' }}> Labels avec couleur personnalisée</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Label color="#8E42E0" textcolor="#FAFAFA">
                {' '}
                color="#8E42E0" textcolor="#FAFAFA"
              </Label>
              <Label color="#F83B3B" textcolor="#FAFAFA">
                {' '}
                color="#F83B3B" textcolor="#FAFAFA"
              </Label>
              <Label color="#FFF000" textcolor="#151515">
                {' '}
                color="#FFF000" textcolor="#151515"
              </Label>
            </div>
          </div>
        </div>
      </div>
      <AuthForm mode="register" errors={errors} />

      <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
        <Team
          name="Lou-Anne Dubille"
          role={[
            { label: 'Dev', color: 'red' },
            { label: 'Gestion de Projet', color: 'yellow' },
          ]}
          image="/images/team/bg_team.png"
          description="UX/UI Designer, Intégrateur web, Cheffe de projet"
        />

        <Team
          name="Thomas Bansront"
          role={[
            { label: 'Créa', color: 'violet' },
            { label: 'Podcasteur', color: '#8E42E0' },
          ]}
          image="/images/team/bg_team.png"
          description="Rédacteur, Community manager, Mixeur, Chef d’équipe Créa"
        />
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
        <Partners
          name="APF France Handicap"
          role={[{ label: 'Association' }]}
          image="/images/partner/apf_logo.svg"
          description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Partners
          name="Université Gustave EIffel - IUT de Marne-la-Vallée"
          role={[{ label: 'Université', color: 'yellow' }]}
          image="/images/partner/iut_logo.png"
          description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Partners
          name="Ministère de la culture"
          role={[{ label: 'Ministère', color: 'red' }]}
          image="/images/partner/ministere_culture_logo.svg"
          description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <UserHero />
    </>
  )
}
