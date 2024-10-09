import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to='/' className='link-home'>DISTRO</Link>
                <div>   
                    <Link to='/sobre'>Sobre nós</Link>
                    <Link to='/partners'>Parceiros</Link>
                    <Link to='/faq'>FAQ</Link>
                </div>
            </nav>
        </>
    )   
}