import { useEffect, useRef, useState } from 'react';

const services = {
  knippen: [
    { name: 'Knippen', price: '€25' },
    { name: 'Knippen & Baard', price: '€30' },
    { name: 'Kinderen', price: '€20' }
  ],
  baard: [
    { name: 'Baard Kort', price: '€10' },
    { name: 'Baard Lang', price: '€15' },
    { name: 'Baard Scheren', price: '€15' }
  ],
  gezicht: [
    { name: 'Gezicht Stomen', price: '€15' },
    { name: 'Gezichtsmasker', price: '€10' },
    { name: 'Oor- & Neuswax', price: '€5' },
    { name: 'Wassen', price: '€3' }
  ]
};

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section id="services" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 font-light">Onze Diensten</p>
          <h2 className="text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Premium Barberdiensten
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
            Van klassieke kapsels tot moderne styling, wij bieden een compleet scala aan diensten
          </p>
        </div>

        <div className="space-y-12">
          {/* Knippen Section */}
          <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-sm transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Knippen
            </h3>
            <div className="space-y-1">
              {services.knippen.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-6 border-b border-gray-100 last:border-0 group"
                  style={{ 
                    animation: isVisible ? `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both` : 'none'
                  }}
                >
                  <span className="text-gray-800 text-3xl font-normal tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.02em' }}>
                    {service.name}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37] group-hover:w-20 transition-all duration-500"></div>
                    <span className="text-gray-900 text-3xl font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {service.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Baard Section */}
          <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-sm transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Baard
            </h3>
            <div className="space-y-1">
              {services.baard.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-6 border-b border-gray-100 last:border-0 group"
                  style={{ 
                    animation: isVisible ? `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s both` : 'none'
                  }}
                >
                  <span className="text-gray-800 text-3xl font-normal tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.02em' }}>
                    {service.name}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37] group-hover:w-20 transition-all duration-500"></div>
                    <span className="text-gray-900 text-3xl font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {service.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gezicht & Extra Section */}
          <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-sm transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Gezicht & Extra
            </h3>
            <div className="space-y-1">
              {services.gezicht.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-6 border-b border-gray-100 last:border-0 group"
                  style={{ 
                    animation: isVisible ? `fadeInUp 0.6s ease-out ${0.9 + index * 0.1}s both` : 'none'
                  }}
                >
                  <span className="text-gray-800 text-3xl font-normal tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.02em' }}>
                    {service.name}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37] group-hover:w-20 transition-all duration-500"></div>
                    <span className="text-gray-900 text-3xl font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {service.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-500 text-base italic font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
            Graag ruim van te voren een afspraak maken
          </p>
        </div>
      </div>
    </section>
  );
}