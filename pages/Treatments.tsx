import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Sun, Smile, Zap, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

const TreatmentCard = ({ title, desc, icon: Icon, delay }: { title: string, desc: string, icon: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-dark-surface p-10 border border-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-fluted-pattern opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <div className="mb-8 text-primary/50 group-hover:text-primary transition-colors duration-300">
      <Icon size={40} strokeWidth={1} />
    </div>
    <h3 className="text-2xl font-display text-white mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
      {desc}
    </p>
    <Link to="/contact" className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
      Pedir Cita
    </Link>
  </motion.div>
);

const Treatments: React.FC = () => {
  return (
    <div className="w-full pt-20 bg-dark">
       <header className="relative py-32 border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute inset-0 bg-fluted-pattern opacity-20"></div>
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Menú de Servicios</span>
          <h1 className="text-5xl md:text-6xl font-display text-white mb-6">Nuestros Tratamientos</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 font-light leading-relaxed">
            Procedimientos científicamente probados adaptados a tu anatomía única.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Facial */}
          <div className="mb-32">
            <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
              <h2 className="text-3xl font-display text-white">Estética Facial</h2>
              <span className="hidden md:block text-primary font-serif italic text-xl">Restaurar y Rejuvenecer</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TreatmentCard 
                title="Armonización" 
                desc="Equilibrio facial completo utilizando rellenos premium para restaurar volumen y definir contornos para una apariencia naturalmente más joven." 
                icon={Smile}
                delay={0}
              />
              <TreatmentCard 
                title="Antiarrugas" 
                desc="Tratamientos precisos con neuromoduladores para suavizar líneas dinámicas y prevenir futuras arrugas, manteniendo la expresividad." 
                icon={Sparkles}
                delay={0.1}
              />
              <TreatmentCard 
                title="Potenciadores de Piel" 
                desc="Terapia de hidratación profunda que mejora la calidad, elasticidad y firmeza de la piel desde el interior, creando un brillo duradero." 
                icon={Activity}
                delay={0.2}
              />
            </div>
          </div>

          {/* Body */}
          <div className="mb-32">
             <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
              <h2 className="text-3xl font-display text-white">Escultura Corporal</h2>
              <span className="hidden md:block text-primary font-serif italic text-xl">Definir y Dar Forma</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TreatmentCard 
                title="Criolipólisis" 
                desc="Tecnología de reducción de grasa no invasiva que ataca y elimina las células grasas rebeldes mediante enfriamiento controlado." 
                icon={Sun}
                delay={0}
              />
              <TreatmentCard 
                title="Depilación Láser" 
                desc="Tecnología avanzada de láser de diodo para una reducción del vello permanente e indolora adecuada para todos los tipos de piel." 
                icon={Zap}
                delay={0.1}
              />
              <TreatmentCard 
                title="Reafirmación Corporal" 
                desc="Tratamientos de radiofrecuencia para tensar la piel y mejorar la textura en áreas como el abdomen, brazos y muslos." 
                icon={Feather}
                delay={0.2}
              />
            </div>
          </div>

          {/* CTA Box - Gold */}
          <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 p-16 relative overflow-hidden text-center">
            <div className="relative z-10">
              <h3 className="text-3xl font-display text-white mb-4">Planes de Tratamiento a Medida</h3>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto font-light">
                ¿No estás seguro de qué tratamiento es el adecuado para ti? Nuestros especialistas realizan evaluaciones completas para diseñar tu hoja de ruta personal.
              </p>
              <Link to="/contact" className="bg-primary text-black hover:bg-white px-8 py-3 uppercase text-xs font-bold tracking-widest transition-all duration-300">
                Pedir Cita
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Treatments;