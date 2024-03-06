import styles from './Main.module.scss';


function Main() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.left} style={{backgroundImage: "url('/assets/duolingo.svg')"}}></div>
                <div className={styles.right}>
                    
                </div>
            </div>
        </div>
    )
};

export default Main;