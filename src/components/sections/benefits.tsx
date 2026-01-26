import React from 'react';
import { Activity, Monitor, Microscope, ShieldCheck, ClipboardList, HeartPulse } from 'lucide-react';

const benefitsData = [
  {
    icon: <Activity className="w-6 h-6" />,
    text: "Registro continuo y real de la presión arterial en tu vida diaria."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    text: "Dispositivo pequeño, discreto y cómodo, sin interrupciones importantes."
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    text: "Tecnología avanzada para un control detallado y preciso."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    text: "Evita tratamientos innecesarios basados en diagnósticos incompletos."
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    text: "Plan de tratamiento personalizado según tu realidad diaria."
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    text: "Detección efectiva de hipertensión oculta."
  }
];

export default function BenefitsSection() {
  return (
    <section 
      id="beneficios" 
      className="relative bg-white py-6 md:py-8 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#E1F1F6] rounded-full blur-3xl opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
            Beneficios del Monitoreo MAPA 24 Horas en Medellín
          </h2>
          <p className="mt-3 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
            Una herramienta fundamental para un diagnóstico preciso y un tratamiento adaptado a tus necesidades reales.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className="group flex items-start gap-4 p-6 rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8F9FA]/50 transition-all duration-300 hover:border-[#1080A0] hover:bg-white hover:shadow-lg"
            >
              <div 
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300"
              >
                {benefit.icon}
              </div>
              <p className="text-[1rem] font-medium leading-[1.5] text-[#1E293B] mt-1">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
