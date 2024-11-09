import './Card.css'
export default function Card({ imagem, nome }) {
    return (
        <>
        <div className='container-card'>
            <div className="card">
                <img src={ imagem } style={{width:300}}/>
                <div className="container">
                    <h4><b>{ nome }</b></h4>
                </div>
            </div>
        </div>
        </>
    )   
}