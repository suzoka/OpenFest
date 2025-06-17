import { useEffect, useRef, useState } from "react";
import styles from "./AdvicesStickyHeader.module.scss";
import { setTabIndexForChildren } from "../../utils/utils";
import ReturnBtn from '../../components/ReturnBtn/ReturnBtn'
import { ArrowUUpLeft, Ticket, Selection, BookmarkSimple, Share, RocketLaunch, CheckSquare, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House } from '@phosphor-icons/react'
import Button from '@/Button/Button.jsx'


const AdvicesStickyHeader = ({title, checked, children}) => {

    const stickyRef = useRef(null);
    const [scroll, setScroll] = useState(0);
    const scrollMax = 300;

    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const scrollPercentage = Math.min(scroll / scrollMax, 1);
        if (stickyRef.current) {
            stickyRef.current.style.opacity = scrollPercentage;

            if (scroll >= scrollMax) {
                setTabIndexForChildren(stickyRef, 0);
            } else {
                setTabIndexForChildren(stickyRef, -1);
            }
        }
    }, [scroll]);

    return (
        <div
            ref={stickyRef}
            className={`${styles.stickyHeader} ${scroll >= scrollMax ? styles.onscroll : ''} ${checked ? styles.checked : ''}`}
        >
            <div className={styles.stickyHeader__maxWidth}>
                <ReturnBtn />
                <p className={`p-large ${styles.stickyHeader__title}`}>
                    {title}
                </p>
                {children}
            </div>
        </div>
    );
};

export default AdvicesStickyHeader;