import { Head, Link } from '@inertiajs/react'
import Hero from '@/Hero/Hero'
import AdvicesCard from '@/AdvicesCard/AdvicesCard'
import ProgressStepTab from '@/ProgressStepTab/ProgressStepTab'
import styles from '../../../css/pages/_advices.module.scss';
import SwitchAdvices from '@/SwitchAdvices/SwitchAdvices';
import UserHero from "@/UserHero/UserHero";

export default function All({ advices }) {

    const count = advices?.length || 0;
    return (
        <>
            <Head title="Mes conseils" />
            <UserHero />
            <main id='main'>
                <div className={styles.advices__right}>
                    <div className={styles.advices__right_Header}>
                        <p>{count} conseil{count > 1 ? "s" : ""}</p>
                        <div className={styles.verticalSeparator}></div>
                        <SwitchAdvices current="all" page="user" />
                    </div>
                    <ul className={styles.advices__list}>
                        {advices?.map((advice, index) => (
                            <AdvicesCard key={`conseil${advice.id}`} data={advice} />
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}
