import Card from "../../components/Card/Card";
import FooterContent from "../../components/FooterContent/FooterContent";
import NavBar from "../../components/NavBar/NavBar";
import './Sobre.css'

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
                    Nosso objetivo é garantir que refeições de qualidade não sejam desperdiçadas. Aqui na Distro, pequenos restaurantes da região colaboram com a comunidade ao disponibilizar alimentos que sobraram no final do dia, oferecendo-os em pontos de coleta a preços acessíveis. Não há necessidade de reservas: qualquer pessoa pode chegar ao ponto de coleta mais próximo e comprar uma refeição de maneira simples e rápida.
                    Além de ajudar a reduzir o desperdício de alimentos, o Sabor Solidário oferece uma oportunidade para que todos tenham acesso a refeições saudáveis e nutritivas, ajudando tanto os restaurantes quanto a população que precisa. Junte-se a nós nessa iniciativa de solidariedade e aproveite refeições de qualidade por um preço justo!
                    </p>
                </div>
                
            </div>

            <div className="container-card">   
                <Card/>
                <Card/>
                <Card/>
            </div>

            <FooterContent />
        </>
    )
}