import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-taupe border-t border-dusty-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-semibold text-burnt-sienna mb-4">
            Spiritual Direction
          </h3>
          <p className="font-sans text-charcoal/80 mb-6 max-w-md mx-auto">
          Companionship On Your Spiritual Journey
          </p>
          <div className="flex flex-col items-center space-y-2 text-sm text-charcoal/60">
            <div className="flex items-center">
              <span>Made with</span>
              <Heart className="mx-1 h-4 w-4 text-dusty-rose fill-current" />
              <span>for spiritual growth</span>
            </div>
            <div>
              <span>Website designed and created by </span>
              <a 
                href="https://www.tripplisenby.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-burnt-sienna hover:underline"
              >
                Tripp Lisenby
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};