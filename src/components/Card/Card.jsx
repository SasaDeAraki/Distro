import './Card.css'
import holder from  '../../images/holder.jpg'
export default function Card() {
    return (
        <>
        <div className='container-card'>
            <div className="card">
                <img src={holder} style={{width:300}}/>
                <div className="container">
                    <h4 className='h4'><b>Larissa</b></h4>
                </div>
            </div>
        </div>
        </>
    )   
}