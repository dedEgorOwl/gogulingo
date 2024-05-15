import styles from './Modaltsk.module.scss';

function Modaltsk({langPackage, currentLanguage, lastAnswerCorrectness, setIsModaltskActive, current_Question, setCurrentQuestion, setIsCheckActive, setLastAnswerCorrectness}) {

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {(lastAnswerCorrectness) ? <div className={styles.title}>{langPackage[2][currentLanguage]}</div> : <div className={styles.title}>{langPackage[3][currentLanguage]}</div>}
                {(lastAnswerCorrectness) ? <img src='/assets/tasks/celebrating_emoji.png'></img> : <img src='/assets/tasks/sad_emoji.png'></img>}
                <div className={styles.letsGo} onClick={() => {
                    (lastAnswerCorrectness) ? setCurrentQuestion(current_Question+1) : {};
                    setIsCheckActive(false);
                    setLastAnswerCorrectness(false);
                    setIsModaltskActive(false);
                }}>{(lastAnswerCorrectness ? langPackage[4][currentLanguage] : langPackage[4][currentLanguage])}</div>
            </div>
        </div>
    )
};

export default Modaltsk;