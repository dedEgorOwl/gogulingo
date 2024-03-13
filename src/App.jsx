import { useState, useEffect } from 'react';

import fakeDb from '../backend/fakeDb.json';
import langPackages from '../backend/langPackage.json';

import styles from './App.module.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const whenModal = {
    height: '100vh',
    overflow: 'hidden'
};

function App() {
    const [scrollTop, setScrollTop] = useState(0);
    const [currentPage, setCurrentPage] = useState('index');
    const [currentLanguage, setCurrentLanguage] = useState(0);
    const [isLoginActive, setisLoginActive] = useState(false);
    const [currentLoginType, setCurrentLoginType] = useState(undefined);
    const [loggedUser, setLoggedUser] = useState(null);
    const [isNotificationActive, setIsNotificationActive] = useState(false);

    const handleLogin = (login, pass, btnType) => {
        if (btnType === false) {
            fakeDb.users.map(user => {
                if (user.login === login && user.password === pass) {
                    setLoggedUser(user.role);
                    setisLoginActive(false);
                };
            });
        } else {
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
                    <Login langPackage={langPackages.login} currentLanguage={currentLanguage} setisLoginActive={setisLoginActive} currentLoginType={currentLoginType} setCurrentLoginType={setCurrentLoginType} handleLogin={handleLogin} isNotificationActive={isNotificationActive} setIsNotificationActive={setIsNotificationActive} /> :
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
                (currentPage === '')
            }
        </div>
    )
};

export default App;
