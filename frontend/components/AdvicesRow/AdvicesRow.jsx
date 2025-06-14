import { Link, usePage } from '@inertiajs/react'
import styles from "./AdvicesRow.module.scss";
import Label from "@/Label/Label";
import Button from "@/Button/Button";
import { BookBookmark, BookmarkSimple, CheckSquare, Selection, Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House } from "@phosphor-icons/react";
const icons = { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House }
import { saveAdvice, checkAdvice } from "#/advices"
import { useState } from "react";

const AdvicesRow = ({ data, variant }) => {

    const { url, props } = usePage()
    const { user } = props;

    const [checked, setChecked] = useState(data?.isSelected?.length > 0 && data?.isSelected[0]?.isChecked);
    const [saved, setSaved] = useState(data?.isSelected?.length > 0 || false);

    const Icon = icons[data?.categoryData?.icon];

    return (
        <li className={`${styles.advicesRow} ${checked ? styles.checked : ""}`}>
            {saved &&
                <Button as="button" variant="only" type="secondary" className={styles.advicesRow__button} onClick={() => checkAdvice(setChecked, !checked, data.id)}>
                    {
                        checked ? (
                            <CheckSquare size={24} weight="fill" />
                        ) : (
                            <Selection size={24} />
                        )
                    }
                </Button>
            }
            {variant === "all" ? (
                <Link href={`/mon-espace/etapes/${data?.categoryData?.index}`} className={`${styles.advicesRow__step_wrapper} ${styles.full}`}>
                    <Icon size={28} className={styles.step_icon} />
                    <p className={styles.step_name}>{data?.categoryData?.label}</p>
                </Link>
            ) : (
                <Link href={`/conseils/etapes/${data?.categoryData?.index}`} className={styles.advicesRow__step_wrapper}>
                    <Icon size={32} className={styles.step_icon} />
                    <p className="masked-element">{data?.categoryData?.label}</p>
                </Link>
            )}
            <Link className={`bold ${styles.advicesRow__title}`} href={`/conseils/${data?.slug}`}>
                {data?.title}
            </Link>
            <div className={styles.advicesRow__tag_wrapper}>
                {data.forPmr && <Label color="violet">PMR</Label>}
                {data.forCimp && <Label color="red">CIMP</Label>}
                {data.forDs && <Label color="yellow">Handicaps sensoriels</Label>}
            </div>
            <div className={styles.advicesRow__btn_wrapper}>
                <Button as="link" href={`/conseils/${data?.slug}`}>
                    <BookBookmark size={24} />
                    Lire
                </Button>
                {user && (
                    <Button as="button" variant="only" type="secondary" color={saved ? "red" : "violet"} className={styles.advicesRow__button} onClick={() => saveAdvice(setSaved, !saved, data.id)}>
                        {saved ? (
                            <BookmarkSimple size={24} weight="fill" />
                        ) : (
                            <BookmarkSimple size={24} />
                        )}
                    </Button>
                )}
            </div>
        </li>
    );
};

export default AdvicesRow;
