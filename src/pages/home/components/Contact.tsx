import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const openingHours = [
    { day: 'Maandag', hours: 'Gesloten' },
    { day: 'Dinsdag - Vrijdag', hours: '09:00 - 19:00' },
    { day: 'Zaterdag', hours: '09:00 - 17:00' },
    { day: 'Zondag', hours: '12:00 - 18:00' }
  ];

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
    <section id="contact" className="py-24 bg-[#1C1C1C]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 font-light">Neem Contact Op</p>
          <h2 className="text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Bezoek Ons
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
            We verwelkomen u graag in onze barbershop in het hart van Venlo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Openingstijden
              </h3>
              <div className="space-y-4">
                {openingHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-700 group hover:border-[#D4AF37] transition-colors duration-300"
                  >
                    <span className="text-gray-400 text-base group-hover:text-white transition-colors duration-300">{item.day}</span>
                    <span className="text-white font-semibold text-base">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-3xl mt-6 italic font-semibold">
                Graag ruim van te voren een afspraak maken
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Contact Informatie
              </h3>
              <div className="space-y-4">
                <a 
                  href="tel:+31643464275"
                  className="flex items-center gap-4 text-gray-600 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-all duration-300 group-hover:scale-110">
                    <i className="ri-phone-line text-xl text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-light">Telefoon</p>
                    <p className="font-light">+31 6 43464275</p>
                  </div>
                </a>

                <a 
                  href="mailto:Thegentleman077@hotmail.com"
                  className="flex items-center gap-4 text-gray-600 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-all duration-300 group-hover:scale-110">
                    <i className="ri-mail-line text-xl text-[#D4AF37] group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-light">Email</p>
                    <p className="font-light">Thegentleman077@hotmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-xl text-[#D4AF37]"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-light">Adres</p>
                    <p className="font-light">Straelseweg 99, 5911 CN Venlo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/31643464275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                WhatsApp
              </a>
              <a
                href="tel:+31643464275"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#D4AF37] text-white rounded-lg hover:bg-[#C4A037] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line text-xl"></i>
                Bel Nu
              </a>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <a
              href="https://share.google/wfURvyox9yvaNBCN4"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border-3 border-[#D4AF37] shadow-2xl h-full min-h-[600px] transform hover:scale-105 transition-transform duration-500 cursor-pointer relative group"
            >
              <div className="w-full h-full min-h-[600px]">
                <img
                  src="https://readdy.ai/api/search-image?query=detailed%20street%20map%20view%20of%20Straelseweg%2099%20in%20Venlo%20Netherlands%20showing%20urban%20area%20with%20clear%20street%20names%20roads%20buildings%20parks%20green%20spaces%20modern%20cartography%20style%20clean%20professional%20map%20design%20with%20location%20marker%20pin%20highlighting%20the%20exact%20address&width=800&height=900&seq=mapview1&orientation=portrait"
                  alt="Map of Straelseweg 99, Venlo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#D4AF37] text-white px-6 py-3 rounded-full font-semibold">
                  <i className="ri-map-pin-line mr-2"></i>
                  Open in Google Maps
                </div>
              </div>
            </a>
            <div className="mt-6 text-center">
              <p className="text-white text-base font-semibold mb-2">Straelseweg 99, 5911 CN Venlo</p>
              <a
                href="https://www.google.com/maps/dir//Straelseweg+99,+5911+CN+Venlo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] text-sm hover:text-[#C4A037] transition-colors duration-300 cursor-pointer inline-flex items-center gap-2 group"
              >
                Get Directions
                <i className="ri-arrow-right-line transform group-hover:translate-x-2 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}