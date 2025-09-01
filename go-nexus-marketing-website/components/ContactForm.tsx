
import React from 'react';
import ServiceDetail from './ServiceDetail';

const ContactForm: React.FC = () => {
    return (
        <ServiceDetail id="contact-form" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-azul-escuro dark:text-gray-100 mb-6 pb-3 border-b-2 border-verde-vibrante">Entre em Contato</h2>
            <p className="mb-8">Quer saber mais sobre nossos serviços ou tem dúvidas? Entre em contato conosco para uma consultoria gratuita.</p>
            
            <form action="https://formspree.io/f/xldwlpvk" method="POST" className="max-w-3xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 font-bold text-azul-escuro dark:text-gray-100">Nome</label>
                        <input type="text" id="name" name="nome" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-verde-vibrante focus:border-verde-vibrante transition duration-300 dark:bg-gray-700 dark:border-gray-600" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 font-bold text-azul-escuro dark:text-gray-100">E-mail</label>
                        <input type="email" id="email" name="_replyto" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-verde-vibrante focus:border-verde-vibrante transition duration-300 dark:bg-gray-700 dark:border-gray-600" required />
                    </div>
                </div>
                 <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 font-bold text-azul-escuro dark:text-gray-100">Telefone</label>
                    <input type="tel" id="phone" name="telefone" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-verde-vibrante focus:border-verde-vibrante transition duration-300 dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                 <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-bold text-azul-escuro dark:text-gray-100">Mensagem</label>
                    <textarea id="message" name="mensagem" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-verde-vibrante focus:border-verde-vibrante transition duration-300 dark:bg-gray-700 dark:border-gray-600" required></textarea>
                </div>
                <div>
                    <button type="submit" className="inline-block bg-verde-vibrante text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-azul-escuro hover:scale-105">
                        Enviar Mensagem
                    </button>
                </div>
            </form>
        </ServiceDetail>
    );
};

export default ContactForm;