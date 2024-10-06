import FooterContent from "../../components/FooterContent/FooterContent";
import NavBar from "../../components/NavBar/NavBar";
import './FAQ.css';

export default function FAQ (){
    return(
        <>
            <NavBar />      
            <nav className="container">
                <div className="questions">O que é o site Distro?<img src="src/images/arrow-down.png" alt="arrow-icon" className="arrow-icon" /></div> 
                <div className="questions">Como funciona a distribuição de alimentos?<img src="src/images/arrow-down.png" alt="arrow-icon" className="arrow-icon" /></div>
                <div className="questions">Preciso fazer reserva para pegar comida em um ponto de coleta?<img src="src/images/arrow-down.png" alt="arrow-icon" className="arrow-icon" /></div>
                <div className="questions">Os alimentos são seguros para consumo?<img src="src/images/arrow-down.png" alt="arrow-icon" className="arrow-icon" /></div>
                <div className="questions">Onde estão localizados os pontos de coleta?<img src="src/images/arrow-down.png" alt="arrow-icon" className="arrow-icon" /></div>
                <div className="questions">Como um restaurante pode se tornar parceiro da Distro?<img src="src/images/arrow-down.png" alt="arrow-icon" className="arrow-icon" /></div>
                
            </nav>
            <FooterContent />
        </>
    );
}


