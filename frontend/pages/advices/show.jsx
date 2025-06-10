import { Head } from '@inertiajs/react'
import styles from '../../css/pages/_conseil.module.scss'
import Heading from '@/Heading/Heading.jsx'
import {ArrowUUpLeft, Ticket, Selection, BookmarkSimple, Share, RocketLaunch} from '@phosphor-icons/react'
import Label from '@/Label/Label.jsx'
import Button from '@/Button/Button.jsx'
import AdviceCard from '@/AdvicesCard/AdvicesCard.jsx'
import { Link } from '@inertiajs/react'


export default function Home({ advice }) {
  return (
    <>
      <Head title={advice.title} />
      <main id="main">  
          <div className={styles.hero}>
            <div className={styles.heroLeft}>
                <Link href="/conseils">
              <div className={styles.heroReturn}>
                  <div className={styles.heroReturnIcon}>
                      <ArrowUUpLeft size={24} />
                  </div>
                    <p> Retour </p>
                  </div>
                </Link> 
              <Heading as="h1" variant="h1" className={styles.heroTitle}>
                {advice.title}
              </Heading>
                <p>{advice.description}</p>
            </div>
            <div className={styles.heroRight}>
              <Ticket size={424} className={styles.step_icon_large} />
              <div className={styles.step_tags}>
                <div className={styles.step_container}>
                  <p className={styles.step_name}><span>01</span> Prise d'informations et réservation</p>
                  <span className={styles.step_logo}><Ticket size={20}/></span>
                </div>
                <div className={styles.tag_container}>
                  <div>
                    <Label color="violet">PMR</Label>
                    <Label color="red">CIMP</Label>
                    <Label color="yellow">Handicaps Sensoriels</Label>
                  </div>
                  <div>
                    <Label color="violet"> Accès Physique </Label>
                  </div>
                </div>
              </div>
              <div className={styles.action_container}>
                <Share size={32} />
                <Button variant="only" type="secondary"><Selection size={24} /></Button>
                <Button variant="left"> <BookmarkSimple size={24}/> Ajouter</Button>
              </div>
              {/* <p><strong>Étape :</strong> {advice.category}</p> */}
            </div>
          </div>
        <section className={styles.advice + ' section section-grey section-decoration'}>
          <div className="max-width">
            <div className={styles.adviceFlex}>
              <div className={styles.adviceMenu}>
                <p> Sommaire </p>
                <ul>
                  <li>
                    <a href="#context"> Contexte </a> 
                  </li>
                  <li>
                    <a href="#mise_oeuvre"> Mise en oeuvre </a>
                  </li>
                  <li>
                    <a href="#resources"> Ressources </a>
                  </li>
                  <li>
                    <a href="#example"> Exemple </a>
                  </li>
                </ul>
              </div>
              <div className={styles.adviceSeparator}></div>
              <div className={styles.adviceContent}>
                <div>
                  <div
                    dangerouslySetInnerHTML={{ __html: advice.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={'similar_rules section section-decoration'}>
          <div className="max-width">
            <div className={styles.similarRules_Text}>
              <Heading as="h2" variant="h2">Règles similaires</Heading>
              <p> Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra finibus nibh vitae placerat. In hac habitasse platea dictumst. Duis ut finibus purus. </p>
            </div>

            <div className={styles.similarRules_Cards}>
              {advice.similarAdvices.map((similarAdvice, index) => (
                <AdviceCard key={index} data={similarAdvice} />
              ))}
            </div>

            <Button as="link" href="/conseils" color="red" type="primary" variant="right"> Explorer les autres conseils <RocketLaunch size={24} /> </Button>
          </div>
        </section>
      </main>
    </>
  )
}