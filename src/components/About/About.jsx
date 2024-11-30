import styles from "./About.module.scss";
import langPackage from "../../../languagePackage/index.json";

const currentLang = "eng";

function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {langPackage.about[currentLang].map((element) => {
                    if (element.id % 2 == 0) {
                        return (
                            <div className={styles.element} key={element.id} style={{ flexDirection: "row-reverse" }}>
                                <div className={styles.right} style={{ backgroundImage: `url(/assets/about_element_${element.id + 1}.svg)` }}></div>
                                <div className={styles.left}>
                                    <div className={styles.p1}>{element.title}</div>
                                    <div className={styles.p2}>{element.paragraph}</div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div className={styles.element} key={element.id} style={{ flexDirection: "row" }}>
                                <div className={styles.right} style={{ backgroundImage: `url(/assets/about_element_${element.id + 1}.svg)` }}></div>
                                <div className={styles.left}>
                                    <div className={styles.p1}>{element.title}</div>
                                    <div className={styles.p2}>{element.paragraph}</div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default About;
