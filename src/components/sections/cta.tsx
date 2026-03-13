import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-6 md:py-8 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-white border border-[#E2E8F0] p-5 md:p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)]">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[#1080A0]/5 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8">
            <div className="flex-1 max-w-2xl">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#EF4444] mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF4444]"></span>
                </span>
                Citas limitadas esta semana
              </div>

              <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#0F172A] md:text-3xl lg:text-4xl leading-[1.2]">
                Obtén un diagnóstico preciso y personalizado <span className="text-[#1080A0]">hoy mismo</span>
              </h2>
              
              <p className="mt-3 text-sm md:text-base text-[#64748B] leading-relaxed">
                No dejes tu salud para después. El monitoreo MAPA de 24 horas es la herramienta más efectiva para el control de tu presión arterial.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[260px]">
              <a
                href="https://api.whatsapp.com/send?phone=573009895852&text=Hola%20Dr.%20Obreg%C3%B3n%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Monitoreo%20MAPA%2024%20Horas."
                className="inline-flex h-14 md:h-16 items-center justify-center gap-2 rounded-xl bg-[#1080A0] px-8 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.3)] transition-all hover:scale-[1.02] hover:bg-[#0D6E8A] active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar por WhatsApp
              </a>

              <a
                href="tel:+573053979628"
                className="inline-flex h-14 md:h-16 items-center justify-center gap-2 rounded-xl bg-[#E1F1F6] px-8 text-base font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
              >
                <Phone className="h-4 w-4" />
                Llamar por teléfono
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
