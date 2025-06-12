import { FlagBannerFold } from "@phosphor-icons/react";
import Label from "../Label/Label";
import styles from "./UserProgressTag.module.scss";

const UserProgressTag = ({ checkedCount, savedCount, navBar }) => {

    return (
        <div className={styles.UserProgressTag}>
            {savedCount > 0 ? (
                <>
                    <Label color="red">
                        <FlagBannerFold size={16} color="currentColor" />
                        {Math.round((checkedCount || 0) / (savedCount || 1) * 100)}%
                    </Label>
                    <p className={navBar ? "small" : ""}>{checkedCount || 0}/{savedCount || 0} conseil{savedCount > 1 && "s"}</p>
                </>
            ) : (
                <p className={`${navBar ? "small" : ""} ${styles.opacity}`}>0 conseil</p>
            )}
        </div>
    );
};

export default UserProgressTag;