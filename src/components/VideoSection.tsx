import { useEffect, useState, useRef } from 'react';

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className={`max-w-5xl mx-auto w-full transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-5xl md:text-6xl font-bold text-[#222226] mb-12 text-center">
          Зимняя сказка
        </h2>
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-sm border border-white/20">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/9C1NlorSNfQ"
            title="Зимний пейзаж"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-lg text-[#403E43] mt-8 font-light">
          Насладитесь красотой зимнего пейзажа
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
