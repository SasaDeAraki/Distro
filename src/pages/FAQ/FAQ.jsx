import React, { useState } from "react";
import FooterContent from "../../components/FooterContent/FooterContent";
import NavBar from "../../components/NavBar/NavBar";
import './FAQ.css';
import arrowDown from "../../images/arrow-down.png"

export default function FAQ() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const questions = [
        { question: "O que é o site Distro?", answer: "O site Distro é uma plataforma que facilita a distribuição de alimentos a quem precisa." },
        { question: "Como funciona a distribuição de alimentos?", answer: "A distribuição ocorre em diversos pontos de coleta, onde os alimentos são disponibilizados por preços acessíveis." },
        { question: "Preciso fazer reserva para pegar comida em um ponto de coleta?", answer: "Não é necessário reserva, mas recomendamos conferir a disponibilidade no ponto de coleta." },
        { question: "Os alimentos são seguros para consumo?", answer: "Sim, todos os alimentos passam por verificações de segurança antes da distribuição." },
        { question: "Onde estão localizados os pontos de coleta?", answer: "Os pontos de coleta estão espalhados em várias regiões. Verifique no nosso site o ponto mais próximo." },
        { question: "Como um restaurante pode se tornar parceiro da Distro?", answer: "Restaurantes interessados podem se cadastrar em nosso site para se tornarem parceiros." },
    ];

    return (
        <>
            <NavBar />
            <div className="container" style={{ marginBottom: 50 }}>
                {questions.map((item, index) => (
                    <div 
                        key={index} 
                        className={`questions ${visibleIndex === index ? "expanded" : ""}`} 
                        onClick={() => toggleAnswer(index)}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>{item.question}</span>
                            <img 
                                src={arrowDown}
                                alt="arrow-icon" 
                                className={`arrow-icon ${visibleIndex === index ? "open" : ""}`} 
                            />
                        </div>
                        <div className="answer">
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
            <FooterContent />
        </>
    );
}