import { Head } from '@inertiajs/react'
import styles from '../../css/pages/_conseil.module.scss'
import Heading from '@/Heading/Heading.jsx'
import { ArrowUUpLeft, Ticket, Selection, BookmarkSimple, Share, RocketLaunch, CheckSquare } from '@phosphor-icons/react'
import Label from '@/Label/Label.jsx'
import Button from '@/Button/Button.jsx'
import AdviceCard from '@/AdvicesCard/AdvicesCard.jsx'
import { Link } from '@inertiajs/react'
import { useEffect, useRef, useState } from 'react'
import { saveAdvice, checkAdvice } from "#/advices"
import ReturnBtn from '../../components/ReturnBtn/ReturnBtn'



export default function Home({ advice, user }) {

  const [checked, setChecked] = useState(advice?.isSelected?.length > 0 && advice?.isSelected[0]?.isChecked);
  const [saved, setSaved] = useState(advice?.isSelected?.length > 0 || false);
  const contentRef = useRef(null);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    if (contentRef.current) {
      setSummary([]);
      const headings = contentRef.current.querySelectorAll('h2');
      headings.forEach((heading) => {
        const id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
        heading.id = id;
        const summaryObject = {
          id: id,
          text: heading.textContent
        }
        setSummary((prev) => [...prev, summaryObject]);
      });
    }
  }, [contentRef]);

  return (
    <>
      <Head title={advice?.title} />
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <ReturnBtn />
          <Heading as="h1" variant="h1" className={styles.heroTitle}>
            {advice?.title}
          </Heading>
          <p>{advice?.description}</p>
        </div>
        <div className={styles.heroRight}>
          <Ticket size={424} className={styles.step_icon_large} />
          <div className={styles.step_tags}>
            <div className={styles.step_container}>
              <p className={`bold ${styles.step_name}`}><span>01</span>Prise d'informations et réservation</p>
              <span className={styles.step_logo}><Ticket size={20} /></span>
            </div>
            <div className={styles.tag_container}>
              {/* Tag type d'handicap */}
              <div>
                {advice.forPmr && <Label color="violet">PMR</Label>}
                {advice.forCimp && <Label color="red">CIMP</Label>}
                {advice.forDs && <Label color="yellow">Handicaps sensoriels</Label>}
              </div>
              {/* Tag supplémentaire */}
              <div>
                {advice?.tags.map((tag, index) => (
                  <Label key={index} color="blue">{tag}</Label>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.action_container}>

            <Share size={32} />
            {user && (
              <div className={styles.action_buttons}>

                {
                  saved ? (
                    <>
                      <Button as="button" variant="only" type="secondary" onClick={() => checkAdvice(setChecked, !checked, advice.id)}>
                        {
                          checked ? (
                            <CheckSquare size={24} weight="fill" />
                          ) : (
                            <Selection size={24} />
                          )
                        }
                      </Button>
                      <Button className={styles.save_Btn} type="secondary" color="red" variant="left" onClick={() => saveAdvice(setSaved, !saved, advice.id)}>
                        <BookmarkSimple weight='fill' size={24} />
                        Supprimer
                      </Button>
                    </>
                  ) : (
                    <Button className={styles.save_Btn} variant="left" onClick={() => saveAdvice(setSaved, !saved, advice.id)}>
                      <BookmarkSimple size={24} />
                      Enregistrer
                    </Button>
                  )
                }
              </div>
            )}
          </div>
          {/* <p><strong>Étape :</strong> {advice?.category}</p> */}
        </div>
      </div>
      <main id="main">
        <section className={styles.advice + ' section section-grey section-decoration'}>
          <div className="max-width">
            <div className={styles.adviceFlex}>
              <div className={styles.adviceMenu}>
                <p className="p-large"> Sommaire </p>
                <ul>
                  {summary.map((item, index) => (
                    <li key={index}>
                      <a href={`#${item.id}`}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.adviceSeparator}></div>
              <div className={styles.adviceContent} ref={contentRef} dangerouslySetInnerHTML={{ __html: advice?.content }}></div>
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
              {advice?.similarAdvices.map((similarAdvice, index) => (
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