import React, { useState } from "react";
import Header from "../../componentes/Header";
import Partitura from "../../componentes/Partitura";
import Footer from "../../componentes/Footer";
import "./style.css";

export default function MainPage() {
    //Funcionalidade para linkar os botões do header com as notas da partitura
    const [visibility, setVisibility] = useState({
        gaitaNotaC: false,
        gaitaNotaD: false,
        gaitaNotaE: false,
        gaitaNotaF: false,
        gaitaNotaG: false,
        gaitaNotaA: false,
        gaitaNotaB: false,
        pianoNotaC: false,
        pianoNotaD: false,
        pianoNotaE: false,
        pianoNotaF: false,
        pianoNotaG: false,
        pianoNotaA: false,
        pianoNotaB: false,
    });
    
    //função para alterar a visibilidade da nota
    const onToggleVisibility = (nota) => {
        setVisibility((prev) => ({
            ...prev,
            [nota]: !prev[nota],
        }));
    };

    return (
        <>
            <Header onToggleVisibility={onToggleVisibility} />
            <Partitura visibility={visibility} />
            <Footer />
        </>
    );
}
