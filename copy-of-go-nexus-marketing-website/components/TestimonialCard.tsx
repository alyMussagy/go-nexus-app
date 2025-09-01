
import React from 'react';

interface TestimonialCardProps {
    quote: string;
    initials: string;
    name: string;
    title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, initials, name, title }) => {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-xl p-7 shadow-md flex flex-col">
            <div className="relative mb-4 italic flex-grow">
                <p>"{quote}"</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-azul-escuro to-verde-vibrante rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {initials}
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-azul-escuro dark:text-gray-100">{name}</div>
                    <div className="text-sm text-cinza-escuro dark:text-gray-300">{title}</div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
