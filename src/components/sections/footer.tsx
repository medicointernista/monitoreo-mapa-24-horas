"use client";

import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c27c3349-49e9-4c2d-beb2-aa8ac8f366b4/Wilmer-Obregon-Logo-1769435168256.png?width=8000&height=8000&resize=contain";

  return (
    <footer className="bg-[#F8F9FA] pt-12 pb-8">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Dr. Willmer Obregón */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col h-full border border-slate-50">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Dr. Willmer Obregón</h3>
            <p className="text-[#64748B] text-[0.9375rem] leading-relaxed mb-8 flex-grow">
              Especialista en Medicina Interna en Medellín, con enfoque personalizado y comprensivo hacia el cuidado de la salud. Acompañamiento en condiciones cardiovasculares y metabólicas con tratamiento basado en evidencia.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/tu.internista.favorito/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/tu_internista_favorito/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@tuinternistafavorito" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Card 2: Contact Information */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col h-full border border-slate-50">
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Información de contacto</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-[#1080A0] shrink-0 mt-1" size={20} />
                <p className="text-[#64748B] text-[0.9375rem] leading-snug">
                  Biencrecer, Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia, 050030
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#1080A0] shrink-0 mt-1" size={20} />
                <div className="text-[#64748B] text-[0.9375rem] space-y-1">
                  <p>+57 301 150 5174</p>
                  <p>+57 300 989 5852</p>
                  <p>+57 305 397 9628</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Email and Hours */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col h-full border border-slate-50">
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Correo y horarios</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-[#1080A0] shrink-0" size={20} />
                <a href="mailto:tuinternistafavorito@gmail.com" className="text-[#64748B] text-[0.9375rem] hover:text-[#1080A0] transition-colors">
                  tuinternistafavorito@gmail.com
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="text-[#1080A0] shrink-0" size={20} />
                  <p className="text-[0.75rem] font-bold text-[#64748B] uppercase tracking-wider">HORARIO DE ATENCIÓN</p>
                </div>
                <div className="pl-9 text-[#64748B] text-[0.9375rem] space-y-2">
                  <p>Lunes a viernes: 7:00 am - 12:00 pm</p>
                  <p>Lunes a viernes: 1:30 pm - 5:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#64748B] text-[0.875rem] order-2 md:order-1">
            2026 LocalRank. Todos los derechos reservados.
          </div>

          <div className="order-1 md:order-2">
            <img 
              src={logoUrl} 
              alt="Logo Willmer Obregón M.D." 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#64748B] text-[0.875rem] font-medium hover:text-[#1080A0] transition-colors group order-3"
          >
            Volver arriba
            <ChevronUp size={18} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
