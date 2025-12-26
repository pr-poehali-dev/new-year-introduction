import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-7xl md:text-9xl font-bold text-[#8E9196] mb-6 tracking-tight">
          С Новым
        </h1>
        <h1 className="text-7xl md:text-9xl font-bold text-[#8E9196] mb-8 tracking-tight">
          2025 Годом!
        </h1>
        <div className="text-2xl md:text-3xl text-[#222226] font-light tracking-wide">
          Пусть этот год принесёт волшебство
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#8E9196] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#8E9196] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
