import styles from "./Header.module.scss";
import langPackage from "../../../languagePackage/index.json";

const currentLanguage = "eng";
const isLoginActive = false;

function Header() {
    return (
        <div className={styles.wrapper} style={{ borderBottom: scroll > 0 ? "solid 1px #ccc" : "solid 1px transparent", padding: isLoginActive ? "15px 0" : "" }}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.img} style={{ backgroundImage: "url(/assets/logo-green.svg)" }}></div>
                    <div className={styles.gog}>gogulingo</div>
                </div>
                <div className={styles.langChoice}>{langPackage.header[currentLanguage]}</div>
            </div>
        </div>
    );
}

export default Header;
