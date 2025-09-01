
import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-[5.5rem] right-4 sm:right-5 w-14 h-14 rounded-full bg-verde-vibrante text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-azul-escuro hover:scale-110 focus:outline-none focus:ring-2 focus:ring-azul-escuro z-40 ${
                isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            aria-label="Voltar ao topo"
        >
            <i className="fas fa-arrow-up text-xl" aria-hidden="true"></i>
        </button>
    );
};

export default BackToTopButton;