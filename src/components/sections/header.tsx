import React from 'react';
import Image from 'next/image';

const Header = () => {
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c27c3349-49e9-4c2d-beb2-aa8ac8f366b4/Wilmer-Obregon-Logo-1769435168256.png?width=8000&height=8000&resize=contain";

  return (
    <header className="relative w-full z-50">
      {/* Top Banner */}
      <div className="bg-[#1080A0] text-[#F8FAFC]">
        <div className="container mx-auto px-6 py-2 max-w-[1400px]">
          <div className="text-center">
            <span className="text-[14px] font-semibold tracking-wide uppercase">
              Monitoreo MAPA 24 Horas Medellín
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 py-3 max-w-[1400px]">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a 
              href="/" 
              className="inline-flex items-center gap-2 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0]"
              aria-label="Ir al inicio"
            >
              <img 
                src={logoUrl}
                alt="Logo del Dr. Willmer Obregón" 
                className="h-14 md:h-16 w-auto"
              />
            </a>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <a 
                href="https://api.whatsapp.com/send?phone=573009895852&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta." 
                className="items-center justify-center gap-2 whitespace-nowrap rounded-lg text-[14px] md:text-[15px] font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex bg-[#1080A0] text-white shadow-lg shadow-[#1080A0]/20 hover:bg-[#0D6E8A] hover:scale-[1.02] active:scale-95 h-[44px] md:h-[48px] px-4 md:px-6"
              >
                Agendar WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
