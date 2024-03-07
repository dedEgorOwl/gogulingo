import styles from './Footer.module.scss';

function Footer({langPackage, currentLanguage}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {
                    langPackage.map((element, index) => {
                        return (
                            <div className={styles.element} key={index}>
                                <div className={styles.heading}>{element[currentLanguage][0]}</div>
                                {
                                    element[currentLanguage][1].map((item, jindex) => {
                                        return <div className={styles.item} key={jindex}>{item}</div>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Footer;