import "./style.css"
import { Link } from "react-router-dom"
import bola from "../Partitura"

export default function Header() {
    const gaita = () => {
        let notas = document.getElementById('notas-gaita')
        if(notas.style.display == 'flex') {
            notas.style.display = 'none'
        } else {
            notas.style.display = 'flex'
        }
    }
    const piano = () => {
        let notas = document.getElementById('notas-piano')
        if(notas.style.display == 'flex') {
            notas.style.display = 'none'
        } else {
            notas.style.display = 'flex'
        }
    }
    //Não funciona ainda
    function test() {
        bola.style.display = 'flex'
    }

    const retirar = () => {
        const ga = document.getElementById('instrumentos');
        ga.style.display = 'none'
    }

    return (
        <>
            <header>
                <Link to='/'><button id="link-main"><h1>Paint Composer</h1></button></Link>
                <div id="geral">
                    <div id="instrumentos">
                        <button id="gaita" className="botao-header" onClick={gaita}>Gaita</button>
                        <button id="piano" className="botao-header" onClick={piano}>Piano</button>
                        <button id="pausas" className="botao-header">Pausas</button>
                    </div>
                    <div id="notas-gaita">
                        <p>Notas da Gaita</p>
                        <button className="notas" id="c-gaita">C</button>
                        <button className="notas" id="d-gaita">D</button>
                        <button className="notas" id="e-gaita">E</button>
                        <button className="notas" id="f-gaita" onClick={test}>F</button>
                        <button className="notas" id="g-gaita">G</button>
                        <button className="notas" id="a-gaita">A</button>
                        <button className="notas" id="b-gaita">B</button>
                    </div>
                    <div id="notas-piano">
                        <p>Notas do Piano</p>
                        <button className="notas" id="c-piano">C</button>
                        <button className="notas" id="d-piano">D</button>
                        <button className="notas" id="e-piano">E</button>
                        <button className="notas" id="f-piano" onClick={test}>F</button>
                        <button className="notas" id="g-piano">G</button>
                        <button className="notas" id="a-piano">A</button>
                        <button className="notas" id="b-piano">B</button>
                    </div>
                </div>
                <div>
                    <Link onClick={retirar} to='/Músicas'><button className="botao-menu">Músicas</button></Link>
                    <button className="botao-menu">Login</button>
                </div>
            </header>
        </>
    )
}
