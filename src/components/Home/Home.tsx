import React from "react";
import styles from "./style.module.scss";
import langPackage from "../../../languagePackage/index.json";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Home: React.FC = () => {
    const currentLang = useTypedSelector((state) => state.language);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.left} style={{ backgroundImage: "url('/assets/duolingo.svg')" }}></div>
                <div className={styles.right}>
                    <p>{langPackage.main[currentLang].title}</p>
                    <div className={styles.startBtn}>{langPackage.main[currentLang].register}</div>
                    <div className={styles.alreadyRegisteredBtn}>{langPackage.main[currentLang].login}</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
