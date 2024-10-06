import FooterContent from "../../components/FooterContent/FooterContent";
import NavBar from "../../components/NavBar/NavBar";
import './Partners.css';

export default function Partners() {
    const partnersData = [
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        },
        {
            name: "Sabores do Campo",
            address: "Rua não sei o q numero n sei q la...",
            date: "25/08/2024"
        }
    ];

    return (
        <>
            <NavBar />
            <div className="container">
                <h1>Quer se tornar um parceiro? <a href="mailto:s.batista.viana@gmail.com">Nos envie um email!</a></h1>
                <table className="partners-table">
                    <thead>
                        <tr>
                            <th>Estabelecimento</th>
                            <th>Endereço</th>
                            <th className="date">Data da parceria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partnersData.map((partner) => (
                            <tr>
                                <td>{partner.name}</td>
                                <td>{partner.address}</td>
                                <td className="date">{partner.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <FooterContent />
        </>
    );
}
