import { Head, Link } from '@inertiajs/react'
import Heading from '@/Heading/Heading.jsx'
import Button from '@/Button/Button.jsx';
import { RocketLaunch, Headphones } from '@phosphor-icons/react';
import Stats from '@/Stats/Stats.jsx';
import Partners from '@/Partners/Partners.jsx';
import Separator from '@/Separator/Separator';

import styles from '../css/pages/_homepage.module.scss';

export default function Home({ user }) {
  return (
    <>
      <Head title="Openfest" />
      <section className={styles.hero + ' ' + styles.container}>
        <div className={styles.hero_logo}>
          <img src="/images/decoration/confetti.svg" alt="Confettis" className={styles.confetti} />
          <img src="/images/logo/openfest_logo_black.svg" alt="Logo d'Openfest" />
          <h1 className="masked-element">OpenFest</h1>
          <p className='subtitle'> Les festivals à portée de toutes et tous !</p>
        </div>
      </section>
      <div className={styles.heroSeparator}></div>
      <main id='main'>
        <section className="section">
          <div className="max-width">
            <div className={styles.intro}>
              <div className={styles.intro_text}>
                <div>
                  <Heading as="h2" className={styles.intro_title}>Vous avez dit OpenFest ?</Heading>
                  <p>
                    Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra finibus nibh vitae placerat. In hac habitasse platea dictumst. Duis ut finibus purus.
                    <br></br><br></br>
                    Nunc sollicitudin nunc sit amet quam suscipit condimentum. Maecenas sodales malesuada dui eu commodo. Aliquam posuere sed nulla nec maximus. Etiam dignissim nunc urna, a tempor arcu euismod eu. Praesent hendrerit est est.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    <br></br><br></br>
                    Ut dictum justo ac metus rutrum, sed posuere mauris porta. Nullam id ultrices lorem, non fringilla ante.
                  </p>
                </div>
                <Button as="link" href="/info" color="violet" type="primary" variant="text"> Découvrir la démarche </Button>
              </div>
              <img src="https://placehold.co/400x600" alt="Image d'illustration" className={styles.intro_image} />
            </div>
            <div className={styles.stats}>
              <Stats title="Festivals en France chaque année" color="violet" number={100} suffix="plus" />
              <Stats title="Festivaliers PMR par festival" color="red" number={2500} />
              <Stats title="Statistique 3" color="yellow" number={50} suffix="percent" />
            </div>
          </div>
        </section>
        <section className="section section-grey section-decoration">
          <div className={`max-width ${styles.thread}`}>
            <div>
              <Heading as="h2" className={styles.thread_title}>Vous avez dit OpenFest ?</Heading>
              <p> Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra finibus nibh vitae placerat. In hac habitasse platea dictumst. Duis ut finibus purus. <span className='bold'>(Faudrait développer le bloc en dessous la team)</span></p>
            </div>
            <Link href="/conseils/etapes/1" className={styles.thread_image_link}>
              <img src="/images/thread.png" alt="Faut développer ça la team" className={styles.thread_image} />
            </Link>
            <div className={styles.thread_buttons}>
              <Button as="link" href="/conseils/etapes/1" color="red" type="primary" variant="right"> Explorer nos conseils <RocketLaunch size={24} /> </Button>
              { user ? (
                <Button as="link" href="/user" color="violet" type="secondary" variant="text"> Accéder à mon espace festival </Button>
              ) : (
                <Button as="link" href="/registration" color="violet" type="secondary" variant="text"> Créer un compte festival </Button>
              )}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="max-width">
            <div className={styles.podcast}>
              <img src="/images/photo/podcast.png" alt="Podcast d'OpenFest" className={styles.podcast_image} />
              <div className={styles.podcast_container}>
                <div className={styles.podcast_text}>
                  <Heading as="h2" className={styles.podcast_title}> Notre Podcast </Heading>
                  <div className={styles.podcast_icons}>
                    <a href="" target='_blank' title='Écouter sur Soundcloud' className={styles.podcast_LinkIcon}>
                      <img src="/images/icon/Soundcloud.svg" alt="Soundcloud" className={styles.podcast_Icon} />
                    </a>
                    <a href="" target='_blank' title='Écouter sur Spotify' className={styles.podcast_LinkIcon}>
                      <img src="/images/icon/Spotify.svg" alt="Spotify" className={styles.podcast_Icon} />
                    </a>
                    <a href="" target='_blank' title='Écouter sur Deezer' className={styles.podcast_LinkIcon}>
                      <img src="/images/icon/Deezer.svg" alt="Deezer" className={styles.podcast_Icon} />
                    </a>
                    <a href="" target='_blank' title='Écouter sur Youtube Music' className={styles.podcast_LinkIcon}>
                      <img src="/images/icon/Youtube_Music.svg" alt="Youtube Music" className={styles.podcast_Icon} />
                    </a>
                    <a href="" target='_blank' title='Écouter sur Apple Podcast' className={styles.podcast_LinkIcon}>
                      <img src="/images/icon/Apple_Podcast.svg" alt="Apple Podcast" className={styles.podcast_Icon} />
                    </a>
                  </div>
                  <p> Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra finibus nibh vitae placerat. In hac habitasse platea dictumst. Duis ut finibus purus. </p>
                </div>
                <Button as="link" href="/info#podcast" color="violet" type="primary" variant="left"> <Headphones size={24} />  Écouter le podcast </Button>
              </div>
            </div>
          </div>
        </section>
        <Separator />
        <section className="section">
          <div className={`max-width ${styles.partners}`}>
            <div className={styles.partners_text}>
              <Heading as="h2" className={styles.partners_title}> Nos partenaires </Heading>
              <p> Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra finibus nibh vitae placerat. In hac habitasse platea dictumst. Duis ut finibus purus. </p>
            </div>
            <div className={styles.partners_boxes}>
              <Partners
                name="APF France Handicap"
                role={[{ label: "Association", color: "violet" }]}
                image="/images/partner/apf_logo.svg"
                description="Association dédiée au développement web et mobile."
              />
              <Partners
                name="Université Gustave Eiffel - IUT de Marne-la-Vallée"
                role={[{ label: "Université", color: "yellow" }]}
                image="/images/partner/iut_logo.png"
                description="Université spécialisée dans les technologies de l'information."
              />
              <Partners
                name="Ministère de la Culture"
                role={[{ label: "Ministère", color: "red" }]}
                image="/images/partner/ministere_culture_logo.svg"
                description="Ministère en charge de la culture et des arts."
              />
            </div>
            <Button as="link" href="/info#equipe" color="red" type="secondary" variant="text"> En savoir plus sur l’équipe </Button>
          </div>
        </section>
      </main>
    </>
  )
}
