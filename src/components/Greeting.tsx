import { useEffect, useState, useRef } from 'react';

const Greeting = () => {
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
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-xl border border-white/20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#222226] mb-8 text-center">
            Дорогие друзья!
          </h2>
          <p className="text-xl md:text-2xl text-[#403E43] leading-relaxed text-center font-light">
            Поздравляю вас с наступающим Новым 2025 годом! 
            Пусть этот год будет наполнен радостью, теплом домашнего очага, 
            новыми возможностями и яркими впечатлениями. 
            Желаю вам крепкого здоровья, благополучия и исполнения всех заветных желаний!
          </p>
          <div className="mt-12 text-center">
            <div className="inline-block text-6xl animate-pulse">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
