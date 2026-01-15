import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ChevronLeft, Edit } from "lucide-react";
import { Button } from "../../components/common/Button";
import { ProgressSteps } from "../../components/common/ProgressSteps";
import type {
  Measurements,
  DesignSelections,
  ContactInfo,
} from "../../types/order";

export const OrderStep4Review: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [measurements, setMeasurements] = React.useState<Measurements | null>(
    null
  );
  const [designs, setDesigns] = React.useState<DesignSelections | null>(null);
  const [contact, setContact] = React.useState<ContactInfo | null>(null);

  // Load all data from previous steps
  React.useEffect(() => {
    const savedMeasurements = localStorage.getItem("orderMeasurements");
    const savedDesigns = localStorage.getItem("orderDesigns");
    const savedContact = localStorage.getItem("orderContact");

    if (!savedMeasurements || !savedDesigns || !savedContact) {
      // If any step is missing, redirect to step 1
      navigate("/order");
      return;
    }

    setMeasurements(JSON.parse(savedMeasurements));
    setDesigns(JSON.parse(savedDesigns));
    setContact(JSON.parse(savedContact));
  }, [navigate]);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // TODO: Submit to backend API
    // For now, simulate submission
    setTimeout(() => {
      // Generate mock order number
      const orderNumber = `TS-${new Date().getFullYear()}-${String(
        Math.floor(Math.random() * 100000)
      ).padStart(5, "0")}`;

      // Store order number
      localStorage.setItem("lastOrderNumber", orderNumber);

      // Clear order data
      localStorage.removeItem("orderMeasurements");
      localStorage.removeItem("orderDesigns");
      localStorage.removeItem("orderContact");

      setIsSubmitting(false);

      // Navigate to confirmation page
      navigate("/order/confirmation");
    }, 2000);
  };

  const handleBack = () => {
    navigate("/order/contact");
  };

  const steps = ["Measurements", "Designs", "Contact Info", "Review"];

  if (!measurements || !designs || !contact) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-darzi-cream min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <ProgressSteps currentStep={4} steps={steps} />

          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-darzi-gold rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-darzi-dark mb-2">
              Review Your Order
            </h1>
            <p className="text-gray-600">
              Please review all details before submitting
            </p>
          </div>

          {/* Review Sections */}
          <div className="space-y-6">
            {/* Measurements Section */}
            <div className="card">
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-darzi-gold">
                <h2 className="text-xl font-bold text-darzi-dark">
                  Measurements
                </h2>
                <button
                  type="button"
                  onClick={() => navigate("/order")}
                  className="flex items-center space-x-2 text-darzi-gold hover:text-darzi-brown transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span className="text-sm font-medium">Edit</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Length (قد)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.qad} cm
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Shoulder (شانه)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.shana} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sleeve (آستین)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.asteen} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Neck (یخن)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.yakhan} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Chest (چهاتی)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.chaati} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Underarm (بغل)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.baghal} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bottom Width (دامن)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.daman} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Pant Length (قد شلوار)
                  </p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.qadShalwar} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pant Opening (پاچه)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.pacha} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity (تعداد)</p>
                  <p className="font-semibold text-darzi-dark">
                    {measurements.quantity}
                  </p>
                </div>
              </div>
            </div>

            {/* Design Selections Section */}
            <div className="card">
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-darzi-gold">
                <h2 className="text-xl font-bold text-darzi-dark">
                  Design Selections
                </h2>
                <button
                  type="button"
                  onClick={() => navigate("/order/designs")}
                  className="flex items-center space-x-2 text-darzi-gold hover:text-darzi-brown transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span className="text-sm font-medium">Edit</span>
                </button>
              </div>

              <div className="space-y-4">
                {/* Shirt Designs */}
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Shirt/Kameez
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Sleeve Style:</span>
                      <span className="font-medium text-darzi-dark">
                        {designs.sleeveStyle}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Collar Type:</span>
                      <span className="font-medium text-darzi-dark capitalize">
                        {designs.collarType}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Front Pocket:</span>
                      <span className="font-medium text-darzi-dark">
                        {designs.hasFrontPocket ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Side Pockets:</span>
                      <span className="font-medium text-darzi-dark">
                        {designs.hasSidePockets ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Skirt Style:</span>
                      <span className="font-medium text-darzi-dark capitalize">
                        {designs.skirtStyle}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Fabric Color:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-darzi-dark">
                          {designs.fabricColor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pants Designs */}
                <div className="pt-3 border-t border-darzi-taupe">
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Pants/Shalwar
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Pants Style:</span>
                      <span className="font-medium text-darzi-dark capitalize">
                        {designs.pantsStyle}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Pants Pocket:</span>
                      <span className="font-medium text-darzi-dark">
                        {designs.hasPantsPocket ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Shipping Section */}
            <div className="card">
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-darzi-gold">
                <h2 className="text-xl font-bold text-darzi-dark">
                  Contact & Delivery Information
                </h2>
                <button
                  type="button"
                  onClick={() => navigate("/order/contact")}
                  className="flex items-center space-x-2 text-darzi-gold hover:text-darzi-brown transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span className="text-sm font-medium">Edit</span>
                </button>
              </div>

              <div className="space-y-4">
                {/* Contact Info */}
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Contact
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-gray-600">Name:</span>{" "}
                      <span className="font-medium text-darzi-dark">
                        {contact.fullName}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-600">Phone:</span>{" "}
                      <span className="font-medium text-darzi-dark">
                        {contact.phone}
                      </span>
                    </p>
                    {contact.email && (
                      <p>
                        <span className="text-gray-600">Email:</span>{" "}
                        <span className="font-medium text-darzi-dark">
                          {contact.email}
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="pt-3 border-t border-darzi-taupe">
                  <h3 className="font-semibold text-darzi-dark mb-2">
                    Shipping Address
                  </h3>
                  <div className="text-sm text-darzi-dark">
                    <p>{contact.addressLine1}</p>
                    {contact.addressLine2 && <p>{contact.addressLine2}</p>}
                    <p>
                      {contact.city}
                      {contact.state && `, ${contact.state}`}
                    </p>
                    {contact.postalCode && <p>{contact.postalCode}</p>}
                  </div>
                </div>

                {/* Special Instructions */}
                {(contact.deliveryNotes || contact.fabricNotes) && (
                  <div className="pt-3 border-t border-darzi-taupe">
                    <h3 className="font-semibold text-darzi-dark mb-2">
                      Special Instructions
                    </h3>
                    {contact.deliveryNotes && (
                      <div className="mb-2">
                        <p className="text-xs text-gray-600 mb-1">
                          Delivery Notes:
                        </p>
                        <p className="text-sm text-darzi-dark">
                          {contact.deliveryNotes}
                        </p>
                      </div>
                    )}
                    {contact.fabricNotes && (
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          Fabric/Design Notes:
                        </p>
                        <p className="text-sm text-darzi-dark">
                          {contact.fabricNotes}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Important Notice */}
            <div className="card bg-darzi-beige border-2 border-darzi-gold">
              <h3 className="font-semibold text-darzi-dark mb-2 flex items-center">
                ⚠️ Before You Submit
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Please verify all measurements are correct</li>
                <li>• Check your contact information and shipping address</li>
                <li>
                  • Estimated delivery: <strong>10 days to 2 weeks</strong>
                </li>
                <li>
                  • You will receive an order tracking number after submission
                </li>
                <li>• We'll contact you if we need any clarification</li>
              </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Button
                type="button"
                variant="secondary"
                onClick={handleBack}
                disabled={isSubmitting}
              >
                <div className="flex items-center space-x-2">
                  <ChevronLeft className="w-5 h-5" />
                  <span>Back to Contact Info</span>
                </div>
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="sm:min-w-[200px]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Submit Order</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
