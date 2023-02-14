import './styles/main.scss';
import React from "react";
import Decks from "./components/Decks/Decks";
import MainNavbar from "./components/MainNavbar";

function App() {
    return (
        <div>
            <MainNavbar/>
            <Decks/>
        </div>
    );
}

export default App;
