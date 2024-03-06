import styles from './Main.module.scss';


function Main({langPackage, currentLanguage}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.left} style={{backgroundImage: "url('/assets/duolingo.svg')"}}></div>
                <div className={styles.right}>
                    <p>{langPackage[0][currentLanguage]}</p>
                    <div className={styles.startBtn}>{langPackage[1][currentLanguage]}</div>
                    <div className={styles.alreadyRegisteredBtn}>{langPackage[2][currentLanguage]}</div>
                </div>
            </div>
        </div>
    )
};

export default Main;