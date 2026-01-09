import React from 'react';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-darzi-beige py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-darzi-dark mb-4">
              About Darzi
            </h1>
            <p className="text-lg text-darzi-brown">
              Precision in Every Stitch.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-darzi-dark mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-4">
                Darzi is a professional tailoring service dedicated to providing high-quality custom stitching 
                for traditional Afghan clothing. We combine traditional craftsmanship with modern convenience, 
                bringing expert tailoring directly to your doorstep.
              </p>
              <p className="text-gray-700 mb-4">
                Our master tailors have years of experience in creating beautiful, well-fitted garments that 
                honor Afghan traditions while meeting contemporary standards of quality and style.
              </p>
              <p className="text-gray-700">
                Whether you need a formal kameez for a special occasion or comfortable everyday wear, 
                we ensure every stitch is made with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-darzi-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-darzi-dark mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-darzi-dark mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We never compromise on the quality of our work or materials
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-darzi-dark mb-2">Precision</h3>
              <p className="text-gray-600 text-sm">
                Every measurement matters, every stitch counts
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-darzi-dark mb-2">Service</h3>
              <p className="text-gray-600 text-sm">
                Customer satisfaction is at the heart of everything we do
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-darzi-dark mb-2">Tradition</h3>
              <p className="text-gray-600 text-sm">
                Honoring Afghan craftsmanship and cultural heritage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-darzi-dark mb-8">Our Services</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold text-darzi-dark mb-2">Custom Shirt/Kameez Stitching</h3>
                <p className="text-gray-600">
                  Traditional and modern designs with multiple collar, sleeve, and pocket options. 
                  Perfect fit guaranteed with our detailed measurement system.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-darzi-dark mb-2">Pants/Shalwar Tailoring</h3>
                <p className="text-gray-600">
                  From traditional wide shalwar to modern fitted pants, we create comfortable 
                  lower garments that match your style preferences.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-darzi-dark mb-2">Complete Suits</h3>
                <p className="text-gray-600">
                  Order matching kameez and shalwar sets for a coordinated, professional look. 
                  Ideal for formal occasions and special events.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-darzi-dark mb-2">Worldwide Delivery</h3>
                <p className="text-gray-600">
                  We ship your custom-tailored garments directly to your doorstep, wherever you are. 
                  Delivery typically takes 10 days to 2 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-darzi-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Darzi Difference
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their tailoring needs
          </p>
          <a href="/order" className="btn-primary text-lg">
            Place Your First Order
          </a>
        </div>
      </section>
    </div>
  );
};