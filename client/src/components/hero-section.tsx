import { Heart, Play } from "lucide-react";
import { useState, useRef } from "react";
import CountdownTimer from "./countdown-timer";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blush/10 via-lavender/10 to-soft-gold/10"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Wedding Video */}
        <div className="mb-8 animate-slide-up">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
            <video 
              ref={videoRef}
              className="w-full h-auto"
              poster="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450"
              controls
              preload="metadata"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onEnded={handleVideoEnded}
            >
              <source src="/card.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 rounded-full p-4 shadow-lg animate-bounce-gentle">
                  <Play className="text-rose-pink w-8 h-8 fill-current" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Couple Names */}
        <div className="animate-fade-in delay-300">
          <div className="flex items-center justify-center mb-4">
            <div className="text-rose-pink text-4xl mr-4">🌹</div>
            <h1 className="font-great-vibes text-6xl md:text-8xl lg:text-9xl text-deep-rose mb-4 drop-shadow-lg">
              Anoof & Salma
            </h1>
            <div className="text-rose-pink text-4xl ml-4">🌹</div>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-rose-pink to-deep-rose mx-auto mb-6"></div>
          <div className="flex items-center justify-center mb-2">
            <div className="text-blush text-2xl mr-3">💕</div>
            <p className="font-playfair text-xl md:text-2xl text-charcoal">
              Friday, October 10, 2025
            </p>
            <div className="text-blush text-2xl ml-3">💕</div>
          </div>
          <p className="font-lato text-lg text-charcoal/80">
            WHITE BUILDING, THE NEW SIBLARAK<br />
            
          </p>
          <p className="font-lato text-md text-charcoal/60">
            
            Gondang, Jatirejo, Sidowayah, Polanharjo<br />
            Klaten, Central Java
          </p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <Heart className="text-rose-pink w-16 h-16 animate-bounce-gentle fill-current" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30">
        <Heart className="text-deep-rose w-24 h-24 animate-bounce-gentle fill-current" />
      </div>
      <div className="absolute top-1/2 left-5 text-rose-pink/30 text-6xl animate-bounce-gentle" style={{animationDelay: '1s'}}>🌹</div>
      <div className="absolute top-1/3 right-5 text-blush/30 text-4xl animate-bounce-gentle" style={{animationDelay: '1.5s'}}>💖</div>
    </section>
  );
}
