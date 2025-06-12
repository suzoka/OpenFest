import { router, usePage } from "@inertiajs/react";
import styles from "./AdvicesAside.module.scss";
import ProgressStepTab from "@/ProgressStepTab/ProgressStepTab";
import { useEffect, useRef } from "react";

const AdvicesAside = ({ steps, stepUrl, page }) => {

    const { url } = usePage();

    const asideRef = useRef(null);

    useEffect(() => {
        const handleBeforeVisit = () => {
            if (asideRef.current) {
                sessionStorage.setItem("asideScroll", asideRef.current.scrollTop);
            }
        };
        router.on("before", handleBeforeVisit);
    }, []);

    useEffect(() => {
        if (asideRef.current) {
            const scroll = sessionStorage.getItem("asideScroll");
            if (scroll) {
                asideRef.current.scrollTop = scroll;
            }
        }
    }, [url]);

    return (
        <aside ref={asideRef} className={`${styles.AdvicesAside} ${page === "user" ? styles.user : ""}`}>
            {
                page === "advices" && <p className={`p-large ${styles.AdvicesAside__title}`}>Cheminement</p>
            }
            <ul className={styles.AdvicesAside__progressList}>
                {steps.map((step, i) => (
                    <ProgressStepTab key={i} id={i} data={step} stepUrl={stepUrl} page={page} />
                ))}
            </ul>
        </aside>
    );
};

export default AdvicesAside;