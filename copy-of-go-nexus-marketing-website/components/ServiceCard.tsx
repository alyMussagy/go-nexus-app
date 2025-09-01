
import React from 'react';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-xl p-7 text-center shadow-md transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1.5">
            <div className="text-4xl text-verde-vibrante mb-4">
                <i className={icon}></i>
            </div>
            <h3 className="text-xl font-bold text-azul-escuro dark:text-gray-100 my-4">{title}</h3>
            <p className="text-base">{description}</p>
        </div>
    );
};

export default ServiceCard;
