import styles from './Header.module.scss';
import { useState } from 'react';

function Header({scroll, langPackage, onLangChange, currentLanguage, onLogoClick, isLoginActive}) {


    return (
        <div className={styles.wrapper} style={{borderBottom: scroll > 0 ? "solid 1px #ccc" : "solid 1px transparent", padding: (isLoginActive) ? '15px 0' : ''}}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => {onLogoClick('index')}}>
                    <div className={styles.img} style={{backgroundImage: "url(/assets/logo-green.svg)"}}></div>
                    <div className={styles.gog}>gogulingo</div>
                </div>
                <div className={styles.langChoice} onClick={onLangChange}>
                    {langPackage[0][currentLanguage]} {langPackage[1][currentLanguage]}
                </div>
            </div>
        </div>
    )
};

export default Header;
