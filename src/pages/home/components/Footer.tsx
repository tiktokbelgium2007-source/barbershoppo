export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0D0D] py-16 mx-6 mb-6 rounded-3xl">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <img
              src="https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/243479a339d9ddb27e1993f8f561c11a.jpeg"
              alt="The Gentleman Barbershop"
              className="h-16 w-auto mb-4"
            />
            <p className="text-[#D4AF37] text-sm font-light">Precision. Style. Confidence.</p>
          </div>

          <div>
            <h3 className="text-xl font-light text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Gentleman
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              Premium barbershop in Venlo. Waar traditie en moderne stijl samenkomen 
              voor de perfecte grooming ervaring.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-light text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Snelle Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-light cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-light cursor-pointer">
                  Over Ons
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-light cursor-pointer">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-light cursor-pointer">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-light cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-300 font-light">
                <i className="ri-map-pin-line text-[#D4AF37] mt-1"></i>
                <span>Straelseweg 99, 5911 CN Venlo</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 font-light">
                <i className="ri-phone-line text-[#D4AF37] mt-1"></i>
                <a href="tel:+31612345678" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                  +31 6 43464275
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 font-light">
                <i className="ri-mail-line text-[#D4AF37] mt-1"></i>
                <a href="mailto:Thegentleman077@hotmail.com" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                  Thegentleman077@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Volg Ons
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/thegentlemanbarbershop077?igsh=MWRoeWM0ODU2OWN1dQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 text-sm hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-lg mr-2"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@thegentleman077?_r=1&_t=ZG-92TSGMOWOzw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 text-sm hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <i className="ri-tiktok-fill text-lg mr-2"></i>
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31643464275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 text-sm hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <i className="ri-whatsapp-fill text-lg mr-2"></i>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Get exclusive offers</p>
            <div className="flex items-center bg-[#1C1C1C] rounded-full p-1 border border-gray-700">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent text-white text-sm px-4 py-2 flex-1 outline-none"
              />
              <button className="bg-[#D4AF37] text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C4A037] transition-colors flex-shrink-0 cursor-pointer">
                <i className="ri-arrow-right-line text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-light">
            © 2024 The Gentleman Barbershop. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 font-light cursor-pointer">
              Privacybeleid
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 font-light cursor-pointer">
              Voorwaarden
            </a>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 font-light cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
