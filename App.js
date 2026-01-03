import React, { useState } from 'react';
import './App.css';

function App() {
  // State for travellers
  const [travellers, setTravellers] = useState([
    { id: 1, name: '', contact: '', thumbprint: false }
  ]);

  // State for travel date
  const [travelDate, setTravelDate] = useState('');

  // State for coupon code
  const [couponCode, setCouponCode] = useState('');

  // Calculate pricing
  const calculatePricing = () => {
    const ticketCostPerTraveller = 1000;
    const lifeJacketCostPerTraveller = 100;
    const gstRate = 0.18;

    const numberOfTravellers = travellers.length;
    const ticketTotal = numberOfTravellers * ticketCostPerTraveller;
    const lifeJacketTotal = numberOfTravellers * lifeJacketCostPerTraveller;
    const gst = ticketTotal * gstRate;

    // Calculate discount based on coupon code
    let discount = 0;
    if (couponCode.toUpperCase() === 'NEW10' && numberOfTravellers >= 2) {
      discount = 100;
    } else if (couponCode.toUpperCase() === 'NEW20' && numberOfTravellers >= 4) {
      discount = 200;
    }

    const finalAmount = ticketTotal + lifeJacketTotal + gst - discount;

    return {
      numberOfTravellers,
      ticketTotal,
      lifeJacketTotal,
      gst,
      discount,
      finalAmount
    };
  };

  const pricing = calculatePricing();

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Add new traveller
  const handleAddTraveller = () => {
    const newTraveller = {
      id: travellers.length + 1,
      name: '',
      contact: '',
      thumbprint: false
    };
    setTravellers([...travellers, newTraveller]);
  };

  // Remove traveller (minimum 1 required)
  const handleRemoveTraveller = (id) => {
    if (travellers.length > 1) {
      setTravellers(travellers.filter(t => t.id !== id));
    }
  };

  // Update traveller details
  const handleTravellerChange = (id, field, value) => {
    setTravellers(travellers.map(t => 
      t.id === id ? { ...t, [field]: value } : t
    ));
  };

  // Handle thumbprint capture simulation
  const handleThumbprintCapture = (id) => {
    handleTravellerChange(id, 'thumbprint', true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all travellers have required fields
    const allValid = travellers.every(t => 
      t.name.trim() !== '' && 
      t.contact.trim() !== '' && 
      t.thumbprint === true
    );

    if (!travelDate) {
      alert('Please select a travel date');
      return;
    }

    if (!allValid) {
      alert('Please fill all traveller details and capture thumbprint for each traveller');
      return;
    }

    alert('Booking submitted successfully! (This is a simulation - no backend)');
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Alert24 Safety Systems</h1>
        <p>Checkout Page</p>
      </header>

      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* Traveller Details Section */}
          <section className="section">
            <h2>Traveller Details</h2>
            {travellers.map((traveller, index) => (
              <div key={traveller.id} className="traveller-card">
                <div className="traveller-header">
                  <h3>Traveller {index + 1}</h3>
                  {travellers.length > 1 && (
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => handleRemoveTraveller(traveller.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor={`name-${traveller.id}`}>
                    Customer Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id={`name-${traveller.id}`}
                    value={traveller.name}
                    onChange={(e) => handleTravellerChange(traveller.id, 'name', e.target.value)}
                    required
                    placeholder="Enter customer name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor={`contact-${traveller.id}`}>
                    Contact Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id={`contact-${traveller.id}`}
                    value={traveller.contact}
                    onChange={(e) => handleTravellerChange(traveller.id, 'contact', e.target.value)}
                    required
                    placeholder="Enter contact number"
                    pattern="[0-9]{10}"
                  />
                </div>

                <div className="form-group">
                  <label>Thumbprint Capture <span className="required">*</span></label>
                  {traveller.thumbprint ? (
                    <div className="thumbprint-success">
                      <span>✓ Thumbprint Captured</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="thumbprint-btn"
                      onClick={() => handleThumbprintCapture(traveller.id)}
                    >
                      Capture Thumbprint
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              className="add-traveller-btn"
              onClick={handleAddTraveller}
            >
              + Add Traveller
            </button>
          </section>

          {/* Travel Date Section */}
          <section className="section">
            <h2>Travel Date</h2>
            <div className="form-group">
              <label htmlFor="travel-date">
                Select Travel Date <span className="required">*</span>
              </label>
              <input
                type="date"
                id="travel-date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                min={getMinDate()}
                required
              />
            </div>
          </section>

          {/* Coupon Section */}
          <section className="section">
            <h2>Coupon Code</h2>
            <div className="form-group">
              <label htmlFor="coupon-code">Enter Coupon Code (Optional)</label>
              <input
                type="text"
                id="coupon-code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="e.g., NEW10, NEW20"
              />
              <div className="coupon-info">
                <p>Available coupons:</p>
                <ul>
                  <li>NEW10 - ₹100 off (min 2 travellers)</li>
                  <li>NEW20 - ₹200 off (min 4 travellers)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Price Summary Section */}
          <section className="section price-summary">
            <h2>Price Summary</h2>
            <div className="summary-item">
              <span>Number of Travellers:</span>
              <span>{pricing.numberOfTravellers}</span>
            </div>
            <div className="summary-item">
              <span>Ticket Total (₹{1000} × {pricing.numberOfTravellers}):</span>
              <span>₹{pricing.ticketTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-item">
              <span>Life Jacket Cost (₹{100} × {pricing.numberOfTravellers}):</span>
              <span>₹{pricing.lifeJacketTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-item">
              <span>GST (18% on ticket):</span>
              <span>₹{pricing.gst.toFixed(2)}</span>
            </div>
            <div className="summary-item discount">
              <span>Discount:</span>
              <span>-₹{pricing.discount.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-item final-amount">
              <span>Final Payable Amount:</span>
              <span>₹{pricing.finalAmount.toLocaleString('en-IN')}</span>
            </div>
          </section>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

