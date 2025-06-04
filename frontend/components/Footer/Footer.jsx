import React from 'react'
import { Link } from '@inertiajs/react'
import { InstagramLogo, YoutubeLogo, LinkedinLogo, TiktokLogo } from '@phosphor-icons/react'

import Heading from '../Titles/Titles.jsx'
import Button from '../Button/Button.jsx'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {/* Bloc haut */}
        <div className={styles.footer__containertop}>
          {/* Haut gauche : Contact + Réseaux sociaux */}
          <div className={styles.footer__topleft}>
            <div className={styles.footer__title}>
              <Heading as="h5">Contactez-nous</Heading>
              <Button
                as="a"
                href="mailto:openfest.apffrancehandicap@gmail.com"
                color="violet"
                type="secondary"
                variant="text"
              >
                openfest.apffrancehandicap@gmail.com
              </Button>
            </div>

            <div className={styles.footer__socials}>
              <Link
                href="https://www.instagram.com/openfest.apf/"
                className={styles.footer__social}
              >
                <InstagramLogo size={32} />
              </Link>
              <Link
                href="https://www.facebook.com/apffrancehandicap"
                className={styles.footer__social}
              >
                <YoutubeLogo size={32} />
              </Link>
              <Link href="https://twitter.com/apffrancehandi1" className={styles.footer__social}>
                <LinkedinLogo size={32} />
              </Link>
              <Link href="https://twitter.com/apffrancehandi1" className={styles.footer__social}>
                <TiktokLogo size={32} />
              </Link>
            </div>
          </div>

          {/* Haut droit : Liens de navigation */}
          <nav className={styles.footer__topright}>
            <Link href="#" className={styles.footer__link}>
              Accueil
            </Link>
            <Link href="#" className={styles.footer__link}>
              Conseils
            </Link>
            <Link href="#" className={styles.footer__link}>
              Démarche
            </Link>
            <Link href="#" className={styles.footer__link}>
              Les festivals accessibles
            </Link>
          </nav>
        </div>

        {/* Séparateur visuel */}
        <hr className={styles.footer__separator} />

        {/* Bloc bas */}
        <div className={styles.footer__containerbottom}>
          {/* Bas gauche : Logos partenaires */}
          <div className={styles.footer__bottomleft}>
            <img src="./images/apf.png" alt="APF France Handicap" className={styles.footer__logo} />
            <img
              src="./images/iut.png"
              alt="Université Gustave Eiffel - IUT Marne-la-Vallée"
              className={styles.footer__logo}
            />
            <img
              src="./public/images/ministere.png"
              alt="Ministère de la Culture"
              className={styles.footer__logo}
            />
          </div>

          {/* Bas droit : Liens légaux */}
          <nav className={styles.footer__bottomright}>
            <Link href="#" className={styles.footer__link}>
              Politique de confidentialité
            </Link>
            <Link href="#" className={styles.footer__link}>
              Conditions générales d'utilisation
            </Link>
            <Link href="#" className={styles.footer__link}>
              Mentions légales
            </Link>
          </nav>
        </div>

        {/* Éléments graphiques décoratifs */}
        <div className={styles.footer__toplogo}>
          <img src="/images/traitsFooter.svg" alt="" className={styles.footer__logoextra} />
        </div>

        <div className={styles.footer__bottomlogo}>
          <img
            src="/images/openfestFooter.svg"
            alt="Logo OpenFest"
            className={styles.footer__logoextra}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
