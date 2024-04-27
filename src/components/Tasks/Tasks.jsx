import { useState } from 'react';

import styles from './Tasks.module.scss';

import Modaltsk from './Adds/Modaltsk';

function Tasks({langPackage, fakeDb, currentLanguage, playAudio, setCurrentPage}) {

    const [currentQuestionInput, setCurrentQuestionInput] = useState('');
    const [isCheckActive, setIsCheckActive] = useState(false);
    const [isModaltskActive, setIsModaltskActive] = useState(false);
    const [lastAnswerCorrectness, setLastAnswerCorrectness] = useState(false);
    const [current_Question, setCurrentQuestion] = useState(0);

    const handleTaskType = (currentQuestion) => {
        switch(currentQuestion.type) {
            case 'listening':
                return (
                    <div className={styles.task} key={currentQuestion.id}>
                        <div className={styles.title}>{currentQuestion.title[currentLanguage]}</div>
                        <div className={styles.img} style={{backgroundImage: `url('/assets/tasks/oscar.svg')`}}></div>
                        <div className={styles.btn} onClick={() => {playAudio(current_Question)}}>{langPackage[0][currentLanguage]}</div>
                        <input type="text" value={currentQuestionInput} onChange={(e) => {
                            setCurrentQuestionInput(e.target.value);
                            (e.target.value != '') ? setIsCheckActive(true) : setIsCheckActive(false);
                        }} />
                    </div>
                )
            case 'image':
                return (
                    <div className={styles.task} key={currentQuestion.id}>
                        akmdawlkdnma
                    </div>
                )
        };
    };

    const handleCheck = (currentQuestion) => {
        if (currentQuestion.answers[0][currentLanguage].toLowerCase() == currentQuestionInput.toLowerCase()) {
            setLastAnswerCorrectness(true);
        };
        setIsModaltskActive(true);
    };

    return (
        <div className={styles.wrapper}>
            {
                (isModaltskActive) ? <Modaltsk langPackage={langPackage} currentLanguage={currentLanguage} lastAnswerCorrectness={lastAnswerCorrectness} setIsModaltskActive={setIsModaltskActive} current_Question={current_Question} setCurrentQuestion={setCurrentQuestion} /> : ''
            }
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.head}>
                        <div className={styles.close} style={{backgroundImage: `url('/assets/close_grey.svg')`}} onClick={() => {setCurrentPage('index')}}></div>
                        <div className={styles.progressBar}><div className={styles.progress} style={{width: ((current_Question + 1) / fakeDb.tasks.length * 100 ) + '%'}}></div></div>
                    </div>
                    {handleTaskType(fakeDb.tasks[current_Question])}
                    {console.log(fakeDb.tasks[current_Question])}
                    <div className={(isCheckActive) ? `${styles.confirm} ${styles.confirmActive}` : styles.confirm} onClick={() => {
                        handleCheck(fakeDb.tasks[current_Question]);
                    }}>{langPackage[1][currentLanguage]}</div>
                </div>
            </div>
        </div>
    )
};

export default Tasks;