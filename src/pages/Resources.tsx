import React from 'react';

export const Resources: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center p-8 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Coming Soon
        </h1>
        <p className="font-sans text-lg text-charcoal/80 mb-8 leading-relaxed">
          I am currently working on creating valuable resources to support your spiritual journey. 
          Please check back soon for updates!
        </p>
        <div className="w-24 h-1 bg-burnt-sienna mx-auto my-8"></div>
        <p className="font-sans text-charcoal/60">
        In the meantime feel free to contact me with any questions 
        </p>
      </div>
    </div>
  );
};