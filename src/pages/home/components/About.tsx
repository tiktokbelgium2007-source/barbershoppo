import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-[#FAFAFA]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 font-light">Ons Verhaal</p>
            <h2 className="text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Traditie Ontmoet Innovatie
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6 font-light">
              Sinds 2015 biedt The Gentleman Barbershop de beste kapperservices in Venlo. 
              Ons team van ervaren barbiers combineert klassieke technieken met moderne trends 
              om u de perfecte look te geven.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8 font-light">
              We geloven dat elke klant uniek is en verdient een persoonlijke benadering. 
              Van traditionele scheerbeurt tot moderne fade cuts, wij zorgen ervoor dat u 
              er op uw best uitziet.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-light text-[#D4AF37] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>15+</div>
                <div className="text-gray-500 text-sm font-light">Jaar Ervaring</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-light text-[#D4AF37] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5000+</div>
                <div className="text-gray-500 text-sm font-light">Tevreden Klanten</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-light text-[#D4AF37] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5★</div>
                <div className="text-gray-500 text-sm font-light">Gemiddelde Rating</div>
              </div>
            </div>
          </div>

          <div className={`md:col-span-3 relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/3d0523d1a4dfec64f4f57023a25a8e9d.jpeg"
                alt="Master Barber"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#F5E6D3] to-[#D4AF37]/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}