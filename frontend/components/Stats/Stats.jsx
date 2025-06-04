import styles from './Stats.module.scss';
import React from 'react';

const Stats = ({
    title = "Statistique", 
    color = "violet",
    number = 0,
    children,
    ...rest

}) => {

    const colorClass = {
        violet : styles.stats__violet,
        red : styles.stats__red,
        yellow : styles.stats__yellow,
    }

    return (
        <div className={`${styles.stats}`} {...rest}>
            <div className={`${styles.stats__rectangle} ${colorClass[color]}`}></div>
            <p className={styles.stats__title}>{title}</p>
            <p className={styles.stats__number}>{number}</p>
            {children && <div className={styles.stats__children}>{children}</div>}
        </div>
    )
}
export default Stats;
