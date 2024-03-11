import { useState, useEffect } from 'react';

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
    const [currentLoginType, setCurrentLoginType] = useState('');

    const onLangChange = () => {
        currentLanguage == 0 ? setCurrentLanguage(1) : setCurrentLanguage(0);
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
                    <Login langPackage={langPackages.login} currentLanguage={currentLanguage} setisLoginActive={setisLoginActive} currentLoginType={currentLoginType} setCurrentLoginType={setCurrentLoginType} /> :
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
