
import React from 'react';

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.link/9yzpop"
            className="fixed bottom-5 right-5 w-14 h-14 bg-[#25d366] text-white rounded-full text-2xl shadow-lg z-40 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-[10deg] hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
        >
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </a>
    );
};

export default WhatsAppButton;