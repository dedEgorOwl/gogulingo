import styles from './About.module.scss';

const about_elements = [
    {
        id: 1,
        p1: 'Бесплатно. Весело. Эффективно.',
        p2: 'Учиться с gogulingo весело и интересно. Зарабатывайте очки за правильные ответы, открывайте новые материалы и развивайте навыки разговорной речи. Наши короткие уроки действительно работают, и мы можем это доказать.'
    },
    {
        id: 2,
        p1: 'Научный подход',
        p2: 'Уникальный метод обучения и увлекательные материалы: исследования показывают, что наши курсы эффективно развивают навыки чтения, письма, понимания на слух и устной речи!'
    },
    {
        id: 3,
        p1: 'Стимул к учёбе',
        p2: 'Игровой подход с забавными заданиями и напоминаниями от нашего талисмана — совёнка goga помогает быстро превратить ежедневные занятия в привычку.'
    },
    {
        id: 4,
        p1: 'Индивидуальное обучение',
        p2: 'Наши уроки объединяют в себе умные алгоритмы искусственного интеллекта и новейшие достижения лингвистики. Сложность и темп обучения подбираются для каждого пользователя индивидуально!'
    },
];

function About() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {
                    about_elements.map(element => {
                        if (element.id % 2 == 0) {
                            return (
                                <div className={styles.element} key={element.id} style={{flexDirection: 'row-reverse'}}>
                                    <div className={styles.right} style={{backgroundImage: `url(/assets/about_element_${element.id}.svg)`}}></div>
                                    <div className={styles.left}>
                                        <div className={styles.p1}>{element.p1}</div>
                                        <div className={styles.p2}>{element.p2}</div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className={styles.element} key={element.id} style={{flexDirection: 'row'}}>
                                    <div className={styles.right} style={{backgroundImage: `url(/assets/about_element_${element.id}.svg)`}}></div>
                                    <div className={styles.left}>
                                        <div className={styles.p1}>{element.p1}</div>
                                        <div className={styles.p2}>{element.p2}</div>
                                    </div>
                                </div>
                            )
                        }

                        
                    })
                }
            </div>
        </div>
    )
};

export default About;