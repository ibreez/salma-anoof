import { Button } from "@/components/ui/button";

export default function SocialSharing() {
  const shareUrl = window.location.href;
  const shareText = "You're invited to Anoof & Salma's wedding! Join us for our special day.";

  const shareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareInstagram = () => {
    // Instagram doesn't have direct sharing URL, so we'll copy to clipboard
    navigator.clipboard.writeText(shareText + " " + shareUrl);
    alert("Wedding invitation link copied to clipboard! You can now share it on Instagram.");
  };

  const shareEmail = () => {
    const subject = encodeURIComponent("Anoof & Salmas's Wedding Invitation");
    const body = encodeURIComponent(shareText + "\n\n" + shareUrl);
    const url = `mailto:?subject=${subject}&body=${body}`;
    window.open(url, '_self');
  };

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 bg-gradient-to-br from-rose-pink/20 to-blush/30 relative">
      {/* Decorative hearts and roses */}
      <div className="absolute top-5 left-10 text-rose-pink/20 text-2xl animate-float">🌹</div>
      <div className="absolute top-5 right-10 text-deep-rose/20 text-2xl animate-float" style={{animationDelay: '1s'}}>💕</div>
      <div className="absolute bottom-5 left-1/2 text-blush/20 text-2xl animate-float" style={{animationDelay: '2s'}}>💖</div>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="text-rose-pink text-2xl mr-2">💕</div>
          <h3 className="font-playfair text-2xl text-deep-rose">Share Our Joy</h3>
          <div className="text-rose-pink text-2xl ml-2">💕</div>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={shareWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition-colors duration-300 transform hover:scale-110"
          >
            <span className="text-xl">📱</span>
          </Button>
          
          <Button
            onClick={shareInstagram}
            className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full transition-colors duration-300 transform hover:scale-110"
          >
            <span className="text-xl">📷</span>
          </Button>
          
          
          
          <Button
            onClick={shareFacebook}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors duration-300 transform hover:scale-110"
          >
            <span className="text-xl">👥</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
