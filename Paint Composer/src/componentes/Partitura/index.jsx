import "./style.css";
import { Link } from "react-router-dom";
import clave from '../../assets/clave.png';
import React, { useRef, useEffect, useState } from "react";

export default function Partitura({ visibility }) {
    const compassoRef = useRef(null);
    const [posicao, setPosicao] = useState(-600);
    const [movendo, setMovendo] = useState(false);

    useEffect(() => {
        let interval;
        if (movendo) {
            interval = setInterval(() => {
                setPosicao((pos) => pos + 40);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [movendo]);

    useEffect(() => {
        if (compassoRef.current) {
            compassoRef.current.style.left = `${posicao}px`;
        }
    }, [posicao]);

    const iniciarMovimento = () => setMovendo(true);
    const pararMovimento = () => setMovendo(false);

    return (
        <main id="main">
            <div id="partitura">
                <img src={clave} alt="Clave de Sol" />
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
                <div id="compasso" ref={compassoRef}></div>
                <button onClick={iniciarMovimento}>Aperte</button>
                <button onClick={pararMovimento}>Pare</button>
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
