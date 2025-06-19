import { Head } from '@inertiajs/react';
import styles from '../css/pages/_festival.module.scss';
import Hero from '../components/Hero/Hero';
import FestivalCard from '../components/FestivalCard/FestivalCard';

const Festivals = () => {

    return (
        <>
            <Head title="Les festivals inclusifs" />

            <Hero
                title="Les festivals inclusifs"
                subtitle="Découvrez ici une sélection d’événements qui ont fait le choix d’être inclusifs, accueillants et ouverts à toutes et tous."
                grey
            />
            <main id="main">
                <section className='section'>
                    <div className='max-width'>
                        <ul className={styles.festivals__list}>
                            <FestivalCard />
                            <FestivalCard />
                            <FestivalCard />
                            <FestivalCard />
                            <FestivalCard />
                            <FestivalCard />
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Festivals;