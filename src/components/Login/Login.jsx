import { useState } from 'react';

import styles from './Login.module.scss';


function Login({langPackage, currentLanguage, setisLoginActive, setCurrentLoginType, currentLoginType, handleLogin, isNotificationActive, setIsNotificationActive}) {
    const [loginFormLg, setLoginFormLg] = useState('');
    const [loginFormPw, setLoginFormPw] = useState('');
    
    const handleBtnClick = (btnType) => {
        (btnType === 'login') ? {
            
        } : {

        }
    };

    return (
        <div className={styles.wrapper}>
            {
                (isNotificationActive) ?
                    <div className={styles.notification} onClick={() => {setIsNotificationActive(false)}} >
                        <div className={styles.canc} style={{backgroundImage: `url('/assets/cancel.svg')`}} ></div>
                        <p>{langPackage[9][currentLanguage]}</p>
                    </div> :
                ('')

            }

            <div className={styles.header}>
                <div className={styles.closeModal} style={{backgroundImage: `url('/assets/close.svg')`}} onClick={() => {setisLoginActive(false)}}></div>
                <div className={styles.changeType} onClick={() => { 
                    setCurrentLoginType(!currentLoginType);
                }}>{langPackage[0][Number(!currentLoginType)][currentLanguage]}</div>
            </div>

            <div className={styles.center}>
                <p>{langPackage[0][Number(currentLoginType)][currentLanguage]}</p>
                <div className={styles.form}>
                    {
                        (Number(currentLoginType) === 0) ? 
                        <>
                            <input type="text" placeholder={langPackage[3][currentLanguage]} value={loginFormLg} onChange={(e) => {setLoginFormLg(e.target.value)}} />
                            <input type="password" placeholder={langPackage[4][currentLanguage]} value={loginFormPw} onChange={(e) => {setLoginFormPw(e.target.value)}} />
                        </> :
                        <>
                            <input type="number" placeholder={langPackage[6][currentLanguage]} />
                            <input type="text" placeholder={langPackage[7][currentLanguage]} />
                            <input type="text" placeholder={langPackage[8][currentLanguage]} />
                            <input type="password" placeholder={langPackage[4][currentLanguage]} />
                        </>
                    }
                </div>
                <div className={styles.btn} onClick={() => {handleLogin(loginFormLg, loginFormPw, currentLoginType)}} >{langPackage[2][Number(currentLoginType)][currentLanguage]}</div>
                <div className={styles.or}>
                    <div className={styles.line}></div>
                    {langPackage[5][currentLanguage]}
                    <div className={styles.line}></div>
                </div>
                <div className={styles.socBtns}>
                <div className={styles.btnSoc}><div className={styles.img} style={{backgroundImage: `url('/assets/facebook.svg')`}}></div><h1 style={{color: '#3b5998'}}>FACEBOOK</h1></div>
                    <div className={styles.btnSoc}><div className={styles.img} style={{backgroundImage: `url('/assets/google.svg')`}}></div><h1 style={{color: '#3369E8'}}>GOOGLE</h1></div>
                </div>
            </div>

        </div>
    )
};

export default Login;