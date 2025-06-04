import { Head, Link } from '@inertiajs/react'
import { Horse, Heart, Cube } from "@phosphor-icons/react";
import Heading from '../components/Titles/Titles.jsx'
import Button from '../components/Button/Button.jsx';
import { Alien, RocketLaunch } from '@phosphor-icons/react';
import Stats from '../components/Stats/Stats.jsx';

import styles from '../css/pages/_homepage.module.scss';

export default function Home({}) {

  return (
    <>
      <Head title="Homepage" />
        <div className={styles.hero + ' ' + styles.container}>
          <div className={styles.hero_logo}>
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
                <Button as="link" href="/logout" color="violet" type="primary" variant="text"> Découvrir la démarche </Button>
              </div>
              <img src="./images/placeholder.png" alt="Image d'illustration" className={styles.intro_image} />
            </div>
            <div className={styles.stats}>
              <Stats title="Festivals en France chaque année" color="violet" number={"100+"}/>
              <Stats title="Festivaliers PMR par festival" color="red" number={"2500"}/>
              <Stats title="Statistique 3" color="yellow" number={"50%"}/>
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
              <Button as="link" href="#" color="red" type="primary" variant="right"> Explorer nos conseils <RocketLaunch size={24} /> </Button>
              <Button as="link" href="#" color="violet" type="secondary" variant="text"> Créer un compte festival </Button>
            </div>
          </div>
        </div>
    </>
  )
}
