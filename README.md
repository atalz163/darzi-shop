# Darzi Shop - Custom Tailoring Platform

<div align="center">

![Darzi Logo](https://img.shields.io/badge/Darzi-Custom_Tailoring-D4AF37?style=for-the-badge)
![Django](https://img.shields.io/badge/Django-5.0-092E20?style=for-the-badge&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

**Precision in Every Stitch.**

A modern, full-stack web application for custom Afghan tailoring with worldwide delivery.

[Live Demo](#Live Demo/) • [Documentation](#features) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#️-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Database Schema](#️-database-schema)
- [Design System](#-design-system)
- [Testing](#-testing)
- [Security](#-security)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)
- [Authors](#-authors)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

Darzi Shop is a comprehensive tailoring platform that bridges traditional Afghan craftsmanship with modern e-commerce. Customers can order custom-tailored clothing (Kameez/Shalwar) by providing measurements and design preferences online, while tailors manage orders through an intuitive admin interface.

### Key Highlights

- **Customer-Friendly**: 5-step order process with visual design selection
- **Measurement Guide**: Built-in assistance for accurate measurements
- **Real-Time Tracking**: Track orders by unique order number
- **Design Gallery**: Showcase previous work to inspire customers
- **Multi-Language**: English and Dari labels throughout
- **Responsive Design**: Mobile-first approach for accessibility

---

## ✨ Features

### Customer Features
- 📏 **Custom Measurements** - Enter 9 precise body measurements (cm)
- 🎨 **Design Selection** - Choose from 3 sleeve styles, 4 collar types, 12 fabric colors
- 🏠 **Worldwide Delivery** - Ship to any address globally
- 📦 **Order Tracking** - Track order status with unique order number
- 🖼️ **Design Gallery** - Browse portfolio of completed work
- 📱 **Mobile Responsive** - Seamless experience on all devices

### Admin Features
- 📊 **Order Management** - View, search, and filter all orders
- ✏️ **Status Updates** - Update order progress (Submitted → Shipped → Delivered)
- 📈 **Order Details** - View measurements, designs, and customer info
- 🔍 **Search & Filter** - Find orders by number, name, phone, or status
- 📝 **Status History** - Track all status changes with timestamps

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Lucide React** - Icon library

### Backend
- **Django 5.0** - Python web framework
- **Django REST Framework 3.14** - API toolkit
- **SQLite** - Database (development)
- **Pillow** - Image processing
- **django-cors-headers** - CORS handling
- **python-decouple** - Environment variable management

### Development Tools
- **Git** - Version control
- **VS Code** - Code editor
- **Postman** - API testing

---

## 🏗️ Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React + TS)                     │
│  ┌────────────────┐  ┌────────────────┐  ┌───────────────┐ │
│  │ Customer UI    │  │  Admin Panel   │  │ Design Gallery│ │
│  │ (5-step flow)  │  │  (Order Mgmt)  │  │  (Portfolio)  │ │
│  └────────────────┘  └────────────────┘  └───────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              ↕ REST API (JSON)
┌─────────────────────────────────────────────────────────────┐
│                  DJANGO BACKEND (DRF)                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  ViewSets & Serializers                              │  │
│  │  • OrderViewSet                                      │  │
│  │  • DesignViewSet                                     │  │
│  │  • ClothingTypeViewSet                               │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↕ ORM
┌─────────────────────────────────────────────────────────────┐
│                   DATABASE (SQLite)                          │
│  Orders | Measurements | Designs | Status History           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Python** 3.10+ ([Download](https://python.org/))
- **Git** ([Download](https://git-scm.com/))

### Installation

#### 1. Clone Repository
```bash
git clone https://github.com/yourusername/darzi-shop.git
cd darzi-shop
```

#### 2. Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo "SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1" > .env

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start Django server
python manage.py runserver
```

Backend runs at: `http://127.0.0.1:8000`

#### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 📁 Project Structure
```
darzi-shop/
├── backend/
│   ├── config/              # Django project settings
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── orders/              # Orders app
│   │   ├── models.py        # Order, OrderMeasurement, OrderDesign
│   │   ├── serializers.py   # DRF serializers
│   │   ├── views.py         # API ViewSets
│   │   ├── urls.py          # URL routing
│   │   └── admin.py         # Admin configuration
│   ├── designs/             # Designs app
│   │   ├── models.py        # ClothingType, DesignOption, DesignPortfolio
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── users/               # User management (future)
│   ├── manage.py
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── common/      # Reusable components
    │   │   ├── layout/      # Header, Footer, Layout
    │   │   └── order/       # Order-specific components
    │   ├── pages/
    │   │   ├── HomePage.tsx
    │   │   ├── AboutPage.tsx
    │   │   ├── ContactPage.tsx
    │   │   ├── DesignGalleryPage.tsx
    │   │   ├── TrackOrderPage.tsx
    │   │   └── order/       # 5-step order flow
    │   ├── services/
    │   │   └── api.ts       # API client
    │   ├── types/
    │   │   └── order.ts     # TypeScript types
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    └── tailwind.config.js
```

---

## 🔌 API Documentation

### Base URL
```
http://127.0.0.1:8000/api
```

### Public Endpoints

#### Orders

**Create Order**
```http
POST /api/orders/
```

**Request Body:**
```json
{
  "customer_name": "Ahmad Shah",
  "customer_phone": "+93 770 607 474",
  "customer_email": "ahmad@example.com",
  "address_line1": "House 123, Street 4",
  "city": "Kabul",
  "quantity": 1,
  "status": "submitted",
  "measurements": {
    "qad": 95.00,
    "shana": 45.00,
    "asteen": 60.00,
    "yakhan": 40.00,
    "chaati": 100.00,
    "baghal": 45.00,
    "daman": 110.00,
    "qad_shalwar": 100.00,
    "pacha": 22.00,
    "measurement_unit": "cm"
  },
  "design": {
    "sleeve_style": "Simple",
    "collar_type": "qasami",
    "has_front_pocket": true,
    "has_side_pockets": true,
    "skirt_style": "circle",
    "pants_style": "wide",
    "has_pants_pocket": true,
    "fabric_color": "Navy Blue"
  }
}
```

**Response:** `201 Created`
```json
{
  "id": 1,
  "order_number": "TS-2025-00001",
  "customer_name": "Ahmad Shah",
  "status": "submitted",
  "order_date": "2025-01-23T10:30:00Z",
  "measurements": { ... },
  "design": { ... }
}
```

---

**Track Order**
```http
GET /api/orders/track/{order_number}/
```

**Response:** `200 OK`
```json
{
  "order_number": "TS-2025-00001",
  "status": "in_progress",
  "order_date": "2025-01-23",
  "estimated_delivery": "2025-02-05",
  "status_history": [
    {
      "old_status": "submitted",
      "new_status": "confirmed",
      "changed_at": "2025-01-23T14:30:00Z"
    }
  ]
}
```

---

#### Designs

**Get Clothing Types**
```http
GET /api/clothing-types/
```
Returns list of clothing types (Shirt/Kameez, Pants/Shalwar).

**Get Design Options**
```http
GET /api/design-options/
```
Returns available design options (sleeves, collars, etc.).

**Get Design Portfolio**
```http
GET /api/designs/
```
Returns design gallery images.

---

## 🗄️ Database Schema

### Core Models

#### Order
```
- order_number (unique, auto-generated: TS-YYYY-NNNNN)
- customer_name, customer_phone, customer_email
- address_line1, address_line2, city, province, postal_code
- delivery_notes, fabric_notes
- quantity, status
- order_date, estimated_delivery
- Related: measurements (1-to-1), design (1-to-1)
```

#### OrderMeasurement
```
- order (FK to Order)
- qad, shana, asteen, yakhan, chaati, baghal, daman
- qad_shalwar, pacha
- measurement_unit (default: 'cm')
```

#### OrderDesign
```
- order (FK to Order)
- sleeve_style, collar_type
- has_front_pocket, has_side_pockets
- skirt_style, pants_style
- has_pants_pocket, fabric_color
```

#### OrderStatusHistory
```
- order (FK to Order)
- old_status, new_status
- changed_by, changed_at, notes
```

#### ClothingType
```
- name, name_dari, name_pashto
- description
```

#### DesignOption
```
- clothing_type (FK)
- category (sleeve/collar/pocket)
- name, name_dari, image
- additional_price, is_active
```

#### DesignPortfolio
```
- title, title_dari, description
- image
- is_featured, display_order, is_active
```

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--darzi-beige: #E8DCC8
--darzi-cream: #F5EFE6
--darzi-dark: #2D3436
--darzi-gold: #D4AF37
--darzi-brown: #5D4E37
--darzi-taupe: #C4B5A0

/* Fabric Colors (12 options) */
White, Black, Navy Blue, Royal Blue, Brown, 
Beige, Gray, Cream, Maroon, Green, Olive, Charcoal
```

### Typography
- **Font Family**: Inter, system-ui
- **Headings**: Bold, 2rem-4rem
- **Body**: Regular, 1rem

### Component Classes
```css
.btn-primary     /* Gold button with hover effects */
.btn-secondary   /* Outlined button */
.input-field     /* Form input with focus styles */
.card            /* White card with shadow */
```

---

## 🧪 Testing

### Manual Testing Checklist

**Customer Flow:**
- [ ] Create order through 5-step flow
- [ ] Fill all measurements correctly
- [ ] Select design options
- [ ] Enter shipping address
- [ ] Review and submit order
- [ ] Receive order number
- [ ] Track order by order number

**Admin Flow:**
- [ ] View all orders in admin panel
- [ ] Search orders by number/name
- [ ] Filter orders by status
- [ ] Update order status
- [ ] View order details with measurements

**Responsive Design:**
- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Test on desktop

### API Testing

Use Postman or Django Browsable API (`http://127.0.0.1:8000/api/`):
- Test order creation endpoint
- Test order tracking endpoint
- Test data retrieval endpoints
- Verify validation errors

---

## 🔐 Security

- ✅ Environment variables for secrets (`.env`)
- ✅ CSRF protection enabled
- ✅ CORS configured for specific origins
- ✅ Input validation on frontend and backend
- ✅ SQL injection prevention (Django ORM)
- ✅ XSS protection (React escaping)
- ✅ Password hashing (bcrypt via Django)

### Environment Variables
```bash
# backend/.env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
```

---

## 🚧 Future Enhancements

**Phase 2: Admin Panel & Reports**
- [ ] Custom React admin dashboard
- [ ] Revenue tracking and analytics
- [ ] Order reports with charts
- [ ] Design gallery management

**Phase 3: Advanced Features**
- [ ] JWT authentication for admin
- [ ] SMS notifications (Twilio)
- [ ] Payment gateway (Stripe)
- [ ] AI chatbot for customer support
- [ ] Multi-language support (i18next)
- [ ] "Order This Design" feature
- [ ] Email notifications
- [ ] PostgreSQL for production
- [ ] Docker containerization
- [ ] CI/CD pipeline

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

**Your Name** - Initial work - [GitHub](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- Afghan tailoring community for design inspiration
- Django and React communities for excellent documentation
- Tailwind CSS for the design system
- Lucide React for beautiful icons
- All contributors and testers

---

## 📞 Support

For support, email zadran@my.com or open an issue on GitHub.

---

<div align="center">

**Built with ❤️ for the Afghan tailoring community**

⭐ Star this repo if you found it helpful!

[Report Bug](https://github.com/yourusername/darzi-shop/issues) • [Request Feature](https://github.com/yourusername/darzi-shop/issues)

</div>
