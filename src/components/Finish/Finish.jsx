import styles from './Finish.module.scss';

import Header from '../Header/Header';

function Finish({langPackage, fakeDb, currentLanguage}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.img} style={{backgroundImage: 'url("/assets/duoflight.svg")'}}></div>
                <div className={styles.greets}>{langPackage[0][currentLanguage]}</div>
                <div className={styles.bye}>{langPackage[1][currentLanguage]}</div>
            </div>
        </div>
    )
};

export default Finish;