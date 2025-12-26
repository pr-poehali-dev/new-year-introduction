import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contact = () => {
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
      <div className={`max-w-4xl mx-auto w-full transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <Card className="bg-white/50 backdrop-blur-sm p-12 md:p-16 border-white/30">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] flex items-center justify-center text-5xl shadow-lg">
              👋
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#222226] mb-4">
              Анна Иванова
            </h2>
            <p className="text-xl text-[#403E43] font-light">
              Дизайнер и создатель волшебства
            </p>
          </div>
          
          <div className="space-y-6">
            <a
              href="mailto:anna@example.com"
              className="flex items-center justify-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300 hover:scale-105 group"
            >
              <Icon name="Mail" size={24} className="text-[#8E9196] group-hover:text-[#222226] transition-colors" />
              <span className="text-lg text-[#403E43]">anna@example.com</span>
            </a>
            
            <a
              href="tel:+79001234567"
              className="flex items-center justify-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300 hover:scale-105 group"
            >
              <Icon name="Phone" size={24} className="text-[#8E9196] group-hover:text-[#222226] transition-colors" />
              <span className="text-lg text-[#403E43]">+7 (900) 123-45-67</span>
            </a>
            
            <div className="flex justify-center gap-6 pt-6">
              <a
                href="#"
                className="w-14 h-14 flex items-center justify-center bg-white/50 rounded-full hover:bg-white/70 transition-all duration-300 hover:scale-110"
              >
                <Icon name="Instagram" size={24} className="text-[#8E9196]" />
              </a>
              <a
                href="#"
                className="w-14 h-14 flex items-center justify-center bg-white/50 rounded-full hover:bg-white/70 transition-all duration-300 hover:scale-110"
              >
                <Icon name="Facebook" size={24} className="text-[#8E9196]" />
              </a>
              <a
                href="#"
                className="w-14 h-14 flex items-center justify-center bg-white/50 rounded-full hover:bg-white/70 transition-all duration-300 hover:scale-110"
              >
                <Icon name="Linkedin" size={24} className="text-[#8E9196]" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#C8C8C9]/30 text-center">
            <p className="text-sm text-[#8E9196]">
              © 2025 С наилучшими пожеланиями
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
