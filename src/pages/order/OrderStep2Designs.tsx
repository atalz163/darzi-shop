
import { useNavigate } from 'react-router-dom';
import { Scissors, ChevronLeft } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { ProgressSteps } from '../../components/common/ProgressSteps';
import type { DesignSelections } from '../../types/order';
import {useState, useEffect } from 'react';

export const OrderStep2Designs: React.FC = () => {
  const navigate = useNavigate();
  
  const [designs, setDesigns] = useState<DesignSelections>({
    sleeveStyle: '',
    collarType: '',
    hasFrontPocket: false,
    hasSidePockets: false,
    skirtStyle: 'circle',
    pantsStyle: 'normal',
    hasPantsPocket: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Load measurements from previous step
  useEffect(() => {
    const savedMeasurements = localStorage.getItem('orderMeasurements');
    if (!savedMeasurements) {
      // If no measurements, redirect back to step 1
      navigate('/order');
    }
  }, [navigate]);

  const handleSleeveChange = (style: string) => {
    setDesigns({ ...designs, sleeveStyle: style });
    if (errors.sleeveStyle) {
      setErrors({ ...errors, sleeveStyle: '' });
    }
  };

  const handleCollarChange = (type: string) => {
    setDesigns({ ...designs, collarType: type });
    if (errors.collarType) {
      setErrors({ ...errors, collarType: '' });
    }
  };

  const validateDesigns = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!designs.sleeveStyle) {
      newErrors.sleeveStyle = 'Please select a sleeve style';
    }
    if (!designs.collarType) {
      newErrors.collarType = 'Please select a collar type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateDesigns()) {
      // Store designs in localStorage
      localStorage.setItem('orderDesigns', JSON.stringify(designs));
      // Navigate to step 3
      navigate('/order/contact');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    navigate('/order');
  };

  const steps = ['Measurements', 'Designs', 'Contact Info', 'Review'];

  return (
    <div className="bg-darzi-cream min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <ProgressSteps currentStep={2} steps={steps} />

          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
              <Scissors className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-darzi-dark mb-2">
              Choose Your Designs
            </h1>
            <p className="text-gray-600">
              Select your preferred styles for shirt and pants
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shirt/Kameez Designs */}
            <div className="card">
              <h2 className="text-2xl font-bold text-darzi-dark mb-6 pb-3 border-b-2 border-darzi-gold">
                Shirt/Kameez Designs - پیراهن/کمیز
              </h2>

              {/* Sleeve Styles */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-darzi-dark mb-4">
                  Sleeve Style - آستین <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['Style 1', 'Style 2', 'Style 3'].map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => handleSleeveChange(style)}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        designs.sleeveStyle === style
                          ? 'border-darzi-gold bg-darzi-beige shadow-lg'
                          : 'border-darzi-taupe hover:border-darzi-gold'
                      }`}
                    >
                      <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">[Sleeve Icon]</span>
                      </div>
                      <p className="font-medium text-darzi-dark">{style}</p>
                    </button>
                  ))}
                </div>
                {errors.sleeveStyle && (
                  <p className="mt-2 text-sm text-red-500">{errors.sleeveStyle}</p>
                )}
              </div>

              {/* Collar Types */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-darzi-dark mb-4">
                  Collar Type - یخن <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { value: 'circle', label: 'Circle Collar', labelDari: 'گرد' },
                    { value: 'shirt', label: 'Shirt Collar', labelDari: 'پیراهن' },
                    { value: 'indian', label: 'Indian Collar', labelDari: 'هندی' },
                    { value: 'qasami', label: 'Qasami Collar', labelDari: 'قسمی' },
                  ].map((collar) => (
                    <button
                      key={collar.value}
                      type="button"
                      onClick={() => handleCollarChange(collar.value)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        designs.collarType === collar.value
                          ? 'border-darzi-gold bg-darzi-beige shadow-lg'
                          : 'border-darzi-taupe hover:border-darzi-gold'
                      }`}
                    >
                      <div className="w-full h-24 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">[Collar Icon]</span>
                      </div>
                      <p className="font-medium text-darzi-dark text-sm">{collar.label}</p>
                      <p className="text-xs text-gray-600">{collar.labelDari}</p>
                    </button>
                  ))}
                </div>
                {errors.collarType && (
                  <p className="mt-2 text-sm text-red-500">{errors.collarType}</p>
                )}
              </div>

              {/* Pockets */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-darzi-dark mb-4">
                  Pockets - جیب
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 rounded-lg border-2 border-darzi-taupe hover:border-darzi-gold transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={designs.hasFrontPocket}
                      onChange={(e) =>
                        setDesigns({ ...designs, hasFrontPocket: e.target.checked })
                      }
                      className="w-5 h-5 text-darzi-gold rounded focus:ring-darzi-gold"
                    />
                    <span className="text-darzi-dark">
                      Front Chest Pocket - جیب سینه
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 p-4 rounded-lg border-2 border-darzi-taupe hover:border-darzi-gold transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={designs.hasSidePockets}
                      onChange={(e) =>
                        setDesigns({ ...designs, hasSidePockets: e.target.checked })
                      }
                      className="w-5 h-5 text-darzi-gold rounded focus:ring-darzi-gold"
                    />
                    <span className="text-darzi-dark">
                      Side Pockets - جیب پهلو
                    </span>
                  </label>
                </div>
              </div>

              {/* Skirt Style */}
              <div className="mb-6">
                <label className="block text-lg font-semibold text-darzi-dark mb-4">
                  Skirt Style - دامن <span className="text-red-500">*</span>
                </label>
                <select
                  value={designs.skirtStyle}
                  onChange={(e) =>
                    setDesigns({ ...designs, skirtStyle: e.target.value as 'circle' | 'square' })
                  }
                  className="input-field max-w-md"
                  required
                >
                  <option value="circle">Circle Skirt - دامن گرد</option>
                  <option value="square">Square Skirt - دامن مربع</option>
                </select>
              </div>
            </div>

            {/* Pants/Shalwar Designs */}
            <div className="card">
              <h2 className="text-2xl font-bold text-darzi-dark mb-6 pb-3 border-b-2 border-darzi-gold">
                Pants/Shalwar Designs - پتلون/شلوار
              </h2>

              {/* Pants Style */}
              <div className="mb-6">
                <label className="block text-lg font-semibold text-darzi-dark mb-4">
                  Pants Style - نوع پتلون <span className="text-red-500">*</span>
                </label>
                <select
                  value={designs.pantsStyle}
                  onChange={(e) =>
                    setDesigns({
                      ...designs,
                      pantsStyle: e.target.value as 'normal' | 'wide' | 'narrow',
                    })
                  }
                  className="input-field max-w-md"
                  required
                >
                  <option value="normal">Normal Pant - پتلون عادی</option>
                  <option value="wide">Wide Shalwar - شلوار ویده</option>
                  <option value="narrow">Narrow Pant - پتلون تنگ</option>
                </select>
              </div>

              {/* Pants Pocket */}
              <div className="mb-6">
                <label className="block text-lg font-semibold text-darzi-dark mb-4">
                  Pants Pocket - جیب پتلون
                </label>
                <label className="flex items-center space-x-3 p-4 rounded-lg border-2 border-darzi-taupe hover:border-darzi-gold transition-colors cursor-pointer max-w-md">
                  <input
                    type="checkbox"
                    checked={designs.hasPantsPocket}
                    onChange={(e) =>
                      setDesigns({ ...designs, hasPantsPocket: e.target.checked })
                    }
                    className="w-5 h-5 text-darzi-gold rounded focus:ring-darzi-gold"
                  />
                  <span className="text-darzi-dark">
                    Add Pocket to Pants - جیب اضافه کنید
                  </span>
                </label>
              </div>
            </div>

            {/* Error Summary */}
            {Object.keys(errors).length > 0 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium mb-2">
                  Please fix the following errors:
                </p>
                <ul className="list-disc list-inside text-sm text-red-600 space-y-1">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Button type="button" variant="secondary" onClick={handleBack}>
                <div className="flex items-center space-x-2">
                  <ChevronLeft className="w-5 h-5" />
                  <span>Back to Measurements</span>
                </div>
              </Button>
              <Button type="submit" variant="primary">
                Next: Contact Information →
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};