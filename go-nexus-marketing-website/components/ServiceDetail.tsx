
import React from 'react';

interface ServiceDetailProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ children, id, className = '' }) => {
    return (
        <section id={id} className={`bg-white dark:bg-[#333] rounded-xl p-8 mb-10 shadow-md transition-colors duration-300 ${className}`}>
            {children}
        </section>
    );
};

export default ServiceDetail;