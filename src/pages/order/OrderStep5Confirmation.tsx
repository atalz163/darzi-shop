import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Copy, Share2, Package } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const OrderStep5Confirmation: React.FC = () => {
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = React.useState('');
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const savedOrderNumber = localStorage.getItem('lastOrderNumber');
    if (!savedOrderNumber) {
      // If no order number, redirect to home
      navigate('/');
      return;
    }
    setOrderNumber(savedOrderNumber);
  }, [navigate]);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareText = `My Darzi order number: ${orderNumber}\nTrack at: ${window.location.origin}/track`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Darzi Order Number',
          text: shareText,
        });
      } catch (err) {
        // User cancelled or share failed
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText);
      alert('Order details copied to clipboard!');
    }
  };

  if (!orderNumber) {
    return null;
  }

  return (
    <div className="bg-darzi-cream min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-darzi-dark mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600">
              Thank you for your order. We've received it successfully.
            </p>
          </div>

          {/* Order Number Card */}
          <div className="card mb-6 text-center">
            <p className="text-gray-600 mb-3">Your Order Number</p>
            <div className="bg-darzi-beige border-2 border-darzi-gold rounded-lg p-6 mb-4">
              <p className="text-3xl md:text-4xl font-bold text-darzi-dark tracking-wider">
                {orderNumber}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-white border-2 border-darzi-taupe rounded-lg hover:border-darzi-gold transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {copied ? 'Copied!' : 'Copy Number'}
                </span>
              </button>
              
              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-white border-2 border-darzi-taupe rounded-lg hover:border-darzi-gold transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              💡 Save this number to track your order
            </p>
          </div>

          {/* What's Next */}
          <div className="card mb-6">
            <h2 className="text-xl font-bold text-darzi-dark mb-4">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-darzi-gold rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  1
                </div>
                <div>
                  <p className="font-medium text-darzi-dark">Order Confirmation</p>
                  <p className="text-sm text-gray-600">
                    We'll review your order and contact you within 24 hours to confirm details
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-darzi-gold rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  2
                </div>
                <div>
                  <p className="font-medium text-darzi-dark">Tailoring Process</p>
                  <p className="text-sm text-gray-600">
                    Our expert tailors will start working on your custom garment
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-darzi-gold rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  3
                </div>
                <div>
                  <p className="font-medium text-darzi-dark">Quality Check</p>
                  <p className="text-sm text-gray-600">
                    We'll inspect the final product to ensure it meets our quality standards
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-darzi-gold rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  4
                </div>
                <div>
                  <p className="font-medium text-darzi-dark">Shipping</p>
                  <p className="text-sm text-gray-600">
                    Your order will be carefully packaged and shipped to your address
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="card bg-darzi-beige border-2 border-darzi-gold mb-6">
            <h3 className="font-semibold text-darzi-dark mb-2">📦 Delivery Information</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>Estimated delivery:</strong> 10 days to 2 weeks</li>
              <li>• You'll receive SMS/Email updates on order status</li>
              <li>• Track your order anytime using the order number above</li>
              <li>• We'll notify you when your order is ready for shipping</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              onClick={() => navigate(`/track`)}
              className="flex-1"
            >
              <div className="flex items-center justify-center space-x-2">
                <Package className="w-5 h-5" />
                <span>Track My Order</span>
              </div>
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate('/')}
              className="flex-1"
            >
              Back to Home
            </Button>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Questions about your order?{' '}
              <a href="/contact" className="text-darzi-gold hover:underline font-medium">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};