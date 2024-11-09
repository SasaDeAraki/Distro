import { Modal } from "react-bootstrap";
import FooterContent from "../../components/FooterContent/FooterContent";
import NavBar from "../../components/NavBar/NavBar";
import './Partners.css';
import { useState } from "react";
import { format } from "date-fns";

export default function Partners() {
    const [partners, setPartners] = useState([
        {
            nome: 'Balaio IMS',
            cep: '01310-100',
            bairro: 'Bela Vista',
            rua: 'Av. Paulista',
            num: '2424',
            complemento: 'Instituto Moreira Salles',
            data: '06/11/2024'
        },
        {
            nome: 'D.O.M.',
            cep: '01417-010',
            bairro: 'Jardim Paulista',
            rua: 'R. Barão de Capanema',
            num: '549',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'A Casa do Porco',
            cep: '01035-000',
            bairro: 'República',
            rua: 'R. Araújo',
            num: '124',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'Mocotó',
            cep: '02206-000',
            bairro: 'Vila Medeiros',
            rua: 'Av. Nossa Sra. do Loreto',
            num: '1100',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'Maní',
            cep: '05413-010',
            bairro: 'Jardim Paulistano',
            rua: 'R. Joaquim Antunes',
            num: '210',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'Dalva e Dito',
            cep: '01415-001',
            bairro: 'Jardins',
            rua: 'R. Padre João Manuel',
            num: '1115',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'Balaiada',
            cep: '01311-000',
            bairro: 'Consolação',
            rua: 'Rua Augusta',
            num: '1291',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'Cão Véio',
            cep: '05410-001',
            bairro: 'Pinheiros',
            rua: 'Rua João Moura',
            num: '871',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'Boteco Paramount',
            cep: '05415-001',
            bairro: 'Pinheiros',
            rua: 'Rua dos Pinheiros',
            num: '1179',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'Bar da Dona Onça',
            cep: '01031-903',
            bairro: 'Centro',
            rua: 'Av. Ipiranga',
            num: '200',
            complemento: 'Edifício Copan',
            data: '06/11/2024'
        },
        {
            nome: 'Futuro Refeitório',
            cep: '01416-001',
            bairro: 'Jardim Paulista',
            rua: 'Rua Cônego Eugênio Leite',
            num: '808',
            complemento: '',
            data: '06/11/2024'
        },
        {
            nome: 'Esther Rooftop',
            cep: '01032-000',
            bairro: 'Centro',
            rua: 'Praça da República',
            num: '80',
            complemento: '11º andar',
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

        addPartner(newPartner);
        handleClose();
    }

    return (
        <>
            <NavBar />
            <div className="container-parceiros">
                <h1>Quer se tornar um parceiro? <a className="onclick-text" onClick={handleShow}>Clique aqui!</a></h1>
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
