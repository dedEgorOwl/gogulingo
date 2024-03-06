import styles from './Header.module.scss';
import { useState } from 'react';

function Header({languages}) {

    const [currentLanguage, setCurrentLanguage] = useState(0);

    const onLangChange = () => {
        currentLanguage == 0 ? setCurrentLanguage(1) : setCurrentLanguage(0);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.img} style={{backgroundImage: "url(/assets/logo-green.svg)"}}></div>
                    <div>gogulingo</div>
                </div>
                <div className={styles.langChoice} onClick={onLangChange}>
                    ЯЗЫК САЙТА: {languages[currentLanguage]}
                </div>
            </div>
        </div>
    )
};

export default Header;
