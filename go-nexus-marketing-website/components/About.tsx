
import React from 'react';
import ServiceDetail from './ServiceDetail';

const About: React.FC = () => {
    return (
        <ServiceDetail>
            <h2 className="text-3xl font-bold text-azul-escuro dark:text-gray-100 mb-6 pb-3 border-b-2 border-verde-vibrante">Sobre a Go Nexus</h2>
            <p className="mb-4">
                Somos especialistas em soluções de automação inteligente e agentes de IA para potencializar estratégias de vendas. Nossa missão é conectar empresas às tecnologias mais avançadas, criando pontes entre o presente e o futuro dos negócios.
            </p>
            <p className="mb-6">
                Com uma equipe multidisciplinar de especialistas em tecnologia, marketing e vendas, desenvolvemos soluções personalizadas que impulsionam resultados e transformam a maneira como empresas se relacionam com seus clientes.
            </p>
            <a href="#contact-form" className="inline-block bg-verde-vibrante text-white px-7 py-3 rounded-full font-bold transition-all duration-300 hover:bg-azul-escuro hover:scale-105">
                Solicitar Consultoria
            </a>
        </ServiceDetail>
    );
};

export default About;
