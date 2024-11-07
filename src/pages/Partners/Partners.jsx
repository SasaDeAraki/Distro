import { Modal } from "react-bootstrap";
import FooterContent from "../../components/FooterContent/FooterContent";
import NavBar from "../../components/NavBar/NavBar";
import './Partners.css';
import { useState } from "react";
import { format } from "date-fns";

export default function Partners() {
    const [partners, setPartners] = useState([
        {   
            nome: 'balalau corp',
            cep: '00000-000',
            bairro: 'lapa',
            rua: 'sao caetano',
            num: '30',
            complemento: '',
            data: '06/11/2024'
        }
    ]);

    const [show, setShow] = useState(false);
    
    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [num, setNum] = useState('')
    const [complemento, setComplemento] = useState('')

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setNome('')
        setCep('')
        setBairro('')
        setRua('')
        setNum('')
        setComplemento('')
        setShow(false)
    };

    const addPartner = (partner) => {
        setPartners([partner, ...partners]);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPartner = {
            nome: nome,
            cep: cep,
            bairro: bairro,
            rua: rua,
            num: num,
            complemento: complemento,
            data: format(new Date(), 'dd/MM/yyyy')
        };
        
        debugger;

        addPartner(newPartner);
        handleClose();
    }

    return (
        <>
            <NavBar />
            <div className="container-parceiros">
                <h1>Quer se tornar um parceiro? <a onClick={handleShow}>Nos envie um email!</a></h1>
                <table className="partners-table">
                    <thead>
                        <tr>
                            <th>Estabelecimento</th>
                            <th>Endereço</th>
                            <th className="date">Data da parceria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partners.map((partner) => (
                            <tr>
                                <td>{partner.nome}</td>
                                    <td>Bairro {partner.bairro}, rua {partner.rua}, Nº{partner.num}</td>
                                <td className="date">{partner.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal
                show={show}
                onHide={ handleClose }
                backdrop="true"
                keyboard={false}
                dialogClassName="modal"
                size="lg"
                centered
            >
                <Modal.Body>
                    <div className="cadastro-titulo">
                        <h3>Preencha os dados abaixo para se increver para a parceria</h3>
                    </div>
                    <form className="cadastro-form" onSubmit={handleSubmit}>
                        <div>
                            <input placeholder="Nome do estabelecimento" id="campo-nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} required></input>
                        </div>
                        <div>
                            <input placeholder="CEP" id="campo-cep" type="text" value={cep} onChange={(e) => setCep(e.target.value)} required></input>
                        </div>
                        <div>
                            <input placeholder="Bairro" id="campo-bairro" type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} required></input>
                        </div>
                        <div>
                            <input placeholder="Rua" id="campo-rua" type="text" value={rua} onChange={(e) => setRua(e.target.value)} required></input>
                        </div>
                        <div>
                            <input placeholder="Número" id="campo-numero" type="text" value={num} onChange={(e) => setNum(e.target.value)} required></input>
                        </div>
                        <div>
                            <input placeholder="Complemento" id="campo-complemento" type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)}></input>
                        </div>
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            <FooterContent />
        </>
    );
}
