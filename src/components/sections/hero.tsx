import React from 'react';
import Image from 'next/image';
import { Sparkles, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#F8F9FA]"
    >
      {/* Background Decorative Glow */}
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#1080A0]/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#E1F1F6]/50 blur-[120px]" />
      </div>

        <div className="container relative mx-auto px-6 py-4 md:py-6 max-w-[1400px]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Content Column */}
          <div className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1E293B] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E1F1F6] text-[#1080A0]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1080A0] opacity-75"></span>
                  <Sparkles className="relative h-3 w-3" />
                </span>
              </span>
              Diagnóstico preciso en Medellín
            </div>

            {/* Main Heading */}
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl lg:text-6xl leading-[1.1]">
              Monitoreo MAPA 24 Horas en Medellín -{' '}
              <span className="text-[#1080A0]">Dr. Willmer Obregón</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#64748B] md:text-lg">
              Monitoreo continuo durante 24 horas para detectar picos y patrones invisibles en consulta. Ideal para diagnósticos precisos de hipertensión arterial.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://api.whatsapp.com/send?phone=573009895852&text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20anuncio%20en%20Google.%20El%20Dr.%20Willmer%20Obregon%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-4 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95"
              >
                Agendar Monitoreo vía WhatsApp
              </a>
              <a
                href="tel:+573011505174"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-10 py-4 text-base font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
              >
                <PhoneCall className="h-4 w-4" />
                Llama para una cita
              </a>
            </div>

            {/* Stats/Detail Cards - Desktop Grid 3 cols */}
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-transform hover:translate-y-[-2px]">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Tecnología</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">Avanzada</dd>
              </div>
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-transform hover:translate-y-[-2px]">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Monitoreo</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">24 Horas</dd>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-transform hover:translate-y-[-2px]">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Diagnóstico</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">Preciso</dd>
              </div>
            </dl>
          </div>

          {/* Right Image Column */}
          <div className="relative z-0 group animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Glow under image */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#1080A0] opacity-10 blur-[50px] animate-pulse"></div>
            
            <figure className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  alt="Paciente con dispositivo de monitoreo MAPA 24 horas portátil para medición de presión arterial - Dr. Willmer Obregón Medellín"
                  width={700}
                  height={500}
                className="h-[300px] w-full object-cover md:h-[500px]"
                src="/mapa24horas.jpg"
                priority
              />
              {/* Doctor Overlay Badge */}
              <figcaption className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="rounded-2xl bg-white/75 p-4 md:p-5 shadow-lg backdrop-blur-xl border border-white/20">
                  <p className="text-sm md:text-base font-semibold text-[#1E293B]">Dr. Willmer Obregón</p>
                  <p className="mt-0.5 text-[10px] md:text-xs font-bold text-[#1080A0] uppercase tracking-wide">Medicina Interna</p>
                </div>
              </figcaption>
            </figure>
            
            {/* Decorative bottom element */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#E1F1F6] opacity-60 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
