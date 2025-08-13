import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/spiritual-direction', label: 'Spiritual Direction' },
    { path: '/about', label: 'About Me' },
    { path: '/contact', label: 'Contact' },
    { path: '/resources', label: 'Resources' },
    { path: '/gatherings', label: 'Gatherings' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-cream/95 backdrop-blur-sm sticky top-0 z-50 border-b border-warm-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-serif text-xl font-semibold text-burnt-sienna hover:text-dusty-rose transition-colors">
            Spiritual Direction with Sacred Companion
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-sans text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-burnt-sienna border-b-2 border-burnt-sienna pb-1'
                    : 'text-charcoal hover:text-burnt-sienna'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-burnt-sienna p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-taupe">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-sans text-sm font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'text-burnt-sienna font-semibold'
                      : 'text-charcoal hover:text-burnt-sienna'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};