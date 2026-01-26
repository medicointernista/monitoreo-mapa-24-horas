import React from 'react';
import { 
  Stethoscope, 
  ClipboardList, 
  ShieldCheck, 
  Users, 
  Award, 
  Heart,
  CheckCircle2
} from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    "Obesidad", "Diabetes", "Hipertensión Arterial",
    "Enfermedades Renales", "Enfermedades de Tiroides", "Gastritis",
    "Hipotiroidismo", "Colon Irritable", "Fibromialgia"
  ];

  const infoCards = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Atención experta",
      description: "Valoración clínica detallada y explicaciones claras."
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Plan práctico",
      description: "Metas, seguimiento y recomendaciones accionables."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Prevención",
      description: "Enfoque en riesgo cardiovascular y salud metabólica."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Acompañamiento",
      description: "Decisiones compartidas y trato humano."
    }
  ];

  const inclusions = [
    "Monitoreo continuo de la presión arterial (24h).",
    "Detección de picos y patrones ocultos.",
    "Interpretación experta por el Dr. Obregón.",
    "Diseño de un plan de tratamiento personalizado.",
    "Seguimiento continuo vía WhatsApp."
  ];

  return (
    <section id="sobre-mi" className="bg-white py-8 md:py-14 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Specialist Profile */}
          <div className="bg-white rounded-[2.5rem] border border-[#E2E8F0] p-6 md:p-10 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#1080A0] mb-3 block">
              Profesional Responsable
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-semibold text-[#0F172A] leading-tight mb-4">
              Dr. Willmer Obregón: especialista en Medicina Interna
            </h2>
            <p className="text-[#64748B] text-[0.9375rem] leading-relaxed mb-6">
              Con más de 15 años de experiencia y trayectoria consolidada en Medellín, el Dr. Obregón ofrece un enfoque integral que une lo físico y lo emocional. Su compromiso ético y atención empática garantizan un control detallado de su salud.
            </p>

            <div className="mb-8">
              <h3 className="text-[1rem] font-semibold text-[#1E293B] mb-3">
                Áreas de experiencia:
              </h3>
              <div className="flex flex-wrap gap-2">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E1F1F6] bg-[#F8FBFC] text-[#64748B] text-[11px] font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#1080A0]" />
                    {exp}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0]">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-[#1080A0] shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[1.125rem] font-bold text-[#0F172A]">15+ años</div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-[#64748B]">De Experiencia</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0]">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-[#1080A0] shadow-sm">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-[#64748B]">Especialidad:</div>
                  <div className="text-[0.6875rem] font-semibold text-[#1E293B]">Medicina Interna</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Monitoring */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold text-[#0F172A] mb-3">
                Sobre el Monitoreo
              </h2>
              <p className="text-[#64748B] text-[0.9375rem] leading-relaxed">
                El MAPA 24 horas es un estudio dinámico que permite conocer la realidad de su presión arterial mientras realiza sus actividades cotidianas, evitando diagnósticos incompletos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-sm hover:border-[#1080A0]/30"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#E1F1F6] text-[#1080A0] flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                    <h3 className="text-[0.9375rem] font-semibold text-[#1E293B] mb-1">{card.title}</h3>
                    <p className="text-[0.8125rem] text-[#64748B] leading-snug">{card.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8F9FA] rounded-[2rem] p-6 md:p-8 border border-[#E2E8F0]">
                <h3 className="text-[0.9375rem] font-bold text-[#0F172A] mb-4">
                  ¿Qué incluye el servicio?
                </h3>
              <ul className="space-y-3">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E1F1F6] text-[#1080A0] text-[0.6875rem] font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-[0.875rem] text-[#64748B] font-medium leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
