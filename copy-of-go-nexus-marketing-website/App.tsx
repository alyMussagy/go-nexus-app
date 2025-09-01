
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import AccessibilityControls from './components/AccessibilityControls';
import BackToTopButton from './components/BackToTopButton';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [textSize, setTextSize] = useState<0 | 1 | 2>(0);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
             const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
             setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    useEffect(() => {
        const body = window.document.body;
        body.classList.remove('text-base', 'text-lg', 'text-xl');
        switch (textSize) {
            case 1:
                body.classList.add('text-lg');
                break;
            case 2:
                body.classList.add('text-xl');
                break;
            default:
                body.classList.add('text-base');
                break;
        }
    }, [textSize]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    const cycleTextSize = useCallback(() => {
        setTextSize(prevSize => (prevSize + 1) % 3 as 0 | 1 | 2);
    }, []);

    return (
        <div className="bg-cinza-claro dark:bg-[#2a2a2a] text-cinza-escuro dark:text-gray-200 font-sans leading-relaxed transition-colors duration-300">
            <Header />
            <main className="container max-w-5xl mx-auto px-5">
                <ServiceDetail>
                    <h2 className="text-3xl font-bold text-azul-escuro dark:text-gray-100 mb-4 pb-3 border-b-2 border-verde-vibrante">Estratégia de Conteúdo</h2>
                    <p className="mb-6">Em um mercado saturado, ser visto não é o bastante. É preciso ser relevante. Desenvolvemos estratégias de conteúdo que posicionam sua marca como líder de pensamento, educam seu público-alvo e geram leads qualificados de forma orgânica.</p>
                    <a href="#contact-form" className="inline-block bg-verde-vibrante text-white px-7 py-3 rounded-full font-bold transition-all duration-300 hover:bg-azul-escuro hover:scale-105">
                        Solicitar Consultoria
                    </a>
                </ServiceDetail>

                <About />

                <ServiceDetail>
                    <h2 className="text-3xl font-bold text-azul-escuro dark:text-gray-100 mb-8 pb-3 border-b-2 border-verde-vibrante">Nossas Soluções</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard icon="fas fa-robot" title="Automação" description="Sistemas inteligentes para otimizar processos e aumentar eficiência." />
                        <ServiceCard icon="fas fa-brain" title="Agentes de IA" description="Agentes autônomos para executar tarefas complexas de vendas e marketing." />
                        <ServiceCard icon="fas fa-chart-line" title="Análise Preditiva" description="Uso de IA para prever tendências de mercado e comportamento do cliente." />
                        <ServiceCard icon="fas fa-bullhorn" title="Marketing Estratégico" description="Campanhas de marketing potencializadas por insights de IA para máximo ROI." />
                    </div>
                </ServiceDetail>

                <ServiceDetail>
                    <h2 className="text-3xl font-bold text-azul-escuro dark:text-gray-100 mb-6 pb-3 border-b-2 border-verde-vibrante">Benefícios da Nossa Estratégia</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-verde-vibrante mt-1 mr-4 text-xl"></i>
                            <div>
                                <strong className="block">Geração de Leads Orgânicos:</strong> Atraia clientes de forma natural e constante.
                            </div>
                        </li>
                        <li className="flex items-start">
                             <i className="fas fa-check-circle text-verde-vibrante mt-1 mr-4 text-xl"></i>
                            <div>
                                <strong className="block">Crescimento da Autoridade:</strong> Posicione sua empresa como uma referência no seu nicho.
                            </div>
                        </li>
                        <li className="flex items-start">
                           <i className="fas fa-check-circle text-verde-vibrante mt-1 mr-4 text-xl"></i>
                            <div>
                                <strong className="block">Fortalecimento da Marca:</strong> Crie uma conexão duradoura com o seu público.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-verde-vibrante mt-1 mr-4 text-xl"></i>
                            <div>
                                <strong className="block">Mensuração de Resultados:</strong> Relatórios detalhados para otimizar cada campanha.
                            </div>
                        </li>
                    </ul>
                </ServiceDetail>
                <ContactForm />
                <Testimonials />
            </main>
            <Footer />
            <AccessibilityControls theme={theme} onToggleTheme={toggleTheme} onCycleTextSize={cycleTextSize} />
            <BackToTopButton />
            <WhatsAppButton />
        </div>
    );
};

export default App;