import { useEffect, useState, useRef } from 'react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setImages([
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
      'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80',
      'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&q=80',
      'https://images.unsplash.com/photo-1544273677-0317f4c8f5c1?w=800&q=80',
      'https://images.unsplash.com/photo-1478827536114-da961b7f86a0?w=800&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
    ]);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className={`text-5xl md:text-6xl font-bold text-[#222226] mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Волшебные моменты
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden rounded-2xl group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={src}
                alt={`Зимнее фото ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222226]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
