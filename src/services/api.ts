import axios from 'axios';
import type { Order } from '../types/order';

// Django backend URL
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Type for order creation request
interface OrderCreateRequest {
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state?: string;
  postal_code?: string;
  delivery_notes?: string;
  fabric_notes?: string;
  quantity: number;
  status: string;
  measurements: {
    qad: number;
    shana: number;
    asteen: number;
    yakhan: number;
    chaati: number;
    baghal: number;
    daman: number;
    qad_shalwar: number;
    pacha: number;
    measurement_unit: string;
  };
  design: {
    sleeve_style: string;
    collar_type: string;
    has_front_pocket: boolean;
    has_side_pockets: boolean;
    skirt_style: string;
    pants_style: string;
    has_pants_pocket: boolean;
    fabric_color: string;
  };
}

// Type for order response
interface OrderResponse {
  id: number;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  status: string;
  order_date: string;
  estimated_delivery?: string;
  measurements: Record<string, unknown>;
  design: Record<string, unknown>;
  status_history?: Array<{
    old_status?: string;
    new_status: string;
    changed_at: string;
    notes?: string;
  }>;
}

// API endpoints
export const orderAPI = {
  // Create new order
  createOrder: async (orderData: OrderCreateRequest): Promise<OrderResponse> => {
    const response = await api.post<OrderResponse>('/orders/', orderData);
    return response.data;
  },

  // Track order by order number
  trackOrder: async (orderNumber: string): Promise<OrderResponse> => {
    const response = await api.get<OrderResponse>(`/orders/track/${orderNumber}/`);
    return response.data;
  },

  // Get all orders (admin)
  getAllOrders: async (): Promise<OrderResponse[]> => {
    const response = await api.get<OrderResponse[]>('/orders/');
    return response.data;
  },
};

export const designAPI = {
  // Get clothing types
  getClothingTypes: async () => {
    const response = await api.get('/clothing-types/');
    return response.data;
  },

  // Get design options
  getDesignOptions: async () => {
    const response = await api.get('/design-options/');
    return response.data;
  },

  // Get gallery designs
  getGalleryDesigns: async () => {
    const response = await api.get('/designs/');
    return response.data;
  },
};

export default api;