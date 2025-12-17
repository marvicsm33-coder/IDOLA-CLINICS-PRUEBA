import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="w-full pt-20 bg-dark text-light">
      {/* Header */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1618355208453-e8bd3324d35e?q=80&w=2070&auto=format&fit=crop" 
          alt="Clinic atmosphere" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 block animate-pulse">La Clínica</span>
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
            Excelencia <br/><span className="italic font-serif text-primary">Redefinida</span>
          </h1>
        </div>
      </header>

      {/* Philosophy */}
      <section className="py-24 bg-dark relative overflow-hidden">
        {/* Decorative Vertical Line */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-display text-white">
                El Estándar <span className="text-primary">Idola</span>
              </h2>
              <div className="w-24 h-0.5 bg-primary"></div>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                En Idola Clinics, navegamos en la intersección de la ciencia médica y la intuición artística. Creemos que las mejoras estéticas deben susurrar, no gritar.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Nuestra clínica se fundó sobre un principio simple: proporcionar un santuario donde los pacientes reciban tratamientos médicos de primer nivel en un entorno que calma el alma. El contraste elegante y austero de nuestros interiores refleja nuestra filosofía: claridad, precisión y belleza.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="border-l border-primary/30 pl-6">
                    <h4 className="font-display text-white text-lg mb-2">Cuidado Premium</h4>
                    <p className="text-sm text-gray-500">Atención al detalle sin concesiones.</p>
                </div>
                <div className="border-l border-primary/30 pl-6">
                    <h4 className="font-display text-white text-lg mb-2">Equipo Experto</h4>
                    <p className="text-sm text-gray-500">Maestría en cada procedimiento.</p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 border border-primary/20 rounded-sm transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop" 
                alt="Philosophy visual" 
                className="w-full h-auto object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Features Strip */}
      <div className="border-y border-white/5 bg-dark-surface py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-8 text-center">
             {['Tecnología Certificada', 'Certificados', 'Suites Privadas', 'Última Tecnología'].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-primary rounded-full"></span>
                     <span className="uppercase tracking-[0.2em] text-xs font-bold text-gray-300">{item}</span>
                 </div>
             ))}
          </div>
      </div>

      {/* Team Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-white mb-4">Nuestros Especialistas</h2>
              <p className="text-gray-500">Arquitectos de la belleza.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="p-8 border border-white/5 bg-dark-surface hover:border-primary/30 transition-colors duration-300">
                  <h3 className="text-2xl font-display text-white mb-2">Dr. Elena Rossi</h3>
                  <p className="text-primary text-xs uppercase tracking-widest mb-4">Director Médico</p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Con más de 15 años de experiencia en medicina estética, la Dra. Rossi es reconocida por su "toque invisible": la capacidad de crear resultados impactantes que parecen completamente naturales.
                  </p>
                </div>
                <div className="p-8 border border-white/5 bg-dark-surface hover:border-primary/30 transition-colors duration-300">
                  <h3 className="text-2xl font-display text-white mb-2">Dr. Marc Andre</h3>
                  <p className="text-primary text-xs uppercase tracking-widest mb-4">Dermatólogo</p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Especializado en terapias láser y salud de la piel, el Dr. Andre combina experiencia clínica con pasión por la longevidad cutánea.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1770&auto=format&fit=crop" alt="Doctors" className="w-full h-[600px] object-cover grayscale opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-surface text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-display text-white mb-6">Tu Visión, Nuestra Experiencia</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <Link to="/contact" className="bg-primary hover:bg-white hover:text-black text-black px-10 py-4 uppercase text-xs font-bold tracking-[0.2em] transition-all duration-300">
              Pedir Cita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;