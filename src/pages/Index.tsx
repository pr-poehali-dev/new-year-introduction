import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Greeting from '@/components/Greeting';
import Wishes from '@/components/Wishes';
import VideoSection from '@/components/VideoSection';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Snowfall from '@/components/Snowfall';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F1F0FB] via-[#E5DEFF] to-[#D3E4FD] overflow-hidden">
      <Snowfall />
      <MusicPlayer />
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Greeting />
        <Wishes />
        <VideoSection />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
};

export default Index;