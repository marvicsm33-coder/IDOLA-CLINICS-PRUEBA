import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-primary/50">
                 <span className="font-display font-bold text-lg text-primary">IC</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest text-white">IDOLA</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
              Donde la maestría estética se une al lujo. Realzamos tu belleza natural con precisión, seguridad y arte en un santuario de calma.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 border border-white/10 rounded-full hover:border-primary"><Facebook size={16} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 border border-white/10 rounded-full hover:border-primary"><Instagram size={16} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 border border-white/10 rounded-full hover:border-primary"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Treatments Links */}
          <div>
            <h4 className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">Tratamientos</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/treatments" className="hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>Estética Facial</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>Contorno Corporal</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>Tratamientos Láser</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>Servicios Hombres</Link></li>
            </ul>
          </div>

          {/* Clinic Links */}
          <div>
            <h4 className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">Clínica</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">Nuestro Equipo</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Filosofía</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Tecnología</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Trabaja con nosotros</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4 font-light">Suscríbete para recibir novedades y ofertas exclusivas.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-transparent border-none text-white text-sm px-0 py-2 w-full focus:ring-0 outline-none placeholder-gray-600"
              />
              <button className="text-primary hover:text-white transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-wider text-gray-600">
          <p>© 2024 Idola Clinics. Todos los derechos reservados.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;