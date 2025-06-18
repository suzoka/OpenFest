import { usePage } from "@inertiajs/react";
import StepPin from "../StepPin/StepPin";
import styles from "./Thread.module.scss";

const Thread = () => {


    const { url, props } = usePage();

    const steps = [
        {
            "value": "booking",
            "label": "Prise d'informations, Réservation",
            "icon": "Ticket",
            "count": 6
        },
        {
            "value": "transport",
            "label": "Transports",
            "icon": "TrainSimple",
            "count": 3
        },
        {
            "value": "reception",
            "label": "Arrivée sur site",
            "icon": "FlagBannerFold",
            "count": 3
        },
        {
            "value": "discovery",
            "label": "Découverte de l'événement",
            "icon": "MapTrifold",
            "count": 4
        },
        {
            "value": "health",
            "label": "Sanitaires",
            "icon": "ToiletPaper",
            "count": 4
        },
        {
            "value": "restauration",
            "label": "Bar et restauration",
            "icon": "ForkKnife",
            "count": 4
        },
        {
            "value": "place",
            "label": "Autres lieux sur le site",
            "icon": "MapPinArea",
            "count": 3
        },
        {
            "value": "event",
            "label": "L'événement",
            "icon": "Confetti",
            "count": 3
        },
        {
            "value": "accomodation",
            "label": "Hébergement",
            "icon": "Bed",
            "count": 3
        },
        {
            "value": "backhome",
            "label": "Retour chez soi",
            "icon": "House",
            "count": 3
        }
    ]

    return (
        <ul className={styles.thread__object}>
            {
                steps.map((step, index) => (
                    <li>
                        <StepPin key={index} number={index + 1} name={step.label} icon={step.icon} />
                    </li>
                ))
            }
        </ul>
    );
};

export default Thread;