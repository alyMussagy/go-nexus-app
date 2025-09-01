
import React from 'react';
import ServiceDetail from './ServiceDetail';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
    return (
        <ServiceDetail>
            <h2 className="text-3xl font-bold text-azul-escuro dark:text-gray-100 mb-8 pb-3 border-b-2 border-verde-vibrante">O que nossos clientes dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TestimonialCard
                    quote="A Go Nexus revolucionou nossa estratégia de vendas. Com a automação inteligente, aumentamos nosso faturamento em 45% no primeiro trimestre."
                    initials="CM"
                    name="Carla Mendonça"
                    title="Diretora de Marketing - TechSolutions"
                />
                <TestimonialCard
                    quote="Os agentes de IA otimizaram nosso tempo e nos permitiram focar no que realmente importa: o relacionamento com o cliente. Recomendo fortemente!"
                    initials="JP"
                    name="João Pereira"
                    title="CEO - Innovate Corp"
                />
            </div>
        </ServiceDetail>
    );
};

export default Testimonials;
