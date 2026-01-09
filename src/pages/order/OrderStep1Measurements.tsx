import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Ruler } from 'lucide-react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { ProgressSteps } from '../../components/common/ProgressSteps';
import { MeasurementGuide } from '../../components/order/MeasurementGuide';
import type { Measurements } from '../../types/order';

export const OrderStep1Measurements: React.FC = () => {
  const navigate = useNavigate();
  const [showGuide, setShowGuide] = React.useState(false);
  const [measurements, setMeasurements] = React.useState<Measurements>({
    qad: 0,
    shana: 0,
    asteen: 0,
    yakhan: 0,
    chaati: 0,
    baghal: 0,
    daman: 0,
    qadShalwar: 0,
    pacha: 0,
    quantity: 1,
    unit: 'cm',
  });

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements({
      ...measurements,
      [name]: parseFloat(value) || 0,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateMeasurements = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Validate each measurement (reasonable ranges in cm)
    if (measurements.qad < 40 || measurements.qad > 150) {
      newErrors.qad = 'Length should be between 40-150 cm';
    }
    if (measurements.shana < 30 || measurements.shana > 80) {
      newErrors.shana = 'Shoulder should be between 30-80 cm';
    }
    if (measurements.asteen < 30 || measurements.asteen > 100) {
      newErrors.asteen = 'Sleeve should be between 30-100 cm';
    }
    if (measurements.yakhan < 30 || measurements.yakhan > 60) {
      newErrors.yakhan = 'Neck should be between 30-60 cm';
    }
    if (measurements.chaati < 60 || measurements.chaati > 200) {
      newErrors.chaati = 'Chest should be between 60-200 cm';
    }
    if (measurements.baghal < 20 || measurements.baghal > 80) {
      newErrors.baghal = 'Underarm should be between 20-80 cm';
    }
    if (measurements.daman < 60 || measurements.daman > 250) {
      newErrors.daman = 'Bottom width should be between 60-250 cm';
    }
    if (measurements.qadShalwar < 60 || measurements.qadShalwar > 150) {
      newErrors.qadShalwar = 'Pant length should be between 60-150 cm';
    }
    if (measurements.pacha < 15 || measurements.pacha > 80) {
      newErrors.pacha = 'Pant opening should be between 15-80 cm';
    }
    if (measurements.quantity < 1 || measurements.quantity > 10) {
      newErrors.quantity = 'Quantity should be between 1-10';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateMeasurements()) {
      // Store measurements in localStorage for now
      localStorage.setItem('orderMeasurements', JSON.stringify(measurements));
      // Navigate to step 2
      navigate('/order/designs');
    } else {
      // Scroll to first error
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const steps = ['Measurements', 'Designs', 'Contact Info', 'Review'];

  return (
    <div className="bg-darzi-cream min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <ProgressSteps currentStep={1} steps={steps} />

          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
              <Ruler className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-darzi-dark mb-2">
              Enter Your Measurements
            </h1>
            <p className="text-gray-600">
              Please provide accurate measurements for the best fit
            </p>
          </div>

          {/* Measurement Guide Button */}
          <div className="mb-6 text-center">
            <button
              type="button"
              onClick={() => setShowGuide(true)}
              className="inline-flex items-center space-x-2 text-darzi-gold hover:text-darzi-brown transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
              <span className="font-medium">How to Measure?</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card">
            {/* Upper Body Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-darzi-dark mb-4 pb-2 border-b-2 border-darzi-gold">
                Upper Body (Shirt/Kameez) - پیراهن/کمیز
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Length"
                  labelDari="قد"
                  name="qad"
                  type="number"
                  value={measurements.qad || ''}
                  onChange={handleChange}
                  placeholder="e.g., 95"
                  required
                  min={40}
                  max={150}
                  step={0.5}
                  error={errors.qad}
                  helperText="Shoulder to bottom (cm)"
                />

                <Input
                  label="Shoulder Width"
                  labelDari="شانه"
                  name="shana"
                  type="number"
                  value={measurements.shana || ''}
                  onChange={handleChange}
                  placeholder="e.g., 45"
                  required
                  min={30}
                  max={80}
                  step={0.5}
                  error={errors.shana}
                  helperText="Across shoulders (cm)"
                />

                <Input
                  label="Sleeve Length"
                  labelDari="آستین"
                  name="asteen"
                  type="number"
                  value={measurements.asteen || ''}
                  onChange={handleChange}
                  placeholder="e.g., 60"
                  required
                  min={30}
                  max={100}
                  step={0.5}
                  error={errors.asteen}
                  helperText="Shoulder to wrist (cm)"
                />

                <Input
                  label="Neck/Collar"
                  labelDari="یخن"
                  name="yakhan"
                  type="number"
                  value={measurements.yakhan || ''}
                  onChange={handleChange}
                  placeholder="e.g., 40"
                  required
                  min={30}
                  max={60}
                  step={0.5}
                  error={errors.yakhan}
                  helperText="Around neck (cm)"
                />

                <Input
                  label="Chest"
                  labelDari="چهاتی"
                  name="chaati"
                  type="number"
                  value={measurements.chaati || ''}
                  onChange={handleChange}
                  placeholder="e.g., 100"
                  required
                  min={60}
                  max={200}
                  step={0.5}
                  error={errors.chaati}
                  helperText="Around fullest part (cm)"
                />

                <Input
                  label="Underarm"
                  labelDari="بغل"
                  name="baghal"
                  type="number"
                  value={measurements.baghal || ''}
                  onChange={handleChange}
                  placeholder="e.g., 45"
                  required
                  min={20}
                  max={80}
                  step={0.5}
                  error={errors.baghal}
                  helperText="Armpit to waist (cm)"
                />

                <Input
                  label="Bottom Width"
                  labelDari="دامن"
                  name="daman"
                  type="number"
                  value={measurements.daman || ''}
                  onChange={handleChange}
                  placeholder="e.g., 110"
                  required
                  min={60}
                  max={250}
                  step={0.5}
                  error={errors.daman}
                  helperText="Around hem (cm)"
                />
              </div>
            </div>

            {/* Lower Body Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-darzi-dark mb-4 pb-2 border-b-2 border-darzi-gold">
                Lower Body (Pants/Shalwar) - پتلون/شلوار
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Pant Length"
                  labelDari="قد شلوار"
                  name="qadShalwar"
                  type="number"
                  value={measurements.qadShalwar || ''}
                  onChange={handleChange}
                  placeholder="e.g., 100"
                  required
                  min={60}
                  max={150}
                  step={0.5}
                  error={errors.qadShalwar}
                  helperText="Waist to ankle (cm)"
                />

                <Input
                  label="Pant Opening"
                  labelDari="پاچه"
                  name="pacha"
                  type="number"
                  value={measurements.pacha || ''}
                  onChange={handleChange}
                  placeholder="e.g., 22"
                  required
                  min={15}
                  max={80}
                  step={0.5}
                  error={errors.pacha}
                  helperText="Around ankle (cm)"
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-darzi-dark mb-4 pb-2 border-b-2 border-darzi-gold">
                Quantity - تعداد
              </h2>
              <div className="max-w-xs">
                <Input
                  label="How many suits?"
                  labelDari="تعداد"
                  name="quantity"
                  type="number"
                  value={measurements.quantity || ''}
                  onChange={handleChange}
                  placeholder="1"
                  required
                  min={1}
                  max={10}
                  step={1}
                  error={errors.quantity}
                  helperText="Number of complete suits"
                />
              </div>
            </div>

            {/* Error Summary */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
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
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Next: Choose Designs →
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Measurement Guide Modal */}
      <MeasurementGuide isOpen={showGuide} onClose={() => setShowGuide(false)} />
    </div>
  );
};