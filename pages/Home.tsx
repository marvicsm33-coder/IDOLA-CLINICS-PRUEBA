import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="w-full bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Dark Luxury Clinic Vibe */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dark Luxury Interior" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-dark"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 flex justify-center"
          >
             {/* "IC" Monogram Effect mimicking the wall logo */}
            <div className="border border-primary/30 p-4 rounded-full bg-black/30 backdrop-blur-sm">
               <span className="font-display text-4xl text-primary font-bold tracking-tighter">IC</span>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="text-primary text-xs md:text-sm uppercase font-semibold mb-6"
          >
            Medicina Estética y Bienestar
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-tight"
          >
            IDOLA <span className="text-primary italic font-serif">Clinics</span>
          </motion.h1>
          
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"
          ></motion.div>

          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            Donde la precisión científica se encuentra con el arte de la belleza. <br className="hidden md:block"/>Adéntrate en nuestro santuario de elegancia.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/treatments" className="bg-primary hover:bg-white text-black px-10 py-4 uppercase text-xs font-bold tracking-[0.2em] transition-all duration-300 min-w-[200px]">
              Tratamientos
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-10 py-4 uppercase text-xs font-bold tracking-[0.2em] transition-all duration-300 min-w-[200px]">
              Pedir Cita
            </Link>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* The "Fluted Wall" Experience Section - Recreating the Image */}
      <section className="py-32 relative overflow-hidden bg-dark">
        {/* Fluted Wall CSS Background */}
        <div className="absolute inset-0 bg-fluted-pattern opacity-30"></div>
        {/* Spotlights */}
        <div className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-primary/50 to-transparent blur-sm"></div>
        <div className="absolute top-0 right-1/4 w-px h-64 bg-gradient-to-b from-primary/50 to-transparent blur-sm"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">La Experiencia</span>
              <h2 className="text-4xl md:text-5xl font-display text-white mb-8">Un Santuario de <br/><span className="text-primary italic font-serif">Elegancia Oscura</span></h2>
              <p className="text-gray-400 mb-6 font-light leading-relaxed text-lg">
                Inspirado por el contraste atemporal de luz y sombra, Idola Clinics está diseñado para ser más que un centro médico. Es un retiro.
              </p>
              <p className="text-gray-400 mb-10 font-light leading-relaxed text-lg">
                Nuestros interiores cuentan con relajantes paneles estriados, cálida iluminación ambiental y acentos dorados que reflejan nuestro compromiso con la calidad premium. Aquí, no eres solo un paciente; eres un invitado en nuestra casa de belleza.
              </p>
              
              <div className="flex gap-8 border-t border-white/10 pt-8">
                <div>
                   <span className="block text-3xl font-display text-white mb-1">15+</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500">Años de Experiencia</span>
                </div>
                <div>
                   <span className="block text-3xl font-display text-white mb-1">5k+</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500">Pacientes Felices</span>
                </div>
              </div>
            </div>

            {/* Visual - Mimicking the photo provided */}
            <div className="order-1 lg:order-2 relative h-[600px] border border-white/5 bg-dark-surface p-4 shadow-2xl shadow-black/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full"></div>
                
                {/* Simulated Wall Photo Layout */}
                <div className="w-full h-full relative overflow-hidden bg-fluted-pattern flex items-center justify-center">
                    {/* The "Orb" Lamp Glow Effect */}
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-200 rounded-full blur-xl opacity-80 animate-pulse"></div>
                    <div className="absolute bottom-24 right-24 w-24 h-24 bg-white rounded-full shadow-[0_0_60px_rgba(255,220,100,0.8)] z-20"></div>

                    {/* Wall Logo */}
                    <div className="absolute top-1/3 left-10 flex gap-4 items-center opacity-90">
                       <div className="text-6xl font-display text-gold-gradient font-bold drop-shadow-lg">IC</div>
                       <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
                       <div className="text-xs tracking-[0.4em] text-gold-gradient uppercase flex flex-col gap-2 font-bold">
                         <span>Idola</span>
                         <span>Clinics</span>
                       </div>
                    </div>

                    {/* Image overlay for realism (optional, if user swaps) */}
                     <img 
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                      alt="Interior Detail" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                    />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Especialidad</span>
            <h2 className="text-3xl md:text-5xl font-display text-white mt-4">Tratamientos Selectos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { 
                title: 'Estética Facial', 
                subtitle: 'Armonización y Rejuvenecimiento',
                img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop'
              },
              { 
                title: 'Escultura Corporal', 
                subtitle: 'Contorno y Reafirmación',
                img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop'
              },
              { 
                title: 'Láser Avanzado', 
                subtitle: 'Rejuvenecimiento Cutáneo',
                img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=2070&auto=format&fit=crop'
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative h-[500px] cursor-pointer overflow-hidden border border-white/5">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{service.subtitle}</span>
                  <h3 className="text-2xl font-display text-white mb-6">{service.title}</h3>
                  <Link to="/treatments" className="inline-flex items-center text-white border-b border-white/30 pb-1 hover:border-primary hover:text-primary transition-colors uppercase text-xs tracking-widest">
                    Descubrir <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy/Quote - Gold Accent */}
      <section className="py-24 relative bg-primary text-dark-surface overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Star size={32} className="mx-auto mb-8 text-black" fill="currentColor" />
          <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight mb-8">
            "No alteramos quién eres. Revelamos la obra maestra que siempre estuvo ahí."
          </h2>
          <Link to="/about" className="inline-block border border-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-primary transition-all duration-300">
            Nuestra Filosofía
          </Link>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-fluted-pattern opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl font-display text-white mb-6">Comienza Tu Transformación</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto font-light">
                Consultas disponibles de lunes a sábado. Experimenta la diferencia Idola.
            </p>
            <Link to="/contact" className="bg-white text-black px-12 py-4 uppercase text-sm font-bold tracking-[0.2em] hover:bg-primary transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                Solicitar Consulta
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;