import React from 'react';

const Header: React.FC = () => {
    const waveSvgUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%237AC943' d='M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,218.7C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E";

    return (
        <header className="bg-gradient-to-br from-azul-escuro to-verde-vibrante text-white p-8 text-center rounded-b-[20px] mb-10 shadow-lg relative overflow-hidden animate-headerReveal">
            <div 
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: `url("${waveSvgUrl}")` }}
            ></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="text-5xl font-bold mb-4 animate-logoReveal" style={{ textShadow: '0 2px 3px rgba(0,0,0,0.4)' }}>
                    GO NEXUS
                </div>
                <p className="text-lg md:text-xl font-light mb-5">Automação Inteligente e Agentes de IA para Estratégias de Vendas</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-[10px]">Soluções em Marketing Digital e Automação</h1>
                <p className="max-w-3xl mx-auto text-base md:text-lg">Impulsione suas vendas com nossas estratégias avançadas</p>
            </div>
        </header>
    );
};

export default Header;