import styles from "./UserStickyHeader.module.scss";
import { useEffect, useRef, useState } from "react";
import { setTabIndexForChildren } from "../../utils/utils";
import ReturnBtn from '../../components/ReturnBtn/ReturnBtn'

const UserStickyHeader = ({children}) => {

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
            className={`${styles.stickyHeader} ${scroll >= scrollMax ? styles.onscroll : ''}`}
        >
            <div className={styles.stickyHeader__maxWidth}>
                {children}
            </div>
        </div>
    );
};

export default UserStickyHeader;