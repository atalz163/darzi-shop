import React from 'react';
import { ImageModal } from '../components/common/ImageModal';
import { ZoomIn } from 'lucide-react';

interface DesignItem {
  id: number;
  title: string;
  image: string;
  description?: string;
}

export const DesignGalleryPage: React.FC = () => {
  const [modalImage, setModalImage] = React.useState<{ url: string; name: string } | null>(null);

  // Mock designs data - in future this will come from backend
  const designs: DesignItem[] = [
    {
      id: 1,
      title: 'Formal Kameez with Qasami Collar',
      image: '/design/d1.png',
      description: 'Traditional formal kameez perfect for special occasions',
    },
    {
      id: 2,
      title: 'Casual Shirt with Indian Collar',
      image: '/design/d2.png',
      description: 'Comfortable daily wear with modern styling',
    },
    {
      id: 3,
      title: 'Traditional Kameez Shalwar Set',
      image: '/design/d3.png',
      description: 'Classic complete suit for traditional occasions',
    },
    {
      id: 4,
      title: 'Wedding Kameez Shalwar Set',
      image: '/design/d4.png',
      description: 'Elegant complete suit for weddings and formal events',
    },
    {
      id: 5,
      title: 'Modern Fitted Kameez',
      image: '/design/d5.png',
      description: 'Contemporary design with clean lines',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-darzi-beige py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-darzi-dark mb-4">
              Our Designs
            </h1>
          
            <p className="text-gray-600">
              Browse our collection of custom tailored garments for inspiration
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-darzi-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {designs.map((design) => (
              <div
                key={design.id}
                className="card hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 bg-gray-200 overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setModalImage({ url: design.image, name: design.title })}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-3 rounded-full hover:bg-darzi-gold hover:text-white"
                      title="View larger"
                    >
                      <ZoomIn className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-darzi-dark text-lg mb-1">
                    {design.title}
                  </h3>
               
                  {design.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {design.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Info Text */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-gray-600">
              These are examples of our previous work. Each design can be customized with your choice of fabric color, measurements, and style preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-darzi-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Like What You See?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your own custom design with our easy ordering process. Choose your measurements, style, and fabric color.
          </p>
          <a href="/order" className="btn-primary text-lg">
            Create Your Order Now
          </a>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          imageUrl={modalImage.url}
          imageName={modalImage.name}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
};