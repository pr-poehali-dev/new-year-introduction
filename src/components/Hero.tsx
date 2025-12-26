import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E5DEFF]/30 to-[#D3E4FD]/30 rounded-3xl blur-2xl"></div>
            <img
              src="https://cdn.poehali.dev/files/1000029541.jpg"
              alt="Новогоднее приветствие"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
        
        <div className={`text-center md:text-left transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-[#8E9196] mb-6 tracking-tight">
            С Новым
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-[#8E9196] mb-8 tracking-tight">
            2025 Годом!
          </h1>
          <div className="text-xl md:text-2xl text-[#222226] font-light tracking-wide">
            Пусть этот год принесёт волшебство
          </div>
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