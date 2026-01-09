
import { Info, X } from 'lucide-react';

interface MeasurementGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeasurementGuide: React.FC<MeasurementGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-darzi-taupe p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-darzi-dark flex items-center space-x-2">
            <Info className="w-5 h-5 text-darzi-gold" />
            <span>Measurement Guide</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-darzi-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* General Tips */}
          <div className="card bg-darzi-cream">
            <h3 className="font-semibold text-darzi-dark mb-2">Important Tips</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Use a flexible measuring tape</li>
              <li>• Measure over light clothing for accuracy</li>
              <li>• Stand straight with relaxed shoulders</li>
              <li>• Ask someone to help for better measurements</li>
              <li>• All measurements should be in centimeters (cm)</li>
            </ul>
          </div>

          {/* Upper Body Measurements */}
          <div>
            <h3 className="font-bold text-darzi-dark mb-4 text-lg">Upper Body (Shirt/Kameez)</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">قد / Length</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure from the top of shoulder straight down to desired length (knee, ankle, etc.)
                </p>
              </div>

              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">شانه / Shoulder Width</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure across the back from one shoulder edge to the other
                </p>
              </div>

              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">آستین / Sleeve Length</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure from shoulder to wrist with arm slightly bent
                </p>
              </div>

              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">یخن / Neck/Collar</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure around the base of the neck where collar sits
                </p>
              </div>

              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">چهاتی / Chest</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure around the fullest part of chest, under armpits
                </p>
              </div>

              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">بغل / Underarm</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure from armpit straight down to waist
                </p>
              </div>

              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">دامن / Bottom Width</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure around the hem/bottom of the garment
                </p>
              </div>
            </div>
          </div>

          {/* Lower Body Measurements */}
          <div>
            <h3 className="font-bold text-darzi-dark mb-4 text-lg">Lower Body (Pants/Shalwar)</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">قد شلوار / Pant Length</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure from waist to ankle (or desired length)
                </p>
              </div>

              <div className="border-l-4 border-darzi-gold pl-4">
                <h4 className="font-semibold text-darzi-dark">پاچه / Pant Opening</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Measure around the ankle/bottom opening of the pant
                </p>
              </div>
            </div>
          </div>

          {/* Video/Image Placeholder */}
          <div className="card bg-gray-100 text-center py-8">
            <p className="text-gray-600 text-sm">
              For visual guide, please refer to the measurement chart provided with your order confirmation
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-darzi-taupe p-4">
          <button onClick={onClose} className="btn-primary w-full">
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};