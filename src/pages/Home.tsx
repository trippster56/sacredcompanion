import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quotes = [
  {
    text: "God is not far from us. He is closer to us than we are to ourselves.",
    author: "St Augustine"
  },
  {
    text: "The glory of God is a human being fully alive.",
    author: "St. Ireneaus"
  },
  {
    text: "Contemplation is nothing else than a secret, peaceful, and loving infusion of God, which, if admitted, will set the soul on fire with the Spirit of love.",
    author: "St. John of the Cross"
  },
  {
    text: "The goal of all prayer, including contemplative prayer, is to be transformed by God's love and to become more like Christ.",
    author: "Thomas Merton"
  },
  {
    text: "Deepening our prayer life leads to a life of contemplation, of resting in God's loving presence.",
    author: "Henri Nouwen"
  }
];

export const Home: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Shifted Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background Image - Positioned to the right on mobile, full on desktop */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/image.png" 
            alt="Candle background" 
            className="w-full h-full object-cover object-right md:object-center"
            style={{
              objectPosition: '25% center',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-6">
            Coming Alongside Your<br />
            <span className="text-burnt-sienna italic font-light">Spiritual Journey</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-cream mb-8 max-w-2xl mx-auto leading-relaxed">
            Do you ever feel restless, like something is missing? Are you stuck, overwhelmed, or hurting
            from past experiences with God, church, or others? Or are you simply longing for a deeper connection on your spiritual journey?
          </p>
          <p className="text-cream font-semibold mb-8 text-xl md:text-2xl">If so, you've come to the right place.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-burnt-sienna text-cream px-8 py-3 rounded-md font-sans font-medium hover:bg-burnt-sienna/90 transition-colors shadow-lg">
              Schedule a Conversation
            </Link>
            <Link to="/spiritual-direction" className="border-2 border-cream text-cream px-8 py-3 rounded-md font-sans font-medium hover:bg-cream/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
            <div className="w-full h-auto max-h-[500px] overflow-visible">
              <img 
                src="/assets/images/sacredcompanion.png" 
                alt="Spiritual book" 
                className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg"
              />
            </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Hello, I'm Barb
              </h2>
              <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              I am a spiritual director, offering a non-judgmental, compassionate presence and a safe space for you to become fully present to yourself, ask honest questions, and go deeper.
              </p>
              <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              When the faith you've known no longer fits your questions or experiences, a sacred companion can help you navigate your spiritual journey. I am here to walk alongside you as you seek an authentic faith that goes beyond surface-level answers.
              </p>
              <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              I believe that the Triune God–the great Mystery–longs for you to experience Him in a profound
              way. He is inviting you on a sacred journey toward greater freedom, healing, and a richer union with Him.
              </p>
              <Link
                to="/about"
                className="bg-dusty-rose text-cream px-6 py-3 rounded-md font-sans font-medium hover:bg-dusty-rose/90 transition-colors shadow-lg inline-block"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-warm-taupe">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="/assets/images/book.png" 
                alt="candle"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
                A Compassionate Presence
              </h2>
              <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              Amidst a world of noise and endless activity, spiritual direction is an invitation to slow down and enter into a compassionate presence. It is a time to become fully present to your authentic self and to God’s quiet stirrings. My approach blends <strong>mindful Christian practices, deep listening, and is informed by neuroscience.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
     
      {/* Quote Carousel */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-charcoal text-center mb-12">
            Words for the Journey
          </h2>
          <div className="relative bg-cream rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-between">
              <button
                onClick={prevQuote}
                className="text-burnt-sienna hover:text-dusty-rose transition-colors p-2"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex-1 text-center px-4">
                <blockquote className="font-serif text-xl md:text-2xl text-charcoal italic mb-4">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <cite className="font-sans text-burnt-sienna font-medium">
                  — {quotes[currentQuote].author}
                </cite>
              </div>

              <button
                onClick={nextQuote}
                className="text-burnt-sienna hover:text-dusty-rose transition-colors p-2"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Quote indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentQuote ? 'bg-burnt-sienna' : 'bg-charcoal/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

 {/* A Safe Space Section */}
 <section className="py-20 bg-warm-taupe">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-8">
          A Safe Space
          </h2>
          <div className="space-y-6 text-charcoal/80 font-sans text-lg leading-relaxed text-left">
            <p>
            Whether you are just beginning your spiritual journey or seeking to deepen an existing practice, spiritual direction offers a safe and confidential space for reflection, growth, and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20 pt-16 bg-gradient-to-r from-burnt-sienna to-dusty-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-6">
            Ready to Begin?
          </h2>
          <p className="font-sans text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
          Let's connect for a free consultation. I'd love to hear from you
          </p>
          <Link
            to="/contact"
            className="bg-cream text-burnt-sienna px-8 py-3 rounded-md font-sans font-semibold hover:bg-cream/90 transition-colors shadow-lg inline-block"
          >
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};