import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-azul-escuro text-white p-10 text-center rounded-t-[20px] mt-10 shadow-lg relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-3xl font-bold mb-4">
                    GO NEXUS
                </div>
                <p className="mb-4">Transformando o futuro do seu negócio, hoje.</p>
                <div className="flex justify-center gap-6 sm:gap-8 mb-6">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-verde-vibrante transition-colors"><i className="fab fa-linkedin fa-2x" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/gonexus3?igsh=MWgyZndtMnUyd3Bkdw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-verde-vibrante transition-colors"><i className="fab fa-instagram fa-2x" aria-hidden="true"></i></a>
                    <a href="mailto:contato@gonexus.ai" aria-label="Email" className="hover:text-verde-vibrante transition-colors"><i className="fas fa-envelope fa-2x" aria-hidden="true"></i></a>
                </div>
                <p className="text-sm">&copy; {currentYear} Go Nexus. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;