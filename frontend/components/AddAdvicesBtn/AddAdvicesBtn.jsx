import { Link } from "@inertiajs/react";
import styles from "./AddAdvicesBtn.module.scss";
import { PlusCircle } from "@phosphor-icons/react";

const AddAdvicesBtn= ({step}) => {

    return (
        <Link href={step ? `/conseils/etapes/${step}` : "/conseils"} className={`bold ${styles.addAdvicesBtn}`}>
            Ajouter des conseils
            <PlusCircle size={24} weight="fill" />
        </Link>
    );
};

export default AddAdvicesBtn;