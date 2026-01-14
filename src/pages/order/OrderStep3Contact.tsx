import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ChevronLeft } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { ProgressSteps } from '../../components/common/ProgressSteps';
import type { ContactInfo } from '../../types/order';

export const OrderStep3Contact: React.FC = () => {
  const navigate = useNavigate();
  
  const [contact, setContact] = React.useState<ContactInfo>({
    fullName: '',
    phone: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    deliveryNotes: '',
    fabricNotes: '',
  });

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  // Load previous steps data
  React.useEffect(() => {
    const savedMeasurements = localStorage.getItem('orderMeasurements');
    const savedDesigns = localStorage.getItem('orderDesigns');
    
    if (!savedMeasurements || !savedDesigns) {
      // If previous steps not completed, redirect to step 1
      navigate('/order');
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateContact = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Required field validations
    if (!contact.fullName.trim() || contact.fullName.length < 2) {
      newErrors.fullName = 'Full name is required (minimum 2 characters)';
    }

    if (!contact.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-() ]{8,20}$/.test(contact.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!contact.addressLine1.trim()) {
      newErrors.addressLine1 = 'Address is required';
    }

    if (!contact.city.trim()) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateContact()) {
      // Store contact info in localStorage
      localStorage.setItem('orderContact', JSON.stringify(contact));
      // Navigate to step 4 (review)
      navigate('/order/review');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    navigate('/order/designs');
  };

  const steps = ['Measurements', 'Designs', 'Contact Info', 'Review'];

  return (
    <div className="bg-darzi-cream min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <ProgressSteps currentStep={3} steps={steps} />

          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-darzi-dark mb-2">
              Contact & Delivery Information
            </h1>
            <p className="text-gray-600">
              Where should we deliver your order?
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card">
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-darzi-dark mb-4 pb-2 border-b-2 border-darzi-gold">
                Contact Information - معلومات تماس
              </h2>
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  labelDari="نام کامل"
                  name="fullName"
                  type="text"
                  value={contact.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  error={errors.fullName}
                />

                <Input
                  label="Phone Number"
                  labelDari="موبایل"
                  name="phone"
                  type="tel"
                  value={contact.phone}
                  onChange={handleChange}
                  placeholder="+93 XXX XXX XXX"
                  required
                  error={errors.phone}
                  helperText="We'll contact you for order updates"
                />

                <Input
                  label="Email Address"
                  labelDari="ایمیل"
                  name="email"
                  type="email"
                  value={contact.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  error={errors.email}
                  helperText="Optional - for order confirmation"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-darzi-dark mb-4 pb-2 border-b-2 border-darzi-gold">
                Shipping Address - آدرس
              </h2>
              <div className="space-y-4">
                <Input
                  label="Address Line 1"
                  labelDari="آدرس خط ۱"
                  name="addressLine1"
                  type="text"
                  value={contact.addressLine1}
                  onChange={handleChange}
                  placeholder="House/Building number, Street name"
                  required
                  error={errors.addressLine1}
                  helperText="e.g., House 123, Street 4, District 5"
                />

                <Input
                  label="Address Line 2"
                  labelDari="آدرس خط ۲"
                  name="addressLine2"
                  type="text"
                  value={contact.addressLine2}
                  onChange={handleChange}
                  placeholder="Additional address details (optional)"
                  helperText="e.g., Near Main Bazaar, Apartment 2B"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="City"
                    labelDari="شهر"
                    name="city"
                    type="text"
                    value={contact.city}
                    onChange={handleChange}
                    placeholder="Enter city name"
                    required
                    error={errors.city}
                  />

                  <Input
                    label="State"
                    labelDari="ولایت"
                    name="state"
                    type="text"
                    value={contact.state}
                    onChange={handleChange}
                    required
                    error={errors.state}
                    placeholder="Enter state"
                  />
                </div>

                <div className="max-w-xs">
                  <Input
                    label="Postal Code"
                    labelDari="کد پستی"
                    name="postalCode"
                    type="text"
                    value={contact.postalCode}
                    onChange={handleChange}
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-darzi-dark mb-4 pb-2 border-b-2 border-darzi-gold">
                Special Instructions - دستورالعمل های خاص
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="deliveryNotes" className="block mb-2 font-medium text-darzi-dark">
                    <span className="text-lg">یادداشت های تحویل / </span>
                    Delivery Notes
                  </label>
                  <textarea
                    id="deliveryNotes"
                    name="deliveryNotes"
                    value={contact.deliveryNotes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g., Call before delivery, Gate code, Best delivery time..."
                    className="input-field resize-none"
                  />
                  <p className="mt-1 text-sm text-gray-600">
                    Any special instructions for delivery
                  </p>
                </div>

                <div>
                  <label htmlFor="fabricNotes" className="block mb-2 font-medium text-darzi-dark">
                    <span className="text-lg">یادداشت های پارچه / </span>
                    Fabric/Design Notes
                  </label>
                  <textarea
                    id="fabricNotes"
                    name="fabricNotes"
                    value={contact.fabricNotes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g., I'm providing my own fabric, Prefer cotton material, Specific color preferences..."
                    className="input-field resize-none"
                  />
                  <p className="mt-1 text-sm text-gray-600">
                    Any special requests about fabric or design details
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Info Box */}
            <div className="mb-6 p-4 bg-darzi-beige rounded-lg border border-darzi-taupe">
              <h3 className="font-semibold text-darzi-dark mb-2 flex items-center">
                📦 Delivery Information
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Estimated delivery: <strong>10 days to 2 weeks</strong></li>
                <li>• Worldwide shipping available</li>
                <li>• You'll receive order tracking number</li>
                <li>• SMS/Email updates on order status</li>
              </ul>
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
              <Button type="button" variant="secondary" onClick={handleBack}>
                <div className="flex items-center space-x-2">
                  <ChevronLeft className="w-5 h-5" />
                  <span>Back to Designs</span>
                </div>
              </Button>
              <Button type="submit" variant="primary">
                Next: Review Order →
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};