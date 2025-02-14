import React from "react";

import styles from "./style.module.scss";
import langPackage from "../../../languagePackage/index.json";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const isNotificationActive = false;

const Login: React.FC = () => {
    const currentLang = useTypedSelector((state) => state.language);
    const currentLoginType = useTypedSelector((state) => state.login.type);

    const { ChangeLoginInputs, ChangeModalState, ChangeLoginType } = useActions();

    const loginSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        console.log("login event");
    };

    const registerSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        console.log("register event");
    };

    return (
        <div className={styles.wrapper}>
            {isNotificationActive ? (
                <div className={styles.notification}>
                    <div className={styles.canc} style={{ backgroundImage: `url('/assets/cancel.svg')` }}></div>
                    <p>NOTIFICATION SAMPLE</p>
                </div>
            ) : (
                ""
            )}

            <div className={styles.header}>
                <div className={styles.closeModal} onClick={() => ChangeModalState("login", false)} style={{ backgroundImage: `url('/assets/close.svg')` }}></div>
                <div
                    className={styles.changeType}
                    onClick={() => {
                        currentLoginType === "login" ? ChangeLoginType("signup") : ChangeLoginType("login");
                    }}
                >
                    {currentLoginType === "login" ? <>{langPackage.login[currentLang].signup.toUpperCase()}</> : <>{langPackage.login[currentLang].login.toUpperCase()}</>}
                </div>
            </div>

            <div className={styles.center}>
                <p>{langPackage.login[currentLang][currentLoginType]}</p>
                <form>
                    {currentLoginType === "login" ? (
                        <>
                            <input
                                type="text"
                                placeholder={langPackage.login[currentLang].placeholders.login.toLowerCase()}
                                onChange={(e) => {
                                    ChangeLoginInputs("login", e.target.value);
                                }}
                            />
                            <input
                                type="password"
                                onChange={(e) => {
                                    ChangeLoginInputs("password", e.target.value);
                                }}
                                placeholder={langPackage.login[currentLang].placeholders.password.toLowerCase()}
                            />
                            <button type="submit" className={styles.btn} onClick={(event) => loginSubmit(event)}>
                                {langPackage.login[currentLang][currentLoginType].toUpperCase()}
                            </button>
                        </>
                    ) : (
                        <>
                            <input type="number" placeholder={langPackage.login[currentLang].placeholders.age.toLowerCase()} min={0} />
                            <input type="text" placeholder={langPackage.login[currentLang].placeholders.login.toLowerCase()} />
                            <input type="text" placeholder={langPackage.login[currentLang].placeholders.email.toLowerCase()} />
                            <input type="password" placeholder={langPackage.login[currentLang].placeholders.password.toLowerCase()} />
                            <button type="submit" className={styles.btn} onClick={(event) => registerSubmit(event)}>
                                {langPackage.login[currentLang][currentLoginType].toUpperCase()}
                            </button>
                        </>
                    )}
                </form>
                <div className={styles.or}>
                    <div className={styles.line}></div>
                    {langPackage.login[currentLang].alternative}
                    <div className={styles.line}></div>
                </div>
                <div className={styles.socBtns}>
                    <div className={styles.btnSoc}>
                        <div className={styles.img} style={{ backgroundImage: `url('/assets/facebook.svg')` }}></div>
                        <h1 style={{ color: "#3b5998" }}>FACEBOOK</h1>
                    </div>
                    <div className={styles.btnSoc}>
                        <div className={styles.img} style={{ backgroundImage: `url('/assets/google.svg')` }}></div>
                        <h1 style={{ color: "#3369E8" }}>GOOGLE</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
