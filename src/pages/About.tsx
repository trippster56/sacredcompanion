import React from 'react';
import { CheckCircle, Heart, BookOpen, Users, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const approaches = [
    {
      icon: <Heart className="w-8 h-8 text-burnt-sienna mb-4" />,
      title: "Compassionate Presence",
      description: "Creating a safe, non-judgmental space for you to explore your spiritual journey with authenticity and depth."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-burnt-sienna mb-4" />,
      title: "Mindful Christian Practices and Contemplation",
      description: "Practicing present-moment awareness, grounded in a biblical worldview, transforming it into a tool for spiritual growth, stress reduction, and deepening your relationship with God."
    },
    {
      icon: <Users className="w-8 h-8 text-burnt-sienna mb-4" />,
      title: "Cultivating Spiritual Awareness and Discernment",
      description: "<strong>Listening deeply</strong> through <strong>reflective prayer</strong> and the grounding wisdom of <strong>Scripture</strong>, we train ourselves to discern the guidance of the Holy Spirit.",
      useHtml: true
    },
  ];

  const credentials = [
    "Two-Year Training in Spiritual Direction with Sustainable Faith",
    "Epiphany Training in Spiritual Formation (Two-Year Program)",
    "Over 20 years of experience in church ministry",
    "Ministry experience in both Germany and the United States",
    "Fluent in English and German"
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-warm-taupe to-dusty-rose/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
                About Me
              </h1>
              <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              My spiritual journey began in Germany and has been shaped by the diverse experiences of living there and in the United States. I made the U.S. my home in 2005 after marrying my husband, Jeff, and together we are raising four children who teach me about love and faith every day.
              </p>
              <p className="font-sans text-lg text-charcoal/80 leading-relaxed">
              With over twenty years of experience in church ministry in both Germany and the U.S., I've developed a deep passion for spiritual practices that foster authentic encounters with God and support personal growth. It is my privilege to walk alongside others as they navigate and deepen their spiritual paths.
              </p>
            </div>
            <div className="text-center">
              <div className="relative">
              <img 
                src="/assets/images/barbimage.png" 
                alt="Barb - Spiritual Director" 
                className="rounded-full w-80 h-80 mx-auto object-cover shadow-lg border-4 border-cream"
              />
              <div className="absolute -bottom-4 -right-4 bg-burnt-sienna text-cream px-6 py-2 rounded-full font-serif text-lg">
                Spiritual Director
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              My Approach to Spiritual Direction
            </h2>
            <p className="font-sans text-lg text-charcoal/80 max-w-3xl mx-auto">
            Spiritual direction is about creating space to <strong>notice and respond to God's presence</strong> in your life. My approach is rooted in Christian tradition while remaining open to the unique ways God speaks to each person. I offer a compassionate and non-judgmental presence, providing a safe space for you to explore your spiritual journey with honesty and curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-warm-taupe rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="mb-4">
                    {approach.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-burnt-sienna mb-4">
                    {approach.title}
                  </h3>
                  <p 
                    className="font-sans text-charcoal/80 leading-relaxed"
                    {...(approach.useHtml ? { dangerouslySetInnerHTML: { __html: approach.description } } : { children: approach.description })}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 bg-dusty-rose/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              My Spiritual Journey
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              My spiritual journey has been deeply influenced by my cross-cultural experiences and my calling to ministry. Moving from Germany to the United States was more than a change of location—it was a journey that expanded my understanding of faith, community, and God's presence in different cultural contexts.
            </p>
            
            <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              In the last two decades of ministry, I've had the privilege of serving in various church roles, each teaching me valuable lessons about spiritual growth and community. These experiences led me to pursue specialized training in spiritual direction, where I discovered my passion for walking alongside others in their spiritual journeys.
            </p>
            
            <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              My training in the Epiphany Certification Program in Spiritual Formation has equipped me with tools and practices to help others grow in their relationship with God. I believe that spiritual direction is not about giving advice, but about creating a sacred space where you can listen for God's voice in your life.
            </p>
            
            <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              This understanding shapes my approach to spiritual direction. I don't come to our time together with an agenda or predetermined outcomes. Instead, I trust that the Spirit is already at work in your life, and my role is to help you notice and respond to that presence.
            </p>
            
            <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-6">
              I've found that spiritual growth often happens not in the dramatic moments, but in the quiet spaces of reflection, prayer, and honest conversation. This is the gift I hope to offer you – a consistent, compassionate presence as you explore what it means to live authentically in relationship with God.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Training & Experience
            </h2>
            <p className="font-sans text-lg text-charcoal/80 max-w-2xl mx-auto">
            My formation in spiritual direction has been both academic and experiential, grounded in theological study and deepened through years of practice.
            </p>
          </div>

          <div className="bg-warm-taupe rounded-lg p-8 shadow-lg">
            <ul className="space-y-4">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-burnt-sienna mt-1 flex-shrink-0" size={20} />
                  <span className="font-sans text-charcoal/80">{credential}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-12">
            <p className="font-sans text-lg text-charcoal/80 mb-8">
            I continue to engage in ongoing spiritual direction for my own journey and participate in regular supervision and continuing education to deepen my practice.
            </p>
            <a
              href="/contact"
              className="bg-burnt-sienna text-cream px-8 py-3 rounded-md font-sans font-medium hover:bg-burnt-sienna/90 transition-colors shadow-lg inline-block"
            >
              Begin the Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};