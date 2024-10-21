import "./style.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
                <Link to='/'><h1>Paint Composer</h1></Link>
            </header>
        </>
    )
}
