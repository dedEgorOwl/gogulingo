import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

import { useActions } from "./hooks/useActions";

const App: React.FC = () => {
    const { ChangeScroll } = useActions();

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
        <>
            <Header />
            <Home />
            <About />
            <Footer />
        </>
    );
};

export default App;
