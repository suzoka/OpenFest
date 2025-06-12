import styles from './Stats.module.scss';
import React, { Suspense } from 'react';
const CountUp = React.lazy(() => import('react-countup'));

const Stats = ({
    title = "Statistique", 
    color = "violet",
    number = 0,
    suffix="",
    children,
    ...rest

}) => {

    const colorClass = {
        violet : styles.stats__violet,
        red : styles.stats__red,
        yellow : styles.stats__yellow,
    }

    const suffixText = {
        plus: "+",
        percent: "%",
        millions: "M",
        kPlus: "k+",
        sur2: "/2",
    }

    return (
        <div className={`${styles.stats}`} {...rest}>
            <div className={`${styles.stats__rectangle} ${colorClass[color]}`}></div>
            <p className={styles.stats__title}>{title}</p>
                <Suspense fallback={<span>0</span>}>
                    <CountUp 
                        className={styles.stats__number} 
                        start={0} 
                        end={number} 
                        duration={2.75} 
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        separator=" " 
                        decimals={0} 
                        decimal="," 
                        suffix={suffixText[suffix] || ""}
                    />
                </Suspense>
            {children && <div className={styles.stats__children}>{children}</div>}
        </div>
    )
}
export default Stats;
