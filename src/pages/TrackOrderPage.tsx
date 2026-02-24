import React from 'react';
import { Package, Search } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { orderAPI } from '../services/api';
import axios from 'axios';

export const TrackOrderPage: React.FC = () => {
  const [orderNumber, setOrderNumber] = React.useState('');
  const [trackingResult, setTrackingResult] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
const handleTrack = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  setIsLoading(true);

  try {
    // Call Django API
    const data = await orderAPI.trackOrder(orderNumber);
    
    // Format status history
    const history = data.status_history?.map((item) => ({
      status: item.new_status,
      date: new Date(item.changed_at).toLocaleString(),
      note: item.notes || '',
    })) || [];

    // Set tracking result
    setTrackingResult({
      orderNumber: data.order_number,
      status: data.status,
      orderDate: new Date(data.order_date).toLocaleDateString(),
      estimatedDelivery: data.estimated_delivery 
        ? new Date(data.estimated_delivery).toLocaleDateString()
        : 'To be determined',
      history: history.length > 0 ? history : [
        {
          status: data.status,
          date: new Date(data.order_date).toLocaleString(),
          note: 'Order received',
        },
      ],
    });
    setIsLoading(false);
  } catch (error) {
    console.error('Error tracking order:', error);
    
    // Type guard for axios error
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        setError('Order not found. Please check your order number.');
      } else {
        setError('Unable to track order. Please try again later.');
      }
    } else {
      setError('An unexpected error occurred. Please try again.');
    }
    
    setTrackingResult(null);
    setIsLoading(false);
  }
};


  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      submitted: 'bg-blue-500',
      confirmed: 'bg-blue-600',
      in_progress: 'bg-yellow-500',
      ready: 'bg-green-500',
      shipped: 'bg-purple-500',
      delivered: 'bg-green-600',
    };
    return colors[status] || 'bg-gray-500';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-darzi-beige py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Package className="w-16 h-16 text-darzi-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-darzi-dark mb-4">
              Track Your Order
            </h1>
            <p className="text-lg text-darzi-brown">
              Enter your order number to check the status of your order
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleTrack} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <Input
                    label="Order Number"
                    name="orderNumber"
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="e.g., TS-2025-00001"
                    required
                    helperText="You received this number when you placed your order"
                  />
                </div>
                <div className="sm:pt-8">
                  <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                    <div className="flex items-center justify-center space-x-2">
                      <Search className="w-5 h-5" />
                      <span>{isLoading ? 'Tracking...' : 'Track Order'}</span>
                    </div>
                  </Button>
                </div>
              </div>
              {error && (
                <p className="mt-4 text-red-500 text-center">{error}</p>
              )}
            </form>

            {/* Tracking Result */}
            {trackingResult && (
              <div className="card">
                <div className="border-b border-darzi-taupe pb-4 mb-4">
                  <h2 className="text-2xl font-bold text-darzi-dark mb-2">
                    Order #{trackingResult.orderNumber}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(trackingResult.status)}`}>
                      {trackingResult.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-medium text-darzi-dark">{trackingResult.orderDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Delivery</p>
                    <p className="font-medium text-darzi-dark">{trackingResult.estimatedDelivery}</p>
                  </div>
                </div>

                {/* Status Timeline */}
                <div>
                  <h3 className="font-semibold text-darzi-dark mb-4">Order Timeline</h3>
                  <div className="space-y-4">
                    {trackingResult.history.map((item: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)} mt-1.5 flex-shrink-0`}></div>
                        <div>
                          <p className="font-medium text-darzi-dark capitalize">
                            {item.status.replace('_', ' ')}
                          </p>
                          <p className="text-sm text-gray-600">{item.date}</p>
                          {item.note && (
                            <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-darzi-taupe">
                  <p className="text-sm text-gray-600">
                    Questions about your order? <a href="/contact" className="text-darzi-gold hover:underline">Contact us</a>
                  </p>
                </div>
              </div>
            )}

            {/* Help Text */}
            {!trackingResult && !error && (
              <div className="card bg-darzi-cream">
                <h3 className="font-semibold text-darzi-dark mb-2">Need Help?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Your order number starts with "TS-" followed by the year and order number</li>
                  <li>• You received this number via email/SMS when you placed your order</li>
                  <li>• Order status is updated in real-time as we work on your garment</li>
                  <li>• If you can't find your order number, please contact us</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};