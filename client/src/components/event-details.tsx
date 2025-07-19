import { Calendar, Clock, MapPin, Navigation } from "lucide-react";

export default function EventDetails() {
  const openDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank');
  };

  return (
    <section id="details" className="py-20 bg-gradient-to-br from-rose-pink/20 to-blush/30 relative">
      {/* Decorative hearts and roses */}
      <div className="absolute top-10 left-10 text-rose-pink/20 text-3xl animate-bounce-gentle">💖</div>
      <div className="absolute bottom-10 right-10 text-deep-rose/20 text-4xl animate-bounce-gentle" style={{animationDelay: '1s'}}>🌹</div>
      <div className="absolute top-1/2 right-20 text-blush/20 text-2xl animate-bounce-gentle" style={{animationDelay: '1.5s'}}>💕</div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="text-rose-pink text-3xl mr-3">🌹</div>
            <h2 className="font-great-vibes text-5xl md:text-6xl text-deep-rose mb-4">Wedding Details</h2>
            <div className="text-rose-pink text-3xl ml-3">🌹</div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-pink to-deep-rose mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Ceremony Details */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-6">
              <div className="text-blush text-4xl mb-4">⛪</div>
              <h3 className="font-playfair text-2xl text-charcoal mb-2">NIKKAH</h3>
              <div className="w-16 h-0.5 bg-blush mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="text-soft-gold w-5 h-5 mr-3" />
                <span>Friday, October 10, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-soft-gold w-5 h-5 mr-3" />
                <span>9:00 AM - 10:00 AM</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-soft-gold w-5 h-5 mr-3 mt-1" />
                <div>
                  <p className="font-medium">MUSHOLA AL-HADI
</p>
                  <p className="text-sm text-charcoal/70">
                    Gaten, Sidowayah, Polanharjo<br />
                    Klaten, Central Java
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4866.345056678762!2d110.65985470000001!3d-7.5890275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6bb470a29fb1%3A0xee9d518791789de3!2sKawasan%20Wisata%20Siblarak!5e1!3m2!1sen!2smv!4v1752665321829!5m2!1sen!2smv"
                width="100%" 
                height="200" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            
            <button 
              onClick={() => window.open("https://www.google.com/maps/place/Kawasan+Wisata+Siblarak/@-7.5868326,110.660432,940m/data=!3m1!1e3!4m6!3m5!1s0x2e7a6bb470a29fb1:0xee9d518791789de3!8m2!3d-7.5890275!4d110.6598547!16s%2Fg%2F11gtyq1jsd?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
              className="w-full mt-4 bg-gradient-to-r from-rose-pink to-deep-rose hover:from-rose-pink/90 hover:to-deep-rose/90 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300"
            >
              <Navigation className="w-4 h-4 mr-2 inline" />
              Get Directions
            </button>
          </div>

          {/* Reception Details */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-6">
              <div className="text-blush text-4xl mb-4">🥂</div>
              <h3 className="font-playfair text-2xl text-charcoal mb-2">RECEPTION</h3>
              <div className="w-16 h-0.5 bg-blush mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="text-soft-gold w-5 h-5 mr-3" />
                <span>Friday, October 10, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-soft-gold w-5 h-5 mr-3" />
                <span>1:00 PM - 3:00 PM</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-soft-gold w-5 h-5 mr-3 mt-1" />
                <div>
                  <p className="font-medium">WHITE BUILDING, THE NEW SIBLARAK
</p>
                  <p className="text-sm text-charcoal/70">
                    Gondang, Jatirejo, Sidowayah, Polanharjo  <br />
                    Klaten, Central Java
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4866.345056678762!2d110.65985470000001!3d-7.5890275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6bb470a29fb1%3A0xee9d518791789de3!2sKawasan%20Wisata%20Siblarak!5e1!3m2!1sen!2smv!4v1752665321829!5m2!1sen!2smv"
                width="100%" 
                height="200" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            
            <button 
              onClick={() => window.open("https://www.google.com/maps/place/Kawasan+Wisata+Siblarak/@-7.5868326,110.660432,940m/data=!3m1!1e3!4m6!3m5!1s0x2e7a6bb470a29fb1:0xee9d518791789de3!8m2!3d-7.5890275!4d110.6598547!16s%2Fg%2F11gtyq1jsd?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
              className="w-full mt-4 bg-gradient-to-r from-rose-pink to-deep-rose hover:from-rose-pink/90 hover:to-deep-rose/90 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300"
            >
              <Navigation className="w-4 h-4 mr-2 inline" />
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
