import { useState, useEffect } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';

const langPackages = {
    header: [
        ['ЯЗЫК САЙТА: ', 'SITE LANGUAGE: '],
        ['РУССКИЙ', 'ENGLISH']
    ],
    main: [
        ['Учите языки бесплатно, весело и эффективно!', 'The free, fun, and effective way to learn a language!'],
        ['НАЧАТЬ', 'GET STARTED'],
        ['У МЕНЯ УЖЕ ЕСТЬ АККАУНТ', 'I ALREADY HAVE AN ACCOUNT']
    ],
    about: [
        [['Бесплатно. Весело. Эффективно.', 'Учиться с gogulingo весело и интересно. Зарабатывайте очки за правильные ответы, открывайте новые материалы и развивайте навыки разговорной речи. Наши короткие уроки действительно работают, и мы можем это доказать.'], ['free. fun. effective.', 'Learning with gogulingo is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.']],
        [['Научный подход', 'Уникальный метод обучения и увлекательные материалы: исследования показывают, что наши курсы эффективно развивают навыки чтения, письма, понимания на слух и устной речи!'], ['backed by science', 'We use a combination of research-backed teaching methods and delightful content to create courses that effectively teach reading, writing, listening, and speaking skills!']],
        [['Стимул к учёбе', 'Игровой подход с забавными заданиями и напоминаниями от нашего талисмана — совёнка goga помогает быстро превратить ежедневные занятия в привычку.'], ['stay motivated', 'We make it easy to form a habit of language learning with game-like features, fun challenges, and reminders from our friendly mascot, goga the owl.']],
        [['Индивидуальное обучение', 'Наши уроки объединяют в себе умные алгоритмы искусственного интеллекта и новейшие достижения лингвистики. Сложность и темп обучения подбираются для каждого пользователя индивидуально!'], ['personalized learning', 'Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.']],
    ],
};

function App() {
    const [scrollTop, setScrollTop] = useState(0);
    const [currentLanguage, setCurrentLanguage] = useState(0);

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
        <div>
            <Header scroll={scrollTop} langPackage={langPackages.header} onLangChange={onLangChange} currentLanguage={currentLanguage} />
            <Main langPackage={langPackages.main} currentLanguage={currentLanguage} />
            <About langPackage={langPackages.about} currentLanguage={currentLanguage} />
        </div>
    )
};

export default App;
