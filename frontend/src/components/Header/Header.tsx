import React from "react";
import styles from "./style.module.scss";
import langPackage from "../../../languagePackage/index.json";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const isLoginActive = false;

const Header: React.FC = () => {
    const currentLang = useTypedSelector((state) => state.language);
    const scroll = useTypedSelector((state) => state.scroll);

    const { ChangeLanguage } = useActions();

    return (
        <div className={styles.wrapper} style={{ borderBottom: scroll > 100 ? "solid 1px #ccc" : "solid 1px transparent", padding: isLoginActive ? "15px 0" : "" }}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.img} style={{ backgroundImage: "url(/assets/logo-green.svg)" }}></div>
                    <div className={styles.gog}>gogulingo</div>
                </div>
                <div
                    className={styles.langChoice}
                    onClick={() => {
                        ChangeLanguage(currentLang);
                    }}
                >
                    {langPackage.header[currentLang]}
                </div>
            </div>
        </div>
    );
};

export default Header;
