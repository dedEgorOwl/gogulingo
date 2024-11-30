import styles from "./Footer.module.scss";
import langPackage from "../../../languagePackage/index.json";

const currentLang = "eng";

function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {langPackage.footer[currentLang].map((element, index) => {
                    return (
                        <div className={styles.element} key={index}>
                            <div className={styles.heading}>{element.title}</div>
                            {element.pages.map((item, jindex) => {
                                return (
                                    <div className={styles.item} key={jindex}>
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Footer;
