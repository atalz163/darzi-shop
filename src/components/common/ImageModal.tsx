import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  imageName: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  imageUrl, 
  imageName, 
  onClose 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-darzi-dark" />
        </button>

        {/* Image */}
        <div 
          className="bg-white rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={imageUrl} 
            alt={imageName}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <div className="p-4 bg-darzi-beige">
            <p className="text-center font-medium text-darzi-dark">{imageName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};