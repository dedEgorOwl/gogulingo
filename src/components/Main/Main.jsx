import styles from "./Main.module.scss";
import langPackage from "../../../languagePackage/index.json";

const currentLanguage = "eng";

function Main() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.left} style={{ backgroundImage: "url('/assets/duolingo.svg')" }}></div>
                <div className={styles.right}>
                    <p>{langPackage.main[currentLanguage].title}</p>
                    <div className={styles.startBtn}>{langPackage.main[currentLanguage].register}</div>
                    <div className={styles.alreadyRegisteredBtn}>{langPackage.main[currentLanguage].login}</div>
                </div>
            </div>
        </div>
    );
}

export default Main;
