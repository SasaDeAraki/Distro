import holder from '../../images/holder.jpg'
import FooterContent from "../../components/FooterContent/FooterContent";
import NavBar from "../../components/NavBar/NavBar";
import './Home.css'
import MapComponent from '../../components/MapComponent/MapComponent';
import principal from '../../images/principal.png'

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="intro-container">
                <div className='intro-texto'>
                    <h3>Bem vindo</h3>
                    <h3>à Distro!</h3>
                    <a href='https://youtu.be/mWQgj9XVRIg'>Link para o vídeo pitch</a>
                </div>
                <div className='intro-imagem'>
                    <img src={ principal } alt="" />
                </div>
            </div>
            <div className="conteudo">
                <p>
                Nosso objetivo é garantir que refeições de qualidade não sejam desperdiçadas. Aqui na Distro, pequenos restaurantes da região colaboram com a comunidade ao disponibilizar alimentos que sobraram no final do dia, oferecendo-os em pontos de coleta a preços acessíveis. Não há necessidade de reservas: qualquer pessoa pode chegar ao ponto de coleta mais próximo e comprar uma refeição de maneira simples e rápida.
                Além de ajudar a reduzir o desperdício de alimentos, a Distro oferece uma oportunidade para que todos tenham acesso a refeições saudáveis e nutritivas, ajudando tanto os restaurantes quanto a população necessitada. Junte-se a nós nessa iniciativa de solidariedade e aproveite refeições de qualidade por um preço acessível!
                </p>
            </div>
            <div className='mapa-container'>
                <div className='mapa-titulo'>
                    <h2>Nos encontre em um ponto próximo a você!</h2>
                </div>
                <MapComponent />
            </div>
            <FooterContent  />
        </>
    )
}