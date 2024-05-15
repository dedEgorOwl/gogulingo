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
                    <div className={styles.task} key={currentQuestion.id} style={{display: 'flex', flexDirection: 'column', }}>
                        <div className={styles.title}>{currentQuestion.title[currentLanguage]}</div>
                        <div className={styles.row}>
                            {currentQuestion.labels[currentLanguage].map((item, index) => {
                                return (
                                    <div className={(currentQuestionInput === index) ? `${styles.rowItem} ${styles.rowItemActive}` : styles.rowItem} onClick={(e) => {
                                        setCurrentQuestionInput(index);
                                        setIsCheckActive(true);
                                        }} key={index}>
                                        <div className={styles.imaj} style={{backgroundImage: `url('${currentQuestion.path_to_file[index]}')`}}></div>
                                        <div className={styles.label}>{item}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            case 'puttogether':
                return (
                    <div className={styles.task} key={currentQuestion.id} style={{display: 'flex', flexDirection: 'column', }}>
                        <div className={styles.title}>{currentQuestion.title[currentLanguage]}</div>
                        <div className={styles.row}>
                            <div className={styles.top}>
                                {handlePutTogether(currentQuestion)}
                            </div>
                        </div>
                    </div>
                )
        };
    };


    const handlePutTogether = (crntQst) => {
        crntQst = crntQst.answers[0][currentLanguage].split(' ');

        crntQst.map((item, index) => {
            console.log(item)
            return <>1</>
        })
    };

    const handleCheck = (currentQuestion) => {
        switch (currentQuestion.type) {
            case "listening":
                if (currentQuestion.answers[0][currentLanguage].toLowerCase() == currentQuestionInput.toLowerCase()) {
                    setLastAnswerCorrectness(true);
                    setCurrentQuestionInput('');
                };
                break;
            case "image":
                if (currentQuestion.answers[0][currentLanguage] == currentQuestionInput) {
                    setLastAnswerCorrectness(true);
                    setCurrentQuestionInput('');
                };
            break;
        
            default:
                return "no such case O_o";
        }
        setIsModaltskActive(true);
    };

    return (
        <div className={styles.wrapper}>
            {
                (isModaltskActive) ? <Modaltsk langPackage={langPackage} currentLanguage={currentLanguage} lastAnswerCorrectness={lastAnswerCorrectness} setIsModaltskActive={setIsModaltskActive} current_Question={current_Question} setCurrentQuestion={setCurrentQuestion} setIsCheckActive={setIsCheckActive} setLastAnswerCorrectness={setLastAnswerCorrectness} /> : ''
            }
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.head}>
                        <div className={styles.close} style={{backgroundImage: `url('/assets/close_grey.svg')`}} onClick={() => {setCurrentPage('index')}}></div>
                        <div className={styles.progressBar}><div className={styles.progress} style={{width: ((current_Question + 1) / fakeDb.tasks.length * 100 ) + '%'}}></div></div>
                    </div>
                    {handleTaskType(fakeDb.tasks[current_Question])}
                    <div className={(isCheckActive) ? `${styles.confirm} ${styles.confirmActive}` : styles.confirm} onClick={() => {
                        handleCheck(fakeDb.tasks[current_Question]);
                    }}>{langPackage[1][currentLanguage]}</div>
                </div>
            </div>
        </div>
    )
};

export default Tasks;