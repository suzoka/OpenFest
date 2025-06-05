import { Head, Link } from '@inertiajs/react'
import { Horse, Heart, Cube } from "@phosphor-icons/react";
import Heading from '../components/Titles/Titles.jsx'
import Button from '../components/Button/Button.jsx';
import { RocketLaunch, Headphones } from '@phosphor-icons/react';
import Stats from '../components/Stats/Stats.jsx';
import Partners from '../components/Partners/Partners.jsx';



import styles from '../css/pages/_homepage.module.scss';

export default function Home({}) {

  return (
    <>
      <Head title="Homepage" />
        <div className={styles.hero + ' ' + styles.container}>
          <div className={styles.hero_logo}>
              <img src="./images/confetti.svg" alt="Confettis" className={styles.confetti} />
              <img src="./images/logo.svg" alt="Logo d'Openfest" />
              <p> Les festivals à portée de toutes et tous !</p>
          </div>
        </div>
        <div className={styles.hero2}></div>
        <div className={styles.intro_container}>
          <div className={styles.intro_max_width}>
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
                <Button as="link" href="/deconnection" color="violet" type="primary" variant="text"> Découvrir la démarche </Button>
              </div>
              <img src="./images/placeholder.png" alt="Image d'illustration" className={styles.intro_image} />
            </div>
            <div className={styles.stats}>
              <Stats title="Festivals en France chaque année" color="violet" number={100} suffix="plus"/>
              <Stats title="Festivaliers PMR par festival" color="red" number={2500}/>
              <Stats title="Statistique 3" color="yellow" number={50} suffix="percent"/>
            </div>
          </div>
        </div>
        <div className={styles.thread_container}>
          <div className={styles.thread_max_width}>
            <div>
              <Heading as="h2" className={styles.thread_title}>Vous avez dit OpenFest ?</Heading>
              <p> Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra finibus nibh vitae placerat. In hac habitasse platea dictumst. Duis ut finibus purus. <strong>(Faudrait développer le bloc en dessous la team) </strong></p>
            </div>
            <img src="./images/thread.png" alt="Faut développer ça la team" className={styles.thread_image} />
            <div className={styles.thread_buttons}>
              <Button as="link" href="/conseils/etapes/1" color="red" type="primary" variant="right"> Explorer nos conseils <RocketLaunch size={24} /> </Button>
              <Button as="link" href="#" color="violet" type="secondary" variant="text"> Créer un compte festival </Button>
            </div>
          </div>
        </div>
        <div className={styles.podcast_container}>
          <div className={styles.podcast_max_width}>
            <div className={styles.podcast}>
              <img src="./images/podcast.png" alt="Podcast d'OpenFest" className={styles.podcast_image} />
              <div className={styles.podcast_text}>
                <Heading as="h2" className={styles.podcast_title}> Notre Podcast </Heading>
                <div className={styles.podcast_icons}>
                  <img src="./images/Soundcloud.svg" alt="Soundcloud" />
                  <img src="./images/Spotify.svg" alt="Spotify" />
                  <img src="./images/Deezer.svg" alt="Deezer" />
                  <img src="./images/Youtube_Music.svg" alt="Youtube Music" />
                  <img src="./images/Livello.svg" alt="Livello" />
                </div>
                <p> Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra finibus nibh vitae placerat. In hac habitasse platea dictumst. Duis ut finibus purus. </p>
                <Button as="link" href="#" color="violet" type="primary" variant="left"> <Headphones size={24} />  Écouter le podcast </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hr_container}>
          <hr className={styles.hr} />
        </div>
        <div className={styles.partners_container}>
          <div className={styles.partners_max_width}>
            <div className={styles.partners}>
              <div className={styles.partners_text}>
                <Heading as="h2" className={styles.partners_title}> Nos partenaires </Heading>
                <p> Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra finibus nibh vitae placerat. In hac habitasse platea dictumst. Duis ut finibus purus. </p>
              </div>
              <div className={styles.partners_boxes}>
              <Partners
                  name="APF France Handicap"
                  role={[{ label: "Association", color: "violet" }]}
                  image="./images/apf.png"
                  description="Association dédiée au développement web et mobile."
              />
              <Partners
                  name="Université Gustave Eiffel - IUT de Marne-la-Vallée"
                  role={[{ label: "Université", color: "yellow" }]}
                  image="./images/iut.png"
                  description="Université spécialisée dans les technologies de l'information."
              />
              <Partners
                  name="Ministère de la Culture"
                  role={[{ label: "Ministère", color: "red" }]}
                  image="./images/ministere.png"
                  description="Ministère en charge de la culture et des arts."
              />
              </div>
              <Button as="link" href="#" color="red" type="secondary" variant="text"> En savoir plus sur l’équipe </Button>
              </div>
            </div>
          </div>
    </>
  )
}
