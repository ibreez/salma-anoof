import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EventDetails from "@/components/event-details";
import RSVPSection from "@/components/rsvp-section";
import PhotoGallery from "@/components/photo-gallery";
import GiftRegistry from "@/components/gift-registry";
import SocialSharing from "@/components/social-sharing";

export default function WeddingInvitation() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-pink via-ivory to-blush/30 font-lato text-charcoal relative overflow-hidden">
      {/* Rose petals floating background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-rose-pink/20 text-4xl animate-bounce-gentle">🌹</div>
        <div className="absolute top-40 right-20 text-deep-rose/20 text-3xl animate-bounce-gentle" style={{animationDelay: '0.5s'}}>💕</div>
        <div className="absolute top-60 left-1/4 text-rose-pink/20 text-2xl animate-bounce-gentle" style={{animationDelay: '1s'}}>🌹</div>
        <div className="absolute bottom-80 right-10 text-blush/20 text-5xl animate-bounce-gentle" style={{animationDelay: '1.5s'}}>💖</div>
        <div className="absolute bottom-40 left-16 text-deep-rose/20 text-3xl animate-bounce-gentle" style={{animationDelay: '2s'}}>🌹</div>
        <div className="absolute top-32 right-1/3 text-rose-pink/20 text-2xl animate-bounce-gentle" style={{animationDelay: '2.5s'}}>💕</div>
      </div>
      
      <Navigation />
      <HeroSection />
      <EventDetails />
      {/* <RSVPSection /> */}
      <PhotoGallery />
      <GiftRegistry />
      <SocialSharing />
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-deep-rose to-charcoal/90 text-white py-16 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="font-great-vibes text-4xl md:text-5xl text-blush mb-4">Thank You</h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-soft-gold to-blush mx-auto mb-6"></div>
            <p className="font-lato text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              We are overwhelmed with joy and gratitude for your love and support. 
              Your presence at our wedding would make our special day even more meaningful. 
              We can't wait to celebrate with you!
            </p>
          </div>
          
          
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/70 text-sm">
              &copy; 2025 Anoof & Salma Wedding. Made with <i className="fas fa-heart text-blush"></i> for our special day.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
