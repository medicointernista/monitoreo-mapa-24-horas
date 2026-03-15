import React from 'react';
import Image from 'next/image';

const services = [
    {
    title: "Monitoreo MAPA 24 Horas",
    description: "Nuestro servicio estrella para un diagnóstico preciso de la presión arterial durante todo el día y la noche.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c27c3349-49e9-4c2d-beb2-aa8ac8f366b4/Monitoreo-24-horas-1769434002547.webp?width=8000&height=8000&resize=contain",
    alt: "Dispositivo de monitoreo ambulatorio de presión arterial MAPA 24 horas - diagnóstico de hipertensión en Medellín",
    link: "#inicio"
  },
  {
    title: "Consulta de Medicina Interna",
    description: "Enfoque integral y personalizado, con evaluación completa, diagnóstico y plan de seguimiento.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c27c3349-49e9-4c2d-beb2-aa8ac8f366b4/Consulta-medicina-interna-1769434064560.webp?width=8000&height=8000&resize=contain",
    alt: "Consulta médica de especialista en medicina interna - evaluación integral de paciente en Medellín",
    link: "#inicio"
  },
    {
      title: "Control Cardiovascular",
      description: "Seguimiento especializado para pacientes con hipertensión, diabetes y riesgo cardiovascular.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c27c3349-49e9-4c2d-beb2-aa8ac8f366b4/control-cardivascular-1769434094250.webp?width=8000&height=8000&resize=contain",
      alt: "Equipamiento y tecnología para monitoreo cardiovascular y control de hipertensión arterial",
      link: "#inicio"
    }
];

const ServicesSection = () => {
  return (
    <section 
      id="servicios" 
      className="relative bg-[#F8F9FA] py-8 md:py-12 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header Content */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-4">
            Servicios médicos
          </h2>
          <p className="mt-3 text-[1rem] md:text-[1.125rem] leading-[1.6] text-[#64748B]">
            Explora los servicios principales y entra a cada uno para ver indicaciones, preparación y preguntas frecuentes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:border-[#1080A0]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
            >
              {/* Card Image */}
              <figure className="relative h-44 md:h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </figure>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.25rem] font-semibold leading-[1.4] text-[#0F172A] group-hover:text-[#1080A0] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.6] text-[#64748B]">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#E1F1F6] opacity-30 blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;
