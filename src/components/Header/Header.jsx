import styles from './Header.module.scss';
import { useState } from 'react';

function Header({scroll, langPackage, onLangChange, currentLanguage}) {


    return (
        <div className={styles.wrapper} style={{borderBottom: scroll > 0 ? "solid 1px #ccc" : "solid 1px transparent",}}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.img} style={{backgroundImage: "url(/assets/logo-green.svg)"}}></div>
                    <div>gogulingo</div>
                </div>
                <div className={styles.langChoice} onClick={onLangChange}>
                    {langPackage[0][currentLanguage]} {langPackage[1][currentLanguage]}
                </div>
            </div>
        </div>
    )
};

export default Header;
