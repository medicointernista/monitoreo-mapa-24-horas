"use client";

import React, { useState } from 'react';
import { ChevronDown, Circle as HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿El dispositivo es incómodo?",
    answer: "No, el dispositivo es pequeño y está diseñado específicamente para minimizar las molestias, permitiéndote realizar tus actividades normales y cotidianas durante las 24 horas del monitoreo."
  },
  {
    question: "¿Quién interpreta los resultados del monitoreo?",
    answer: "Los resultados son interpretados directamente por el Dr. Willmer Obregón, especialista en Medicina Interna, quien realizará un análisis detallado de los picos y patrones de su presión arterial para brindarle un diagnóstico certero."
  },
  {
    question: "¿Qué debo hacer en caso de una emergencia médica?",
    answer: "Si presenta síntomas graves como dolor intenso en el pecho, dificultad respiratoria severa o pérdida del conocimiento, debe acudir inmediatamente al servicio de urgencias más cercano independientemente del estudio en curso."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div 
      className={`mb-3 overflow-hidden rounded-[1.25rem] border transition-all duration-300 ${
        isOpen 
          ? 'border-[#1080A0] bg-white ring-1 ring-[#1080A0]/10 shadow-[0_10px_15px_-3px_rgba(16,128,160,0.05)]' 
          : 'border-[#E2E8F0] bg-white hover:border-[#1080A0]/30'
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
      >
        <span className={`text-[0.9375rem] font-semibold leading-relaxed transition-colors duration-200 ${isOpen ? 'text-[#1080A0]' : 'text-[#0F172A]'}`}>
          {question}
        </span>
        <ChevronDown 
          className={`h-4 w-4 flex-shrink-0 text-[#64748B] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1080A0]' : ''}`} 
        />
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-[0.875rem] leading-relaxed text-[#64748B]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F8F9FA] py-8 md:py-16">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* Header Section */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F1F6] px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-[#1080A0] shadow-sm">
              <HelpCircle className="h-3 w-3" />
              Resolviendo Tus Dudas
            </div>
            
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-[#0F172A] md:text-[2.25rem]">
              Preguntas Frecuentes
            </h2>
            
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-[#64748B]">
              Encuentra respuestas a las preguntas más comunes sobre la consulta y los servicios médicos del Dr. Willmer Obregón.
            </p>
            
            <div className="mt-8 hidden lg:block">
              <div className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F1F6] text-[#1080A0]">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
                  </svg>
                </div>
                  <div>
                    <h3 className="text-[0.875rem] font-bold text-[#1E293B]">¿Aún tienes dudas?</h3>
                    <p className="text-[0.75rem] text-[#64748B]">Contáctanos directamente por WhatsApp.</p>
                  </div>
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="w-full">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
            
            {/* Mobile Contact Box (Only visible on small screens) */}
            <div className="mt-6 rounded-2xl border border-dashed border-[#1080A0]/30 bg-[#E1F1F6]/30 p-5 text-center lg:hidden">
              <p className="text-[0.875rem] font-medium text-[#1E293B]">
                ¿No encontraste lo que buscabas?
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=573009895852&text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20anuncio%20en%20Google.%20El%20Dr.%20Willmer%20Obregon%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
                className="mt-2 inline-block text-[0.875rem] font-bold text-[#1080A0] hover:underline"
              >
                Pregúntanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
