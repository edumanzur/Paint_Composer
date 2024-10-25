import "./style.css"
import { Link } from "react-router-dom"
import clave from '../../assets/clave.png'

export default function Partitura() {
    const teste = () => {
        const bola = document.getElementById
    }
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
                    <div className="nota-f" id="bola"></div>
                    <div className="nota-e"></div>
                </div>
            </main>
        </>
    )
}
