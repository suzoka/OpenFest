/* 
! Button Component 
! Description : Composant de bouton réutilisable pour les pages 
! Props : as, color, type, variant, href

* as : Détermine le type de bouton à afficher
* color : Couleur du bouton (violet, red, yellow)
* type : Type de bouton (primary, secondary, outlined)
* variant : Variante du bouton (text, only, right, left)
* href : Lien vers lequel le bouton redirige (pour les liens externes et internes)

? as = "button" || Utilisé pour les boutons
* Usable Props : Variant, color, type
* Example : <Button color="violet" type="primary" variant="text"> Texte </Button> || Affiche un bouton violet avec un texte 

? as = "a" || Utilisé pour les liens externes
* Usable Props : Variant, color, type, href
* Example : <Button as="a" href="https://google.com" color="violet" type="primary" variant="text"> Texte </Button> || Affiche un bouton violet avec un texte et un lien vers google

? as = "link" || Utilisé pour les liens internes
* Usable Props : Variant, color, type, href
* Example : <Button as="link" href="/logout" color="violet" type="primary" variant="text"> Texte </Button> || Affiche un bouton violet avec un texte et un lien vers la page de déconnexion

* C'est mon premier composant la team :D Soyez gentils :D 
*/

import { Link } from '@inertiajs/react'
import styles from './Button.module.scss'

const Button = ({
    variant = "text",
    as = "button",
    href,
    color = "violet",
    type = "primary",
    className = "",
    children,
    ...rest
}) => {
    const typeClass =  {
        primary: styles.btn__primary,
        secondary: styles.btn__secondary,
        outlined : styles.btn__outlined,
    }
    const variantClass = {
        text: styles.btn__text,
        only: styles.btn__image,
        right: styles.btn__textImage,
        left: styles.btn__imageText,
    }
    const colorClass = {
        violet : styles.btn__violet,
        red : styles.btn__red,
        yellow : styles.btn__yellow,
    }
    const classStyle = `${typeClass[type]} ${colorClass[color]} ${variantClass[variant]} ${styles.btn} ${className}`;

    if (as === "a" && href) {
        return (
            <a href={href} className={classStyle} {...rest}>
                {children}
            </a>
        );
    }

    if (as === 'link' && href) {
        return (
            <Link href={href} className={classStyle} {...rest}>
                {children}
            </Link>
        );
    }

    // Default to button
    const Tag = as;
    return (
        <Tag className={classStyle} {...rest}>
            {children}
        </Tag>
    );
}

export default Button
