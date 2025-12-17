import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-500 border-b ${
    scrolled 
      ? 'bg-dark/95 backdrop-blur-md border-white/5 py-4' 
      : 'bg-transparent border-transparent py-6'
  }`;

  const linkClass = (path: string) => `text-xs font-medium tracking-[0.2em] uppercase transition-all hover:text-primary relative group ${
    location.pathname === path 
      ? 'text-primary' 
      : 'text-gray-300'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo - Matching the IC Design */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center gap-4 group">
              {/* Stylized Logo Icon Representation */}
              <div className="relative w-10 h-10 flex items-center justify-center border border-primary/50 rounded-sm bg-black/50 group-hover:border-primary transition-colors duration-500">
                 <span className="font-display font-bold text-2xl text-gold-gradient tracking-tighter" style={{ textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)' }}>IC</span>
              </div>
              
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest text-white leading-none">
                  IDOLA
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-primary/80 leading-tight">
                  Clinics
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={linkClass('/')}>
              Inicio
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/treatments" className={linkClass('/treatments')}>
              Tratamientos
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className={linkClass('/about')}>
              La Clínica
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className={linkClass('/contact')}>
              Contacto
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link to="/contact" className="border border-primary text-primary hover:bg-primary hover:text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300">
              Pedir Cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-dark-surface absolute top-full left-0 w-full shadow-2xl border-t border-white/5 h-screen">
          <div className="px-6 pt-8 pb-6 space-y-6 flex flex-col items-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-serif text-white hover:text-primary">Inicio</Link>
            <Link to="/treatments" onClick={() => setIsOpen(false)} className="text-xl font-serif text-white hover:text-primary">Tratamientos</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-serif text-white hover:text-primary">La Clínica</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-serif text-white hover:text-primary">Contacto</Link>
            <div className="pt-8 mt-4 w-full px-8">
               <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary text-black px-4 py-4 text-sm font-bold uppercase tracking-widest">
                Pedir Cita
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;