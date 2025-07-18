export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-center space-x-8">
          <a href="#home" className="text-sm font-medium text-charcoal hover:text-blush transition-colors duration-300">
            Home
          </a>
          <a href="#details" className="text-sm font-medium text-charcoal hover:text-blush transition-colors duration-300">
            Details
          </a>
          
          <a href="#gallery" className="text-sm font-medium text-charcoal hover:text-blush transition-colors duration-300">
            Gallery
          </a>
          <a href="#registry" className="text-sm font-medium text-charcoal hover:text-blush transition-colors duration-300">
            Gift
          </a>
        </div>
      </div>
    </nav>
  );
}
