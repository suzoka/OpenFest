import Button from '../components/Button/Button.jsx'
import Team from '../components/Team/Team.jsx'
import Partners from '../components/Partners/Partners.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Heading from '../components/Heading/Heading.jsx'
import { RocketLaunch } from '@phosphor-icons/react'
import Podcast from '../components/Podcast/Podcast.jsx'
import Separator from '../components/Separator/Separator.jsx'

const TeamPerson = [
  {
    name: "Lou-Anne Dubille",
    role: [
      { label: 'Gestion de projet', color: 'yellow' },
      { label: 'Dev', color: 'red' },
    ],
    image: "/images/team/Lou-Anne.webp",
    description: "UX/UI Designer, Intégrateur web, Cheffe de projet"
  },
  {
    name: "Thomas Bansront",
    role: [
      { label: 'Créa', color: 'violet' },
    ],
    image: "/images/team/Thomas.webp",
    description: "Rédacteur, Community manager, Mixeur, Chef d’équipe Créa"
  },
  {
    name: "Nahina Boireau",
    role: [
      { label: 'Créa', color: 'violet' },
    ],
    image: "/images/team/Nahina.webp",
    description: "Graphiste, Illustratrice"
  },
  {
    name: "Idriss Merouane",
    role: [
      { label: 'Créa', color: 'violet' },
    ],
    image: "/images/team/Idriss.webp",
    description: "Assistant graphiste, Monteur/Vidéaste"
  },
  {
    name: "Morgan Zarka",
    role: [
      { label: 'Dev', color: 'red' },
    ],
    image: "/images/team/Morgan.webp",
    description: "Developpeur Fullstack, Administrateur serveur"
  },
  {
    name: "Robin Vigier",
    role: [
      { label: 'Dev', color: 'red' },
    ],
    image: "/images/team/Robin.webp",
    description: "UX/UI Designer, Intégrateur web"
  },
  {
    name: "Noah Calmette",
    role: [
      { label: 'Dev', color: 'red' },
    ],
    image: "/images/team/Noah.webp",
    description: "Responsable accessibilité, Intégrateur accessibilité, Rédacteur"
  },
  {
    name: "Yannick Midey",
    role: [
      { label: 'Dev', color: 'red' },
    ],
    image: "/images/team/Yannick.webp",
    description: "Intégrateur web, Rédacteur"
  }
]

import styles from '../css/pages/_info.module.scss';
import { Head } from '@inertiajs/react'

