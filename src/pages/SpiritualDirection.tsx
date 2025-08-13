import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SpiritualDirection: React.FC = () => {
  const benefits = [
    "Deeper awareness of God's presence in your daily life",
    "Space to process your spiritual questions and experiences",
    "Support during times of transition or discernment",
    "Tools for developing a more meaningful prayer life",
    "A safe space to explore your relationship with God"
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Candle Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-charcoal">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/candleseperated.png" 
            alt="Candle background" 
            className="w-full h-full object-cover object-right md:object-center"
            style={{
              objectPosition: '60% center',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-8">
              What is Spiritual Direction?
            </h1>
            <div className="space-y-6 text-cream/90">
              <p className="font-sans text-lg md:text-xl leading-relaxed">
                Spiritual direction is distinct from Christian discipleship, counseling, or coaching, although there may be some overlap. Despite its name, spiritual direction is typically not directive. It's not about giving advice, teaching doctrine, or telling people what to believe.
              </p>
              <p className="font-sans text-lg md:text-xl leading-relaxed">
                Instead, it is a collaborative, empathetic, and prayerful relationship focused on seeking God together. The real director of this process is not the person hosting the conversation—it is the Holy Spirit.
              </p>
              <p className="font-sans text-lg md:text-xl leading-relaxed">
                Thomas Merton, a Trappist monk and author of Spiritual Direction and Meditation, describes this ministry beautifully: "A spiritual director is... one who helps another to recognize and to follow the inspirations of grace in his life, to arrive at the end to which God is leading him" (p. 17). More recently, Christian psychologist David Benner defined spiritual direction as "increasing awareness of God in life experiences and facilitating surrender to God" (Sacred Companions, p. 5).
              </p>
              <p className="font-sans text-lg md:text-xl leading-relaxed">
                In essence, the spiritual director offers the gift of holy listening, reflecting Jesus' love and empathy to help others experience God and follow the Holy Spirit's leading. The real director of this process is not the person hosting the conversation—it is the Holy Spirit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* What is Spiritual Direction */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
                Holy Listening:
                <br></br>
                An Ancient Practice
              </h2>
              <div className="space-y-4 text-charcoal/80">
                <p className="font-sans text-base md:text-lg leading-relaxed">
                The ministry of spiritual direction is an ancient Christian practice, often described as "Holy Listening," with roots tracing back to the desert fathers and mothers of the 3rd and 4th centuries. Cultivated by these spiritual sages in the ensuing centuries, this ministry often involved people seeking the guidance of spiritual guides. The development of this tradition gave rise to many classic books of Christian devotion, which have served as sources of spiritual richness and guidance for centuries.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/images/sacredcompanionart.png" 
                alt="Spiritual Direction Art" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="pb-20 pt-16 bg-dusty-rose/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
            Ready to Begin?
          </h2>
          <p className="font-sans text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
            If you're interested in exploring spiritual direction, I'd love to have a conversation with you. Let's discover together how this practice might support your spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-burnt-sienna text-cream px-8 py-3 rounded-md font-sans font-medium hover:bg-burnt-sienna/90 transition-colors shadow-lg inline-block"
            >
              Contact Me
            </Link>
            <Link
              to="/about"
              className="border-2 border-burnt-sienna text-burnt-sienna px-8 py-3 rounded-md font-sans font-medium hover:bg-burnt-sienna/10 transition-colors inline-block"
            >
              Learn About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpiritualDirection;
