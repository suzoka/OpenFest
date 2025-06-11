/* 
! Label Component 
! Description : Composant de label réutilisable pour les pages
! Props : color, textcolor, children

* color : Couleur du label (violet, red, yellow) ou une couleur personnalisée (par exemple, #ff0000)
* textcolor : Couleur du texte du label (par exemple, #ffffff) || uniquement utilisé si la couleur n'est pas prédéfinie
* children : Contenu du label

? Couleur prédéfinie :
* violet : Utilise la classe styles.label_violet
* red : Utilise la classe styles.label_red
* yellow : Utilise la classe styles.label_yellow
* Si une couleur personnalisée est fournie, elle sera appliquée en tant que style en ligne
* Example : <Label color="violet">Coucou</Label> || Affiche un label violet avec la classe styles.label_violet

? Si une couleur personnalisée est fournie :
* La couleur de fond du label sera définie sur la couleur personnalisée
* La couleur du texte sera définie sur la couleur personnalisée ou sur #ffffff si aucune couleur n'est fournie
* Example : <Label color="#ff0000" textcolor="#ffffff">Coucou</Label> || Affiche un label avec une couleur de fond rouge et un texte blanc
*/

import styles from './Label.module.scss';
const Label = ({
        color = "violet",
        textcolor = "#ffffff",
        className = "",
        children,
    }) => {
        const colorClass = {
            violet : styles.label_violet,
            red : styles.label_red,
            yellow : styles.label_yellow,
        };

        const isPredefined = color in colorClass;
        const spanClass = `${styles.label} ${isPredefined ? colorClass[color] : styles.label_custom} ${className}`;
        const customStyle = !isPredefined ? { backgroundColor: color || "#000000", color: textcolor || "#ffffff" } : {};

        return (
            <span className={spanClass} style={customStyle}>
                {children} 
            </span>
        );
    }

export default Label;