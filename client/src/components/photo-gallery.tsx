import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Romantic couple embracing during golden hour in a flower field"
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Couple laughing together while sitting on a park bench surrounded by autumn leaves"
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Couple dancing together at sunset on a beach with waves in the background"
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Couple holding hands while walking through a vineyard during golden hour"
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Couple sharing a kiss in front of a beautiful cathedral with warm lighting"
  }
];

export default function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-rose-pink/10 to-blush/20 relative">
      {/* Decorative hearts and roses */}
      <div className="absolute top-10 left-10 text-rose-pink/20 text-3xl animate-bounce-gentle">💖</div>
      <div className="absolute bottom-10 right-10 text-deep-rose/20 text-4xl animate-bounce-gentle" style={{animationDelay: '1s'}}>🌹</div>
      <div className="absolute top-1/2 right-20 text-blush/20 text-2xl animate-bounce-gentle" style={{animationDelay: '1.5s'}}>💕</div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="text-rose-pink text-3xl mr-3">🌹</div>
            <h2 className="font-great-vibes text-5xl md:text-6xl text-deep-rose mb-4">Our Story</h2>
            <div className="text-rose-pink text-3xl ml-3">🌹</div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-pink to-deep-rose mx-auto mb-6"></div>
          <div className="flex items-center justify-center">
            <div className="text-blush text-xl mr-2">💕</div>
            <p className="font-lato text-lg text-charcoal/80">A glimpse into our journey together</p>
            <div className="text-blush text-xl ml-2">💕</div>
          </div>
        </div>

        {/* Our Love Story */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-8">
            
            {/* First Phase */}
            <div className="bg-gradient-to-r from-rose-pink/10 to-blush/20 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-rose-pink text-2xl mr-3">🌹</div>
                <h3 className="font-great-vibes text-3xl text-deep-rose">First Phase – A Spark Across Screens</h3>
              </div>
              <div className="space-y-3 text-charcoal/80 font-lato leading-relaxed">
                <p>It began in the most unexpected way — a message, a smile, and a shared curiosity.</p>
                <p>Late nights turned into deeper conversations.</p>
                <p>We laughed at silly memes, supported each other's dreams, and fell asleep with our phones still in hand.</p>
                <p>Though separated by miles, our hearts were already leaning in.</p>
                <p className="font-semibold text-deep-rose">What started as a simple chat became the start of something life-changing.</p>
              </div>
            </div>

            {/* Second Phase */}
            <div className="bg-gradient-to-r from-blush/10 to-rose-pink/20 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-blush text-2xl mr-3">💕</div>
                <h3 className="font-great-vibes text-3xl text-deep-rose">Second Phase – A Love That Grew in Words</h3>
              </div>
              <div className="space-y-3 text-charcoal/80 font-lato leading-relaxed">
                <p>Days turned to months, and our bond only deepened.</p>
                <p>We planned imaginary dates, celebrated small wins, and became each other's constant in a world that kept moving.</p>
                <p>Through birthdays spent apart, and video calls that lasted till sunrise,</p>
                <p>we learned how to love — patiently, honestly, and fully.</p>
                <p className="font-semibold text-deep-rose">Our love didn't just survive the distance — it thrived in it.</p>
              </div>
            </div>

            {/* Third Phase */}
            <div className="bg-gradient-to-r from-rose-pink/10 to-deep-rose/20 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-deep-rose text-2xl mr-3">💖</div>
                <h3 className="font-great-vibes text-3xl text-deep-rose">Third Phase – The First Embrace</h3>
              </div>
              <div className="space-y-3 text-charcoal/80 font-lato leading-relaxed">
                <p>The moment we had dreamed of finally came.</p>
                <p>Airports, butterflies, and a racing heart.</p>
                <p>Seeing each other — not through a screen, but in real life — was magic.</p>
                <p className="font-semibold text-rose-pink">That first hug felt like home.</p>
                <p>We walked through new cities hand in hand, laughed like old friends, and talked like soulmates.</p>
                <p>And somewhere between a quiet sunset and a shared coffee,</p>
                <p className="font-semibold text-deep-rose">you looked at me and asked the question I'd always hoped to hear.</p>
              </div>
            </div>

            {/* Fourth Phase */}
            <div className="bg-gradient-to-r from-blush/10 to-rose-pink/20 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-rose-pink text-2xl mr-3">🌹</div>
                <h3 className="font-great-vibes text-3xl text-deep-rose">Fourth Phase – Holding On, With Purpose</h3>
              </div>
              <div className="space-y-3 text-charcoal/80 font-lato leading-relaxed">
                <p>We parted once more, but this time… we had a date.</p>
                <p>You left with a promise on your lips and a ring in your bag.</p>
                <p>Every countdown felt shorter, every day more meaningful.</p>
                <p>The waiting was no longer empty — it was filled with planning, excitement, and love.</p>
                <p className="font-semibold text-deep-rose">We weren't just apart — we were preparing for forever.</p>
              </div>
            </div>

            {/* Final Phase */}
            <div className="bg-gradient-to-r from-deep-rose/10 to-blush/20 rounded-2xl p-8 shadow-lg border-2 border-rose-pink/30">
              <div className="flex items-center mb-4">
                <div className="text-deep-rose text-2xl mr-3">💖</div>
                <h3 className="font-great-vibes text-3xl text-deep-rose">Final Phase – Forever Begins Now</h3>
              </div>
              <div className="space-y-3 text-charcoal/80 font-lato leading-relaxed">
                <p>At last, the wait is over.</p>
                <p>Two hearts, once distant, now beat side by side.</p>
                <p>No more airport goodbyes, no more screen-lit nights.</p>
                <p className="font-semibold text-rose-pink">Just one home, one journey, and one lifetime together.</p>
                <p>This isn't the end of a long-distance story —</p>
                <p className="font-bold text-deep-rose text-lg">It's the beginning of forever.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Carousel */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryPhotos.map((photo, index) => (
                  <div key={index} className="min-w-full">
                    <img 
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Navigation */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal rounded-full shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal rounded-full shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-blush' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
