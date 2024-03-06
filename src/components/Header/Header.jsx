import './Header.scss';
import { useState } from 'react';

function Header({languages}) {

    const [currentLanguage, setCurrentLanguage] = useState(0);

    const onLangChange = () => {
        currentLanguage == 0 ? setCurrentLanguage(1) : setCurrentLanguage(0);
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="logo">
                    <div className='img' style={{backgroundImage: "url(/assets/logo-green.svg)"}}></div>
                    <div className="h1">gogulingo</div>
                </div>
                <div className="lang_choice" onClick={onLangChange}>
                    ЯЗЫК САЙТА: {languages[currentLanguage]}
                </div>
            </div>
        </div>
    )
};

export default Header;
