# Alert24 Safety Systems - Checkout Page

> A modern, responsive checkout application built with React for managing travel bookings with dynamic pricing, coupon system, and real-time price calculations.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Pricing Logic](#pricing-logic)
- [Important Notes](#important-notes)

---

## 🎯 Overview

Alert24 Safety Systems Checkout Page is a frontend React application designed for travel booking management. The application provides an intuitive interface for collecting traveller information, managing booking details, applying discounts, and displaying real-time price calculations with GST.

**Key Highlights:**
- ✨ Clean and modern user interface
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Real-time price calculations
- 🎫 Dynamic coupon system with conditional discounts
- 🔒 Form validation and error handling

---

## ✨ Features

### Traveller Management
- Add multiple travellers dynamically (minimum 1 required)
- Individual forms for each traveller with:
  - Customer name input (mandatory)
  - Contact number validation (mandatory)
  - Simulated thumbprint capture system
- Remove travellers functionality (while maintaining minimum requirement)

### Travel Date Selection
- Intuitive date picker interface
- Automatic validation preventing past date selection
- Mandatory field with proper error handling

### Dynamic Pricing System
- Automatic price calculation based on number of travellers
- Real-time updates when travellers are added or removed
- Clear breakdown of all cost components

### GST Calculation
- 18% GST applied exclusively on ticket price
- Transparent display of GST amount in price summary

### Coupon System
- Support for multiple coupon codes:
  - **NEW10**: ₹100 discount (requires minimum 2 travellers)
  - **NEW20**: ₹200 discount (requires minimum 4 travellers)
- Conditional discount application based on traveller count
- Clear feedback for coupon validity

### Live Price Summary
- Real-time price calculation and display
- Comprehensive breakdown including:
  - Number of travellers
  - Ticket total
  - Life jacket cost
  - GST amount
  - Applied discount
  - Final payable amount

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI framework with functional components and hooks |
| **HTML5** | Latest | Semantic markup structure |
| **CSS3** | Latest | Custom responsive styling (no external frameworks) |
| **JavaScript** | ES6+ | Modern JavaScript features and syntax |
| **Node.js** | Latest LTS | Runtime environment |
| **npm** | Latest | Package management |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Alert_24_Task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including React, ReactDOM, and react-scripts.

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will automatically open in your default browser at `http://localhost:3000`

4. **Build for production** (optional)
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build` folder.

---

## 📁 Project Structure

```
Alert_24_Task/
│
├── public/
│   └── index.html              # HTML template
│
├── src/
│   ├── App.js                  # Main checkout component with all logic
│   ├── App.css                 # Component-specific styles
│   ├── index.js                # React application entry point
│   └── index.css               # Global styles and resets
│
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Dependency lock file
└── README.md                   # Project documentation
```

---

## 📖 Usage Guide

### Step-by-Step Process

1. **Add Traveller Information**
   - The form starts with one traveller by default
   - Click "Add Traveller" button to add additional travellers
   - Fill in the required fields:
     - Customer Name
     - Contact Number (10 digits)
     - Click "Capture Thumbprint" to simulate biometric capture

2. **Select Travel Date**
   - Click on the date input field
   - Choose a future date (past dates are disabled)
   - Date selection is mandatory

3. **Apply Coupon Code** (Optional)
   - Enter a valid coupon code in the coupon field
   - Available coupons:
     - `NEW10` - Get ₹100 off (minimum 2 travellers)
     - `NEW20` - Get ₹200 off (minimum 4 travellers)
   - Discount will be automatically applied if conditions are met

4. **Review Price Summary**
   - All prices update in real-time as you make changes
   - Review the breakdown before submission:
     - Ticket total
     - Life jacket cost
     - GST amount
     - Discount (if applicable)
     - Final payable amount

5. **Submit Booking**
   - Click "Proceed to Payment" button
   - Form validation ensures all required fields are filled
   - Success message will be displayed (simulation only)

---

## 💰 Pricing Logic

### Cost Structure

| Item | Cost per Traveller | Notes |
|------|-------------------|-------|
| **Ticket** | ₹1,000 | Base ticket price |
| **Life Jacket** | ₹100 | Safety equipment cost |
| **GST** | 18% | Applied only on ticket price |

### Calculation Formula

```
Ticket Total = Number of Travellers × ₹1,000
Life Jacket Total = Number of Travellers × ₹100
GST Amount = Ticket Total × 0.18
Discount = Based on coupon code and traveller count
Final Amount = Ticket Total + Life Jacket Total + GST Amount - Discount
```

### Discount Rules

| Coupon Code | Discount Amount | Minimum Travellers Required |
|-------------|----------------|----------------------------|
| `NEW10` | ₹100 | 2 |
| `NEW20` | ₹200 | 4 |

**Note:** Discounts are only applied if the minimum traveller requirement is met. Otherwise, the discount amount remains ₹0.

---

## ⚠️ Important Notes

- **Frontend Only**: This is a client-side application with no backend integration
- **Simulated Features**: Thumbprint capture is simulated using a button/checkbox mechanism
- **No Payment Processing**: Payment gateway integration is not included
- **No Database**: All data is stored in component state (cleared on page refresh)
- **No Authentication**: User authentication is not implemented
- **Client-Side Calculations**: All pricing calculations are performed in the browser

---

## 🌐 Browser Support

The application is tested and supported on:

- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Microsoft Edge (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

---

## 📝 License

This project is created for internship assignment purposes.

---

## 👨‍💻 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

---



