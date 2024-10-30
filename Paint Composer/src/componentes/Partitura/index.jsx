import "./style.css"
import { Link } from "react-router-dom";
import clave from '../../assets/clave.png';
import React, { useRef, useEffect, useState } from "react";

export default function Partitura() {
    const compassoRef = useRef(null);
    const [posicao, setPosicao] = useState(-600);
    const [movendo, setMovendo] = useState(false);
    const bola = document.getElementById('bola')

    useEffect(() => {
        let interval;
        if (movendo) {
            interval = setInterval(() => {
                setPosicao((pos) => pos + 20);
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
        <>
            <main id="main">
                <div id="partitura">
                    <img src={clave} alt="" />
                    <div className="linha"></div>
                    <div className="linha"></div>
                    <div className="linha"></div>
                    <div className="linha"></div>
                    <div className="linha"></div>
                    <div id="compasso" ref={compassoRef}></div>
                    <button onClick={iniciarMovimento}>Aperte</button>
                    <button onClick={pararMovimento}>Pare</button>
                    <div className="nota-f" id="bola"></div>
                    <div className="nota-e"></div>
                </div>
            </main>
        </>
    )
}
