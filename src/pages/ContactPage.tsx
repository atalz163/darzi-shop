import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission (will connect to backend later)
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-darzi-beige py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-darzi-dark mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-darzi-brown">
              We're here to help with any questions about our tailoring services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-darzi-dark mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-darzi-gold rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-darzi-dark mb-1">Phone</h3>
                    <p className="text-gray-600">+93 XXX XXX XXX</p>
                    <p className="text-sm text-gray-500 mt-1">Available during business hours</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-darzi-gold rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-darzi-dark mb-1">Email</h3>
                    <p className="text-gray-600">info@darzi.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-darzi-gold rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-darzi-dark mb-1">Service Area</h3>
                    <p className="text-gray-600">Worldwide Delivery</p>
                    <p className="text-sm text-gray-500 mt-1">We ship to all countries</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-darzi-gold rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-darzi-dark mb-1">Business Hours</h3>
                    <p className="text-gray-600">Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Friday: Closed</p>
                    <p className="text-sm text-gray-500 mt-1">Afghanistan Time (AFT)</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 card bg-darzi-cream">
                <h3 className="font-semibold text-darzi-dark mb-2">Delivery Information</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Estimated delivery: 10 days to 2 weeks</li>
                  <li>• Worldwide shipping available</li>
                  <li>• Order tracking provided</li>
                  <li>• SMS/Email updates on order status</li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-darzi-dark mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Your Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />

                <Input
                  label="Subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your inquiry about?"
                  required
                />

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-darzi-dark">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    required
                    className="input-field resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                </Button>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                We typically respond within 24 hours during business days
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};