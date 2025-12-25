import { useEffect, useRef, useState } from 'react';

const portfolioImages = [
  {
    url: 'https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/a6963cb7c711966d0638911157f7a3d9.jpeg',
    title: 'Modern Fade'
  },
  {
    url: 'https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/d29a48d0d529179a7711ad4d5554e4c9.jpeg',
    title: 'Classic Pompadour'
  },
  {
    url: 'https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/4338e89f41b1b4dd1fdffb0e59e82512.jpeg',
    title: 'Beard Styling'
  },
  {
    url: 'https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/d1e3bbb9ec6ad9de3958fd8c4afad3b0.jpeg',
    title: 'Undercut Style'
  },
  {
    url: 'https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/f89bbce22d5a1d269bb152170e5be09f.jpeg',
    title: 'Hot Towel Shave'
  },
  {
    url: 'https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/85fc2fc8796769d71e37ecd13a3399f2.jpeg',
    title: 'Textured Crop'
  },
  {
    url: 'https://static.readdy.ai/image/ae1067545fa45dd208df7b872c112844/3990031de94deb632f736734e22d28fb.jpeg',
    title: 'Premium Service'
  }
];

const portfolioItems = [
  {
    title: 'Klassieke Fade',
    category: 'Knippen',
    image: 'https://readdy.ai/api/search-image?query=professional%20classic%20fade%20haircut%20barbershop%20styling%20clean%20simple%20background%20modern%20mens%20hairstyle%20short%20sides%20perfectly%20groomed%20hair&width=600&height=700&seq=port1&orientation=portrait'
  },
  {
    title: 'Baard Styling',
    category: 'Baard',
    image: 'https://readdy.ai/api/search-image?query=professional%20beard%20grooming%20styling%20barbershop%20perfectly%20trimmed%20beard%20clean%20simple%20background%20modern%20mens%20facial%20hair%20styling&width=600&height=700&seq=port2&orientation=portrait'
  },
  {
    title: 'Moderne Pompadour',
    category: 'Knippen',
    image: 'https://readdy.ai/api/search-image?query=professional%20modern%20pompadour%20hairstyle%20barbershop%20styling%20clean%20simple%20background%20mens%20hair%20perfectly%20styled%20volume&width=600&height=700&seq=port3&orientation=portrait'
  },
  {
    title: 'Traditionele Scheerbeurt',
    category: 'Scheren',
    image: 'https://readdy.ai/api/search-image?query=professional%20traditional%20straight%20razor%20shave%20barbershop%20clean%20simple%20background%20classic%20grooming%20smooth%20skin&width=600&height=700&seq=port4&orientation=portrait'
  },
  {
    title: 'Textured Crop',
    category: 'Knippen',
    image: 'https://readdy.ai/api/search-image?query=professional%20textured%20crop%20haircut%20barbershop%20styling%20clean%20simple%20background%20modern%20mens%20short%20hairstyle%20perfectly%20cut&width=600&height=700&seq=port5&orientation=portrait'
  },
  {
    title: 'Baard Trimmen',
    category: 'Baard',
    image: 'https://readdy.ai/api/search-image?query=professional%20beard%20trim%20grooming%20barbershop%20clean%20simple%20background%20perfectly%20shaped%20facial%20hair%20modern%20styling&width=600&height=700&seq=port6&orientation=portrait'
  }
];

export default function Portfolio() {
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
    <section id="portfolio" className="py-24 bg-[#FAFAFA]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 font-light">Ons Werk</p>
          <h2 className="text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Portfolio
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
            Bekijk enkele van onze beste creaties en laat u inspireren
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-1000 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {image.title}
                  </h3>
                  <div className="w-16 h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}