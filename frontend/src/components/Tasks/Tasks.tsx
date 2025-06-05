import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import TaskService from "../../services/TasksService.js";
import { useTypedSelector } from "../../hooks/useTypedSelector.js";
import audioPlayer from "./audioPlayer.js";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../store/action-creator/currentUser.js";

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState();
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [currentTaskType, setCurrentTaskType] = useState("listening");

    const [reloadMe, setReloadMe] = useState(false);

    const [isErrorModalActive, setIsErrorModalActive] = useState(false);

    const [listeningInput, setListeningInput] = useState("");
    const [currentPutTogetherOrder, setCurrentPutTogetherOrder] = useState([]);
    const [translateInput, setTranslateInput] = useState("");

    const currentUser = useTypedSelector((state) => state.currentUser);

    const dispatch = useDispatch();

    const getTasks = async () => {
        const allTasks = [];

        const listeningResponce = await TaskService.fetchListeningTasks();
        allTasks.push(listeningResponce.data);
        const putTogetherResponce = await TaskService.fetchPutTogetherTasks();
        allTasks.push(putTogetherResponce.data);
        const translateResponce = await TaskService.fetchTranslateTasks();
        allTasks.push(translateResponce.data);

        setTasks(allTasks);
    };

    const nextTaskHandler = () => {
        console.log(tasks);

        switch (currentTaskType) {
            case "listening":
                if (listeningInput.toLowerCase() === tasks[currentTaskIndex][currentUser.tasks[0]].answer.toLowerCase()) {
                    setCurrentTaskIndex(currentTaskIndex + 1);
                    setCurrentTaskType("putTogether");
                } else {
                    setIsErrorModalActive(true);
                }
                break;
            case "putTogether":
                if (currentPutTogetherOrder.join(" ") === tasks[currentTaskIndex][currentUser.tasks[1]].answer) {
                    setCurrentTaskIndex(currentTaskIndex + 1);
                    setCurrentTaskType("translate");
                } else {
                    setIsErrorModalActive(true);
                }
                break;
            case "translate":
                if (translateInput.toLowerCase() === tasks[currentTaskIndex][currentUser.tasks[1]].answer.toLowerCase()) {
                    setCurrentTaskType("finish");
                } else {
                    setIsErrorModalActive(true);
                }
                break;
            default:
                break;
        }
    };

    const logoutHandler = () => {
        dispatch(LogoutUser());
    };

    useEffect(() => {
        getTasks();
    }, []);

    const getCurrentTaskHtml = () => {
        switch (currentTaskType) {
            case "listening":
                return (
                    <div className={styles.listening}>
                        <h1>Прослушайте и напишите услышанное!</h1>
                        <div className={styles.charBtn}>
                            <div className={styles.character} style={{ backgroundImage: "url(/assets/task_char_1.png)" }}></div>
                            <div className={styles.right}>
                                <div
                                    className={styles.button}
                                    onClick={() => {
                                        audioPlayer(currentUser.tasks[0]);
                                    }}
                                >
                                    Нажми на меня!
                                </div>
                                <input
                                    value={listeningInput}
                                    onChange={(e) => {
                                        setListeningInput(e.target.value);
                                    }}
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                );
            case "putTogether":
                return (
                    <div className={styles.putTogether}>
                        <h1>Сложите слова, что бы получилось предложение!</h1>

                        <div className={styles.charBtn}>
                            <div className={styles.character} style={{ backgroundImage: "url(/assets/task_char_2.png)" }}></div>
                            <div className={styles.inputs}>
                                <div className={styles.words}>
                                    {tasks[currentTaskIndex][currentUser.tasks[1]].words.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={styles.wordBox}
                                                onClick={(e) => {
                                                    if (e.target.classList.contains(styles.wordBoxInactive)) {
                                                        return;
                                                    } else {
                                                        e.target.classList.add(styles.wordBoxInactive);
                                                        const currentOrder = currentPutTogetherOrder;
                                                        currentOrder.push(item);
                                                        setCurrentPutTogetherOrder(currentOrder);
                                                        setReloadMe(!reloadMe);
                                                    }
                                                }}
                                            >
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={styles.answer}>
                                    <div className={styles.words} id="top">
                                        {currentPutTogetherOrder.map((item, index) => {
                                            return (
                                                <div key={index} className={styles.wordBox}>
                                                    {item}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div
                                        className={styles.cancelBtn}
                                        onClick={(e) => {
                                            setCurrentPutTogetherOrder([]);
                                            setReloadMe(!reloadMe);

                                            e.target.parentElement.parentElement.children[0].querySelectorAll("*").forEach((jtem, index) => {
                                                jtem.classList.remove(styles.wordBoxInactive);
                                            });
                                        }}
                                    >
                                        Очистить
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "translate":
                return (
                    <div className={styles.translate}>
                        <h1>Переведите данную фразу!</h1>
                        <div className={styles.charBtn}>
                            <div className={styles.character} style={{ backgroundImage: "url(/assets/task_char_3.png)" }}></div>
                            <div className={styles.right}>
                                <div className={styles.phrase}>{tasks[currentTaskIndex][currentUser.tasks[1]].phrase}</div>
                                <input
                                    type="text"
                                    value={translateInput}
                                    onChange={(e) => {
                                        setTranslateInput(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                );
            case "finish":
                return (
                    <div className={styles.finish}>
                        <h1>На сегодня все задания закончились, ты молодец!</h1>
                        <div className={styles.finishEmoji} style={{ backgroundImage: "url(/assets/finish_emoji.png)" }}></div>
                    </div>
                );
            default:
                return <>Непредвиденная ошибка</>;
        }
    };

    if (!currentUser.isActivated) {
        return <div className={styles.pleaseActivate}>Пожалуйста, активируйте свой аккаунт!</div>;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
            {isErrorModalActive ? (
                <div className={styles.errorModal}>
                    <div className={styles.box}>
                        <div className={styles.text}>Почти получилось!</div>
                        <div className={styles.errorEmoji} style={{ backgroundImage: "url(/assets/hugging-face.png)" }}></div>
                        <div
                            className={styles.tryAgain}
                            onClick={() => {
                                setIsErrorModalActive(false);
                            }}
                        >
                            Попробуй еще раз
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.progressBar}>
                        <div className={styles.innerBar} style={{ width: currentTaskIndex == 2 ? "100%" : `${currentTaskIndex + 1 * 33}%` }}></div>
                    </div>
                </div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.container}>{getCurrentTaskHtml()}</div>
            </div>

            <div
                className={styles.wrapper}
                style={{
                    backgroundColor: isErrorModalActive ? "rgba(255, 0, 0, 0.4)" : listeningInput !== "" ? "#d7ffb8" : "white",
                    borderTop: "1px solid lightgray",
                    transition: "0.2s ease-in",
                }}
            >
                <div className={styles.container}>
                    <div className={styles.footer}>
                        <div
                            className={styles.logoutBtn}
                            onClick={() => {
                                logoutHandler();
                            }}
                        >
                            Выход
                        </div>
                        <div
                            className={styles.nextTaskBtn}
                            style={{
                                backgroundColor: currentTaskType === "finish" ? "lightgray" : "",
                                color: currentTaskType === "finish" ? "#3c3c3c" : "",
                                borderColor: currentTaskType === "finish" ? "rgb(184, 182, 182)" : "",
                            }}
                            onClick={() => {
                                if (currentTaskType === "finish") {
                                    return;
                                }
                                nextTaskHandler();
                            }}
                        >
                            Далее
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
