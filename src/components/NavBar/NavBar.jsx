import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to='#' className='link-home'>DISTRO</Link>
                <div>   
                    <Link to='#'>Sobre nós</Link>
                    <Link to='#'>Parceiros</Link>
                    <Link to='#'>FAQ</Link>
                </div>
            </nav>
        </>
    )
}