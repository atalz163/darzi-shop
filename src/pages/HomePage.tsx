
import { Link } from "react-router-dom";
import {
  Ruler,
  Scissors,
  Package,
  CheckCircle,
  Clock,
  Globe,
} from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
  {/* Hero Section */}
<section className="relative bg-darzi-beige py-20 overflow-hidden">
  {/* Background Image */}
    <div className="absolute inset-0 opacity-60 ">
    <img 
      src="/t1.jpg" 
      alt="Tailoring" 
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Content (on top of image) */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <img 
        src="/darzi-homepage.png" 
        alt="Darzi Logo" 
        className="h-40 w-auto mx-auto mb-6"
      />
   
      <p className="text-2xl text-gray-900 mb-8">
        Custom tailoring delivered to your doorstep. Professional Afghan tailoring from the comfort of your home.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/order" className="btn-primary text-lg">
          Order Now
        </Link>
        <Link to="/track" className="btn-secondary text-lg">
          Track Your Order
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-darzi-dark mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
                <Ruler className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-darzi-dark mb-2">
                1. Enter Measurements
              </h3>
              <p className="text-gray-600">
                Provide your measurements online with our easy-to-follow guide
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-darzi-dark mb-2">
                2. Choose Your Design
              </h3>
              <p className="text-gray-600">
                Select from our traditional and modern style options
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-darzi-dark mb-2">
                3. We Deliver
              </h3>
              <p className="text-gray-600">
                Receive your custom clothing at your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-darzi-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-darzi-dark mb-12">
            Why Choose Darzi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-darzi-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Professional Tailoring
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expert craftsmen with years of experience in traditional
                    Afghan tailoring
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-darzi-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Worldwide Delivery
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We deliver to your doorstep anywhere in the world
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <Scissors className="w-6 h-6 text-darzi-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Custom Designs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Choose from traditional and modern styles to match your
                    preferences
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-darzi-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Quality Fabrics
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Premium materials for lasting quality and comfort
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <Package className="w-6 h-6 text-darzi-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Easy Tracking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monitor your order status online from submission to delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-darzi-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Fast Turnaround
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Delivery within 10 days to 2 weeks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-darzi-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your custom order today and experience professional tailoring
            delivered to your doorstep
          </p>
          <Link to="/order" className="btn-primary text-lg">
            Create Your Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;