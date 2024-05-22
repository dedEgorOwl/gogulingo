import { useState, useEffect } from 'react';

import fakeDb from '../backend/fakeDb.json';
import langPackages from '../backend/langPackage.json';

import styles from './App.module.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Tasks from './components/Tasks/Tasks';
import Finish from './components/Finish/Finish';

import max_voice_rus from '/assets/max_voice_rus.mp3';
import max_voice_eng from '/assets/max_voice_eng.mp3';


const whenModal = {
    height: '100vh',
    overflow: 'hidden'
};

function App() {
    const [scrollTop, setScrollTop] = useState(0);
    const [currentPage, setCurrentPage] = useState('tasks');
    const [currentLanguage, setCurrentLanguage] = useState(0);
    const [isLoginActive, setisLoginActive] = useState(false); //false
    const [currentLoginType, setCurrentLoginType] = useState(undefined); //undefined
    const [loggedUser, setLoggedUser] = useState(null);
    const [isNotificationActive, setIsNotificationActive] = useState(false);
    const [notificationText, setNotificationText] = useState([]);
    const [currentOrder, setCurrentOrder] = useState([]);

    

    const playAudio = (taskId) => {
        let currentAudio = null;
        switch(taskId) {
            case 0:
                if (currentLanguage === 0) {
                    currentAudio = new Audio(max_voice_eng);
                    currentAudio.volume = 0.2;
                    currentAudio.play();
                }
                if (currentLanguage === 1) {
                    console.log(11)
                    currentAudio = new Audio(max_voice_rus);
                    currentAudio.volume = 0.2;
                    currentAudio.play();
                }
                break;
            case 1:
                
                break;
        }
    };

    const handleLogin = (login, pass, btnType) => {
        if (btnType === false) {
            fakeDb.users.map(user => {
                if (user.login === login && user.password === pass) {
                    setIsNotificationActive(false);
                    setLoggedUser(user.role);
                    setisLoginActive(false);
                    setCurrentPage('tasks');
                } else {
                    setNotificationText(["Неправильный логин или пароль", "Incorrect login or password"]);
                    setIsNotificationActive(true);
                };
            });
        } else {
            setNotificationText(["Создание аккаунта недоступно", "Account creation isn't avaliable"]);
            setIsNotificationActive(true);
        };
    };

    const onLangChange = () => {
        setCurrentLanguage(Number(!currentLanguage));
    };




    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div className={styles.base} style={(isLoginActive) ? whenModal : {}}>
            {
                (isLoginActive) ?
                    <Login langPackage={langPackages.login} currentLanguage={currentLanguage} setisLoginActive={setisLoginActive} currentLoginType={currentLoginType} setCurrentLoginType={setCurrentLoginType} handleLogin={handleLogin} isNotificationActive={isNotificationActive} setIsNotificationActive={setIsNotificationActive} notificationText={notificationText} /> :
                ('')
            }
            {
                (langPackages === undefined) ?
                <>page is still loading...</> :
                (currentPage === 'index') ?
                    <>
                        <Header scroll={scrollTop} langPackage={langPackages.header} onLangChange={onLangChange} currentLanguage={currentLanguage} onLogoClick={setCurrentPage} isLoginActive={isLoginActive} />
                        <Main langPackage={langPackages.main} currentLanguage={currentLanguage} setisLoginActive={setisLoginActive} setCurrentLoginType={setCurrentLoginType} />
                        <About langPackage={langPackages.about} currentLanguage={currentLanguage} />
                        <Footer langPackage={langPackages.footer} currentLanguage={currentLanguage} />
                    </> :
                (currentPage === 'start') ?
                    <>
                        <Header scroll={scrollTop} langPackage={langPackages.header} onLangChange={onLangChange} currentLanguage={currentLanguage} onLogoClick={setCurrentPage} />
                        
                    </> :
                (currentPage === 'tasks') ?
                    <>
                        <Tasks langPackage={langPackages.tasks} fakeDb={fakeDb} playAudio={playAudio} currentLanguage={currentLanguage} setCurrentPage={setCurrentPage} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} />
                    </> :
                (currentPage === 'finish') ?
                    <>
                        <Header scroll={scrollTop} langPackage={langPackages.header} onLangChange={onLangChange} currentLanguage={currentLanguage} onLogoClick={setCurrentPage} isLoginActive={isLoginActive} />
                        <Finish langPackage={langPackages.finish} fakeDb={fakeDb} currentLanguage={currentLanguage} />
                    </> :
                ('')
            }
        </div>
    )
};

export default App;
