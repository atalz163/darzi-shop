// Order measurement data structure
export interface Measurements {
  // Upper body (Shirt/Kameez)
  qad: number; // قد - Length
  shana: number; // شانه - Shoulder
  asteen: number; // آستین - Sleeve
  yakhan: number; // یخن - Neck/Collar
  chaati: number; // چهاتی - Chest
  baghal: number; // بغل - Underarm
  daman: number; // دامن - Bottom width
  
  // Lower body (Pants/Shalwar)
  qadShalwar: number; // قد شلوار - Pant length
  pacha: number; // پاچه - Pant opening
  
  // Additional
  quantity: number; // تعداد - Quantity
  unit: 'cm'; // Measurement unit
}


// Design selections
export interface DesignSelections {
  // Shirt/Kameez
  sleeveStyle: string;
  collarType: string;
  hasFrontPocket: boolean;
  hasSidePockets: boolean;
  skirtStyle: 'circle' | 'square';
  
  // Pants/Shalwar
  pantsStyle: 'normal' | 'wide' | 'narrow';
  hasPantsPocket: boolean;

  //Fabric color
  fabricColor : string;

}


// Contact and shipping information
export interface ContactInfo {
  fullName: string;
  phone: string;
  email: string
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  deliveryNotes: string;
  fabricNotes: string;
}

// Complete order data
export interface Order {
  id?: string;
  orderNumber?: string;
  measurements: Measurements;
  designs: DesignSelections;
  contact: ContactInfo;
  status?: OrderStatus;
  createdAt?: string;
  estimatedDelivery?: string;
}


// Order status types
export type OrderStatus = 
  | 'submitted' 
  | 'confirmed' 
  | 'in_progress' 
  | 'ready' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled';


// Order status history
export interface OrderStatusHistory {
  status: OrderStatus;
  timestamp: string;
  notes?: string;
}