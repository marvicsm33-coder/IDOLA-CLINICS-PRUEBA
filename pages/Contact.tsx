import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Consulta General',
    message: '',
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por tu consulta. Te contactaremos en breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, privacy: e.target.checked }));
  };

  const inputClass = "block w-full border-b border-gray-700 bg-transparent text-white placeholder-gray-600 focus:border-primary focus:ring-0 sm:text-sm py-3 px-0 transition-colors";

  return (
    <div className="w-full pt-20 bg-dark">
      {/* Header */}
      <header className="relative py-24 sm:py-32">
         <div className="absolute inset-0 bg-fluted-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Ponte en Contacto</span>
          <h1 className="text-4xl md:text-6xl font-display text-white mb-6">Contáctanos</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 font-light tracking-wide">
            Comienza tu viaje hacia la elegancia atemporal.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-display text-white mb-10">Visita Nuestra Clínica</h2>
              
              <div className="grid grid-cols-1 gap-10">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 text-primary mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Ubicación</h3>
                    <p className="text-gray-400 font-light">
                      Carrer de Buenos Aires, n° 34<br/>
                      L'Eixample, 08036 Barcelona
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 text-primary mt-1">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Teléfono</h3>
                        <p className="text-gray-400 font-light hover:text-primary transition-colors cursor-pointer">931 20 64 75</p>
                    </div>
                    </div>
                    <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 text-primary mt-1">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Email</h3>
                        <p className="text-gray-400 font-light hover:text-primary transition-colors cursor-pointer">info@idolaclinics.com</p>
                    </div>
                    </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 text-primary mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Horario de Apertura</h3>
                    <p className="text-gray-400 font-light">
                      Lun - Vie: 9:30 – 21:00<br/>
                      Sáb - Dom: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder with Gold/Dark filter */}
            <div className="w-full h-64 bg-dark-surface border border-white/5 relative overflow-hidden grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-700">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Carrer%20de%20Buenos%20Aires,%2034,%2008036%20Barcelona&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="opacity-60"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-dark-surface p-10 border border-white/5 relative">
            <h2 className="text-3xl font-display text-white mb-2">Envíanos un Mensaje</h2>
            <p className="text-gray-500 mb-10 text-sm font-light">Por favor, rellena el formulario a continuación y te contactaremos en breve.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nombre</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className={inputClass} placeholder="Nombre" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Apellidos</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className={inputClass} placeholder="Apellidos" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Correo Electrónico</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" className={inputClass} placeholder="ejemplo@email.com" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Teléfono</label>
                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className={inputClass} placeholder="+34 600 000 000" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Interés</label>
                <select name="interest" value={formData.interest} onChange={handleChange} className={`${inputClass} text-white`}>
                  <option className="bg-dark">Consulta General</option>
                  <option className="bg-dark">Tratamientos Faciales</option>
                  <option className="bg-dark">Contorno Corporal</option>
                  <option className="bg-dark">Terapia Láser</option>
                  <option className="bg-dark">Consulta</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mensaje</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className={inputClass} placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <div className="flex items-start pt-4">
                <div className="flex h-5 items-center">
                  <input required id="privacy" name="privacy" checked={formData.privacy} onChange={handleCheckbox} type="checkbox" className="h-4 w-4 rounded border-gray-700 bg-transparent text-primary focus:ring-offset-dark focus:ring-primary" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-500 font-light">Acepto la <a href="#" className="text-white hover:text-primary transition-colors">Política de Privacidad</a>.</label>
                </div>
              </div>

              <button type="submit" className="w-full flex justify-center py-4 px-8 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] mt-8">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;