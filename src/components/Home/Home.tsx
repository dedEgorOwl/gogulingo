import React from "react";
import styles from "./style.module.scss";
import langPackage from "../../../languagePackage/index.json";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Home: React.FC = () => {
    const currentLang = useTypedSelector((state) => state.language);

    const { ChangeModalState, ChangeLoginType } = useActions();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.left} style={{ backgroundImage: "url('/assets/duolingo.svg')" }}></div>
                <div className={styles.right}>
                    <p>{langPackage.main[currentLang].title}</p>
                    <div>
                        <div
                            className={styles.startBtn}
                            onClick={() => {
                                ChangeLoginType("signup");
                                ChangeModalState("login", true);
                            }}
                        >
                            {langPackage.main[currentLang].register}
                        </div>
                        <div
                            className={styles.alreadyRegisteredBtn}
                            onClick={() => {
                                ChangeLoginType("login");
                                ChangeModalState("login", true);
                            }}
                        >
                            {langPackage.main[currentLang].login}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
