import React, { useState } from "react";

import styles from "./style.module.scss";
import langPackage from "../../../languagePackage/index.json";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Notification from "../Notification/Notification";

const Login: React.FC = () => {
    const currentLang = useTypedSelector((state) => state.language);
    const currentLoginType = useTypedSelector((state) => state.login.type);

    const [isNotificationActive, setIsNotificationActive] = useState(false);
    const [notificationText, setNotificationText] = useState("");

    const [loginInputs, setLoginInputs] = useState({
        username: "",
        password: "",
    });

    const [registerInputs, setRegisterInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { ChangeLoginInputs, ChangeModalState, ChangeLoginType, RegisterRequest, LoginRequest } = useActions();

    const loginSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        if (loginInputs.username === "" || loginInputs.password === "") {
            setNotificationText(langPackage.login[currentLang].notifications.emptyInputs);
            setIsNotificationActive(true);
            return;
        }
        ChangeLoginInputs("login", loginInputs.username);
        ChangeLoginInputs("password", loginInputs.password);
        LoginRequest(loginInputs.username, loginInputs.password);
    };

    const registerSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        if (registerInputs.username === "" || registerInputs.password === "" || registerInputs.email === "") {
            setNotificationText(langPackage.login[currentLang].notifications.emptyInputs);
            setIsNotificationActive(true);
            return;
        }
        ChangeLoginInputs("login", registerInputs.username);
        ChangeLoginInputs("password", registerInputs.password);
        ChangeLoginInputs("email", registerInputs.email);
        RegisterRequest(registerInputs.email, registerInputs.password, registerInputs.username);
    };

    const onNotificationClick = () => {
        setIsNotificationActive(false);
    };

    return (
        <div className={styles.wrapper}>
            {isNotificationActive ? <Notification onNotificationClick={onNotificationClick} text={notificationText} /> : ""}

            <div className={styles.header}>
                <div className={styles.closeModal} onClick={() => ChangeModalState("login", false)} style={{ backgroundImage: `url('/assets/close.svg')` }}></div>
                <div
                    className={styles.changeType}
                    onClick={() => {
                        if (currentLoginType === "login") {
                            setLoginInputs({ username: "", password: "" });
                            ChangeLoginInputs("login", "");
                            ChangeLoginInputs("password", "");
                            ChangeLoginType("signup");
                        } else {
                            setRegisterInputs({ username: "", email: "", password: "" });
                            ChangeLoginInputs("login", "");
                            ChangeLoginInputs("password", "");
                            ChangeLoginInputs("email", "");
                            ChangeLoginType("login");
                        }
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
                                placeholder={langPackage.login[currentLang].placeholders.email.toLowerCase()}
                                onChange={(e) => {
                                    setLoginInputs({ ...loginInputs, username: e.target.value });
                                }}
                                value={loginInputs.username}
                                required
                            />
                            <input
                                type="password"
                                onChange={(e) => {
                                    setLoginInputs({ ...loginInputs, password: e.target.value });
                                }}
                                placeholder={langPackage.login[currentLang].placeholders.password.toLowerCase()}
                                value={loginInputs.password}
                                required
                            />
                            <button type="submit" className={styles.btn} onClick={(event) => loginSubmit(event)}>
                                {langPackage.login[currentLang][currentLoginType].toUpperCase()}
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder={langPackage.login[currentLang].placeholders.login.toLowerCase()}
                                onChange={(event) => {
                                    setRegisterInputs({ ...registerInputs, username: event.target.value });
                                }}
                                value={registerInputs.username}
                                required
                            />
                            <input
                                type="email"
                                placeholder={langPackage.login[currentLang].placeholders.email.toLowerCase()}
                                onChange={(event) => {
                                    setRegisterInputs({ ...registerInputs, email: event.target.value });
                                }}
                                value={registerInputs.email}
                                required
                            />
                            <input
                                type="password"
                                placeholder={langPackage.login[currentLang].placeholders.password.toLowerCase()}
                                onChange={(event) => {
                                    setRegisterInputs({ ...registerInputs, password: event.target.value });
                                }}
                                required
                                value={registerInputs.password}
                            />
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
