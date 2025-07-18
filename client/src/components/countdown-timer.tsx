import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-10-10T09:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 animate-slide-up delay-500">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-md mx-auto">
        <h3 className="font-playfair text-lg mb-4 text-charcoal">Our Special Day</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-blush">{timeLeft.days}</span>
            <span className="text-sm text-charcoal/70">Days</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-blush">{timeLeft.hours}</span>
            <span className="text-sm text-charcoal/70">Hours</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-blush">{timeLeft.minutes}</span>
            <span className="text-sm text-charcoal/70">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-blush">{timeLeft.seconds}</span>
            <span className="text-sm text-charcoal/70">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
