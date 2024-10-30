import "./style.css";
import { Link } from "react-router-dom";
import clave from '../../assets/clave.png';
import React, { useRef, useEffect, useState } from "react";

export default function Partitura({ visibility }) {
    // Chamando variáveis com useRef e useState
    const compassoRef = useRef(null);
    const [posicao, setPosicao] = useState(-600);
    const [movendo, setMovendo] = useState(false);

    //Função para mover o compasso
    useEffect(() => {
        let interval;
        if (movendo) {
            interval = setInterval(() => {
                setPosicao((pos) => pos + 40);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [movendo]);

    //função para parar o compasso
    useEffect(() => {
        if (compassoRef.current) {
            compassoRef.current.style.left = `${posicao}px`;
        }
    }, [posicao]);

    //funções de para conectar com o html sobre a movimentação do compasso
    const iniciarMovimento = () => setMovendo(true);
    const pararMovimento = () => setMovendo(false);

    return (
        <main id="main">
            <div id="partitura">

                {/* Linhas e clave */}
                <img src={clave} alt="Clave de Sol" />
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>

                {/* Compasso */}
                <div id="compasso" ref={compassoRef}></div>

                {/* Botões do compasso */}
                <button onClick={iniciarMovimento}>Aperte</button>
                <button onClick={pararMovimento}>Pare</button>
                
                {/* Notas na partitura */}
                <div className="nota-f" id="gaitaNotaF" style={{ display: visibility.gaitaNotaF ? 'flex' : 'none' }}></div>
                <div className="nota-e" id="gaitaNotaE" style={{ display: visibility.gaitaNotaE ? 'flex' : 'none' }}></div>
                <div className="nota-c" id="gaitaNotaC" style={{ display: visibility.gaitaNotaC ? 'flex' : 'none' }}></div>
                <div className="nota-d" id="gaitaNotaD" style={{ display: visibility.gaitaNotaD ? 'flex' : 'none' }}></div>
                <div className="nota-g" id="gaitaNotaG" style={{ display: visibility.gaitaNotaG ? 'flex' : 'none' }}></div>
                <div className="nota-a" id="gaitaNotaA" style={{ display: visibility.gaitaNotaA ? 'flex' : 'none' }}></div>
                <div className="nota-b" id="gaitaNotaB" style={{ display: visibility.gaitaNotaB ? 'flex' : 'none' }}></div>
                <div className="nota-f" id="pianoNotaF" style={{ display: visibility.pianoNotaF ? 'flex' : 'none' }}></div>
                <div className="nota-e" id="pianoNotaE" style={{ display: visibility.pianoNotaE ? 'flex' : 'none' }}></div>
                <div className="nota-c" id="pianoNotaC" style={{ display: visibility.pianoNotaC ? 'flex' : 'none' }}></div>
                <div className="nota-d" id="pianoNotaD" style={{ display: visibility.pianoNotaD ? 'flex' : 'none' }}></div>
                <div className="nota-g" id="pianoNotaG" style={{ display: visibility.pianoNotaG ? 'flex' : 'none' }}></div>
                <div className="nota-a" id="pianoNotaA" style={{ display: visibility.pianoNotaA ? 'flex' : 'none' }}></div>
                <div className="nota-b" id="pianoNotaB" style={{ display: visibility.pianoNotaB ? 'flex' : 'none' }}></div>
            </div>
        </main>
    );
}
