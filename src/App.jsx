import { useState, useEffect } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';

const languages = ['РУССКИЙ', 'ENGLISH'];

function App() {
    const [scrollTop, setScrollTop] = useState(0);

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
        <div>
            <Header languages={languages} scroll={scrollTop} />
            <Main />
            <About />
        </div>
    )
};

export default App;
