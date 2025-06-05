import React, { useState } from 'react'
import { Link } from '@inertiajs/react'
import { InstagramLogo, YoutubeLogo, LinkedinLogo, TiktokLogo } from '@phosphor-icons/react'

import Heading from '../Heading/Heading.jsx'
import Button from '../Button/Button.jsx'

import styles from './Footer.module.scss'
import Separator from '../Separator/Separator.jsx'

const Footer = () => {

  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.footer__container}>
        {/* Bloc haut */}
        <div className={styles.footer__containertop}>
          {/* Haut gauche : Contact + Réseaux sociaux */}
          <div className={styles.footer__topleft}>
            <div className={styles.footer__title}>
              <Heading as="h2" variant="h5">Contactez-nous</Heading>
              <a
                href="mailto:openfest.apffrancehandicap@gmail.com"
                target='_blank'
                className={styles.footer__button}
              >
                openfest.apffrancehandicap@gmail.com
              </a>
            </div>

            <div className={styles.footer__socials}>
              <Link
                href="https://www.instagram.com/team_openfest/"
                className={styles.footer__social}
              >
                <InstagramLogo size={32} />
              </Link>
              <Link href="https://www.youtube.com/@team_openfest" className={styles.footer__social}>
                <YoutubeLogo size={32} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/team-openfest-637786365/"
                className={styles.footer__social}
              >
                <LinkedinLogo size={32} />
              </Link>
              <Link href="https://www.tiktok.com/@team_openfest" className={styles.footer__social}>
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
        <Separator black fullpage/>

        {/* Bloc bas */}
        <div className={styles.footer__containerbottom}>
          {/* Bas gauche : Logos partenaires */}
          <div className={styles.footer__bottomleft}>
            <img src="./images/apf_logo.svg" alt="APF France Handicap" className={styles.footer__logo} />
            <img
              src="./images/iut.png"
              alt="Université Gustave Eiffel - IUT Marne-la-Vallée"
              className={styles.footer__logo}
            />
            <img
              src="./public/images/ministere_culture_logo.svg"
              alt="Soutenu par le Ministère de la Culture"
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
      </div>
    </footer>
  )
}

export default Footer
