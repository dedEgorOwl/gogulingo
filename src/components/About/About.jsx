import styles from './About.module.scss';



function About({langPackage, currentLanguage}) {


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {
                    langPackage.map((element, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div className={styles.element} key={index} style={{flexDirection: 'row-reverse'}}>
                                    <div className={styles.right} style={{backgroundImage: `url(/assets/about_element_${index + 1}.svg)`}}></div>
                                    <div className={styles.left}>
                                        <div className={styles.p1}>{langPackage[index][currentLanguage][0]}</div>
                                        <div className={styles.p2}>{langPackage[index][currentLanguage][1]}</div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className={styles.element} key={index} style={{flexDirection: 'row'}}>
                                    <div className={styles.right} style={{backgroundImage: `url(/assets/about_element_${index + 1}.svg)`}}></div>
                                    <div className={styles.left}>
                                        <div className={styles.p1}>{langPackage[index][currentLanguage][0]}</div>
                                        <div className={styles.p2}>{langPackage[index][currentLanguage][1]}</div>
                                    </div>
                                </div>
                            )
                        }

                        
                    })
                }
            </div>
        </div>
    )
};

export default About;