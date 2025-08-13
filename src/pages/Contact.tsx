import React, { useState, useRef } from 'react';
import { Mail, Calendar, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message. I will respond within 24 hours.'
      });
      setFormData({ name: '', email: '', message: '' });
      form.current.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-warm-taupe to-dusty-rose/20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Let's Begin The Conversation
          </h1>
          <p className="font-sans text-lg text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
          I would love to hear from you. Feel free to reach out if you have any questions or are ready to schedule an initial conversation
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-warm-taupe rounded-lg p-8 shadow-lg">
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                Send a Message
              </h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-dusty-rose/30 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-sienna focus:border-transparent bg-cream"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-dusty-rose/30 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-sienna focus:border-transparent bg-cream"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-dusty-rose/30 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-sienna focus:border-transparent bg-cream resize-y min-h-[200px]"
                    placeholder="Please share what's drawing you to spiritual direction or any questions you have about the process..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-burnt-sienna text-cream py-3 px-6 rounded-md font-sans font-medium hover:bg-burnt-sienna/90 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {submitStatus && (
                  <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                  Ways to Connect
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-burnt-sienna mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-sans font-semibold text-charcoal mb-2">Email</h3>
                      <p className="text-charcoal/80">barbboatner@gmail.com</p>
                      <p className="text-sm text-charcoal/60 mt-1">
                        I typically respond within 24 hours
                      </p>
                    </div>
                  </div>



                  <div className="flex items-start space-x-4">
                    <MapPin className="text-burnt-sienna mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-sans font-semibold text-charcoal mb-2">Meeting Options</h3>
                      <p className="text-charcoal/80">
                      At this time, my practice of Spiritual Direction is being offered virtually. A secure link for sessions will be sent out as a reminder sometime before the meeting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspirational Quote */}
              <div className="bg-cream border-l-4 border-burnt-sienna p-6 rounded-r-lg">
                <blockquote className="font-serif text-lg italic text-charcoal mb-4">
                  "It is not the task of Christianity to provide easy answers to every question, but to make us progressively aware of a mystery. God is not so much the object of our knowledge as the cause of our wonder."
                </blockquote>
                <cite className="font-sans text-burnt-sienna font-medium">
                  — Henri Nouwen
                </cite>
              </div>
            </div>
          </div>

          {/* What to Expect Section - Full width */}
          <div className="bg-dusty-rose/10 rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              What to Expect
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="font-sans text-charcoal/80 leading-relaxed mb-4">
                Our initial conversation is an opportunity for us to get to know each other and explore whether spiritual direction feels like a good fit for you. There's no commitment required – it's simply a chance to ask questions and experience what our time together might be like.
              </p>
              <p className="font-sans text-charcoal/80 leading-relaxed">
                I see Spiritual Direction as a sacred ministry I don't want finances to be a hindrance and therefore offer a sliding scale
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};