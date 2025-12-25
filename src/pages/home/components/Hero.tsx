
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/3d0523d1a4dfec64f4f57023a25a8e9d.jpeg"
          alt="Barbershop Interior"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-0">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-[#D4AF37] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 font-light">Welkom bij The Gentleman</p>
          </div>
          
          <div className={`mb-6 sm:mb-8 transition-all duration-1500 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 tracking-wide sm:tracking-wider animate-pulse-slow leading-relaxed"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)',
                fontWeight: '700',
                letterSpacing: '0.1em'
              }}
            >
              Be Unique,<br className="sm:hidden" /> Be a Gentleman
            </h2>
          </div>

          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Klassieke Stijl,<br />Moderne Elegantie
          </h1>
          
          <p className={`text-gray-200 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto sm:mx-0 font-light leading-relaxed transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Ervaar de kunst van traditioneel barbieren gecombineerd met hedendaagse technieken. 
            Waar elke knipbeurt een meesterwerk is.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a
              href="tel:0643464275"
              className="w-full sm:w-auto bg-[#D4AF37] text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#C4A037] hover:scale-105 hover:shadow-2xl transition-all duration-300 whitespace-nowrap cursor-pointer group text-center"
            >
              <span className="inline-block group-hover:scale-110 transition-transform duration-300">Bel Nu</span>
            </a>
            <a
              href="https://wa.me/31643464275"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              WhatsApp
            </a>
          </div>

          <div className="mt-12 sm:mt-20 animate-bounce-slow text-center sm:text-left">
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-down-line text-3xl sm:text-4xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
