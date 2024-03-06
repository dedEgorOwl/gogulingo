import styles from './Main.module.scss';


function Main() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.left} style={{backgroundImage: "url('/assets/duolingo.svg')"}}></div>
                <div className={styles.right}>
                    <p>Учите языки бесплатно, весело и эффективно!</p>
                    <div className={styles.startBtn}>НАЧАТЬ</div>
                    <div className={styles.alreadyRegisteredBtn}>У МЕНЯ УЖЕ ЕСТЬ АККАУНТ</div>
                </div>
            </div>
        </div>
    )
};

export default Main;