import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Marco van den Berg',
    rating: 5,
    text: 'Beste kapper in Venlo! Altijd tevreden met mijn haircut.',
    date: '2 weken geleden',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20dutch%20man%20portrait%20clean%20background%20modern%20style%20headshot%20photo&width=100&height=100&seq=avatar1&orientation=squarish'
  },
  {
    name: 'Thomas Janssen',
    rating: 5,
    text: 'Geweldige service en aandacht voor detail. Mijn baard ziet er perfect uit.',
    date: '1 maand geleden',
    avatar: 'https://readdy.ai/api/search-image?query=young%20professional%20man%20portrait%20clean%20white%20background%20business%20headshot&width=100&height=100&seq=avatar2&orientation=squarish'
  },
  {
    name: 'Lars Vermeulen',
    rating: 5,
    text: 'Top barbershop! Moderne stijl gecombineerd met klassieke technieken.',
    date: '3 weken geleden',
    avatar: 'https://readdy.ai/api/search-image?query=handsome%20man%20portrait%20professional%20photo%20clean%20simple%20background%20headshot&width=100&height=100&seq=avatar3&orientation=squarish'
  },
  {
    name: 'Daan Peters',
    rating: 5,
    text: 'Professioneel team en uitstekende kwaliteit. Kom hier al jaren.',
    date: '2 maanden geleden',
    avatar: 'https://readdy.ai/api/search-image?query=mature%20professional%20man%20portrait%20clean%20background%20business%20photo%20headshot&width=100&height=100&seq=avatar4&orientation=squarish'
  },
  {
    name: 'Ruben de Vries',
    rating: 5,
    text: 'Altijd een perfecte knipbeurt. Vriendelijk personeel en goede sfeer.',
    date: '1 week geleden',
    avatar: 'https://readdy.ai/api/search-image?query=young%20man%20smiling%20portrait%20professional%20clean%20white%20background%20headshot&width=100&height=100&seq=avatar5&orientation=squarish'
  },
  {
    name: 'Sven Bakker',
    rating: 5,
    text: 'Beste barbershop ervaring ooit. Zeer aan te raden!',
    date: '3 dagen geleden',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20businessman%20portrait%20clean%20background%20modern%20headshot%20photo&width=100&height=100&seq=avatar6&orientation=squarish'
  }
];

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  // Auto-play functionality
  useEffect(() => {
    if (isVisible) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 6000); // Change every 6 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isVisible, currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    // Reset auto-play timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-4 font-light">Wat Onze Klanten Zeggen</p>
          <h2 className="text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Klantbeoordelingen
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill text-[#D4AF37] text-2xl"></i>
            ))}
            <span className="text-gray-500 text-base ml-3 font-light">5.0 uit 150+ reviews</span>
          </div>
        </div>

        {/* Single Review Display */}
        <div 
          className="relative min-h-[400px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={currentIndex}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-8 transition-all duration-700 ease-in-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              animation: isVisible ? `fadeSlide${direction > 0 ? 'Left' : 'Right'} 0.7s ease-in-out` : 'none'
            }}
          >
            {/* Avatar */}
            <div className="mb-8 relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#D4AF37]/20 shadow-lg">
                <img 
                  src={currentReview.avatar} 
                  alt={currentReview.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-md">
                <i className="ri-double-quotes-r text-white text-sm"></i>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <i 
                  key={i} 
                  className="ri-star-fill text-[#D4AF37] text-2xl"
                  style={{ animation: `starPop ${0.3 + i * 0.1}s ease-out` }}
                ></i>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "{currentReview.text}"
            </p>

            {/* Name and Date */}
            <div>
              <p className="font-medium text-gray-900 text-lg mb-1">{currentReview.name}</p>
              <p className="text-gray-400 text-sm font-light">{currentReview.date}</p>
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-[#D4AF37] cursor-pointer group"
            aria-label="Previous review"
          >
            <i className="ri-arrow-left-s-line text-2xl transform group-hover:-translate-x-1 transition-transform duration-300"></i>
          </button>
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-[#D4AF37] cursor-pointer group"
            aria-label="Next review"
          >
            <i className="ri-arrow-right-s-line text-2xl transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-500 rounded-full cursor-pointer ${
                index === currentIndex
                  ? 'w-12 h-3 bg-[#D4AF37]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://www.google.com/maps/search/The+Gentleman+Barbershop+Venlo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D4AF37] font-light text-base hover:text-[#C4A037] transition-all duration-300 cursor-pointer group hover:gap-3"
          >
            Lees meer reviews op Google
            <i className="ri-arrow-right-line text-xl transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeSlideRight {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes starPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}