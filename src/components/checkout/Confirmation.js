import React, { useState } from 'react';
import OrderSummary from './OrderSummary';
import CartItem from '../cart/CartItem';
import { useUser } from '../../utils/hooks/useUser';
import { useCart } from '../../utils/hooks/useCart';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/actions/orderActions'; // Add the missing parenthesis

function Confirmation({ onPaymentComplete }) {
  const { currentUser } = useUser();
  const { discount, applyDiscount, items, defaultTotal, clearCart } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const dispatch = useDispatch();

  const handleCompletePayment = () => {
    console.log('Virtual payment completed.');

    // Proceed to the next step (Done)
    onPaymentComplete();

    // Create a new order
    const newOrder = {
      items,
      total: defaultTotal,
      discount,
      user: {
        firstName: currentUser?.firstName,
        lastName: currentUser?.lastName,
        address: currentUser?.address,
        postalCode: currentUser?.postalCode,
        city: currentUser?.city,
      }, 
      status: 'Pending', // Set the status to 'Pending'
    orderDateTime: new Date().toISOString(), // Set the orderDateTime to the current date and time
  };

    // Dispatch an action to create the new order
    dispatch(createOrder(newOrder));

    // Clear the cart after completing the payment
    clearCart();
  };

  return (
    <div className="checkout-contentbox flex">
      <div className="checkout-left">
        <h1>REVIEW YOUR ORDER</h1>
        <div className="line-divider"></div>
        <CartItem></CartItem>
      </div>
      <div className="checkout-right">
        <h2>SHIPPING ADDRESS</h2>
        <div className="line-divider"></div>
        <p>
          {currentUser?.firstName} {currentUser?.lastName}
        </p>
        <p>{currentUser?.address}</p>
        <p>
          {currentUser?.postalCode} {currentUser?.city}
        </p>
        <p>Morocco</p>
        {!discount > 0 && (
          <div className="discount-code">
            <input
              placeholder="Discount Code"
              type="text"
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button onClick={() => applyDiscount(discountCode)}>Apply</button>
          </div>
        )}
        <OrderSummary onPaymentComplete={handleCompletePayment} />
      </div>
    </div>
  );
}

export default Confirmation;
