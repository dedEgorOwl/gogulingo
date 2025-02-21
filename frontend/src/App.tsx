import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App: React.FC = () => {
    const { ChangeScroll } = useActions();
    const isLoginActive = useTypedSelector((state) => state.modals.login);

    const handleScroll = () => {
        const position: number = window.scrollY;
        ChangeScroll(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ overflowY: isLoginActive ? "hidden" : "visible", height: isLoginActive ? "100vh" : "fit-content" }}>
            <Header />
            <Home />
            <About />
            <Footer />
            {isLoginActive ? <Login /> : ""}
        </div>
    );
};

export default App;
