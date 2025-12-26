import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';

const wishes = [
  {
    icon: '🎄',
    title: 'Счастья',
    text: 'Пусть каждый день приносит радость и улыбки',
  },
  {
    icon: '⭐',
    title: 'Успеха',
    text: 'Достижения целей и покорения новых вершин',
  },
  {
    icon: '💫',
    title: 'Любви',
    text: 'Тепла близких и искренних чувств',
  },
  {
    icon: '🎁',
    title: 'Процветания',
    text: 'Благополучия, изобилия и стабильности',
  },
];

const Wishes = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className={`text-5xl md:text-6xl font-bold text-[#222226] mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Мои пожелания
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => (
            <Card
              key={index}
              className={`bg-white/50 backdrop-blur-sm p-8 border-white/30 hover:bg-white/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-6xl mb-4">{wish.icon}</div>
              <h3 className="text-3xl font-bold text-[#222226] mb-3">{wish.title}</h3>
              <p className="text-lg text-[#403E43] font-light">{wish.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishes;
