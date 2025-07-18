import { Gift, University, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GiftRegistry() {
  const [copiedBCA, setCopiedBCA] = useState(false);
  const [copiedBRI, setCopiedBRI] = useState(false);

  const copyBankDetails = (bankType: 'BCA' | 'BRI') => {
    const bankDetails = bankType === 'BCA' 
      ? `Bank Central Asia\nAccount Name: SALMA HAMIDAH SITI PRAMESTI\nAccount Number: 773-705-7974`
      : `Bank Rakyat Indonesia\nAccount Name: SALMA HAMIDAH SITI\nAccount Number: 6746-0101-6316-538`;
    
    navigator.clipboard.writeText(bankDetails);
    
    if (bankType === 'BCA') {
      setCopiedBCA(true);
      setTimeout(() => setCopiedBCA(false), 2000);
    } else {
      setCopiedBRI(true);
      setTimeout(() => setCopiedBRI(false), 2000);
    }
  };

  return (
    <section id="registry" className="py-20 bg-gradient-to-br from-blush/10 to-rose-pink/20 relative">
      {/* Decorative hearts and roses */}
      <div className="absolute top-10 right-10 text-rose-pink/20 text-3xl animate-bounce-gentle">💖</div>
      <div className="absolute bottom-10 left-10 text-deep-rose/20 text-4xl animate-bounce-gentle" style={{animationDelay: '1s'}}>🌹</div>
      <div className="absolute top-1/2 left-20 text-blush/20 text-2xl animate-bounce-gentle" style={{animationDelay: '1.5s'}}>💕</div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="text-rose-pink text-3xl mr-3">🎁</div>
            <h2 className="font-great-vibes text-5xl md:text-6xl text-deep-rose mb-4">Gift Registry</h2>
            <div className="text-rose-pink text-3xl ml-3">🎁</div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-pink to-deep-rose mx-auto mb-6"></div>
          <div className="flex items-center justify-center">
            <div className="text-blush text-xl mr-2">💕</div>
            <p className="font-lato text-lg text-charcoal/80">Your presence is the greatest gift, but if you wish to honor us with a gift...</p>
            <div className="text-blush text-xl ml-2">💕</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bank Details BCA */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <Gift className="text-rose-pink w-16 h-16 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl text-charcoal mb-2">BCA Bank</h3>
              <div className="w-16 h-0.5 bg-rose-pink mx-auto"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-rose-pink/5 rounded-lg p-4">
                <p className="text-sm text-charcoal/70 mb-2">Bank Details</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Bank Name:</span>
                    <span className="text-right">Bank Central Asia</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Account Name:</span>
                    <span className="text-right">SALMA HAMIDAH SITI PRAMESTI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Account Number:</span>
                    <span className="text-right font-mono">773-705-7974</span>
                  </div>
                </div>
              </div>

              {/* Copy Bank Details Button */}
              <Button 
                onClick={() => copyBankDetails('BCA')}
                className="w-full bg-gradient-to-r from-rose-pink to-deep-rose hover:from-rose-pink/90 hover:to-deep-rose/90 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                {copiedBCA ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Bank Details
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Bank Details BRI */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <University className="text-rose-pink w-16 h-16 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl text-charcoal mb-2">BRI Bank</h3>
              <div className="w-16 h-0.5 bg-rose-pink mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-rose-pink/5 rounded-lg p-4">
                <p className="text-sm text-charcoal/70 mb-2">Bank Details</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Bank Name:</span>
                    <span className="text-right">Bank Rakyat Indonesia</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Account Name:</span>
                    <span className="text-right">SALMA HAMIDAH SITI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Account Number:</span>
                    <span className="text-right font-mono">6746-0101-6316-538</span>
                  </div>
                </div>
              </div>
              
              {/* Copy Bank Details Button */}
              <Button 
                onClick={() => copyBankDetails('BRI')}
                className="w-full bg-gradient-to-r from-rose-pink to-deep-rose hover:from-rose-pink/90 hover:to-deep-rose/90 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                {copiedBRI ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Bank Details
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}