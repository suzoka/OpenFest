import { Head, Link } from '@inertiajs/react'
import AdvicesCard from '@/AdvicesCard/AdvicesCard'
import styles from '../../../css/pages/_advices.module.scss';
import SwitchAdvices from '@/SwitchAdvices/SwitchAdvices';
import UserHero from "@/UserHero/UserHero";
import UserProgressTag from '../../../components/UserProgressTag/UserProgressTag';
import Heading from '@/Heading/Heading';
import AddAdvicesBtn from '../../../components/AddAdvicesBtn/AddAdvicesBtn';

export default function All({ advices }) {

    const count = advices?.length || 0;
    return (
        <>
            <Head title="Mes conseils" />
            <UserHero />
            <main id='main' className={styles.user__main_all}>
                <Heading as="h2" className={styles.user__h2}>Conseils enregistrés</Heading>
                <div className={styles.advices__right}>
                    <div className={styles.advices__right_Header}>
                        <UserProgressTag checkedCount={1} savedCount={count} />
                        <div className={styles.verticalSeparator}></div>
                        <SwitchAdvices current="all" page="user" />
                    </div>
                    <ul className={`${styles.advices__list} ${styles.user}`}>
                        {advices?.map((advice, index) => (
                            <AdvicesCard key={`conseil${advice.id}`} data={advice} />
                        ))}
                        <li>
                            <AddAdvicesBtn />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}
