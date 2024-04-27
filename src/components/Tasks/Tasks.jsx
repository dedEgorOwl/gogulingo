import { useState } from 'react';

import styles from './Tasks.module.scss';

let current_question = 0;

function Tasks({langPackage, fakeDb, currentLanguage, playAudio, setCurrentPage}) {

    const [currentQuestionInput, setCurrentQuestionInput] = useState('');
    const [isCheckActive, setIsCheckActive] = useState(false);

    const handleTaskType = (currentQuestion) => {
        switch(currentQuestion.type) {
            case 'listening':
                return (
                    <div className={styles.task} key={currentQuestion.id}>
                        <div className={styles.title}>{currentQuestion.title[currentLanguage]}</div>
                        <div className={styles.img} style={{backgroundImage: `url('/assets/tasks/oscar.svg')`}}></div>
                        <div className={styles.btn} onClick={() => {playAudio(current_question)}}>{langPackage[0][currentLanguage]}</div>
                        <input type="text" value={currentQuestionInput} onChange={(e) => {setCurrentQuestionInput(e.target.value)}} />
                    </div>
                )
            case 'image':
                return (
                    <div className={styles.task} key={currentQuestion.id}>
                        <div className={styles.title}>{currentQuestion.title[currentLanguage]}</div>
                        <div className={styles.img} style={{backgroundImage: `url('/assets/tasks/oscar.svg')`}}></div>
                        <div className={styles.btn} onClick={() => {playAudio(current_question)}}>{langPackage[0][currentLanguage]}</div>
                        <input type="text" value={currentQuestionInput} onChange={(e) => {setCurrentQuestionInput(e.target.value)}} />
                    </div>
                )
        };
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.head}>
                        <div className={styles.close} style={{backgroundImage: `url('/assets/close_grey.svg')`}} onClick={() => {setCurrentPage('index')}}></div>
                        <div className={styles.progressBar}><div className={styles.progress} style={{width: ((current_question + 1) / fakeDb.tasks.length * 100 ) + '%'}}></div></div>
                    </div>
                    {
                        handleTaskType(fakeDb.tasks[current_question])
                    }
                    <div className={styles.confirm}>{langPackage[1][currentLanguage]}</div>
                </div>
            </div>
        </div>
    )
};

export default Tasks;