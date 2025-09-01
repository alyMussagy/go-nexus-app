
import React from 'react';

interface AccessibilityControlsProps {
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
    onCycleTextSize: () => void;
}

const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ theme, onToggleTheme, onCycleTextSize }) => {
    return (
        <div className="fixed bottom-[9.75rem] right-4 sm:right-5 z-50 flex flex-col gap-3">
            <button
                onClick={onToggleTheme}
                className="w-14 h-14 rounded-full bg-azul-escuro text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-verde-vibrante hover:scale-110 focus:outline-none focus:ring-2 focus:ring-verde-vibrante"
                aria-label={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
            >
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-xl`} aria-hidden="true"></i>
            </button>
            <button
                onClick={onCycleTextSize}
                className="w-14 h-14 rounded-full bg-azul-escuro text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-verde-vibrante hover:scale-110 focus:outline-none focus:ring-2 focus:ring-verde-vibrante"
                aria-label="Aumentar Tamanho do Texto"
            >
                <i className="fas fa-text-height text-xl" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default AccessibilityControls;