import styles from "./Login.module.scss";
import langPackage from "../../../languagePackage/index.json";

const isNotificationActive = false;
const currentLang = "ru";
const currentLoginType = "login";

function Login() {
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
                <div className={styles.closeModal} style={{ backgroundImage: `url('/assets/close.svg')` }}></div>
                <div className={styles.changeType}>{currentLoginType === "login" ? <>{langPackage.login[currentLang].signup.toUpperCase()}</> : <>{langPackage.login[currentLang].login.toUpperCase()}</>}</div>
            </div>

            <div className={styles.center}>
                <p>{langPackage.login[currentLang][currentLoginType]}</p>
                <div className={styles.form}>
                    {Number(0) === 0 ? (
                        <>
                            <input type="text" placeholder={langPackage.login[currentLang].placeholders.login} />
                            <input type="password" placeholder={langPackage.login[currentLang].placeholders.password} />
                        </>
                    ) : (
                        <>
                            <input type="number" placeholder="5" />
                            <input type="text" placeholder="6" />
                            <input type="text" placeholder="7" />
                            <input type="password" placeholder="8" />
                        </>
                    )}
                </div>
                <div className={styles.btn}>{langPackage.login[currentLang][currentLoginType].toUpperCase()}</div>
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
}

export default Login;
