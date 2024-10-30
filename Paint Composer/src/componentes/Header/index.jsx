import "./style.css";
import { Link } from "react-router-dom";

export default function Header({ onToggleVisibility }) {
    //Funcionalidade para aparecer os botões com as notas da gaita
    const gaita = () => {
        let notas = document.getElementById('notas-gaita');
        notas.style.display = notas.style.display === 'flex' ? 'none' : 'flex';
    };

    //Funcionalidade para aparecer os botões com as notas do piano
    const piano = () => {
        let notas = document.getElementById('notas-piano');
        notas.style.display = notas.style.display === 'flex' ? 'none' : 'flex';
    };

    return (
        <header>
            {/* botão para a página principal */}
            <Link to='/'><button id="link-main"><h1>Paint Composer</h1></button></Link>
            <div id="geral">
                <div id="instrumentos">
                    {/* botões para aparecer os botões com as notas */}
                    <button id="gaita" className="botao-header" onClick={gaita}>Gaita</button>
                    <button id="piano" className="botao-header" onClick={piano}>Piano</button>
                    <button id="pausas" className="botao-header">Pausas</button>
                </div>

                {/* botões da gaita */}
                <div id="notas-gaita">
                    <p>Notas da Gaita</p>
                    <button className="notas" id="c-gaita" onClick={() => onToggleVisibility('gaitaNotaC')}>C</button>
                    <button className="notas" id="d-gaita" onClick={() => onToggleVisibility('gaitaNotaD')}>D</button>
                    <button className="notas" id="e-gaita" onClick={() => onToggleVisibility('gaitaNotaE')}>E</button>
                    <button className="notas" id="f-gaita" onClick={() => onToggleVisibility('gaitaNotaF')}>F</button>
                    <button className="notas" id="g-gaita" onClick={() => onToggleVisibility('gaitaNotaG')}>G</button>
                    <button className="notas" id="a-gaita" onClick={() => onToggleVisibility('gaitaNotaA')}>A</button>
                    <button className="notas" id="b-gaita" onClick={() => onToggleVisibility('gaitaNotaB')}>B</button>
                </div>
                {/* botões do piano */}
                <div id="notas-piano">
                    <p>Notas do Piano</p>
                    <button className="notas" id="c-piano" onClick={() => onToggleVisibility('pianoNotaC')}>C</button>
                    <button className="notas" id="d-piano" onClick={() => onToggleVisibility('pianoNotaD')}>D</button>
                    <button className="notas" id="e-piano" onClick={() => onToggleVisibility('pianoNotaE')}>E</button>
                    <button className="notas" id="f-piano" onClick={() => onToggleVisibility('pianoNotaF')}>F</button>
                    <button className="notas" id="g-piano" onClick={() => onToggleVisibility('pianoNotaG')}>G</button>
                    <button className="notas" id="a-piano" onClick={() => onToggleVisibility('pianoNotaA')}>A</button>
                    <button className="notas" id="b-piano" onClick={() => onToggleVisibility('pianoNotaB')}>B</button>
                </div>
            </div>
            <div>
                {/* botão para o página de músicas */}
                <Link to='/Músicas'><button className="botao-menu">Músicas</button></Link>
                <button className="botao-menu">Login</button>
            </div>
        </header>
    );
}
