import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="text-4xl font-bold text-blue-900">FlexiWeb</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8">
            {['Home', 'Features', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-black hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Navigation */}
          <div 
            className={`fixed inset-0 bg-white lg:hidden transition-transform duration-300 transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } z-40`}
          >
            <div className="flex flex-col h-full justify-center items-center">
              <ul className="space-y-8 text-center">
                {['Home', 'Features', 'Services', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-xl font-medium text-black-800 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;