import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Over Ons', href: '#about' },
    { label: 'Diensten', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center transform transition-all duration-500 hover:scale-105">
            <img
              src="https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/243479a339d9ddb27e1993f8f561c11a.jpeg"
              alt="The Gentleman Barbershop"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer relative group ${
                scrolled ? 'text-gray-900 hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer relative group ${
                scrolled ? 'text-gray-900 hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer relative group ${
                scrolled ? 'text-gray-900 hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer relative group ${
                scrolled ? 'text-gray-900 hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer relative group ${
                scrolled ? 'text-gray-900 hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <a
            href="tel:+31643464275"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#C4A037] hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
}
