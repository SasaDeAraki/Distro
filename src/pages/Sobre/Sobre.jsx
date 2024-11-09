import Card from "../../components/Card/Card";
import FooterContent from "../../components/FooterContent/FooterContent";
import NavBar from "../../components/NavBar/NavBar";
import './Sobre.css'
import larissa from "../../images/larissa.png"
import samuel from "../../images/samuel.png"
import otavio from "../../images/otavio.png"

export default function Home() {
    return (
        <>
            <NavBar />
           

            <div className="intro-container-sobre">

                <div className='intro-texto-sobre'>
                    <label className="title">O projeto</label>
                </div>
                
                <div className="conteudo-sobre">
                    <p className="p">
                    A ideia para a Distro nasceu da vontade de combater uma falha social que persiste desde a antiguidade: a desigualdade no acesso a alimentos de qualidade. Em meio a uma sociedade onde ainda existem milhares de pessoas em situação de vulnerabilidade, o desperdício de alimentos é um problema ético e ambiental que precisa ser resolvido. Inspirados pela 12ª Meta de Desenvolvimento Sustentável da ONU, que promove o consumo e produção responsáveis, decidimos criar uma solução prática para reduzir o desperdício de alimentos e aumentar o acesso a refeições nutritivas. A Distro conecta pequenos restaurantes, que muitas vezes descartam comida no final do dia, com pessoas que precisam dessas refeições, oferecendo pontos de coleta acessíveis e um processo de compra simples e direto. Esse projeto representa nossa contribuição para uma sociedade mais justa e sustentável, onde ninguém precisa passar fome enquanto alimentos são jogados fora.
                    </p>
                </div>
                
            </div>

            <div className="container-card">   
                <Card imagem={ larissa } nome='Larissa'/>
                <Card imagem={ samuel } nome='Samuel'/>
                <Card imagem={ otavio } nome='Otávio'/>
            </div>

            <FooterContent />
        </>
    )
}