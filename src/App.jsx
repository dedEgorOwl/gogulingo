import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const languages = ['РУССКИЙ', 'ENGLISH'];



function App() {

    return (
        <div className="App">
            <Header languages={languages} />
            <Main />
            
        </div>
    )
};

export default App;
