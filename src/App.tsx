import React from "react";

import Header from "./components/Header/Header";
import Home from "./components/Main/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Footer />
        </>
    );
};

export default App;