export default function Home({ user }) {
  return (
    <>
      <Head title="Démarche" />

      <Hero title={"La démarche"} subtitle={"Pourquoi OpenFest ? Par qui et pour qui ?"} />
      <main id="main">
        <section id="presentation" className={styles.advice + ' section section-grey section-decoration'}>
          <div className="max-width">
            <div className={styles.FestivalAccessible}>
              <Heading as="h2" variant="h2" className={styles.FestivalAccessibleTitle}> Pourquoi rendre un festival accessible ?</Heading>
              <p> Un festival c’est avant tout un moment à part, loin de tout. C’est ce frisson quand la musique démarre, ces retrouvailles ou ces rencontres improbables avec d’autres passionnés. C’est une bulle de joie, de découverte et de liberté. Mais pourtant, aujourd’hui encore, trop de personnes n’y ont pas pleinement accès. Et pas par manque d’envie : simplement parce que les lieux, les informations, ou l’accueil ne sont pas toujours pensés pour elles. </p>
            </div>

            <div className={styles.PouvoirAccessibilite}>
              <div className={styles.PouvoirAccessibilite_Left}>
                <p className={'p-large'}> Le pouvoir de l’accessibilité </p>
                <p> L’accessibilité, c’est permettre à chacun·e de vivre un festival dans les meilleures conditions, en toute autonomie, et sans stress. C’est s’assurer qu’une personne en fauteuil roulant puisse entrer facilement, qu’une personne sourde puisse suivre un concert, qu’une personne neuroatypique puisse trouver un espace calme pour souffler. Ce sont parfois des ajustements simples, mais qui font toute la différence.
                  <br />
                  <br />
                  Et il ne s’agit pas seulement de répondre à une obligation légale, ou de cocher une case, il s’agit de créer du lien, grâce à la culture. Ce qui fait qu’un festival est unique, ce n’est pas ce qui est présenté, c’est les gens qui s’y rendent, alors mieux vaut ne pas les laisser de côté. </p>
              </div>
              <img src="/images/advices/testImg2.jpg" alt="" className={styles.PouvoirAccessibilite_Right} />
            </div>

            <div className={styles.Conseils}>
              <p>
                Avec ce projet, développé en partenariat avec l’APF France Handicap, nous souhaitons vous accompagner, vous les organisateurs de festivals qui souhaitez les rendre accessible, à travers une checklist claire et accessible et des conseils concrets. L’objectif n’est pas de faire “parfait” mais de faire mieux.
                <br />
                <br />
                Un festival accessible, ce n’est pas juste un festival adapté, c’est un festival qui rassemble, et qui ressemble à une société qu’on veut construire : une société plus solidaire, plus humaine, et plus juste.
              </p>

              <Button as="link" href="/conseils" color="red" type="primary" variant="right"> Explorer nos conseils <RocketLaunch size={24} /></Button>
            </div>

            <img src="/images/advices/testImgBan.jpg" alt="" className={styles.ConseilsImage} />
          </div>
        </section>
        <Separator black />
        <section id="equipe" className={styles.team + ' section section-grey '}>
          <div className="max-width">
            <div className={styles.Equipe}>
              <Heading as="h2" variant="h2" className={styles.EquipeTitle}> L'Équipe OpenFest </Heading>
              <p>
                <strong className="bold">Nous, c’est OpenFest.</strong><br />
                Nous sommes une petite équipe passionnée, réunie autour d’une idée simple : <strong className="bold">la culture doit être accessible à tout le monde.</strong><br /> <br />
                Issus d’une formation dans les Métiers du Multimédia et de l’Internet, <strong className="bold">la culture est chez nous une notion essentielle</strong>, qui rythme l’apprentissage de nos compétences et de nos convictions : ce projet étant l’apogée de nos années d’études.
              </p>
            </div>
            <div className={styles.TeamGrid}>

              {TeamPerson.map((person, index) => (
                <Team
                  key={index}
                  name={person.name}
                  role={person.role}
                  image={person.image}
                  description={person.description}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="partenaires" className={styles.partners + ' section '}>
          <div className="max-width">
            <div className={styles.Partenaires}>
              <Heading as="h2" variant="h2" className={styles.PartnersTitle}> Nos Soutiens </Heading>
              <p> <strong className="bold">Un immense merci à celles et ceux qui nous soutiennent</strong>, et croient, comme nous, en une culture plus accessible et inclusive. </p>
            </div>
            <div className={styles.PartnersGrid}>
              <Partners
                name="APF France Handicap"
                role={[{ label: 'Association' }]}
                image="/images/partner/apf_logo.svg"
                description="Association dédiée au développement web et mobile."
              />
              <Partners
                name="Université Gustave EIffel - IUT de Marne-la-Vallée"
                role={[{ label: 'Université', color: 'yellow' }]}
                image="/images/partner/iut_logo.png"
                description="Université spécialisée dans les technologies de l'information."
              />
              <Partners
                name="Ministère de la culture"
                role={[{ label: 'Ministère', color: 'red' }]}
                image="/images/partner/ministere_culture_logo.svg"
                description="Ministère en charge de la culture et des arts."
              />
            </div>
          </div>
        </section>
        <Separator />
        <section id="podcast" className={styles.podcastContainer + ' section'}>
          <div className="max-width">
            <div className={styles.Podcast}>
              <Heading as="h2" variant="h2" className={styles.PodcastTitle}> Notre Podcast </Heading>
              <p>Professionnels, concernés, organisateurs : nos podcasts donnent la parole à celles et ceux qui rendent la culture plus inclusive.</p>
            </div>
          </div>
          <div className={styles.PodcastContainer}>
            <Podcast
              name="Épisode 4 : Lorem Ipsum dolor sit amet"
              date="12 janvier 2025"
              duration="23:12"
              soundcloud="#"
              spotify="#"
              deezer="#"
              youtube="#"
              apple_podcasts="#"
            />
            <Podcast
              name="Épisode 3 : Lorem Ipsum dolor sit amet"
              date="12 janvier 2025"
              duration="23:12"
              soundcloud="#"
              spotify="#"
              deezer="#"
              youtube="#"
              apple_podcasts="#"
            />
            <Podcast
              name="Épisode 2 : Lorem Ipsum dolor sit amet"
              date="12 janvier 2025"
              duration="23:12"
              soundcloud="#"
              spotify="#"
              deezer="#"
              youtube="#"
              apple_podcasts="#"
            />
            <Podcast
              name="Épisode 1 : Lorem Ipsum dolor sit amet"
              date="12 janvier 2025"
              duration="23:12"
              soundcloud="#"
              spotify="#"
              deezer="#"
              youtube="#"
              apple_podcasts="#"
            />
          </div>
        </section>

      </main>
    </>
  )
}
